import React from 'react'

const OtherReposByAuthorModal = ({ authorRepos, setModal, currentRepoId }) => {
  return (
    <div className='modal is-active'>
      <div
        className='modal-background'
        style={{ cursor: 'pointer' }}
        onClick={() => setModal(false)}
      />
      <div className='modal-card'>
        <header className='modal-card-head'>
          <p className='modal-card-title has-text-primary'>
            {authorRepos[0].repoOwner}
          </p>
          <button className='delete' onClick={() => setModal(false)} />
        </header>
        <section className='modal-card-body'>
          <div className='is-flex is-horizontal-center'>
            <figure className='image is-128x128'>
              <a
                href={`https://github.com/${authorRepos[0].repoOwnerName}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  className='is-rounded avatar-home'
                  alt={authorRepos[0].repoOwnerName}
                  src={`https://avatars.githubusercontent.com/${authorRepos[0].repoOwnerName}`}
                />
              </a>
            </figure>
          </div>
          <div className='has-text-centered'>
            <p
              className='is-5 subtitle has-text-centered has-text-primary'
              style={{ marginBottom: '0' }}
            >
              {authorRepos[0].repoOwner}
            </p>
            <a
              href={`https://github.com/${authorRepos[0].repoOwnerName}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              @{authorRepos[0].repoOwnerName}
            </a>
          </div>
          <hr className='navbar-divider'></hr>
          <p className='subtitle is-4 has-text-primary'>
            Resources available by {authorRepos[0].repoOwner}
          </p>
          {authorRepos.map((repo) => (
            <article className='message is-info' key={repo.id}>
              <div className='message-header'>
                <p>{repo.repoName}</p>
                <div id='categories'>
                  {repo.category.map((cat, index) => (
                    <span
                      data-tip={cat}
                      key={index}
                      className={`category ${cat}`}
                      style={{ cursor: 'default' }}
                    ></span>
                  ))}
                </div>
              </div>
              <article className='message is-info'>
                <div className='message-body'>
                  {repo.description}
                  <br></br>
                  {repo.id !== currentRepoId && (
                    <div
                      className='is-flex is-horizontal-center'
                      style={{ marginTop: '10px' }}
                    >
                      <a
                        className={
                          'button button box-shadow-lift button-special is-rounded'
                        }
                        href={`/resources/${repo.id}`}
                      >
                        View
                      </a>
                    </div>
                  )}
                </div>
              </article>
            </article>
          ))}
        </section>
        <footer className='modal-card-foot has-text-centered'>
          <button className='button' onClick={() => setModal(false)}>
            Close
          </button>
        </footer>
      </div>
    </div>
  )
}

export default OtherReposByAuthorModal
