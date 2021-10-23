import React, { useContext, useMemo } from 'react'
import resourceContext from '../../context/resources/resourceContext';

const Suggestion = () => {
  const filters = useMemo(() => ([
    'App',
    'Book',
    'computer science',
    'Design',
    'Developer',
    'react',
    'javascript',
    'Programmer',
    'code',
    'Resources',
    'web',
  ].sort((a, b) => a.localeCompare(b))), []);

  const categories = useMemo(() => ([
    'All',
    'Web-dev',
    'Mob-dev',
    'data-science',
    'Interview',
    'Frontend',
    'Backend',
    'Language',
    'Project',
    'Course',
    'Podcast',
    "productive",
  ].sort((a, b) => a.localeCompare(b))), []);

  const ResourceContext = useContext(resourceContext);
  const { setSearchText, category, setCategory } = ResourceContext;

  return (
    <>
      <div style={{ padding: '10px' }}>
        <div
          className='tags fadeInUp'
          style={{ justifyContent: 'center', animationDelay: '.15s' }}
        >
          {filters.map((filter, index) => (
            <span
              key={index}
              className='tag is-primary'
              style={{ cursor: 'pointer' }}
              onClick={() => setSearchText(filter)}
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
          animationDelay: '0.5s',
          justifyContent: 'center',
          padding: '0 10px',
          marginBottom: '0',
        }}
      >
        {categories.map((cat, i) => (
          <span
            id={cat.toLowerCase()}
            key={i}
            className={
              (category === 'all' && cat === 'All') ||
                cat.toLowerCase() === category
                ? 'tag is-white active-tag'
                : 'tag is-white'
            }
            style={{ cursor: 'pointer' }}
            onClick={() =>
              setCategory(cat.toLowerCase())
            }
          >
            <span className={`category ${cat.toLowerCase()}`}></span>
            {cat}&emsp;
          </span>
        ))}
      </div>
    </>
  );
};

export default Suggestion;