import { combineReducers } from 'redux';
import autoSlice from './auto';
import mainSlice from './main';
import searchSlice from './search';
import movieSlice from './movie';
import reviewSlice from './review';

const rootReducer = combineReducers({
  main: mainSlice.reducer,
  auto: autoSlice.reducer,
  search: searchSlice.reducer,
  movie: movieSlice.reducer,
  review: reviewSlice.reducer,
});

export default rootReducer;
