import { TOGGLE_THEME } from '../types';

export default (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { isDarkMode: action.payload };
    default:
      return state;
  }
}