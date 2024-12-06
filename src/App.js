import React, { useState } from 'react';
import OceanBackground from './Components/OceanBackground'; // Importez le background animé
import './App.css'; // Ajoutez des styles basiques
import RollTheDate from './Components/RollTheDate';

const App = () => {
  const [birthDate, setBirthDate] = useState(new Date());
  const [unit, setUnit] = useState('year');
  const [diceResult, setDiceResult] = useState(null); // New state for dice result

  const handleRollAndMinus = () => {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const total = dice1 + dice2;
    setDiceResult(total); // Store the result

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
    setDiceResult(total); // Store the result

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
    <div className="app">
      <OceanBackground /> {/* Affichage du background animé */}
      <div className="content">
        <h1 className="texte">Enter Your Birth Date</h1>
        <RollTheDate/>
      </div>
    </div>
  );
};
export default App;