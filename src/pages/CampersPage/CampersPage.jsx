// CampersPage.js
// страница не показывает кемперов при первой загрузке. Они появляются только после фильтрации

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
  const [filteredCampers, setFilteredCampers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [camperModal, setCamperModal] = useState(null);
  const dispatch = useDispatch();

  const {
    data: campersData,
    isLoading,
    error,
  } = useGetCampersQuery({ page: currentPage });
  console.log('campersData:', campersData);

  const favorites = useSelector(state => state.favorites.campers);

  const handleFilter = filters => {
    console.log('filters: ', filters);
    const { location, equipment, vehicleType } = filters;

    // Фильтрация кемперов на основе выбранных параметров
    const filtered = campersData.filter(camper => {
      console.log(camper);
      // Пример условий фильтрации

      const locationMatch =
        !location ||
        camper.location.toLowerCase().includes(location.toLowerCase());

      // const equipmentMatch = Object.keys(equipment).every(
      //   key => !equipment[key] || camper.details[key]
      // );
      const equipmentMatch = Object.keys(equipment).every(key => {
        if (key === 'automatic') {
          return equipment.automatic
            ? camper.transmission === 'automatic'
            : true;
        }
        return !equipment[key] || camper.details[key];
      });

      const vehicleTypeMatch = !vehicleType || camper.form === vehicleType;

      return locationMatch && equipmentMatch && vehicleTypeMatch;
    });
    console.log('filtered:', filtered);
    setFilteredCampers(filtered);
  };

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
    if (campersData && campersData.length > 0) {
      setFilteredCampers(campersData);
    }
    setCurrentPage(1);
  }, [campersData]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <CampersPageContainer>
      <h2>Our Campers</h2>
      <Filters onFilter={handleFilter} />
      {isLoading ? (
        <div>Загрузка...</div>
      ) : (
        <div className="camper-list">
          {filteredCampers.map(camper => (
            <CamperCard
              key={camper._id}
              camper={camper}
              onAddToFavorites={() => handleAddToFavorites(camper)}
              onRemoveFromFavorites={() =>
                handleRemoveFromFavorites(camper._id)
              }
              onShowModal={handleShowModal}
              isFavorite={favorites.some(fav => fav._id === camper._id)}
            />
          ))}
        </div>
      )}

      {camperModal && <Modal camper={camperModal} onClose={handleCloseModal} />}
      <button onClick={loadMoreCampers}>Load More</button>
    </CampersPageContainer>
  );
};

export default CampersPage;
