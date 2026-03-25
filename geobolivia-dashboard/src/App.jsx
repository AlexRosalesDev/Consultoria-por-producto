import React from 'react';
import Graph from './components/Map/Graph';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Dashboard GeoBolivia</h1>
        <p>Monitoreo del avance del sprint</p>
      </header>

      <div className="card">
        <Graph />
      </div>
    </div>
  );
}

export default App;