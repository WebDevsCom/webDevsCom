import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { hotjar } from 'react-hotjar';
import ResourceREADME from './Pages/ResourceREADME';
import ScrollToTopBtn from './Components/ScrollToTopBtn';
import Spinner from './Components/Spinner';

const Home = lazy(() => import('./Pages/Home'));
const Resources = lazy(() => import('./Pages/Resources'));

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [category, setCategory] = useState('all');
  const [darkMode, setDarkMode] = useState(null);

  const handleInputChange = (value) => {
    if (category !== 'all') handleChangeInCategory('all');
    setSearchInput(value);
  };

  const handleChangeInCategory = (val) => {
    if (searchInput !== '') setSearchInput('');
    setCategory(val);
  };

  useEffect(() => {
    const isDarkMode = JSON.parse(localStorage.getItem('dark-mode'));
    hotjar.initialize(2074416, 6);
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
              <Resources {...{ searchInput, category, handleChangeInCategory, handleInputChange }} />
            )}
          />
          <Route
            exact
            path='/resources/:id'
            render={(props) => <ResourceREADME {...props} />}
          />
          <Redirect to='/' />
        </Switch>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
