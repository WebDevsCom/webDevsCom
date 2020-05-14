import React from 'react';
import { Star, GitPullRequest, Eye } from 'react-feather';
import ReactTooltip from 'react-tooltip';
import { Link, withRouter } from 'react-router-dom';

const Category = ({ history, filteredResources }) => {
  return (
    <>
      <ReactTooltip type='light' />
      <div className='columns is-multiline' style={{ margin: 'auto' }}>
        {filteredResources.length === 0 ? (
          <p
            className='title is-h5 has-text-centered'
            style={{ marginTop: '1rem' }}
          >
            No! Resource is Present with this Keyword try searching for
            something else...
          </p>
        ) : (
          filteredResources.map((resource) => (
            <div
              key={resource.id}
              className='column is-full-mobile is-half-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd'
            >
              <div
                className='card box-shadow-lift'
                style={{
                  marginTop: '0.3rem',
                  minHeight: '345px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <header
                  className='card-header'
                  onClick={() => history.push(`/category/${resource.id}`)}
                >
                  <p className='card-header-title subtitle is-5 is-capitalized'>
                    {resource.repoName}
                  </p>
                </header>
                <div className='card-content'>
                  <div className='content'>
                    <div
                      className='media'
                      style={{ marginBottom: '0', cursor: 'default' }}
                    >
                      <div className='media-left'>
                        <figure className='image is-48x48 is-inline-flex'>
                          <a
                            href={`https://github.com/${resource.repoOwnerName}`}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <img
                              className='is-rounded avatar-home'
                              alt='user-profile'
                              src={`https://avatars.githubusercontent.com/${resource.repoOwnerName}`}
                            />
                          </a>
                        </figure>
                      </div>
                      <div className='media-content'>
                        <p
                          className='is-5 subtitle'
                          style={{ marginBottom: '0' }}
                        >
                          {resource.repoOwner}
                        </p>
                        <a
                          href={`https://github.com/${resource.repoOwnerName}`}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          @{resource.repoOwnerName}
                        </a>
                      </div>
                    </div>
                    <br />
                    <div
                      onClick={() => history.push(`/category/${resource.id}`)}
                    >
                      {resource.description}
                    </div>
                  </div>
                </div>
                <footer className='card-footer' style={{ marginTop: 'auto' }}>
                  <a
                    href={
                      `https://github.com/${resource.repoOwnerName}` +
                      '/' +
                      resource.repoName +
                      '/stargazers'
                    }
                    target='_blank'
                    rel='noopener noreferrer'
                    className='card-footer-item'
                    data-tip='star this Repo'
                  >
                    <Star />
                  </a>
                  <Link
                    to={`/category/${resource.id}`}
                    className='card-footer-item'
                    data-tip='view Resource'
                  >
                    <Eye /> &emsp;View
                  </Link>
                  <a
                    href={
                      `https://github.com/${resource.repoOwnerName}` +
                      '/' +
                      resource.repoName +
                      '/network/members'
                    }
                    target='_blank'
                    rel='noopener noreferrer'
                    className='card-footer-item'
                    data-tip='Fork this Repo'
                  >
                    <GitPullRequest />
                  </a>
                </footer>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default withRouter(Category);
