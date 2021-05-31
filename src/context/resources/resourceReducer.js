import { SET_FILTERED_RESOURCES, SET_PAGE_TITLE } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_FILTERED_RESOURCES:
      return { ...state, ...action.payload };
    case SET_PAGE_TITLE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}