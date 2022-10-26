import React from 'react';
import { GitHub, GitPullRequest } from 'react-feather';
import Contributor from './Contributor';

function HeroSec() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <section className="section">
        <div className="container">
          <div className="column has-text-centered is-hidden-touch">
            <p className="title fadeInUp" style={{ animationDelay: '0.25s' }}>
              <span style={{ fontSize: '5rem' }}>
                Hello Developer, welcome home!
              </span>
            </p>
            <p
              className="subtitle is-3 has-text-grey fadeInUp"
              style={{ animationDelay: '.5s' }}
            >
              We have collected over 1000+ free resources to make your
              development journey hassle free Enjoy the experience.
            </p>
            <Contributor />
            <div className="column fadeInUp" style={{ animationDelay: '1s' }}>
              <a
                href="https://github.com/WebDevsCom/webDevsCom"
                className="button button-special box-shadow-lift is-large is-rounded"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub />
                {' '}
                <span> &emsp;open sourced on GitHub</span>
              </a>
            </div>
          </div>

          <div className="column has-text-centered is-hidden-desktop">
            <p
              className="title is-2 fadeInUp"
              style={{ animationDelay: '.25s' }}
            >
              Hello Developer, welcome home!
            </p>
            <p
              className="subtitle has-text-grey is-5 fadeInUp"
              style={{ animationDelay: '.5s' }}
            >
              We have collected over 1000+ free resources to make your
              development journey hassle free Enjoy the experience.
            </p>
            <Contributor />
            <div className="column fadeInUp" style={{ animationDelay: '1s' }}>
              <a
                href="https://github.com/WebDevsCom/webDevsCom"
                className="button button-special box-shadow-lift is-large is-rounded"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitPullRequest />
                {' '}
                <span> &emsp;Github</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSec;
