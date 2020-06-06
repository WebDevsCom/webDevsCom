import React, { useState, useEffect } from 'react';
import { Search, XCircle } from 'react-feather';
import { resources } from './resourcesData';
import ResourceCards from './ResourceCards';

const Resources = ({
  searchInput,
  handleInputChange,
  handleChangeInCategory,
  category,
}) => {
  const [placeholder, setPlaceholder] = useState('');
  const [filteredRes, setFilteredRes] = useState([]);
  const suggestions = [
    'brad traversy',
    'css',
    'react',
    'angular',
    'bradtraversy',
    'course',
    'university',
    'curated',
  ];

  // search placeholder text
  useEffect(() => {
    let timeout;
    const fillPlaceholder = (index, cursorPosition, callback) => {
      const text = suggestions[index];
      setPlaceholder(text.slice(0, cursorPosition));

      if (cursorPosition < text.length) {
        timeout = setTimeout(function () {
          fillPlaceholder(index, cursorPosition + 1, callback);
        }, 200);
        return true;
      }
      callback();
    };

    const clearPlaceholder = (callback) => {
      if (placeholder.length > 0) {
        timeout = setTimeout(function () {
          setPlaceholder('');
          clearPlaceholder(callback);
        }, 1000);
        return true;
      }
      callback();
    };

    const loopThroughSuggestions = (index) => {
      fillPlaceholder(index, 0, () => {
        timeout = setTimeout(function () {
          clearPlaceholder(function () {
            loopThroughSuggestions((index + 1) % suggestions.length);
          });
        }, 2000);
      });
    };

    loopThroughSuggestions(0);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, []);

  const filters = [
    'App',
    'Awesome',
    'computer science',
    'Design',
    'Developer',
    'react',
    'javascript',
    'Programmer',
    'code',
    'Resources',
    'web',
  ];

  const categories = [
    'All',
    'Web-dev',
    'Mob-dev',
    'Interview',
    'Frontend',
    'Backend',
    'Language',
    'Project',
    'Course',
    'Podcast',
  ];

  useEffect(() => {
    var filteredResources = [];
    if (window.location.pathname === '/resources') {
      if (category !== '' && searchInput === '') {
        resources.forEach((resource) => {
          resource.category.forEach((cat) => {
            if (cat === category) {
              filteredResources.push(resource);
            }
          });
        });
      } else {
        filteredResources =
          resources &&
          resources.filter(
            (resource) =>
              resource.repoOwnerName
                .toLowerCase()
                .includes(searchInput.toLowerCase()) ||
              resource.repoOwner
                .toLowerCase()
                .includes(searchInput.toLowerCase()) ||
              resource.description
                .toLowerCase()
                .includes(searchInput.toLowerCase()) ||
              resource.repoName
                .toLowerCase()
                .includes(searchInput.toLowerCase())
          );
      }
    } else if (window.location.pathname === '/bookmarked') {
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
      filteredResources =
        bookmarks &&
        bookmarks.map(
          (bookmark) =>
            resources.filter((resource) => resource.id === bookmark)[0]
        );
      if (category !== '' && searchInput === '') {
        const newFilteredResources = [];
        filteredResources &&
          filteredResources.forEach((resource) => {
            resource.category.forEach((cat) => {
              if (cat === category) {
                newFilteredResources.push(resource);
              }
            });
          });
        filteredResources = newFilteredResources;
      } else {
        filteredResources =
          filteredResources &&
          filteredResources.filter(
            (resource) =>
              resource.repoOwnerName
                .toLowerCase()
                .includes(searchInput.toLowerCase()) ||
              resource.repoOwner
                .toLowerCase()
                .includes(searchInput.toLowerCase()) ||
              resource.description
                .toLowerCase()
                .includes(searchInput.toLowerCase()) ||
              resource.repoName
                .toLowerCase()
                .includes(searchInput.toLowerCase())
          );
      }
    }

    filteredResources =
      filteredResources &&
      filteredResources.sort((a, b) =>
        ('' + a.repoName).localeCompare(b.repoName)
      );
    setFilteredRes(filteredResources);
    // eslint-disable-next-line
  }, [category, searchInput, window.location.pathname]);

  useEffect(() => {
    document.getElementById('clear').addEventListener('click', () => {
      const inputVal = document.querySelector('input').value;
      if (inputVal !== '') handleInputChange('');
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className='container' style={{ marginTop: '1rem', width: '100%' }}>
      <div
        className='field has-addons has-addons-centered fadeInUp'
        style={{ animationDelay: '.25s' }}
      >
        <p className='control has-icons-left box-shadow-lift'>
          <input
            className='input'
            type='text'
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder={'Search for ' + placeholder}
            value={searchInput}
          />
          <span className='icon is-small is-left'>
            <Search color='#00d1b2' />
          </span>
        </p>
        <div className='control' id='clear'>
          <div
            className='button is-primary'
            disabled={searchInput.trim() === '' ? true : false}
            style={{ backgroundColor: '#00d1b2' }}
          >
            <span className='icon is-small'>
              <XCircle />
            </span>
          </div>
        </div>
      </div>
      <div style={{ padding: '10px' }}>
        <div
          className='tags fadeInUp'
          style={{ justifyContent: 'center', animationDelay: '.5s' }}
        >
          {filters.map((filter, index) => (
            <span
              key={index}
              className='tag is-primary'
              style={{ cursor: 'pointer' }}
              onClick={() => handleInputChange(filter)}
            >
              {filter}
            </span>
          ))}
        </div>
      </div>
      <div
        className='tags fadeInUp'
        id='category-tags'
        style={{
          animationDelay: '0.75s',
          justifyContent: 'center',
        }}
      >
        {categories.map((cat, i) => (
          <span
            id={cat.toLowerCase()}
            key={i}
            className={
              (category === '' && cat === 'All') ||
              cat.toLowerCase() === category
                ? 'tag active-tag'
                : 'tag'
            }
            style={{ cursor: 'pointer' }}
            onClick={() =>
              handleChangeInCategory(cat === 'All' ? '' : cat.toLowerCase())
            }
          >
            <span className={`category ${cat.toLowerCase()}`}></span>
            {cat}&emsp;
          </span>
        ))}
      </div>
      <ResourceCards
        searchInput={searchInput}
        filteredResources={filteredRes}
        category={category}
        handleChangeInCategory={handleChangeInCategory}
      />
    </div>
  );
};

export default Resources;
