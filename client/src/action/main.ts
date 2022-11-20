import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IGenreMovie } from '../@types/main';

export const loadGenreMovies = createAsyncThunk<IGenreMovie[]>(
  'search/genre',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/api/search/genre');
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);
