const localStorageMiddleware = store => next => action => {
  const result = next(action);
  const favorites = store.getState().favorites.campers; // получаем избранных кемперов из состояния

  localStorage.setItem('favorites', JSON.stringify(favorites)); // сохраняем избранных кемперов в localStorage

  return result;
};

export default localStorageMiddleware;
