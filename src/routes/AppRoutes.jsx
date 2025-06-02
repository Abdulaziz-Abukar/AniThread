import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { AnimeDetail } from "../pages/AnimeDetail";
import { Search } from "../pages/Search";
import { Watchlist } from "../pages/Watchlist";
import { Error } from "../pages/Error";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/about" element={<About />} />
          <Route path="/anime/:id" element={<AnimeDetail />} />
          {/* ERROR PAGE */}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};
