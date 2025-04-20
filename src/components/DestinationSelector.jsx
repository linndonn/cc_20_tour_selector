import React from "react";

const DestinationSelector = ({ tours, selected, onSelect }) => {
  const uniqueDestinations = ["All", ...new Set(tours.map((tour) => tour.name))];

  const handleChange = (e) => {
    onSelect(e.target.value);
  };

  return (
    <div className="destination-selector">
      <select value={selected} onChange={handleChange}>
      <option value=""></option>
        {uniqueDestinations.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DestinationSelector;