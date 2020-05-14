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
      const h1 = document.querySelectorAll('h1');
      for (var i = 0; i < h1.length; i++) {
        h1[i].className = 'title is-2';
        h1[i].setAttribute(
          'id',
          h1[i].innerHTML.replace(' ', '-').toLowerCase()
        );
      }

      const h2 = document.querySelectorAll('h2');
      for (i = 0; i < h2.length; i++) {
        h2[i].className = 'title is-3';
        h2[i].setAttribute(
          'id',
          h2[i].innerHTML.replace(' ', '-').replace('& ', '-').toLowerCase()
        );
      }

      const h3 = document.querySelectorAll('h3');
      for (i = 0; i < h3.length; i++) {
        h3[i].className = 'title is-3';
        h3[i].setAttribute(
          'id',
          h3[i].innerHTML.replace(' ', '-').toLowerCase()
        );
      }

      const table = document.querySelectorAll('table');
      for (i = 0; i < table.length; i++)
        table[i].className = 'table is-hoverable is-fullwidth is-striped';

      const blockquote = document.querySelectorAll('blockquote');
      for (i = 0; i < blockquote.length; i++)
        blockquote[i].className = 'blockquote';
      var el = document.querySelectorAll('a');
      for (i = 0; i < el.length; i++) {
        if (!el[i].href.includes('#')) {
          el[i].setAttribute('target', '_blank');
        }
      }
    }
  }, [loading]);

  useEffect(() => {
    setLoading(true);
    const id = props.match.params.id;

    const repoReadmeLink = resources.find(
      (resource) => String(resource.id) === String(id)
    );
    if (repoReadmeLink) {
      Axios.get(repoReadmeLink.link).then((markdown) => {
        setMarkdown(markdown.data);
        setLoading(false);
      });
    }
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
