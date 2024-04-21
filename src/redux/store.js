import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { campersApi } from './api';
import favoritesReducer from './favoritesSlice';
import localStorageMiddleware from './localStorageMiddleware'; // импортируем нашу middleware

const rootReducer = combineReducers({
  [campersApi.reducerPath]: campersApi.reducer,
  favorites: favoritesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      campersApi.middleware,
      localStorageMiddleware
    ), // добавляем middleware в цепочку middleware
});

export default store;
