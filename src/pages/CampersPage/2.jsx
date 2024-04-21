import React, { useState, useEffect } from 'react';
import { CampersPageContainer } from './CampersPage.styled';
import CamperCard from 'components/CamperCard/CamperCard';
import Filters from 'components/Filters/Filters';
import { useGetCampersQuery } from 'redux/api';

const CampersPage = () => {
  const { data: campersData, error, isLoading, refetch } = useGetCampersQuery();
  const [favorites, setFavorites] = useState([]);
  const [filters, setFilters] = useState({
    location: '',
    ac: false,
    automatic: false,
    kitchen: false,
    tv: false,
    shower_wc: false,
    vehicleType: '',
  });
  const [filteredCampers, setFilteredCampers] = useState([]);

  useEffect(() => {
    console.log('Filters changed, refetching...');
    refetch();
  }, [filters, refetch]);

  const addToFavorites = camperId => {
    setFavorites(prevFavorites => [...prevFavorites, camperId]);
    localStorage.setItem('favorites', JSON.stringify([...favorites, camperId]));
  };

  const loadMoreCampers = () => {
    refetch();
  };

  const handleFilterChange = newFilters => {
    setFilters(newFilters);
  };

  const filterCampers = camper => {
    const { location, ac, automatic, kitchen, tv, shower_wc, vehicleType } =
      filters;
    if (!campersData) return false;
    if (
      location &&
      !camper.location.toLowerCase().includes(location.toLowerCase())
    ) {
      return false;
    }
    if (ac && !camper.details.airConditioner) {
      return false;
    }
    if (automatic && !camper.transmission.includes('automatic')) {
      return false;
    }
    if (kitchen && !camper.details.kitchen) {
      return false;
    }
    if (tv && !camper.details.TV) {
      return false;
    }
    if (shower_wc && !camper.details.shower && !camper.details.toilet) {
      return false;
    }
    if (
      vehicleType &&
      camper.form.toLowerCase() !== vehicleType.toLowerCase()
    ) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    if (campersData) {
      const filteredData = campersData.filter(filterCampers);
      setFilteredCampers(filteredData);
    }
  }, [campersData, filterCampers, filters]);

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
            onAddToFavorites={addToFavorites}
          />
        ))}
      </div>
      <button onClick={loadMoreCampers}>Load more</button>
    </CampersPageContainer>
  );
};

export default CampersPage;
