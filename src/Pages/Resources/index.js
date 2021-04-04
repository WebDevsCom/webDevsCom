import React, { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'react-feather';
import resources from '../../data/resourcesData';
import ResourceCards from './ResourceCards';
import Page from '../../Components/Page';
import Suggestion from './Suggestion';
import SearchInput from './SearchInput';

const Resources = ({ searchInput, category, handleChangeInCategory, handleInputChange }) => {
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [filteredRes, setFilteredRes] = useState([]);
  const [pageTitle, setPageTitle] = useState("Resources");

  const filterResources = (resources) => {
    let filteredResources = [];

    if (category !== 'all') {
      const newFilteredResources = [];
      resources &&
        resources.forEach((resource) => {
          resource.category.forEach((cat) => {
            if (cat === category) {
              newFilteredResources.push(resource);
            }
          });
        });
      filteredResources = newFilteredResources;
    } else if (searchInput !== '') {
      const searchText = searchInput.toLowerCase();
      filteredResources =
        resources &&
        resources.filter(
          (resource) =>
            resource.repoOwnerName
              .toLowerCase()
              .includes(searchText) ||
            resource.repoOwner
              .toLowerCase()
              .includes(searchText) ||
            resource.description
              .toLowerCase()
              .includes(searchText) ||
            resource.repoName
              .toLowerCase()
              .includes(searchText)
        );
    } else {
      return resources;
    }

    return filteredResources;
  }

  useEffect(() => {
    let filteredResources = [];

    if (window.location.pathname === '/resources') {
      setPageTitle(`${category}${searchInput} Resources`);
      filteredResources = filterResources(resources);
    } else if (window.location.pathname === '/bookmarked') {
      setPageTitle(`${category}${searchInput} Bookmarked Resources`);
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
      const bookmarkedResources =
        bookmarks &&
        bookmarks.map(
          (bookmark) =>
            resources.filter((resource) => resource.id === bookmark)[0]
        );
      filteredResources = filterResources(bookmarkedResources);
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
    <Page title={pageTitle}>
      <div className='container' style={{ marginTop: '1rem', width: '100%' }}>
        <SearchInput handleInputChange={handleInputChange} searchInput={searchInput} />
        <div
          className='has-text-centered is-hidden-tablet fadeInUp'
          style={{ animationDelay: '.5s' }}
        >
          <button
            onClick={() => setShowSuggestion((prev) => !prev)}
            className='button'
          >
            <span className='icon is-small'>
              {showSuggestion ? <EyeOff /> : <Eye />}
            </span>
          &emsp;{!showSuggestion ? 'View Suggestions' : 'Close Suggestions'}
          </button>
        </div>

        {(window.innerWidth > 767 || showSuggestion) && (
          <Suggestion
            {...{
              category,
              handleChangeInCategory,
              handleInputChange,
            }}
          />
        )}
        <ResourceCards
          searchInput={searchInput}
          filteredResources={filteredRes}
          category={category}
          handleChangeInCategory={handleChangeInCategory}
        />
      </div>
    </Page>
  );
};

export default Resources;