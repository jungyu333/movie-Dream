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
  hasMoreMovies: boolean;
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
  hasMoreMovies: true,
};

const searchSlice = createSlice({
  name: 'searchMovies',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setClickedGenre: (state, action) => {
      state.page = 1;
      state.clickedGenre.includes(action.payload)
        ? (state.clickedGenre = state.clickedGenre.filter(
            gen => action.payload !== gen,
          ))
        : state.clickedGenre.push(action.payload);
    },
    setGenreFilter: state => {
      state.page = 1;
      state.genreFilter = state.clickedGenre.join(',');
    },
    setShowTimeFilter: (state, action) => {
      state.page = 1;
      state.showTimeFilter =
        String(action.payload[0]) + ',' + String(action.payload[1]);
    },
    setOpenDateFilter: (state, action) => {
      state.page = 1;
      state.openDateFilter = action.payload;
    },
    setSort: (state, action) => {
      state.page = 1;
      state.sort = action.payload;
    },
    setNationFlag: (state, action) => {
      state.page = 1;
      if (action.payload === 0) {
        state.nationFlag = null;
      } else if (action.payload === 1) {
        state.nationFlag = 'True';
      } else {
        state.nationFlag = 'False';
      }
    },
    resetSearch: state => {
      Object.assign(state, initialState);
    },
    resetFilters: (state, action) => {
      Object.assign(state, initialState);
      state.query = action.payload;
    },
    setPage: state => {
      state.page++;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(loadMainMovies.pending, state => {
        state.page === 1
          ? (state.moviesLoading = true)
          : (state.moviesLoading = false);
        state.moviesDone = false;
        state.moviesError = null;
      })
      .addCase(loadMainMovies.fulfilled, (state, action) => {
        state.moviesLoading = false;
        state.moviesDone = true;
        if (state.page === 1) {
          state.searchResults = action.payload;
        }

        if (state.page > 1) {
          state.searchResults!.movies = [...state.searchResults!.movies].concat(
            action.payload.movies,
          );
        }

        state.hasMoreMovies = action.payload.movies.length === 5;
      })
      .addCase(loadMainMovies.rejected, (state, action) => {
        state.moviesLoading = false;
        state.moviesDone = false;
        state.moviesError = action.payload as string;
      }),
});
export const {
  setQuery,
  setClickedGenre,
  setGenreFilter,
  setOpenDateFilter,
  setShowTimeFilter,
  setSort,
  setNationFlag,
  resetSearch,
  resetFilters,
  setPage,
} = searchSlice.actions;
export default searchSlice;
