import { createSlice } from '@reduxjs/toolkit';
import { IMovie } from '../@types/movie';
import { loadMovie } from '../action/movie';

interface movieState {
  movieLoading: boolean;
  movieDone: boolean;
  movieError: string | null;
  movie: IMovie | null;
  group: string | null;
  name: string | null;
}

export const initialState: movieState = {
  movieLoading: false,
  movieDone: false,
  movieError: null,
  movie: null,
  group: null,
  name: null,
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
      }),
});

export const { setCastInfo } = movieSlice.actions;

export default movieSlice;
