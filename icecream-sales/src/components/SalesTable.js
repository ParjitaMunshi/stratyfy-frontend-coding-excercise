//Displays the sales data in a table format, highlights matching rows, and calculates totals.
import React from 'react';
import './SalesTable.css'


//Filters the salesData array based on the selected flavor and topping.
const SalesTable = ({ salesData, selectedFlavor, selectedTopping }) => {
  const filteredData = salesData.filter(item => {
    return (
      (!selectedFlavor || item.flavor === selectedFlavor) &&
      (!selectedTopping || selectedTopping === "All Toppings" || item.toppings === selectedTopping)
    );
  });

  //reduce() -> to sum up the sales fields.
  const totalSales = filteredData.reduce((acc, item) => acc + item.sales, 0);

  return (
    <table className="sales-table">
      <thead>
        <tr>
          <th>Flavor</th>
          <th>Toppings</th>
          <th>Sales</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item, index) => (
          <tr
            key={index}
            className={
              selectedFlavor === item.flavor && (selectedTopping === "" || selectedTopping === "All Toppings" || item.toppings === selectedTopping)
                ? 'highlight'
                : ''
            }
          >
            <td>{item.flavor}</td>
            <td>{item.toppings}</td>
            <td>{item.sales}</td>
          </tr>
        ))}
        <tr>
          <td colSpan="2">Total</td>
          <td>{totalSales}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SalesTable;
