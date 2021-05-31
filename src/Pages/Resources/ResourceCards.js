import React, { memo, useContext } from 'react';
import NoData from '../../Components/NoData';
import resourceContext from '../../context/resources/resourceContext';
import ResourceCard from './ResourceCard';

const ResourceCards = memo(() => {
  const ResourceContext = useContext(resourceContext);
  const { category, searchText, resources } = ResourceContext;

  return (
    <div
      className='columns is-multiline is-centered fadeInUp'
      style={{ margin: 'auto', animationDelay: '0.85s' }}
    >
      {
        resources.length === 0 &&
          window.location.pathname === '/resources' ? (
          <NoData text={`There is no resources present for searched Keyword ${searchText}.
            Please try searching for something else.`} />
        ) : (
          resources.length === 0 &&
          window.location.pathname === '/bookmarked') ||
          resources === null ? (
          <NoData
            text={
              searchText === '' && category === ''
                ? 'You have not Bookmarked any Resources.'
                : category !== ''
                  ? `You have not Bookmarked any Resources of category "${category}".`
                  : `You have not Bookmarked any resources with search keyword "${searchText}"`
            }
          />
        ) : (
          resources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))
        )}
    </div>
  );
});

export default ResourceCards;
