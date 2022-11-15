export interface ISearchMoviesData {
  query: string;
  nationFlag: string | null;
  page: number;
  sort: string | null;
  genreFilter: string | null;
  showTimeFilter: string | null;
  openDateFilter: string | null;
}

export interface ISearchResults {
  top_score_movie: ICarouselMovies[];
  top_to_be_open_movie: ICarouselMovies[];
  genre: IGenre[];
  show_time_range: {
    from: number;
    to: number;
  };
  movies: ISearchMovies[];
}

export interface ICarouselMovies {
  movie_id: string;
  h_movie: string;
  movie_poster: string;
  score_avg?: number;
  opening_date?: string;
}

export interface IGenre {
  key: string;
  doc_count: number;
}

export interface ISearchMovies {
  movie_actor: IMovieActors[];
  movie_photo: string[];
  movie_poster: string;
  show_time: string;
  movie_id: string;
  movie_video: string[];
  h_movie: string;
  h_movie2: string;
  h_movie3: string;
  opening_date: string;
  movie_story: string[];
  movie_director_thumb: string;
  movie_director: string;
  genre: string[];
  score_avg: number;
  nation: string[];
}

export interface IMovieActors {
  name: string;
  part: string;
  thumb: string;
}

export interface IGenreButtonProps {
  genre: string;
}
