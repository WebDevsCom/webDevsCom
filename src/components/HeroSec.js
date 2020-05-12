import React, { useEffect } from 'react';
import { GitHub } from 'react-feather';

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
              if yes, then you are at right place, we provide you all the Free
              Resources to you, which is collected by 1000+ numbers of peoples.
              we have collected all of them categorized and presenting it to you
              for your Help.
            </p>
            <div className='column'>
              <h1>Contributors for this website.</h1>
              <div className='column' style={{ marginLeft: '1rem' }}>
                <figure
                  className='image is-48x48 is-inline-flex'
                  style={{ marginLeft: '-1rem' }}
                >
                  <img
                    className='is-rounded avatar-home'
                    alt='user-profile'
                    src='https://avatars3.githubusercontent.com/u/45959932?s=400&u=c45629c87cad71dcdc8d2d86808c9c52ec1fc68b&v=4'
                  />
                </figure>
                <figure
                  className='image is-48x48 is-inline-flex'
                  style={{ marginLeft: '-1rem' }}
                >
                  <img
                    className='is-rounded avatar-home'
                    alt='user-profile'
                    src='https://randomuser.me/api/portraits/women/20.jpg'
                  />
                </figure>
                <figure
                  className='image is-48x48 is-inline-flex'
                  style={{ marginLeft: '-1rem' }}
                >
                  <img
                    className='is-rounded avatar-home'
                    alt='user-profile'
                    src='https://randomuser.me/api/portraits/men/60.jpg'
                  />
                </figure>
                <figure
                  className='image is-48x48 is-inline-flex'
                  style={{ marginLeft: '-1rem' }}
                >
                  <img
                    className='is-rounded avatar-home'
                    alt='user-profile'
                    src='https://randomuser.me/api/portraits/men/70.jpg'
                  />
                </figure>
                <figure
                  className='image is-48x48 is-inline-flex'
                  style={{ marginLeft: '-1rem' }}
                >
                  <img
                    className='is-rounded avatar-home'
                    alt='user-profile'
                    src='https://randomuser.me/api/portraits/women/80.jpg'
                  />
                </figure>
                <figure
                  className='image is-48x48 is-inline-flex'
                  style={{ marginLeft: '-1rem' }}
                >
                  <img
                    className='is-rounded avatar-home'
                    alt='user-profile'
                    src='https://randomuser.me/api/portraits/men/10.jpg'
                  />
                </figure>
                <figure
                  className='image is-48x48 is-inline-flex'
                  style={{ marginLeft: '-1rem' }}
                >
                  <img
                    className='is-rounded avatar-home'
                    alt='user-profile'
                    src='https://randomuser.me/api/portraits/women/15.jpg'
                  />
                </figure>
              </div>
              <p className='menu-label'>
                Do you want to contribute or add some resource Feel free to
                visit below link.
              </p>
            </div>
            <div className='column'>
              <a
                href='https://github.com/WebDevsCom/webDevsCom.github.io'
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
            <div className='column'>
              <h1>Contributors for this website.</h1>
              <div className='column' style={{ marginLeft: '1rem' }}>
                <figure
                  className='image is-48x48 is-inline-flex'
                  style={{ marginLeft: '-1rem' }}
                >
                  <img
                    className='is-rounded avatar-home'
                    alt='user-profile'
                    src='https://avatars3.githubusercontent.com/u/45959932?s=400&u=c45629c87cad71dcdc8d2d86808c9c52ec1fc68b&v=4'
                  />
                </figure>
                <figure
                  className='image is-48x48 is-inline-flex'
                  style={{ marginLeft: '-1rem' }}
                >
                  <img
                    className='is-rounded avatar-home'
                    alt='user-profile'
                    src='https://randomuser.me/api/portraits/women/20.jpg'
                  />
                </figure>
                <figure
                  className='image is-48x48 is-inline-flex'
                  style={{ marginLeft: '-1rem' }}
                >
                  <img
                    className='is-rounded avatar-home'
                    alt='user-profile'
                    src='https://randomuser.me/api/portraits/men/60.jpg'
                  />
                </figure>
                <figure
                  className='image is-48x48 is-inline-flex'
                  style={{ marginLeft: '-1rem' }}
                >
                  <img
                    className='is-rounded avatar-home'
                    alt='user-profile'
                    src='https://randomuser.me/api/portraits/men/70.jpg'
                  />
                </figure>
                <figure
                  className='image is-48x48 is-inline-flex'
                  style={{ marginLeft: '-1rem' }}
                >
                  <img
                    className='is-rounded avatar-home'
                    alt='user-profile'
                    src='https://randomuser.me/api/portraits/women/80.jpg'
                  />
                </figure>
                <figure
                  className='image is-48x48 is-inline-flex'
                  style={{ marginLeft: '-1rem' }}
                >
                  <img
                    className='is-rounded avatar-home'
                    alt='user-profile'
                    src='https://randomuser.me/api/portraits/men/10.jpg'
                  />
                </figure>
                <figure
                  className='image is-48x48 is-inline-flex'
                  style={{ marginLeft: '-1rem' }}
                >
                  <img
                    className='is-rounded avatar-home'
                    alt='user-profile'
                    src='https://randomuser.me/api/portraits/women/15.jpg'
                  />
                </figure>
              </div>
              <p className='menu-label'>
                Do you want to contribute or add some resource Feel free to
                visit below link.
              </p>
            </div>
            <div className='column'>
              <a
                href='https://github.com/WebDevsCom/webDevsCom.github.io'
                className='button button-special box-shadow-lift is-large is-rounded'
                target='_blank'
                rel='noopener noreferrer'
              >
                <GitHub /> <span> &emsp;Github</span>
              </a>
            </div>
          </div>
        </div>
      </section>
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
    </div>
  );
};

export default HeroSec;
