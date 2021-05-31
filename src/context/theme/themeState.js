import React, { useEffect, useReducer } from 'react';
import ThemeContext from './themeContext';
import ThemeReducer from './themeReducer';

import {
  TOGGLE_THEME
} from '../types';

const ThemeState = props => {
  const intialState = { isDarkMode: JSON.parse(localStorage.getItem("dark-mode")) };

  const [state, dispatch] = useReducer(ThemeReducer, intialState);

  // Toggle Theme
  const toggleTheme = () => {
    dispatch({
      type: TOGGLE_THEME,
      payload: !state.isDarkMode
    })
  }

  useEffect(() => {
    localStorage.setItem("dark-mode", state.isDarkMode)
    if (state.isDarkMode) {
      document.querySelector('body').classList.add('dark-mode');
    } else {
      document.querySelector('body').classList.remove('dark-mode');
    }
  }, [state.isDarkMode]);

  return <ThemeContext.Provider value={{
    isDarkMode: state.isDarkMode,
    toggleTheme
  }}>
    {props.children}
  </ThemeContext.Provider>
}
export default ThemeState;