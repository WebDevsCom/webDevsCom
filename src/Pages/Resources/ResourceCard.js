import React, { memo, useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Star, GitPullRequest, Eye } from 'react-feather';
import resourceContext from '../../context/resources/resourceContext';

const ResourceCard = memo(({ resource, history }) => {
  const {
    id, repoName, repoOwner, repoOwnerName, category: categories, description,
  } = resource;

  const ResourceContext = useContext(resourceContext);
  const { category, setCategory } = ResourceContext;

  return (
    <div
      key={id}
      className="column is-full-mobile is-half-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"
    >
      <div
        className="card box-shadow-lift"
        style={{
          marginTop: '0.3rem',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <header
          className="card-header"
          style={{ cursor: 'pointer' }}
          onClick={() => history.push(`/resources/${id}`)}
        >
          <p className="card-header-title has-text-info subtitle is-5 is-capitalized">
            {repoName}
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            <div
              className="media"
              style={{ marginBottom: '0', cursor: 'default' }}
            >
              <div className="media-left">
                <figure className="image is-48x48 is-inline-flex">
                  <a
                    href={`https://github.com/${repoOwnerName}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="is-rounded avatar-home"
                      alt={repoOwnerName}
                      src={`https://avatars.githubusercontent.com/${repoOwnerName}`}
                      loading="lazy"
                    />
                  </a>
                </figure>
              </div>
              <div className="media-content">
                <p
                  className="is-5 subtitle"
                  style={{ marginBottom: '0' }}
                >
                  {repoOwner}
                </p>
                <a
                  href={`https://github.com/${repoOwnerName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @
                  {repoOwnerName}
                </a>
              </div>
            </div>
            <br />
            <div
              onClick={() => history.push(`/resources/${id}`)}
              style={{ cursor: 'pointer' }}
              className="has-text-justified"
            >
              {description}
            </div>
          </div>
        </div>
        <div style={{ marginTop: 'auto' }}>
          <div id="categories" className="card-content">
            {categories.map((cat, index) => (
              <span
                title={cat}
                key={index}
                onClick={() => setCategory(cat.toLowerCase())}
                id={cat === category ? 'active-dot' : ''}
                className={`category ${cat}`}
              />
            ))}
          </div>
          <footer className="card-footer">
            <a
              href={
                `https://github.com/${repoOwnerName}/${repoName}/stargazers`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="card-footer-item"
              title="star this Repo"
            >
              <Star />
            </a>
            <Link
              to={`/resources/${id}`}
              className="card-footer-item"
              title="view Resource"
            >
              <Eye />
              {' '}
&emsp;View
            </Link>
            <a
              href={
                `https://github.com/${repoOwnerName}/${repoName}/network/members`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="card-footer-item"
              title="Fork this Repo"
            >
              <GitPullRequest />
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
});

export default withRouter(ResourceCard);
