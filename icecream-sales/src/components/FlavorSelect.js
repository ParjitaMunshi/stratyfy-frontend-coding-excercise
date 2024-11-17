import React from 'react';

const FlavorSelect = ({ flavors, selectedFlavor, onFlavorChange }) => {
  return (
    <select value={selectedFlavor} onChange={onFlavorChange}>
      <option value="">All Flavors</option> 
      {flavors.map((flavor, index) => (
        <option key={index} value={flavor}>
          {flavor}
        </option>
      ))}
    </select>
  );
};

export default FlavorSelect;
