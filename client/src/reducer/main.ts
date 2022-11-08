import { createSlice } from '@reduxjs/toolkit';
import { IGenreMovie } from '../@types/main';
import { loadGenreMovies } from '../action/main';
import randomNum from '../hooks/randomNum';

interface mainState {
  genreMovies: IGenreMovie[] | null;
  genreMoviesLoading: boolean;
  genreMoviesDone: boolean;
  genreMovieError: string | null;
}

export const initialState: mainState = {
  genreMovies: null,
  genreMoviesLoading: false,
  genreMoviesDone: false,
  genreMovieError: null,
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(loadGenreMovies.pending, state => {
        state.genreMoviesLoading = true;
        state.genreMoviesDone = false;
        state.genreMovieError = null;
      })
      .addCase(loadGenreMovies.fulfilled, (state, action) => {
        const nums = randomNum();
        const movies: IGenreMovie[] = [];
        nums.map(num => movies.push(action.payload[num]));
        state.genreMoviesLoading = false;
        state.genreMoviesDone = true;
        state.genreMovies = movies;
      })
      .addCase(loadGenreMovies.rejected, (state, action) => {
        state.genreMoviesLoading = false;
        state.genreMovieError = action.payload as string;
      }),
});

export default mainSlice;
