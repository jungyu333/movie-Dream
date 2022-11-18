import { createSlice } from '@reduxjs/toolkit';
import { IAnotherMovies, IMovie } from '../@types/movie';
import { loadAnotherMovies, loadMovie } from '../action/movie';

interface movieState {
  movieLoading: boolean;
  movieDone: boolean;
  movieError: string | null;
  anotherMoviesLoading: boolean;
  anotherMoviesDone: boolean;
  anotherMoviesError: string | null;
  anotherMovie: IAnotherMovies | null;
  movie: IMovie | null;
  group: string;
  name: string;
}

export const initialState: movieState = {
  movieLoading: false,
  movieDone: false,
  movieError: null,
  anotherMoviesLoading: false,
  anotherMoviesDone: false,
  anotherMoviesError: null,
  anotherMovie: null,
  movie: null,
  group: '',
  name: '',
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setCastInfo: (state, action) => {
      state.group = action.payload.group;
      state.name = action.payload.name;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(loadMovie.pending, state => {
        state.movieLoading = true;
        state.movieDone = false;
        state.movieError = null;
      })
      .addCase(loadMovie.fulfilled, (state, action) => {
        state.movieLoading = false;
        state.movieDone = true;
        state.movie = action.payload;
      })
      .addCase(loadMovie.rejected, (state, action) => {
        state.movieLoading = false;
        state.movieDone = false;
        state.movieError = action.payload as string;
      })
      .addCase(loadAnotherMovies.pending, state => {
        state.anotherMoviesLoading = true;
        state.anotherMoviesDone = false;
        state.anotherMoviesError = null;
      })
      .addCase(loadAnotherMovies.fulfilled, (state, action) => {
        state.anotherMoviesLoading = false;
        state.anotherMoviesDone = true;
        state.anotherMovie = action.payload;
      })
      .addCase(loadAnotherMovies.rejected, (state, action) => {
        state.anotherMoviesLoading = false;
        state.anotherMoviesDone = false;
        state.anotherMoviesError = action.payload as string;
      }),
});

export const { setCastInfo } = movieSlice.actions;

export default movieSlice;
