import React from 'react';
import GitHubButton from 'react-github-btn';
import contributors from '../../data/contributors';

function Contributor() {
  return (
    <div className="column fadeInUp" style={{ animationDelay: '.75s' }}>
      <h1>Contributors for this website.</h1>
      <div className="column" style={{ marginLeft: '1rem' }}>
        {
          contributors.map((contributor) => {
            const {
              id, name, userId, avatar,
            } = contributor;
            return (
              <figure
                key={id}
                className="image is-48x48 is-inline-flex"
                style={{ marginLeft: '-1rem' }}
                data-tip={name}
              >
                <a
                  href={`https://github.com/${userId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className={`is-rounded avatar-home ${userId === 'Binu42' && 'owner'}`}
                    alt="user-profile"
                    src={avatar}
                    loading="lazy"
                  />
                </a>
              </figure>
            );
          })
        }
      </div>
      <p className="menu-label">
        Do you want to contribute or add some resource Feel free to visit below
        links.
      </p>
      <div className="container">
        <GitHubButton
          href="https://github.com/WebDevsCom/webDevsCom"
          data-color-scheme="no-preference: light; light: light; dark: dark;"
          data-icon="octicon-star"
          data-show-count="true"
          data-size="large"
        >
          Star
        </GitHubButton>
        <span style={{ marginLeft: '15px' }} />
        <GitHubButton
          href="https://github.com/WebDevsCom/webDevsCom/fork"
          data-color-scheme="no-preference: light; light: light; dark: dark;"
          data-icon="octicon-repo-forked"
          data-show-count="true"
          data-size="large"
        >
          Fork
        </GitHubButton>
      </div>
    </div>
  );
}

export default Contributor;
