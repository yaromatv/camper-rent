import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../../redux/favoritesSlice';
import { FavouritesPageContainer } from './FavouritesPage.styled';
import CamperCard from 'components/CamperCard/CamperCard';
import Modal from 'components/Modal/Modal';

const FavoritesPage = () => {
  const favorites = useSelector(state => state.favorites.campers);
  const dispatch = useDispatch();
  const [selectedCamper, setSelectedCamper] = useState(null);

  const handleRemoveFromFavorites = camperId => {
    dispatch(removeFromFavorites(camperId));
  };

  const handleShowModal = camper => {
    setSelectedCamper(camper);
  };

  const handleCloseModal = () => {
    setSelectedCamper(null);
  };

  return (
    <FavouritesPageContainer>
      <h2>Your Favorites</h2>
      <div className="camper-list">
        {favorites.length > 0 &&
          favorites.map(camper => (
            <CamperCard
              key={camper._id}
              camper={camper}
              onRemoveFromFavorites={() =>
                handleRemoveFromFavorites(camper._id)
              }
              onShowModal={() => handleShowModal(camper)}
              isFavorite={favorites.some(fav => fav._id === camper._id)}
            />
          ))}
      </div>
      {selectedCamper && (
        <Modal camper={selectedCamper} onClose={handleCloseModal} />
      )}
    </FavouritesPageContainer>
  );
};

export default FavoritesPage;
