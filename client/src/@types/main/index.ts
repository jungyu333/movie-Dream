export interface IGenreMovie {
  genre: string;
  movies: IGenreMovieData[];
}

export interface IGenreMovieData {
  h_movie: string;
  genre: string[];
  movie_id: string;
  movie_poster: string;
  opening_date: string;
}
