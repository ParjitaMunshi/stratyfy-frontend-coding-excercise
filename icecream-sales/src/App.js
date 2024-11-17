import React, { useState } from 'react';
import FlavorSelect from './components/FlavorSelect';
import ToppingsSelect from './components/ToppingsSelect';
import SalesTable from './components/SalesTable';
import salesData from './data/data.json';
import './App.css';

function App() {
  const [selectedFlavor, setSelectedFlavor] = useState('');
  const [selectedTopping, setSelectedTopping] = useState('');

  const flavors = [...new Set(salesData.map(item => item.flavor))];
  const toppings = [...new Set(salesData.map(item => item.toppings))];

  const resetSelections = () => {
    setSelectedFlavor('');
    setSelectedTopping('');
  };

  return (
    <div className="App">
      <h1>Ice Cream Sales Dashboard</h1>
      <div className="filters">
        <FlavorSelect
          flavors={flavors}
          selectedFlavor={selectedFlavor}
          onFlavorChange={e => setSelectedFlavor(e.target.value)}
        />
        <ToppingsSelect
          toppings={toppings}
          selectedTopping={selectedTopping}
          onToppingChange={e => setSelectedTopping(e.target.value)}
        />
      </div>
      <button onClick={resetSelections} className="reset-button">
        Reset Selections
      </button>
      <SalesTable
        salesData={salesData}
        selectedFlavor={selectedFlavor}
        selectedTopping={selectedTopping}
      />
    </div>
  );
}

export default App;
