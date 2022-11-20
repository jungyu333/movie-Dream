import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  IAnotherMovieData,
  IAnotherMovies,
  ILoadMovieData,
  IMovie,
} from '../@types/movie';

export const loadMovie = createAsyncThunk<IMovie, ILoadMovieData>(
  'search/movie',
  async (data, thunkApi) => {
    try {
      const response = await axios.get(`/api/search/movie?movie_id=${data.id}`);
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);

export const loadAnotherMovies = createAsyncThunk<
  IAnotherMovies,
  IAnotherMovieData
>('search/another', async (data, thunkApi) => {
  try {
    const response = await axios.post('/api/search/group', {
      group: data.group,
      name: data.name,
      movie_id: data.movieId,
    });
    return response.data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.response.data);
  }
});
