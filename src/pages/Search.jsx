import React, { useState } from "react";
import { fetchAnimeBySearch } from "../api/jikan.js";
import { SearchBar } from "../components/SearchBar";
import { AnimeCard } from "../components/AnimeCard.jsx";

export const Search = () => {
  const [results, setResults] = useState([]);

  // submission handler
  const animeSearchHandler = async (animeName) => {
    // call api fetcher
    const res = await fetchAnimeBySearch(animeName);
    setResults(res.data);
  };

  return (
    <section>
      <SearchBar onSearch={animeSearchHandler} />
      {results.length > 0 && (
        <div>
          {results.map((anime) => (
            <AnimeCard key={anime.mal_id} anime={anime} />
          ))}
        </div>
      )}
    </section>
  );
};
