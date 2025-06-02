import axios from "axios";

export const fetchAnimeBySearch = async (query) => {
  const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}`);
  return response.data;
};
