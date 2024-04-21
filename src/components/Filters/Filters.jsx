import React from 'react';

const Filters = ({ onFiltersChange }) => {
  const handleInputChange = e => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    onFiltersChange(prevFilters => ({
      ...prevFilters,
      [name]: newValue,
    }));
  };

  return (
    <div className="filters">
      <input
        type="text"
        name="location"
        placeholder="Location"
        onChange={handleInputChange}
      />
      <label>
        <input type="checkbox" name="ac" onChange={handleInputChange} />
        AC
      </label>
      <label>
        <input type="checkbox" name="automatic" onChange={handleInputChange} />
        Automatic
      </label>
      <label>
        <input type="checkbox" name="kitchen" onChange={handleInputChange} />
        Kitchen
      </label>
      <label>
        <input type="checkbox" name="tv" onChange={handleInputChange} />
        TV
      </label>
      <label>
        <input type="checkbox" name="shower" onChange={handleInputChange} />
        Shower
      </label>
      <label>
        <input type="checkbox" name="wc" onChange={handleInputChange} />
        WC
      </label>
      <div>
        <label>
          <input
            type="radio"
            name="vehicleType"
            value="van"
            onChange={handleInputChange}
          />
          Van
        </label>
        <label>
          <input
            type="radio"
            name="vehicleType"
            value="fullyIntegrated"
            onChange={handleInputChange}
          />
          Fully Integrated
        </label>
        <label>
          <input
            type="radio"
            name="vehicleType"
            value="alcove"
            onChange={handleInputChange}
          />
          Alcove
        </label>
      </div>
    </div>
  );
};

export default Filters;
