import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './Routes/Home';
import Search from './Routes/Search';
import Movie from './Routes/Movie';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
