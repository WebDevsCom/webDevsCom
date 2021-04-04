import React, { useEffect, useState } from 'react';
import { Search, XCircle } from 'react-feather';

const SearchInput = ({ searchInput, handleInputChange }) => {
  const [placeholder, setPlaceholder] = useState('');

  const suggestions = [
    'brad traversy',
    'css',
    'react',
    'angular',
    'bradtraversy',
    'course',
    'university',
    'curated'
  ];

  // search placeholder text
  useEffect(() => {
    let timeout;
    const fillPlaceholder = (index, cursorPosition, callback) => {
      const text = suggestions[index];
      setPlaceholder(text.slice(0, cursorPosition));

      if (cursorPosition < text.length) {
        timeout = setTimeout(function () {
          fillPlaceholder(index, cursorPosition + 1, callback);
        }, 200);
        return true;
      }
      callback();
    };

    const clearPlaceholder = (callback) => {
      if (placeholder.length > 0) {
        timeout = setTimeout(function () {
          setPlaceholder('');
          clearPlaceholder(callback);
        }, 1000);
        return true;
      }
      callback();
    };

    const loopThroughSuggestions = (index) => {
      fillPlaceholder(index, 0, () => {
        timeout = setTimeout(function () {
          clearPlaceholder(function () {
            loopThroughSuggestions((index + 1) % suggestions.length);
          });
        }, 2000);
      });
    };

    loopThroughSuggestions(0);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className='field has-addons has-addons-centered fadeInUp'
      style={{ animationDelay: '.25s' }}
    >
      <p className='control has-icons-left box-shadow-lift'>
        <input
          className='input'
          type='text'
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder={'Search for ' + placeholder}
          value={searchInput}
        />
        <span className='icon is-small is-left'>
          <Search color='#00d1b2' />
        </span>
      </p>
      <div className='control' id='clear'>
        <div
          className='button is-primary'
          disabled={searchInput.trim() === '' ? true : false}
          style={{ backgroundColor: '#00d1b2' }}
        >
          <span className='icon is-small'>
            <XCircle />
          </span>
        </div>
      </div>
    </div>
  )
}

export default SearchInput
