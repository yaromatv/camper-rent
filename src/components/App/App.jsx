import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import CampersPage from 'pages/CampersPage/CampersPage';
import FavoritesPage from 'pages/FavouritesPage/FavouritesPage';
// import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import Header from 'components/Header/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/campers" element={<CampersPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
