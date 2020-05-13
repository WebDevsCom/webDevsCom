import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home/Home';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div style={{ marginTop: '3rem' }}></div>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
