import React, { useState } from 'react';

const BudgetCalculator = () => {
  const [salary, setSalary] = useState(0);
  const [expenses, setExpenses] = useState({
    electricity: 0,
    rent: 0,
    tithe: 0,
    fees: 0,
    entertainment: 0,
    shopping: 0,
    savings: 0
  });
  const [remaining, setRemaining] = useState(0);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "salary") {
      setSalary(parseFloat(value));
    } else {
      setExpenses({ ...expenses, [id]: parseFloat(value) });
    }
  };

  const calculateRemaining = () => {
    const totalExpenses = Object.values(expenses).reduce((acc, curr) => acc + curr, 0);
    setRemaining(salary - totalExpenses);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Budget Calculator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <div>
            <label htmlFor="salary" className="block text-sm font-medium text-gray-200">Salary:</label>
            <input
              id="salary"
              type="number"
              className="mt-1 p-2 w-full bg-gray-800 text-white rounded"
              onChange={handleInputChange}
            />
          </div>
          {Object.keys(expenses).map((expense) => (
            <div key={expense}>
              <label htmlFor={expense} className="block text-sm font-medium text-gray-200 capitalize">{expense}:</label>
              <input
                id={expense}
                type="number"
                className="mt-1 p-2 w-full bg-gray-800 text-white rounded"
                onChange={handleInputChange}
              />
            </div>
          ))}
          <button
            className="mt-4 w-full bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded"
            onClick={calculateRemaining}
          >
            Submit
          </button>
        </div>
        <div className="space-y-4">
          {Object.entries(expenses).map(([key, value]) => (
            <p key={key} className="text-gray-200">{key.charAt(0).toUpperCase() + key.slice(1)}: ${value.toFixed(2)}</p>
          ))}
          <p className="font-bold text-gray-200">Total Salary Remaining: ${remaining.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default BudgetCalculator;
