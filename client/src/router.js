import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movie from './routes/Movie';
import Home from './routes/Home';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
