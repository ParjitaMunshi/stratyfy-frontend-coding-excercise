// Reusable dropdown components for selecting a flavor.
import React from 'react';

//The select element dynamically populates options using the flavors array.
//onChange triggers a state update in the parent component, ensuring the table updates when a selection is made.
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
