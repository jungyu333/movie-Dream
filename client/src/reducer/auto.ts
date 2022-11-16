import { createSlice } from '@reduxjs/toolkit';
import { IAutoMovie } from '../@types/common';
import { loadAutoSearch } from '../action/auto';

interface autoState {
  autoLoading: boolean;
  autoDone: boolean;
  autoError: string | null;
  autoMovies: IAutoMovie[] | null;
  searchInput: string;
}

export const initialState: autoState = {
  autoLoading: false,
  autoDone: false,
  autoError: null,
  autoMovies: null,
  searchInput: '',
};

const autoSlice = createSlice({
  name: 'auto',
  initialState,
  reducers: {
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
    resetSearchInput: state => {
      state.searchInput = '';
    },
  },
  extraReducers: builder =>
    builder
      .addCase(loadAutoSearch.pending, state => {
        state.autoLoading = true;
        state.autoDone = false;
        state.autoError = null;
      })
      .addCase(loadAutoSearch.fulfilled, (state, action) => {
        state.autoLoading = false;
        state.autoDone = true;
        state.autoMovies = action.payload;
      })
      .addCase(loadAutoSearch.rejected, (state, action) => {
        state.autoLoading = false;
        state.autoDone = false;
        state.autoError = action.payload as string;
      }),
});

export const { setSearchInput, resetSearchInput } = autoSlice.actions;

export default autoSlice;
