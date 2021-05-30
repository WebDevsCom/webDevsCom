import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ScrollToTopBtn from './Components/ScrollToTopBtn';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { hotjar } from 'react-hotjar';
import ResourceREADME from './Pages/ResourceREADME';
import Spinner from './Components/Spinner';
import ThemeState from './context/theme/themeState'

const Home = lazy(() => import('./Pages/Home'));
const Resources = lazy(() => import('./Pages/Resources'));

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [category, setCategory] = useState('all');

  const handleInputChange = (value) => {
    if (category !== 'all') handleChangeInCategory('all');
    setSearchInput(value);
  };

  const handleChangeInCategory = (val) => {
    if (searchInput !== '') setSearchInput('');
    setCategory(val);
  };

  useEffect(() => {
    hotjar.initialize(2074416, 6);
  }, []);

  return (
    <div className='App'>
      <ThemeState>
        <Navbar />
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
      </ThemeState>
    </div>
  );
}

export default App;
