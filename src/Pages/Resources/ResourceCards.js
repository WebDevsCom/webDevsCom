import React from 'react';
import NoData from '../../Components/NoData';
import ResourceCard from './ResourceCard';

const ResourceCards = ({
  filteredResources,
  searchInput,
  handleChangeInCategory,
  category,
}) => {
  return (
    <div
      className='columns is-multiline is-centered fadeInUp'
      style={{ margin: 'auto', animationDelay: '0.85s' }}
    >
      {filteredResources &&
        filteredResources.length === 0 &&
        window.location.pathname === '/resources' ? (
        <NoData text={`There is no resources present for searched Keyword ${searchInput}.
            Please try searching for something else.`} />
      ) : (filteredResources &&
        filteredResources.length === 0 &&
        window.location.pathname === '/bookmarked') ||
        filteredResources === null ? (
        <NoData
          text={
            searchInput === '' && category === ''
              ? 'You have not Bookmarked any Resources.'
              : category !== ''
                ? `You have not Bookmarked any Resources of category "${category}".`
                : `You have not Bookmarked any resources with search keyword "${searchInput}"`
          }
        />
      ) : (
        filteredResources.map((resource) => (
          <ResourceCard {...{ resource, handleChangeInCategory, category }} />
        ))
      )}
    </div>
  );
};

export default ResourceCards;
