import React from 'react';
import { Link } from 'react-router-dom';

function OtherReposByAuthorModal({ authorRepos, setModal, currentRepoId }) {
  return (
    <div className="modal is-active">
      <div
        className="modal-background"
        onClick={() => setModal(false)}
        style={{ cursor: 'pointer' }}
      />

      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title has-text-primary">{authorRepos[0].repoOwner}</p>

          <button className="delete" onClick={() => setModal(false)} />
        </header>

        <section className="modal-card-body">
          <div className="is-flex is-horizontal-center">
            <figure className="image is-128x128">
              <a
                href={`https://github.com/${authorRepos[0].repoOwnerName}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt={authorRepos[0].repoOwnerName}
                  className="is-rounded avatar-home"
                  src={`https://avatars.githubusercontent.com/${authorRepos[0].repoOwnerName}`}
                />
              </a>
            </figure>
          </div>

          <div className="has-text-centered">
            <p
              className="is-5 subtitle has-text-centered has-text-primary"
              style={{ marginBottom: '0' }}
            >
              {authorRepos[0].repoOwner}
            </p>

            <a
              href={`https://github.com/${authorRepos[0].repoOwnerName}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              @{authorRepos[0].repoOwnerName}
            </a>
          </div>

          <hr className="navbar-divider" />

          <p className="subtitle is-4 has-text-primary">
            Resources available by {authorRepos[0].repoOwner}
          </p>

          {authorRepos.map((repo) => (
            <article className="message is-info" key={repo.id}>
              <div className="message-header">
                <p>{repo.repoName}</p>

                <div id="categories">
                  {repo.category.map((cat, index) => (
                    <span
                      className={`category ${cat}`}
                      data-tip={cat}
                      key={index}
                      style={{ cursor: 'default' }}
                    />
                  ))}
                </div>
              </div>

              <article className="message is-info">
                <div className="message-body">
                  {repo.description}

                  <br />

                  {repo.id !== currentRepoId && (
                    <div className="is-flex is-horizontal-center" style={{ marginTop: '10px' }}>
                      <Link
                        className="button button box-shadow-lift button-special is-rounded"
                        to={`/resources/${repo.id}`}
                      >
                        View
                      </Link>
                    </div>
                  )}
                </div>
              </article>
            </article>
          ))}
        </section>

        <footer className="modal-card-foot has-text-centered">
          <button className="button" onClick={() => setModal(false)}>
            Close
          </button>
        </footer>
      </div>
    </div>
  );
}

export default OtherReposByAuthorModal;
