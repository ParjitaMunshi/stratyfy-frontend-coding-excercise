// Reusable dropdown components for selecting topping.
import React from 'react';

//The select element dynamically populates options using the toppings array.
//onChange triggers a state update in the parent component, ensuring the table updates when a selection is made.
const ToppingsSelect = ({ toppings, selectedTopping, onToppingChange }) => {
  return (
    <select value={selectedTopping} onChange={onToppingChange}>
      <option value="">All Toppings</option> 
      {toppings.map((topping, index) => (
        <option key={index} value={topping}>
          {topping}
        </option>
      ))}
    </select>
  );
};

export default ToppingsSelect;
