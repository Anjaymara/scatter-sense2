import React, { useState } from 'react';

function App() {
  const [spins, setSpins] = useState([]);
  const [prediction, setPrediction] = useState(null);

  const generateSpin = () => {
    const outcome = Math.floor(Math.random() * 10) + 1;
    const newSpins = [...spins, outcome];
    setSpins(newSpins);
    predictScatter(newSpins);
  };

  const predictScatter = (data) => {
    const recent = data.slice(-10);
    const count = recent.filter(num => num > 7).length;
    if (count >= 4) {
      setPrediction('⚠️ Potensi Scatter Gacor, Spin Lagi!');
    } else {
      setPrediction('🔍 Masih Belum Stabil, Sabar Dulu...');
    }
  };

  return (
    <div style={{
      padding: 30,
      fontFamily: 'Arial',
      textAlign: 'center',
      backgroundColor: '#111',
      color: '#00ffcc',
      minHeight: '100vh'
    }}>
      <h1 style={{ fontSize: 36 }}>🎰 Scatter Sense v1.0</h1>
      <button
        onClick={generateSpin}
        style={{
          padding: '10px 20px',
          backgroundColor: '#00ffcc',
          color: '#111',
          border: 'none',
          borderRadius: 8,
          fontSize: 18,
          cursor: 'pointer',
          marginBottom: 20
        }}
      >
        Spin Sekali
      </button>
      <p>Hasil Spin: {spins.join(', ')}</p>
      <h3>{prediction}</h3>
    </div>
  );
}

export default App;
