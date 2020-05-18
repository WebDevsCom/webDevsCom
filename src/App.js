import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home/Home';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from './components/Footer';
import Resource from './components/Category/Resource';
import Resources from './components/Category/Resources';
import ScrollToTopBtn from './components/ScrollToTopBtn';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const handleInputChange = (value) => {
    // console.log(value);
    setSearchInput(value);
  };
  return (
    <div className='App'>
      <Navbar />
      <ScrollToTopBtn />
      <div style={{ marginTop: '3rem' }}></div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
          exact
          path={['/resources', '/bookmarked']}
          render={() => (
            <Resources
              handleInputChange={handleInputChange}
              searchInput={searchInput}
            />
          )}
        />
        <Route
          exact
          path='/resources/:id'
          render={(props) => <Resource {...props} />}
        />
        <Redirect to='/' />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
