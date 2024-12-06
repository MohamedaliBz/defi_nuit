import React, { useState } from 'react';
import './index.css';

const RollTheDate = () => {
  const [birthDate, setBirthDate] = useState(new Date());
  const [unit, setUnit] = useState('year');
  const [totalRoll, setTotalRoll] = useState(0); // New state for total roll

  const handleRollAndMinus = () => {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const total = dice1 + dice2;

    setTotalRoll(total); // Update totalRoll state

    let newDate = new Date(birthDate);

    if (unit === 'year') {
      newDate.setFullYear(newDate.getFullYear() - total);
    } else if (unit === 'month') {
      newDate.setMonth(newDate.getMonth() - total);
    } else {
      newDate.setDate(newDate.getDate() - total);
    }

    setBirthDate(newDate);
  };

  const handleRollAndAdd = () => {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const total = dice1 + dice2;

    setTotalRoll(total); // Update totalRoll state

    let newDate = new Date(birthDate);

    if (unit === 'year') {
      newDate.setFullYear(newDate.getFullYear() + total);
    } else if (unit === 'month') {
      newDate.setMonth(newDate.getMonth() + total);
    } else {
      newDate.setDate(newDate.getDate() + total);
    }

    setBirthDate(newDate);
  };

  return (
    <div className="container"> {/* Add a class name to the main div */}
      <h1>Roll The Date</h1>
      <input 
        type="date"  
        disabled
        value={birthDate.toISOString().split('T')[0]} 
        onChange={(e) => setBirthDate(new Date(e.target.value))
        } 
      />
      <select value={unit} onChange={(e) => setUnit(e.target.value)}>
        <option value="year">Year</option>
        <option value="month">Month</option>
        <option value="day">Day</option>
      </select>

      <button onClick={handleRollAndMinus}>Roll and Minus</button>
      <button onClick={handleRollAndAdd}>Roll and Add</button>

      <p>Total Roll: {totalRoll}</p> {/* Display the total roll */}
      <p>New Date: {birthDate.toLocaleDateString()}</p>
    </div>
  );
};

export default RollTheDate;