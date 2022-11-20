import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ILoadReviews, ILoadReviewsData } from '../@types/movie';

export const loadReviews = createAsyncThunk<ILoadReviews, ILoadReviewsData>(
  'search/reviews',
  async (data, thunkApi) => {
    try {
      const response = await axios.get(
        `/api/search/review?movie_id=${data.id}&sentimentFlag=true`,
      );
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);
