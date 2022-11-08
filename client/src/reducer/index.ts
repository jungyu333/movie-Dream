import { combineReducers } from 'redux';

import mainSlice from './main';

const rootReducer = combineReducers({
  main: mainSlice.reducer,
});

export default rootReducer;
