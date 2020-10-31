import React from 'react';
import GitHubButton from 'react-github-btn';
import ReactTooltip from 'react-tooltip';

const Contributor = () => {
  return (
    <div className='column fadeInUp' style={{ animationDelay: '.75s' }}>
      <ReactTooltip type="light" />
      <h1>Contributors for this website.</h1>
      <div className='column' style={{ marginLeft: '1rem' }}>
        <figure
          className='image is-48x48 is-inline-flex'
          style={{ marginLeft: '-1rem' }}
          data-tip="Binu Kumar"
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
          data-tip="Prashant Kumar"
        >
          <a
            href='https://github.com/pkumars397'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='is-rounded avatar-home'
              alt='user-profile'
              src='https://avatars0.githubusercontent.com/u/45540448?s=400&u=7ee96b166eba6a3552aef0f9496271c5b13adb7a&v=4'
            />
          </a>
        </figure>
        <figure
          className='image is-48x48 is-inline-flex'
          style={{ marginLeft: '-1rem' }}
          data-tip="Abdul-Razak"
        >
          <a
            href='https://github.com/VolailleInc'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='is-rounded avatar-home'
              alt='user-profile'
              src='https://avatars1.githubusercontent.com/u/36109125?s=400&u=61d980bafcbcf617a189054bf3d5c9280340e9f9&v=4'
            />
          </a>
        </figure>
        <figure
          className='image is-48x48 is-inline-flex'
          style={{ marginLeft: '-1rem' }}
          data-tip="Jaydeep Khatri"
        >
          <a
            href='https://github.com/jaydeepkhatri'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='is-rounded avatar-home'
              alt='user-profile'
              src='https://avatars0.githubusercontent.com/u/29619945?v=4'
            />
          </a>
        </figure>
        <figure
          className='image is-48x48 is-inline-flex'
          style={{ marginLeft: '-1rem' }}
          data-tip="Zoltán Szőgyényi"
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
          data-tip="Harshpreet Singh"
        >
          <a
            href='https://github.com/harshloco'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='is-rounded avatar-home'
              alt='user-profile'
              src='https://avatars2.githubusercontent.com/u/5271603?s=400&v=4'
            />
          </a>
        </figure>
        <figure
          className='image is-48x48 is-inline-flex'
          style={{ marginLeft: '-1rem' }}
          data-tip="Jordan Mannfeld"
        >
          <a
            href='https://github.com/jmannfeld'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='is-rounded avatar-home'
              alt='user-profile'
              src='https://avatars1.githubusercontent.com/u/16351524?s=400&u=262ab7ef3ad8077b69faeb9d0b4ea187f41ab688&v=4'
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
