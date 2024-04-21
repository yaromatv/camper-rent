// CampersPage.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/favoritesSlice';
import { useGetCampersQuery } from '../../redux/api';
import { CampersPageContainer } from './CampersPage.styled';
import CamperCard from 'components/CamperCard/CamperCard';
import Filters from 'components/Filters/Filters';
import Modal from 'components/Modal/Modal';

const CampersPage = () => {
  const [filters, setFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [camperModal, setCamperModal] = useState(null);
  const dispatch = useDispatch();

  const handleFilterChange = newFilters => {
    setFilters({ ...filters, ...newFilters });
    setCurrentPage(1);
  };

  const {
    data: campersData,
    isLoading,
    error,
  } = useGetCampersQuery({ page: currentPage });

  const favorites = useSelector(state => state.favorites.campers);

  const filteredCampers = campersData?.filter(camper => {
    return Object.entries(filters).every(([key, value]) => {
      if (!value) return true; // Если значение фильтра пустое, пропустить фильтрацию по этому свойству
      if (key === 'vehicleType') return camper.vehicleType === value;
      return String(camper[key]).toLowerCase().includes(value.toLowerCase());
    });
  });

  const handleAddToFavorites = camper => {
    dispatch(addToFavorites(camper));
  };

  const handleRemoveFromFavorites = camperId => {
    dispatch(removeFromFavorites(camperId));
  };

  const handleShowModal = camper => {
    setCamperModal(camper);
  };

  const handleCloseModal = () => {
    setCamperModal(null);
  };

  const loadMoreCampers = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <CampersPageContainer>
      <h2>Our Campers</h2>
      <Filters onFiltersChange={handleFilterChange} />
      <div className="camper-list">
        {filteredCampers.map(camper => (
          <CamperCard
            key={camper._id}
            camper={camper}
            onAddToFavorites={() => handleAddToFavorites(camper)}
            onRemoveFromFavorites={() => handleRemoveFromFavorites(camper._id)}
            onShowModal={handleShowModal}
            isFavorite={favorites.some(fav => fav._id === camper._id)}
          />
        ))}
      </div>
      {camperModal && <Modal camper={camperModal} onClose={handleCloseModal} />}
      <button onClick={loadMoreCampers}>Load More</button>
    </CampersPageContainer>
  );
};

export default CampersPage;
