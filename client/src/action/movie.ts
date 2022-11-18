import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ILoadMovieData, IMovie } from '../@types/movie';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

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
