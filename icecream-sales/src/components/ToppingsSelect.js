import React from 'react';

const ToppingsSelect = ({ toppings, selectedTopping, onToppingChange }) => {
  return (
    <select value={selectedTopping} onChange={onToppingChange}>
      <option value="">Select Topping</option>
      {toppings.map((topping, index) => (
        <option key={index} value={topping}>
          {topping}
        </option>
      ))}
    </select>
  );
};

export default ToppingsSelect;
