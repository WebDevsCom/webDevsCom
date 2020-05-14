import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Axios from 'axios';
import Spinner from '../Spinner';
import { resources } from './resourcesData';

const Resource = (props) => {
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading === false) {
      const id = props.match.params.id;
      const resource = resources.find(
        (resource) => String(resource.id) === String(id)
      );
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
            .replace('.', '')
            .toLowerCase()
        );
      }

      const h3 = document.querySelectorAll('#markdown h3');
      for (i = 0; i < h3.length; i++) {
        h3[i].className = 'title is-3';
        h3[i].setAttribute(
          'id',
          h3[i].innerHTML
            .split(' ')
            .join('-')
            .replace('?', '')
            .split('&')
            .join('-')
            .replace('.', '')
            .toLowerCase()
        );
      }

      const table = document.querySelectorAll('#markdown table');
      for (i = 0; i < table.length; i++) {
        table[i].className = 'table is-hoverable is-fullwidth is-striped';
        // const newtable = document.createElement('div');
        // newtable.className = 'table-container';
        // newtable.appendChild(table[i]);
        // document.querySelector('body').replaceChild(newtable, table[i]);
        // newtable.appendChild(table[i]);
      }

      const images = document.querySelectorAll('img');
      for (i = 0; i < images.length; i++) {
        if (images[i].src.includes(window.location.origin)) {
          // console.log(images[i].src);
          images[i].setAttribute(
            'src',
            `https://raw.githubusercontent.com/${resource.repoOwnerName}/${
              resource.repoName
            }/master${images[i].src
              .replace(window.location.origin, '')
              .replace(window.location.pathname, '')
              .replace('/category', '')}`
          );
        }
      }

      const blockquote = document.querySelectorAll('#markdownblockquote');
      for (i = 0; i < blockquote.length; i++)
        blockquote[i].className = 'blockquote';
      var el = document.querySelectorAll('#markdown a');
      for (i = 0; i < el.length; i++) {
        if (el[i].href.includes('.md')) {
          el[i].setAttribute(
            'href',
            `https://github.com/${resource.repoOwnerName}/${
              resource.repoName
            }/blob/master${el[i].href
              .replace(window.location.origin, '')
              .replace(window.location.pathname, '')
              .replace('/category', '')}`
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

  useEffect(() => {
    setLoading(true);
    const id = props.match.params.id;

    var repoReadmeLink = resources.find(
      (resource) => String(resource.id) === String(id)
    );
    if (repoReadmeLink) {
      Axios.get(repoReadmeLink.link).then((markdown) => {
        setMarkdown(markdown.data);
        setLoading(false);
      });
    }
    // eslint-disable-next-line
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className='container' style={{ padding: '0 20px' }} id='markdown'>
      <div id='table-of-contents'></div>
      <ReactMarkdown source={markdown} escapeHtml={false} />
    </div>
  );
};

export default Resource;
