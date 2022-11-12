import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ISearchMoviesData } from '../@types/search';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

export const loadMainMovies = createAsyncThunk<any, ISearchMoviesData>(
  'search/movies',
  async (data, thunkApi) => {
    try {
      const response = await axios.get(
        `/api/search?query=${data.query}&page=${data.page}&nationFlag=${
          data.nationFlag
        }&sort=${data.sort}&genreFilter=${data.genreFilter}&showTimeFilter=${
          data.showTimeFilter
        }&openDateFilter=${data.openDateFilter}&size=${5}`,
      );
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);
