import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">LOGO</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/campers">CAMPERS</Link>
          </li>
          <li>
            <Link to="/favorites">FAVORITES</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
