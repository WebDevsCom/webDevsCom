import React, { memo, useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Star, GitPullRequest, Eye } from 'react-feather';
import resourceContext from '../../context/resources/resourceContext';

const ResourceCard = memo(({ resource, history }) => {
  const { id, repoName, repoOwner, repoOwnerName, category: categories, description } = resource;

  const ResourceContext = useContext(resourceContext);
  const { category, setCategory } = ResourceContext;

  return (
    <div
      className="column is-full-mobile is-half-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"
      key={id}
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
          onClick={() => history.push(`/resources/${id}`)}
          style={{ cursor: 'pointer' }}
        >
          <p className="card-header-title has-text-info subtitle is-5 is-capitalized">{repoName}</p>
        </header>

        <div className="card-content">
          <div className="content">
            <div className="media" style={{ marginBottom: '0', cursor: 'default' }}>
              <div className="media-left">
                <figure className="image is-48x48 is-inline-flex">
                  <a
                    href={`https://github.com/${repoOwnerName}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      alt={repoOwnerName}
                      className="is-rounded avatar-home"
                      loading="lazy"
                      src={`https://avatars.githubusercontent.com/${repoOwnerName}`}
                    />
                  </a>
                </figure>
              </div>

              <div className="media-content">
                <p className="is-5 subtitle" style={{ marginBottom: '0' }}>
                  {repoOwner}
                </p>

                <a
                  href={`https://github.com/${repoOwnerName}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  @{repoOwnerName}
                </a>
              </div>
            </div>

            <br />

            <div
              className="has-text-justified"
              onClick={() => history.push(`/resources/${id}`)}
              style={{ cursor: 'pointer' }}
            >
              {description}
            </div>
          </div>
        </div>

        <div style={{ marginTop: 'auto' }}>
          <div className="card-content" id="categories">
            {categories.map((cat, index) => (
              <span
                className={`category ${cat}`}
                id={cat === category ? 'active-dot' : ''}
                key={index}
                onClick={() => setCategory(cat.toLowerCase())}
                title={cat}
              />
            ))}
          </div>

          <footer className="card-footer">
            <a
              className="card-footer-item"
              href={`https://github.com/${repoOwnerName}/${repoName}/stargazers`}
              rel="noopener noreferrer"
              target="_blank"
              title="star this Repo"
            >
              <Star />
            </a>

            <Link className="card-footer-item" title="view Resource" to={`/resources/${id}`}>
              <Eye /> &emsp;View
            </Link>

            <a
              className="card-footer-item"
              href={`https://github.com/${repoOwnerName}/${repoName}/network/members`}
              rel="noopener noreferrer"
              target="_blank"
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
