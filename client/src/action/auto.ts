import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IAutoMovie, IloadAutoSearchData } from '../@types/common';

export const loadAutoSearch = createAsyncThunk<
  IAutoMovie[],
  IloadAutoSearchData
>('search/auto', async (data, thunkApi) => {
  try {
    const response = await axios.get(
      `/api/auto?query=${data.query}&size=${data.size ? data.size : 6}`,
    );
    return response.data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.response.data);
  }
});
