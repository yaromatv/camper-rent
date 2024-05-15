import React, { useState, useEffect } from 'react';

const Filter = ({ onFilter }) => {
  const [location, setLocation] = useState('');
  const [equipment, setEquipment] = useState({
    ac: false,
    automatic: false,
    kitchen: false,
    tv: false,
    shower: false,
    toilet: false,
  });
  const [vehicleType, setVehicleType] = useState('');

  const handleLocationChange = e => {
    setLocation(e.target.value);
  };

  const handleEquipmentChange = e => {
    const { name, checked } = e.target;
    setEquipment(prevEquipment => ({
      ...prevEquipment,
      [name]: checked,
    }));
  };

  const handleVehicleTypeChange = e => {
    setVehicleType(e.target.value);
  };

  useEffect(() => {
    const filters = {
      location,
      equipment,
      vehicleType,
    };
    onFilter(filters);
  }, [location, equipment, vehicleType, onFilter]);

  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={handleLocationChange}
          />
        </div>
        <div>
          <span>Vehicle equipment:</span>
          <label htmlFor="ac">
            <input
              type="checkbox"
              id="ac"
              name="ac"
              checked={equipment.ac}
              onChange={handleEquipmentChange}
            />
            AC
          </label>
          <label htmlFor="automatic">
            <input
              type="checkbox"
              id="automatic"
              name="automatic"
              checked={equipment.automatic}
              onChange={handleEquipmentChange}
            />
            Automatic
          </label>
          <label htmlFor="kitchen">
            <input
              type="checkbox"
              id="kitchen"
              name="kitchen"
              checked={equipment.kitchen}
              onChange={handleEquipmentChange}
            />
            Kitchen
          </label>
          <label htmlFor="tv">
            <input
              type="checkbox"
              id="tv"
              name="tv"
              checked={equipment.tv}
              onChange={handleEquipmentChange}
            />
            TV
          </label>
          <label htmlFor="shower">
            <input
              type="checkbox"
              id="shower"
              name="shower"
              checked={equipment.shower}
              onChange={handleEquipmentChange}
            />
            Shower
          </label>
          <label htmlFor="toilet">
            <input
              type="checkbox"
              id="toilet"
              name="toilet"
              checked={equipment.toilet}
              onChange={handleEquipmentChange}
            />
            Toilet
          </label>
        </div>
        <div>
          <span>Vehicle type:</span>
          <label htmlFor="van">
            <input
              type="radio"
              id="van"
              name="vehicleType"
              value="van"
              checked={vehicleType === 'van'}
              onChange={handleVehicleTypeChange}
            />
            Van
          </label>
          <label htmlFor="fullyIntegrated">
            <input
              type="radio"
              id="fullyIntegrated"
              name="vehicleType"
              value="fullyIntegrated"
              checked={vehicleType === 'fullyIntegrated'}
              onChange={handleVehicleTypeChange}
            />
            Fully Integrated
          </label>
          <label htmlFor="alcove">
            <input
              type="radio"
              id="alcove"
              name="vehicleType"
              value="alcove"
              checked={vehicleType === 'alcove'}
              onChange={handleVehicleTypeChange}
            />
            Alcove
          </label>
        </div>
      </form>
    </div>
  );
};

export default Filter;
