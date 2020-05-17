import React from 'react';
import { Search, XCircle } from 'react-feather';
import { resources } from './resourcesData';
import Category from './Category';

const Resources = ({ searchInput, handleInputChange }) => {
  const filters = [
    'Design',
    'App',
    'Project',
    'interview',
    'web',
    'Developer',
    'Programmer',
    'javascript',
    'Resources',
  ];
  var filteredResources = [];
  React.useEffect(() => {
    document.getElementById('clear').addEventListener('click', () => {
      handleInputChange('');
    });
  });
  if (window.location.pathname === '/resources') {
    filteredResources =
      resources &&
      resources.filter(
        (resource) =>
          resource.repoOwnerName
            .toLowerCase()
            .includes(searchInput.toLowerCase()) ||
          resource.description
            .toLowerCase()
            .includes(searchInput.toLowerCase()) ||
          resource.repoName.toLowerCase().includes(searchInput.toLowerCase())
      );
  } else if (window.location.pathname === '/bookmarked') {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    filteredResources =
      bookmarks &&
      bookmarks.map(
        (bookmark) =>
          resources.filter((resource) => resource.id === bookmark)[0]
      );

    filteredResources =
      filteredResources &&
      filteredResources.filter(
        (resource) =>
          resource.repoOwnerName
            .toLowerCase()
            .includes(searchInput.toLowerCase()) ||
          resource.description
            .toLowerCase()
            .includes(searchInput.toLowerCase()) ||
          resource.repoName.toLowerCase().includes(searchInput.toLowerCase())
      );
  }

  filteredResources =
    filteredResources &&
    filteredResources.sort((a, b) =>
      ('' + a.repoName).localeCompare(b.repoName)
    );
  return (
    <div className='container' style={{ marginTop: '1rem', width: '100%' }}>
      <div className='field has-addons has-addons-centered'>
        <p className='control has-icons-left box-shadow-lift'>
          <input
            className='input'
            type='text'
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder='search from resources'
            value={searchInput}
          />
          <span className='icon is-small is-left'>
            <Search />
          </span>
        </p>
        <div className='control' id='clear'>
          <div
            className='button is-info'
            disabled={searchInput.trim() === '' ? true : false}
          >
            <span className='icon is-small'>
              <XCircle />
            </span>
          </div>
        </div>
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}
      >
        <div className='tags'>
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
      <Category
        searchInput={searchInput}
        filteredResources={filteredResources}
      />
    </div>
  );
};

export default Resources;
