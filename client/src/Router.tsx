import { BrowserRouter, Route, Routes } from 'react-router-dom';

import React from 'react';
import Home from './Routes/Home';
import Search from './Routes/Search';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/movie/:id" element={<Movie />} /> */}
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
