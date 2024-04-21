import React from 'react';
import { CamperCardContainer } from './CamperCard.styled';

const CamperCard = ({
  camper,
  onAddToFavorites,
  onRemoveFromFavorites,
  onShowModal,
  isFavorite,
}) => {
  const handleAddToFavorites = () => {
    onAddToFavorites(camper);
  };

  const handleRemoveFromFavorites = () => {
    onRemoveFromFavorites(camper._id);
  };

  const handleShowMore = () => {
    onShowModal(camper);
  };

  return (
    <CamperCardContainer>
      <img src={camper.gallery[0]} alt={camper.name} />
      <h3>{camper.name}</h3>
      <div className="details">
        <p>Rating: {camper.rating}</p>
        <p>Location: {camper.location}</p>
        <p>Price: ${camper.price}</p>
      </div>
      {isFavorite ? (
        <button onClick={handleRemoveFromFavorites}>
          Remove from Favorites
        </button>
      ) : (
        <button onClick={handleAddToFavorites}>Add to Favorites</button>
      )}
      <button onClick={handleShowMore}>Show More</button>
    </CamperCardContainer>
  );
};

export default CamperCard;
