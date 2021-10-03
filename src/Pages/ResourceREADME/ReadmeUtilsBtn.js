import React from "react";
import { Bookmark, MoreVertical } from "react-feather";
import ReactTooltip from "react-tooltip";

const ReadmeUtilsBtn = ({
  isBookMarked,
  removeBookmark,
  bookmarkIt,
  setModal,
}) => {
  return (
    <>
      <ReactTooltip type="light" />
      <div
        id="bookmarkBtn"
        className="button button-special is-rounded box-shadow-lift"
        style={{ cursor: "pointer" }}
        onClick={() => (isBookMarked ? removeBookmark() : bookmarkIt())}
        data-tip={isBookMarked ? "Remove from Bookmark" : "Add to Bookmark"}
      >
        <Bookmark
          color="blue"
          fill={isBookMarked ? "blue" : "#c9cff8"}
          className="icon"
        />
      </div>
      <div
        id="repo-owner-info"
        className="button button-special is-rounded box-shadow-lift"
        style={{ cursor: "pointer" }}
        onClick={() => setModal(true)}
        data-tip="See more from Repo owners"
      >
        <MoreVertical color="blue" fill="blue" className="icon" />
      </div>
    </>
  );
};

export default ReadmeUtilsBtn;
