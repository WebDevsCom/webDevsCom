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
        data-tip={isBookMarked ? 'Remove from Bookmark' : 'Add to Bookmark'}
      >
        <Bookmark
          color='blue'
          fill={isBookMarked ? 'blue' : '#c9cff8'}
          className='icon'
        />
      </div>
    </>
  );
};

export default BookMarkBtn;
