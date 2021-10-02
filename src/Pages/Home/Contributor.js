import React from 'react';
import GitHubButton from 'react-github-btn';
import ReactTooltip from 'react-tooltip';
import contributors from '../../data/contributors';

function Contributor() {
  return (
    <div className="column fadeInUp" style={{ animationDelay: '.75s' }}>
      <ReactTooltip type="light" />

      <h1>Contributors for this website.</h1>

      <div className="column" style={{ marginLeft: '1rem' }}>
        {contributors.map((contributor) => {
          const { id, name, userId, avatar } = contributor;
          return (
            <figure
              className="image is-48x48 is-inline-flex"
              data-tip={name}
              key={id}
              style={{ marginLeft: '-1rem' }}
            >
              <a href={`https://github.com/${userId}`} rel="noopener noreferrer" target="_blank">
                <img
                  alt="user-profile"
                  className={`is-rounded avatar-home ${userId === 'Binu42' && 'owner'}`}
                  loading="lazy"
                  src={avatar}
                />
              </a>
            </figure>
          );
        })}
      </div>

      <p className="menu-label">
        Do you want to contribute or add some resource Feel free to visit below links.
      </p>

      <div className="container">
        <GitHubButton
          data-color-scheme="no-preference: light; light: light; dark: dark;"
          data-icon="octicon-star"
          data-show-count="true"
          data-size="large"
          href="https://github.com/WebDevsCom/webDevsCom"
        >
          Star
        </GitHubButton>

        <span style={{ marginLeft: '15px' }} />

        <GitHubButton
          data-color-scheme="no-preference: light; light: light; dark: dark;"
          data-icon="octicon-repo-forked"
          data-show-count="true"
          data-size="large"
          href="https://github.com/WebDevsCom/webDevsCom/fork"
        >
          Fork
        </GitHubButton>
      </div>
    </div>
  );
}

export default Contributor;
