import React, { useState } from "react";

export const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (search.trim() !== "") {
          onSearch(search);
        }
      }}
    >
      <label htmlFor="animeSearch">Anime Name: </label>
      <input
        type="text"
        name="animeSearch"
        id="animeSearch"
        placeholder="Enter anime name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};
