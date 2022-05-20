import { configureStore } from '@reduxjs/toolkit';
import { booksApi } from './apiSlice';
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { favoritesSlice } from './favoritesSlice';


export const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
    favorites: favoritesSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});

setupListeners(store.dispatch);

