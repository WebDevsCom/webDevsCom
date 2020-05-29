import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from './components/Footer';
import ScrollToTopBtn from './components/ScrollToTopBtn';
import Spinner from './components/Spinner';

const Home = lazy(() => import('./components/Home/Home'));
const Resource = lazy(() => import('./components/Category/Resource'));
const Resources = lazy(() => import('./components/Category/Resources'));

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [darkMode, setDarkMode] = useState(null);
  const handleInputChange = (value) => {
    setSearchInput(value);
  };

  useEffect(() => {
    const isDarkMode = JSON.parse(localStorage.getItem('dark-mode'));

    if (isDarkMode === true) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('dark-mode', darkMode);
    if (darkMode) {
      document.querySelector('body').classList.add('dark-mode');
    } else {
      document.querySelector('body').classList.remove('dark-mode');
    }
  }, [darkMode]);
  return (
    <div className='App'>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <ScrollToTopBtn />
      <div style={{ marginTop: '3rem' }}></div>
      <Suspense fallback={<Spinner />}>
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
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
