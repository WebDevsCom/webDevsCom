/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useReducer } from "react";
import ResourceContext from "./resourceContext";
import ResourceReducer from "./resourceReducer";
import resources from "../../data/resourcesData";

import { SET_FILTERED_RESOURCES, SET_PAGE_TITLE } from "../types";

const ResourceState = (props) => {
  const intialState = {
    resources: [],
    category: "all",
    searchText: "",
    pageTitle: "",
  };
  const [state, dispatch] = useReducer(ResourceReducer, intialState);

  const localStorageResources = useMemo(() => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    const bookmarkedResources = bookmarks?.map(
      (bookmark) => resources.filter((resource) => resource.id === bookmark)[0],
    );
    return bookmarkedResources || [];
  }, [localStorage.getItem("bookmarks")]);

  const sortResources = (resources) => {
    return resources.sort((a, b) =>
      ("" + a.repoName).localeCompare(b.repoName),
    );
  };

  const isPresent = (value, checkValue) =>
    value.toLowerCase().includes(checkValue);

  // get intial resources based upon route
  const getIntialResources = () => {
    const { pathname } = window.location;
    if (pathname === "/resources") return sortResources(resources);
    else if (pathname === "/bookmarked")
      return sortResources(localStorageResources);
  };

  // get intial filtered resources based upon searched text or category
  const getIntialFilteredResources = () => {
    const { category, searchText } = state;
    if (category !== "all") return filterResourcesOnChangeInCategory(category);
    else if (searchText.trim() !== "")
      return filterResourcesOnChangeInSearchText(searchText);
    else return getIntialResources();
  };

  // filter resources based upon searched text
  const filterResourcesOnChangeInSearchText = (val) => {
    let filteredResources = [];
    const resources = getIntialResources();

    const searchInput = val.toLowerCase();
    filteredResources = resources.filter(
      ({ repoOwner, repoOwnerName, description, repoName }) =>
        isPresent(repoName, searchInput) ||
        isPresent(repoOwner, searchInput) ||
        isPresent(description, searchInput) ||
        isPresent(repoOwnerName, searchInput),
    );

    return filteredResources;
  };

  // filter resources according to choosed category
  const filterResourcesOnChangeInCategory = (val) => {
    let filteredResources = [];
    const resources = getIntialResources();

    if (val === "all") return resources;

    resources.forEach((resource) => {
      resource.category.forEach((cat) => {
        if (cat === val) {
          filteredResources.push(resource);
        }
      });
    });

    return filteredResources;
  };

  const setCategory = (val) => {
    dispatch({
      type: SET_FILTERED_RESOURCES,
      payload: {
        category: val,
        searchText: "",
        resources: filterResourcesOnChangeInCategory(val),
      },
    });
  };

  const setSearchText = (val) => {
    dispatch({
      type: SET_FILTERED_RESOURCES,
      payload: {
        category: "all",
        searchText: val,
        resources: filterResourcesOnChangeInSearchText(val),
      },
    });
  };

  // used to change title of page
  useEffect(() => {
    const { category, searchText } = state;
    if (window.location.pathname === "/resources") {
      dispatch({
        type: SET_PAGE_TITLE,
        payload: {
          pageTitle: `${category}${searchText} Resources`,
        },
      });
    } else if (window.location.pathname === "/bookmarked") {
      dispatch({
        type: SET_PAGE_TITLE,
        payload: {
          pageTitle: `${category}${searchText} BookMarked Resources`,
        },
      });
    }
  }, [window.location.pathname, state.category, state.searchText]);

  useEffect(() => {
    const { pathname } = window.location;
    if (pathname !== "/resources" && pathname !== "/bookmarked") return;
    dispatch({
      type: SET_FILTERED_RESOURCES,
      payload: {
        resources: getIntialFilteredResources(),
      },
    });
  }, [window.location.pathname]);

  return (
    <ResourceContext.Provider
      value={{
        ...state,
        setCategory,
        setSearchText,
      }}
    >
      {props.children}
    </ResourceContext.Provider>
  );
};
export default ResourceState;
