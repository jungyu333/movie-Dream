import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import autoSlice from './auto';
import mainSlice from './main';
import searchSlice from './search';
import movieSlice from './movie';
import reviewSlice from './review';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['search', 'main', 'review', 'auto', 'movie'],
};

const queryPersistConfig = {
  key: 'search',
  storage,
  whitelist: ['query'],
};

const rootReducer = combineReducers({
  main: mainSlice.reducer,
  auto: autoSlice.reducer,
  search: persistReducer(queryPersistConfig, searchSlice.reducer),
  movie: movieSlice.reducer,
  review: reviewSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
