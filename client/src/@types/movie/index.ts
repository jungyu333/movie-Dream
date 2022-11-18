import { IGenre } from '../search';

export interface ILoadMovieData {
  id: string;
}

export interface IMovie {
  movie: {
    genre: string[];
    h_movie: string;
    h_movie2: string;
    h_movie3: string;
    movie_actor: IMovieActor[];
    movie_director: string;
    movie_director_thumb: string;
    movie_id: string;
    movie_photo: string[];
    movie_poster: string;
    movie_story: string;
    movie_video: string[];
    nation: string[];
    opening_date: string;
    score_avg: number;
    show_time: string;
  };
}

export interface IMovieActor {
  name: string;
  part: string;
  thumb: string;
}

export interface IAnotherMovies {
  group: string;
  genre: IGenre[];
  movie: IAnotherMovie[];
}

export interface IAnotherMovie {
  h_movie: string;
  movie_id: string;
  movie_poster: string;
}

export interface IAnotherMovieData {
  group: string;
  name: string;
  movieId: string;
}

export interface IModalMovieProps {
  handleClose: () => void;
  open: boolean;
}
