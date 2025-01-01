import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [rank, setRank] = useState(0);

  useEffect(() => {
    const randomRank = Math.floor(Math.random() * 10) + 1;
    setRank(randomRank);
  }, []);

  return (
    <div className="app">
      <h1 className="rank-display">Your rank is 4</h1>
    </div>
  );
};

export default App;
