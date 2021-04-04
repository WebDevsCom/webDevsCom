import React from 'react'

const Suggestion = ({
  category,
  handleInputChange,
  handleChangeInCategory,
}) => {
  const filters = [
    'App',
    'Book',
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
  ].sort((a, b) => a.localeCompare(b));

  const categories = [
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
  ].sort((a, b) => a.localeCompare(b));

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
              (category === '' && cat === 'All') ||
                cat.toLowerCase() === category
                ? 'tag is-white active-tag'
                : 'tag is-white'
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
    </>
  );
};

export default Suggestion;