import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Axios from 'axios';
import Spinner from '../Spinner';
import { resources } from './resourcesData';
import { GitHub } from 'react-feather';
import BookMarkBtn from './BookMarkBtn';

const Resource = (props) => {
  const [markdown, setMarkdown] = useState('');
  const [repoInfo, setRepoInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [bookmarks, setBookMarks] = useState([]);
  const [isBookMarked, setBookMarked] = useState(false);

  useEffect(() => {
    setBookMarks(JSON.parse(localStorage.getItem('bookmarks')));
    var BookMarked =
      bookmarks && bookmarks.find((bookMarkId) => repoInfo.id === bookMarkId);
    setBookMarked(BookMarked ? true : false);

    if (loading === false) {
      const h1 = document.querySelectorAll('#markdown h1');
      for (var i = 0; i < h1.length; i++) {
        h1[i].className = 'title is-2';
        h1[i].setAttribute(
          'id',
          h1[i].innerHTML.replace(' ', '-').toLowerCase()
        );
      }

      const h2 = document.querySelectorAll('#markdown h2');
      for (i = 0; i < h2.length; i++) {
        h2[i].className = 'title is-3';
        h2[i].setAttribute(
          'id',
          h2[i].innerHTML
            .split(' ')
            .join('-')
            .split('&amp;')
            .join('')
            .replace('?', '')
            .split('.')
            .join('')
            .split('/')
            .join('')
            .split('(')
            .join('')
            .split(')')
            .join('')
            .split(',')
            .join('')
            .split('"')
            .join('')
            .split(`'`)
            .join('')
            .split('+')
            .join('')
            .split('.')
            .join('')
            .toLowerCase()
        );
      }

      const h3 = document.querySelectorAll('#markdown h3');
      for (i = 0; i < h3.length; i++) {
        h3[i].className = 'title is-4';
        h3[i].setAttribute(
          'id',
          h3[i].innerHTML
            .split(' ')
            .join('-')
            .replace('?', '')
            .split('&amp;')
            .join('')
            .split('.')
            .join('')
            .split('/')
            .join('')
            .split('(')
            .join('')
            .split(')')
            .join('')
            .split(',')
            .join('')
            .split('"')
            .join('')
            .split(`'`)
            .join('')
            .split('+')
            .join('')
            .split('.')
            .join('')
            .toLowerCase()
        );
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

      const blockquote = document.querySelectorAll('#markdownblockquote');
      for (i = 0; i < blockquote.length; i++)
        blockquote[i].className = 'blockquote';
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
  }, [loading]);

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

  if (loading) return <Spinner />;

  return (
    <div className='container' id='markdown'>
      <div id='table-of-contents'></div>
      <BookMarkBtn
        isBookMarked={isBookMarked}
        removeBookmark={removeBookmark}
        bookmarkIt={bookmarkIt}
      />
      <div className='has-text-centered' style={{ padding: '10px 0 20px' }}>
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
      <div style={{ padding: '0 1rem' }}>
        <ReactMarkdown source={markdown} escapeHtml={false} />
      </div>
    </div>
  );
};

export default Resource;
