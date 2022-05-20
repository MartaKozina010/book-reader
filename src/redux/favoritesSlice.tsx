import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favoriteBooks: [] as string[],
  },
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      state.favoriteBooks = state.favoriteBooks.includes(action.payload)
        ? state.favoriteBooks.filter((el) => el !== action.payload)
        : [...state.favoriteBooks, action.payload];
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
