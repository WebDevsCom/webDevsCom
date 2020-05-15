import React from 'react';
import { Bookmark } from 'react-feather';
import ReactTooltip from 'react-tooltip';

const BookMarkBtn = ({ isBookMarked, removeBookmark, bookmarkIt }) => {
  return (
    <>
      <ReactTooltip type='light' />
      <div
        id='bookmarkBtn'
        className='button button-special is-rounded box-shadow-lift'
        style={{ cursor: 'pointer' }}
        onClick={() => (isBookMarked ? removeBookmark() : bookmarkIt())}
        data-tip='Bookmark this Resource'
      >
        <Bookmark
          color='blue'
          fill={isBookMarked ? 'blue' : 'white'}
          className='icon'
        />
      </div>
    </>
  );
};

export default BookMarkBtn;
