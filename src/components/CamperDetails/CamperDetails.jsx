import React from 'react';
import {
  CamperDetailsContainer,
  FeaturesTab,
  ReviewsTab,
} from './CamperDetails.styled';

const CamperDetails = ({ camper }) => {
  return (
    <CamperDetailsContainer>
      <h2>{camper.name}</h2>
      {/* Разместите контент для вкладок Features и Reviews */}
    </CamperDetailsContainer>
  );
};

export default CamperDetails;
