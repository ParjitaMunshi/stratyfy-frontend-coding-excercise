import React, { useState } from 'react';
import FlavorSelect from './components/FlavorSelect';
import ToppingsSelect from './components/ToppingsSelect';
import SalesTable from './components/SalesTable';
import salesData from './data/data.json';
import './App.css';

function App() {
  // usestate hooks manage the selected flavor and topping.
  const [selectedFlavor, setSelectedFlavor] = useState('');
  const [selectedTopping, setSelectedTopping] = useState('');

  // Extract unique flavors and toppings from the salesData array using map() and set. These unique value populate the dropdown menus dynamically.
  const flavors = [...new Set(salesData.map(item => item.flavor))];
  const toppings = [...new Set(salesData.map(item => item.toppings))];

  // for resent the selection
  const resetSelections = () => {
    setSelectedFlavor('');
    setSelectedTopping('');
  };

  return (
    <div className="App">
      <h1>Ice Cream Sales Dashboard</h1>
      <div className="filters">
        {/* rendor Flavor Select dropdown component. */}
        <FlavorSelect
          flavors={flavors}
          selectedFlavor={selectedFlavor}
          onFlavorChange={e => setSelectedFlavor(e.target.value)}
        />
        {/* rendor Topping Select dropdown component. */}
        <ToppingsSelect
          toppings={toppings}
          selectedTopping={selectedTopping}
          onToppingChange={e => setSelectedTopping(e.target.value)}
        />
      </div>
      <button onClick={resetSelections} className="reset-button">
        Reset Selections
      </button>
      {/* Renders the SalesTable component and passes filtered states as props. */}
      <SalesTable
        salesData={salesData}
        selectedFlavor={selectedFlavor}
        selectedTopping={selectedTopping}
      />
    </div>
  );
}

export default App;
