import React from 'react';
import './App.css';
import MakeButton from './components/MakeButton';

function App() {
  return (
    <div className="App">
      <MakeButton firstName="Mohannad" lastName="Salman" age={22} hairColor="Gold" />
      <MakeButton firstName="Momen" lastName="Kittaneh" age={25} hairColor="Red" />
      <MakeButton firstName="Asma" lastName="alsada" age={22} hairColor="Brown" />
      <MakeButton firstName="hani" lastName="Ikhmais" age={27} hairColor="Black" />
    </div>
  );
}

export default App;