import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import HeroSec from './components/HeroSec';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div style={{ marginTop: '50px' }}></div>
      <HeroSec />
    </div>
  );
}

export default App;
