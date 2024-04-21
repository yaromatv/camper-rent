import React, { useState, useEffect } from 'react';
import { CampersPageContainer } from './CampersPage.styled';
import CamperCard from 'components/CamperCard/CamperCard';
import Filters from 'components/Filters/Filters';
import { useGetCampersQuery } from 'redux/api';
import Modal from 'components/Modal/Modal';

const CampersPage = () => {
  const [filters, setFilters] = useState({
    maxPrice: Infinity,
    minRating: 0,
    search: '',
    sortBy: 'price',
  });
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [camperModal, setCamperModal] = useState(null);

  const handleFilterChange = newFilters => {
    setFilters(prevFilters => ({
      ...prevFilters,
      ...newFilters,
    }));
    setCurrentPage(1);
  };

  const {
    data: campersData,
    isLoading,
    error,
  } = useGetCampersQuery(currentPage, filters);

  const handleAddToFavorites = camper => {
    setFavorites([...favorites, camper]);
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
        {campersData.map(camper => (
          <CamperCard
            key={camper._id}
            camper={camper}
            onAddToFavorites={handleAddToFavorites}
            onShowModal={handleShowModal}
          />
        ))}
      </div>
      {camperModal && <Modal camper={camperModal} onClose={handleCloseModal} />}
      <button onClick={loadMoreCampers}>Load More</button>
    </CampersPageContainer>
  );
};

export default CampersPage;
