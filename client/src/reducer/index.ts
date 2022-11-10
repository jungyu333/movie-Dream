import { combineReducers } from 'redux';
import autoSlice from './auto';
import mainSlice from './main';

const rootReducer = combineReducers({
  main: mainSlice.reducer,
  auto: autoSlice.reducer,
});

export default rootReducer;
