import { createSlice } from '@reduxjs/toolkit';
import { ILoadReviews } from '../@types/movie';
import { loadReviews } from '../action/review';

interface reviewState {
  isNegative: boolean;
  reviewLoading: boolean;
  reviewDone: boolean;
  reviewError: string | null;
  reviews: ILoadReviews | null;
}

export const initialState: reviewState = {
  isNegative: false,
  reviewLoading: false,
  reviewDone: false,
  reviewError: null,
  reviews: null,
};

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    setIsNegative: (state, action) => {
      state.isNegative = action.payload === 1 ? true : false;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(loadReviews.pending, state => {
        state.reviewLoading = true;
        state.reviewDone = false;
        state.reviewError = null;
      })
      .addCase(loadReviews.fulfilled, (state, action) => {
        state.reviewLoading = false;
        state.reviewDone = true;
        state.reviews = action.payload;
      })
      .addCase(loadReviews.rejected, (state, action) => {
        state.reviewLoading = false;
        state.reviewDone = false;
        state.reviewError = action.payload as string;
      }),
});
export const { setIsNegative } = reviewSlice.actions;
export default reviewSlice;
