import React, { useState } from 'react';
import { Search } from 'react-feather';
import { resources } from './resourcesData';
import Category from './Category';

const Resources = () => {
  const [searchInput, setSearchInput] = useState('');
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  var filteredResources = resources.filter(
    (resource) =>
      resource.repoOwnerName
        .toLowerCase()
        .includes(searchInput.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchInput.toLowerCase()) ||
      resource.repoName.toLowerCase().includes(searchInput.toLowerCase())
  );
  filteredResources = filteredResources.sort((a, b) =>
    ('' + a.repoName).localeCompare(b.repoName)
  );
  return (
    <div className='container' style={{ marginTop: '1rem', width: '100%' }}>
      <div className='columns' style={{ margin: 'auto' }}>
        <div className='column is-half is-offset-one-quarter'>
          <div className='field'>
            <p className='control has-icons-right box-shadow-lift'>
              <input
                className='input'
                type='text'
                onChange={handleInputChange}
                placeholder='search from resources'
              />
              <span className='icon is-small is-right'>
                <Search />
              </span>
            </p>
          </div>
        </div>
      </div>
      <Category filteredResources={filteredResources} />
    </div>
  );
};

export default Resources;
