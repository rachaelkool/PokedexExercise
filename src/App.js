import React from 'react';
import './App.css';
import characters from './characters';
import Pokedex from "./Pokedex"

function App() {
  return (
    <div className="App">
      <Pokedex characters={characters} name="Melvin"/>
    </div>
  );
}

export default App;
