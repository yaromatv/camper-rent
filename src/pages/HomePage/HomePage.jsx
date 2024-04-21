import React from 'react';
import { Link } from 'react-router-dom';
import { HomeContainer } from './HomePage.styled';

const HomePage = () => {
  return (
    <HomeContainer>
      <h1>Welcome to our camper rental service!</h1>
      <Link to="/campers">View Campers</Link>
    </HomeContainer>
  );
};

export default HomePage;
