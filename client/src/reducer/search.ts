import { createSlice } from '@reduxjs/toolkit';
import { loadMainMovies } from '../action/search';

interface searchState {
  moviesLoading: boolean;
  moviesDone: boolean;
  moviesError: string | null;
  movies: any;
  page: number;
  nationFlag: string | null;
  query: string;
  sort: string | null;
  genreFilter: string | null;
  showTimeFilter: string | null;
  openDateFilter: string | null;
}

export const initialState: searchState = {
  moviesLoading: false,
  moviesDone: false,
  moviesError: null,
  movies: null,
  page: 1,
  nationFlag: null,
  query: '',
  sort: null,
  genreFilter: null,
  showTimeFilter: null,
  openDateFilter: null,
};

const searchSlice = createSlice({
  name: 'searchMovies',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(loadMainMovies.pending, state => {
        state.moviesLoading = true;
        state.moviesDone = false;
        state.moviesError = null;
      })
      .addCase(loadMainMovies.fulfilled, (state, action) => {
        state.moviesLoading = false;
        state.moviesDone = true;
        state.movies = action.payload;
      })
      .addCase(loadMainMovies.rejected, (state, action) => {
        state.moviesLoading = false;
        state.moviesDone = false;
        state.moviesError = action.payload as string;
      }),
});
export const { setQuery } = searchSlice.actions;
export default searchSlice;
