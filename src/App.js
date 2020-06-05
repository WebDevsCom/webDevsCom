import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from './components/Footer';
import ScrollToTopBtn from './components/ScrollToTopBtn';
import Spinner from './components/Spinner';

const Home = lazy(() => import('./components/Home/Home'));
const ResourceREADME = lazy(() =>
  import('./components/Resources/ResourceREADME')
);
const Resources = lazy(() => import('./components/Resources/Resources'));

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [category, setCategory] = useState('');
  const [darkMode, setDarkMode] = useState(null);
  const handleInputChange = (value) => {
    if (category !== '') handleChangeInCategory('');
    setSearchInput(value);
  };

  const handleChangeInCategory = (val) => {
    if (searchInput !== '') setSearchInput('');
    const removeActiveEle = document.getElementById(
      category === '' ? 'all' : category
    );
    if (removeActiveEle) removeActiveEle.classList.remove('active-tag');
    setCategory(val);
    const element = document.getElementById(val === '' ? 'all' : val);
    if (element) element.classList.add('active-tag');
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
                handleChangeInCategory={handleChangeInCategory}
                category={category}
              />
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
