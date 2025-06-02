import React from "react";

export const AnimeCard = ({ anime }) => {
  const {
    title,
    mal_id,
    score,
    episodes,
    images: {
      jpg: { image_url },
    },
  } = anime;
  return (
    <div>
      <h2>{title}</h2>
      <img src={image_url} alt={title} />
      <p>Episodes: {episodes}</p>
      <p>Score: {score}</p>
    </div>
  );
};
