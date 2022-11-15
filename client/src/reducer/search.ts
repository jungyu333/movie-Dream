import { createSlice } from '@reduxjs/toolkit';
import { ISearchResults } from '../@types/search';
import { loadMainMovies } from '../action/search';

interface searchState {
  moviesLoading: boolean;
  moviesDone: boolean;
  moviesError: string | null;
  searchResults: ISearchResults | null;
  page: number;
  nationFlag: string | null;
  query: string;
  sort: string;
  genreFilter: string | null;
  showTimeFilter: string;
  openDateFilter: string;
  clickedGenre: string[];
}

export const initialState: searchState = {
  moviesLoading: false,
  moviesDone: false,
  moviesError: null,
  searchResults: null,
  page: 1,
  nationFlag: null,
  query: '',
  sort: 'opening_date',
  genreFilter: null,
  showTimeFilter: '0,180',
  openDateFilter: '',
  clickedGenre: [],
};

const searchSlice = createSlice({
  name: 'searchMovies',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setClickedGenre: (state, action) => {
      state.clickedGenre.includes(action.payload)
        ? (state.clickedGenre = state.clickedGenre.filter(
            gen => action.payload !== gen,
          ))
        : state.clickedGenre.push(action.payload);
    },
    setGenreFilter: state => {
      state.genreFilter = state.clickedGenre.join(',');
    },
  },
  extraReducers: builder =>
    builder
      .addCase(loadMainMovies.pending, state => {
        state.moviesLoading = true;
        state.moviesDone = false;
        state.moviesError = null;
      })
      .addCase(loadMainMovies.fulfilled, (state, action) => {
        state.moviesLoading = false;
        state.moviesDone = true;
        state.searchResults = action.payload;
      })
      .addCase(loadMainMovies.rejected, (state, action) => {
        state.moviesLoading = false;
        state.moviesDone = false;
        state.moviesError = action.payload as string;
      }),
});
export const { setQuery, setClickedGenre, setGenreFilter } =
  searchSlice.actions;
export default searchSlice;
