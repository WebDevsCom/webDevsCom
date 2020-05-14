import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home/Home';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Resource from './components/Category/Resource';
import Resources from './components/Category/Resources';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div style={{ marginTop: '3rem' }}></div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/category' component={Resources} />
        <Route
          exact
          path='/category/:id'
          render={(props) => <Resource {...props} />}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
