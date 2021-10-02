import React, { useEffect, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { hotjar } from 'react-hotjar';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ScrollToTopBtn from './Components/ScrollToTopBtn';
import Spinner from './Components/Spinner';
import ResourceREADME from './Pages/ResourceREADME';
import ThemeState from './context/theme/themeState';
import ResourceState from './context/resources/resourceState';
import './App.css';

const Home = lazy(() => import('./Pages/Home'));
const Resources = lazy(() => import('./Pages/Resources'));

function App() {
  useEffect(() => {
    hotjar.initialize(2074416, 6);
  }, []);

  return (
    <div className="App">
      <ThemeState>
        <Navbar />
        <ScrollToTopBtn />
        <div style={{ marginTop: '3rem' }}></div>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <ResourceState>
              <Route exact path="/" component={Home} />
              <Route exact path={['/resources', '/bookmarked']} render={() => <Resources />} />
              <Route
                exact
                path="/resources/:id"
                render={(props) => <ResourceREADME {...props} />}
              />
            </ResourceState>
            <Redirect to="/" />
          </Switch>
        </Suspense>
        <Footer />
      </ThemeState>
    </div>
  );
}

export default App;
