import React from 'react';
import { GitHub, GitPullRequest } from 'react-feather';
import Contributor from './Contributor';

const HeroSec = () => {
  return (
    <div>
      <section className='section'>
        <div className='container'>
          <div className='column has-text-centered is-hidden-touch'>
            <p className='title'>
              <span style={{ fontSize: '5.1rem' }}>Are You a Developer?</span>
            </p>
            <p className='subtitle is-3 has-text-grey'>
              If yes, then you are at right place, we provide you all the Free
              Resources to you, which is collected by 1000+ numbers of
              developers. we have collected all of them and presenting it to you
              for your Help.
            </p>
            <Contributor />
            <div className='column'>
              <a
                href='https://github.com/WebDevsCom/webDevsCom'
                className='button button-special box-shadow-lift is-large is-rounded'
                target='_blank'
                rel='noopener noreferrer'
              >
                <GitHub /> <span> &emsp;open sourced on GitHub</span>
              </a>
            </div>
          </div>

          <div className='column has-text-centered is-hidden-desktop'>
            <p className='title is-1'>Are You a Developer?</p>
            <p className='subtitle has-text-grey is-4'>
              we provide you all the Free Resources to you, which is collected
              by 1000+ numbers of peoples.
            </p>
            <Contributor />
            <div className='column'>
              <a
                href='https://github.com/WebDevsCom/webDevsCom'
                className='button button-special box-shadow-lift is-large is-rounded'
                target='_blank'
                rel='noopener noreferrer'
              >
                <GitPullRequest /> <span> &emsp;Github</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSec;
