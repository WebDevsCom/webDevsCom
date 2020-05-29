import React from 'react';
import GitHubButton from 'react-github-btn';

const Contributor = () => {
  return (
    <div className='column'>
      <h1>Contributors for this website.</h1>
      <div className='column' style={{ marginLeft: '1rem' }}>
        <figure
          className='image is-48x48 is-inline-flex'
          style={{ marginLeft: '-1rem' }}
        >
          <a
            href='https://github.com/Binu42'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='is-rounded avatar-home'
              alt='user-profile'
              src='https://avatars3.githubusercontent.com/u/45959932?s=400&u=c45629c87cad71dcdc8d2d86808c9c52ec1fc68b&v=4'
            />
          </a>
        </figure>
        <figure
          className='image is-48x48 is-inline-flex'
          style={{ marginLeft: '-1rem' }}
        >
          <a
            href='https://github.com/zoltanszogyenyi'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='is-rounded avatar-home'
              alt='user-profile'
              src='https://avatars1.githubusercontent.com/u/8052108?s=400&u=ecac37f30fd06f245b7bcbb12b0e2f93ed62b173&v=4'
            />
          </a>
        </figure>
        <figure
          className='image is-48x48 is-inline-flex'
          style={{ marginLeft: '-1rem' }}
        >
          <a href='#!'>
            <img
              className='is-rounded avatar-home'
              alt='user-profile'
              src='https://randomuser.me/api/portraits/men/60.jpg'
            />
          </a>
        </figure>
        <figure
          className='image is-48x48 is-inline-flex'
          style={{ marginLeft: '-1rem' }}
        >
          <a href='#!'>
            <img
              className='is-rounded avatar-home'
              alt='user-profile'
              src='https://randomuser.me/api/portraits/men/70.jpg'
            />
          </a>
        </figure>
        <figure
          className='image is-48x48 is-inline-flex'
          style={{ marginLeft: '-1rem' }}
        >
          <a href='#!'>
            <img
              className='is-rounded avatar-home'
              alt='user-profile'
              src='https://randomuser.me/api/portraits/women/80.jpg'
            />
          </a>
        </figure>
        <figure
          className='image is-48x48 is-inline-flex'
          style={{ marginLeft: '-1rem' }}
        >
          <a href='#!'>
            <img
              className='is-rounded avatar-home'
              alt='user-profile'
              src='https://randomuser.me/api/portraits/men/10.jpg'
            />
          </a>
        </figure>
        <figure
          className='image is-48x48 is-inline-flex'
          style={{ marginLeft: '-1rem' }}
        >
          <a href='#!'>
            <img
              className='is-rounded avatar-home'
              alt='user-profile'
              src='https://randomuser.me/api/portraits/women/15.jpg'
            />
          </a>
        </figure>
      </div>
      <p className='menu-label'>
        Do you want to contribute or add some resource Feel free to visit below
        links.
      </p>
      <div className='container'>
        <GitHubButton
          href='https://github.com/WebDevsCom/webDevsCom'
          data-color-scheme='no-preference: light; light: light; dark: dark;'
          data-icon='octicon-star'
          data-show-count='true'
          data-size='large'
        >
          Star
        </GitHubButton>
        <span style={{ marginLeft: '15px' }}></span>
        <GitHubButton
          href='https://github.com/WebDevsCom/webDevsCom/fork'
          data-color-scheme='no-preference: light; light: light; dark: dark;'
          data-icon='octicon-repo-forked'
          data-show-count='true'
          data-size='large'
        >
          Fork
        </GitHubButton>
      </div>
    </div>
  );
};

export default Contributor;
