import { IGenreMovieData } from '../main';
import { ICarouselMovies } from '../search';

export interface ILayoutProps {
  isNavSearch: boolean;
  isMain: boolean;
  children: React.ReactNode;
  window?: () => Window;
}

export interface ISearchInputProps {
  isNavSearch?: boolean;
  isMain?: boolean;
}

export interface IAutoMovie {
  movie_id: string;
  h_movie: string;
  h_movie2: string;
  h_movie3: string;
  h_movie4: string;
  movie_poster: string;
}

export interface IloadAutoSearchData {
  query: string;
  size?: number;
}

export interface IAutoItemProps {
  autoMovie: IAutoMovie;
  searchInput: string;
}

export interface ICarouselProps {
  title: string;
  movies: IGenreMovieData[] | ICarouselMovies[];
}
