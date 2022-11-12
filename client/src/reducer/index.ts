import { combineReducers } from 'redux';
import autoSlice from './auto';
import mainSlice from './main';
import searchSlice from './search';

const rootReducer = combineReducers({
  main: mainSlice.reducer,
  auto: autoSlice.reducer,
  search: searchSlice.reducer,
});

export default rootReducer;
