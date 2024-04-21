import { createSlice } from '@reduxjs/toolkit';

const loadFavoritesFromLocalStorage = () => {
  const favoritesData = localStorage.getItem('favorites');
  return favoritesData ? JSON.parse(favoritesData) : [];
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    campers: loadFavoritesFromLocalStorage(), // загрузка данных из localStorage при инициализации
  },
  reducers: {
    addToFavorites: (state, action) => {
      const camper = action.payload;
      if (!state.campers.find(c => c._id === camper._id)) {
        state.campers.push(camper);
        localStorage.setItem('favorites', JSON.stringify(state.campers)); // сохранение данных в localStorage при добавлении
      }
    },
    removeFromFavorites: (state, action) => {
      const camperId = action.payload;
      state.campers = state.campers.filter(camper => camper._id !== camperId);
      localStorage.setItem('favorites', JSON.stringify(state.campers)); // сохранение данных в localStorage при удалении
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
