import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Axios from 'axios';
import Spinner from '../Spinner';
import { resources } from './resourcesData';
import { GitHub } from 'react-feather';
import CodeBlock from './code-blocks';
import ReadmeUtilsBtn from './ReadmeUtilsBtn';
import { slug } from 'github-slugger';
import PdfContainer from './PdfContainer';

const ResourceREADME = (props) => {
  const [markdown, setMarkdown] = useState('');
  const [repoInfo, setRepoInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [bookmarks, setBookMarks] = useState([]);
  const [isBookMarked, setBookMarked] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [authorRepos, setAuthorRepos] = useState([]);

  useEffect(() => {
    setBookMarks(JSON.parse(localStorage.getItem('bookmarks')));
    var BookMarked =
      bookmarks && bookmarks.find((bookMarkId) => repoInfo.id === bookMarkId);
    setBookMarked(BookMarked ? true : false);

    if (loading === false) {
      const repos = [];
      resources.forEach((resource) => {
        if (resource.repoOwnerName === repoInfo.repoOwnerName) {
          repos.push(resource);
        }
      });

      setAuthorRepos(repos);

      const h1 = document.querySelectorAll('#markdown h1');
      for (var i = 0; i < h1.length; i++) {
        h1[i].className = 'title is-2';
        h1[i].setAttribute('id', slug(h1[i].innerHTML));
      }

      const h2 = document.querySelectorAll('#markdown h2');
      for (i = 0; i < h2.length; i++) {
        h2[i].className = 'title is-3';
        h2[i].setAttribute('id', slug(h2[i].innerHTML));
      }

      const h3 = document.querySelectorAll('#markdown h3');
      for (i = 0; i < h3.length; i++) {
        h3[i].className = 'title is-4';
        h3[i].setAttribute('id', slug(h3[i].innerHTML));
      }

      const strong = document.querySelectorAll('#markdown strong');
      for (i = 0; i < strong.length; i++) {
        strong[i].setAttribute('id', slug(strong[i].innerHTML));
      }

      const table = document.querySelectorAll('#markdown table');
      for (i = 0; i < table.length; i++)
        table[i].className =
          'table is-hoverable is-dark is-fullwidth is-striped';

      const images = document.querySelectorAll('img');
      for (i = 0; i < images.length; i++) {
        if (images[i].src.includes(window.location.origin)) {
          images[i].setAttribute(
            'src',
            `https://raw.githubusercontent.com/${repoInfo.repoOwnerName}/${
              repoInfo.repoName
            }/master${images[i].src
              .replace(window.location.origin, '')
              .replace(window.location.pathname, '')
              .replace('/resources', '')}`
          );
        }
      }

      var el = document.querySelectorAll('#markdown a');
      for (i = 0; i < el.length; i++) {
        if (
          el[i].href.includes('./') ||
          (el[i].href.includes('.md') &&
            el[i].href.includes(window.location.origin))
        ) {
          el[i].setAttribute(
            'href',
            `https://github.com/${repoInfo.repoOwnerName}/${
              repoInfo.repoName
            }/blob/master${el[i].href
              .replace(window.location.origin, '')
              .replace(window.location.pathname, '')
              .replace('/resources', '')}`
          );
          el[i].setAttribute('target', '_blank');
        } else if (!el[i].href.includes('#')) {
          el[i].setAttribute('target', '_blank');
        } else if (el[i].href.includes('#')) {
          el[i].setAttribute('href', el[i].href.toLowerCase());
        }
      }
    }
    // eslint-disable-next-line
  }, [loading, repoInfo]);

  const bookmarkIt = () => {
    setBookMarked(true);
    if (bookmarks === null) {
      localStorage.setItem('bookmarks', JSON.stringify([repoInfo.id]));
    } else {
      bookmarks.push(repoInfo.id);
      setBookMarks(bookmarks);
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
  };
  const removeBookmark = () => {
    setBookMarked(false);
    const bookMarks =
      bookmarks && bookmarks.filter((bookmarkId) => bookmarkId !== repoInfo.id);
    setBookMarks(bookMarks);
    localStorage.setItem('bookmarks', JSON.stringify(bookMarks));
  };

  useEffect(() => {
    setLoading(true);
    const id = props.match.params.id;

    const repo = resources.find(
      (resource) => String(resource.id) === String(id)
    );
    setRepoInfo(repo);
    if (repo) {
      Axios.get(repo.link).then((markdown) => {
        setMarkdown(markdown.data);
        setLoading(false);
      });
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    isModalOpen
      ? document.querySelector('html').classList.add('is-clipped')
      : document.querySelector('html').classList.remove('is-clipped');
  }, [isModalOpen]);

  if (loading) return <Spinner />;

  return (
    <div className='container' id='markdown'>
      <div id='table-of-contents'></div>
      <ReadmeUtilsBtn
        isBookMarked={isBookMarked}
        removeBookmark={removeBookmark}
        bookmarkIt={bookmarkIt}
        setModal={setModalOpen}
      />
      <PdfContainer forcePageBreak='.page-break' name={repoInfo.repoName}>
        <div id='markdown-content'>
          <div
            className='has-text-centered fadeInUp'
            style={{ padding: '10px 0 20px', animationDelay: '.5s' }}
          >
            <a
              href={`https://github.com/${repoInfo.repoOwnerName}/${repoInfo.repoName}/`}
              className='button button-special box-shadow-lift is-medium is-rounded'
              target='_blank'
              rel='noopener noreferrer'
              id='view-on-github'
            >
              <GitHub /> <span> &emsp;View on Github</span>
            </a>
          </div>
          <div>
            <ReactMarkdown
              source={markdown}
              escapeHtml={false}
              renderers={{ code: CodeBlock }}
            />
          </div>
        </div>
      </PdfContainer>

      {isModalOpen && (
        <Modal
          authorRepos={authorRepos}
          setModal={setModalOpen}
          currentRepoId={repoInfo.id}
        />
      )}
    </div>
  );
};

export default ResourceREADME;

const Modal = ({ authorRepos, setModal, currentRepoId }) => {
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
            <article className='message is-primary' key={repo.id}>
              <div className='message-header'>
                <p>{repo.repoName}</p>
              </div>
              <article className='message is-success'>
                <div className='message-body'>
                  {repo.description}
                  <br></br>
                  <div
                    className='is-flex is-horizontal-center'
                    style={{ marginTop: '10px' }}
                  >
                    <a
                      className={
                        repo.id === currentRepoId
                          ? 'disabled button is-link has-text-white button-special is-rounded'
                          : 'button is-link has-text-white button-special is-rounded'
                      }
                      href={`/resources/${repo.id}`}
                    >
                      View
                    </a>
                  </div>
                </div>
              </article>
            </article>
          ))}
        </section>
        <footer className='modal-card-foot'>
          <button className='button' onClick={() => setModal(false)}>
            Close
          </button>
        </footer>
      </div>
    </div>
  );
};
