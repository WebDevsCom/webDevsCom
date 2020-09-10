import React from 'react';
import HeroSec from './HeroSec';
import Features from './Features';
import Page from '../Utils/Page';

const Home = () => {
  return (
    <Page title="Explore">
      <HeroSec />
      <Features />
      <section className='hero space is-medium'>
        <div className='hero-body'>
          <div className='container'>
            <h1
              className='title is-1 has-text-success has-text-centered'
              style={{ transform: 'skewY(-6deg)' }}
            >
              WEB DEVELOPERS COMMUNITY
            </h1>
          </div>
        </div>
      </section>
    </Page>
  );
};

export default Home;
