import React, { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'react-feather';
import resources from '../../data/resourcesData';
import ResourceCards from './ResourceCards';
import Page from '../../Components/Page';
import Suggestion from './Suggestion';
import SearchInput from './SearchInput';

const Resources = () => {
  const [searchInput, setSearchInput] = useState('');
  const [category, setCategory] = useState('');
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [filteredRes, setFilteredRes] = useState([]);
  const [pageTitle, setPageTitle] = useState("Resources");

  const handleInputChange = (value) => {
    if (category !== '') handleChangeInCategory('');
    setSearchInput(value);
  };

  const handleChangeInCategory = (val) => {
    if (searchInput !== '') setSearchInput('');
    // const removeActiveEle = document.getElementById(
    //   category === '' ? 'all' : category
    // );
    // if (removeActiveEle) removeActiveEle.classList.remove('active-tag');
    setCategory(val);
    // const element = document.getElementById(val === '' ? 'all' : val);
    // if (element) element.classList.add('active-tag');
  };

  useEffect(() => {
    var filteredResources = [];
    if (window.location.pathname === '/resources') {
      setPageTitle(`${category}${searchInput} Resources`);
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
      setPageTitle(`${category}${searchInput} Bookmarked Resources`);
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