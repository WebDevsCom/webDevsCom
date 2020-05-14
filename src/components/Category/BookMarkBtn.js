import React, { useEffect, useState } from 'react';
import { Bookmark } from 'react-feather';

const BookMarkBtn = ({ isBookMarked, removeBookmark, bookmarkIt }) => {
  return (
    <div
      id='bookmarkBtn'
      className='button button-special is-rounded box-shadow-lift'
      style={{ cursor: 'pointer' }}
      onClick={() => (isBookMarked ? removeBookmark() : bookmarkIt())}
    >
      <Bookmark
        color='blue'
        fill={isBookMarked ? 'blue' : 'white'}
        className='icon'
      />
    </div>
  );
};

export default BookMarkBtn;
