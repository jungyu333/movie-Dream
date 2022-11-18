import { createSlice } from '@reduxjs/toolkit';
import { IMovie } from '../@types/movie';
import { loadMovie } from '../action/movie';

interface movieState {
  movieLoading: boolean;
  movieDone: boolean;
  movieError: string | null;
  movie: IMovie | null;
}

export const initialState: movieState = {
  movieLoading: false,
  movieDone: false,
  movieError: null,
  movie: null,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
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
      }),
});

export default movieSlice;
