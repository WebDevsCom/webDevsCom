import React from 'react';
import { Bookmark, MoreVertical } from 'react-feather';
import ReactTooltip from 'react-tooltip';

function ReadmeUtilsBtn({ isBookMarked, removeBookmark, bookmarkIt, setModal }) {
  return (
    <>
      <ReactTooltip type="light" />

      <div
        className="button button-special is-rounded box-shadow-lift"
        data-tip={isBookMarked ? 'Remove from Bookmark' : 'Add to Bookmark'}
        id="bookmarkBtn"
        onClick={() => (isBookMarked ? removeBookmark() : bookmarkIt())}
        style={{ cursor: 'pointer' }}
      >
        <Bookmark className="icon" color="blue" fill={isBookMarked ? 'blue' : '#c9cff8'} />
      </div>

      <div
        className="button button-special is-rounded box-shadow-lift"
        data-tip="See more from Repo owners"
        id="repo-owner-info"
        onClick={() => setModal(true)}
        style={{ cursor: 'pointer' }}
      >
        <MoreVertical className="icon" color="blue" fill="blue" />
      </div>
    </>
  );
}

export default ReadmeUtilsBtn;
