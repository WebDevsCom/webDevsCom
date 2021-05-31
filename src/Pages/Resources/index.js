import React, { useState } from 'react';
import { Eye, EyeOff } from 'react-feather';
import ResourceCards from './ResourceCards';
import Page from '../../Components/Page';
import Suggestion from './Suggestion';
import SearchInput from './SearchInput';

const Resources = () => {
  const [showSuggestion, setShowSuggestion] = useState(false);

  return (
    <Page>
      <div className='container' style={{ marginTop: '1rem', width: '100%' }}>
        <SearchInput />
        <div
          className='has-text-centered is-hidden-tablet fadeInUp'
          style={{ animationDelay: '.5s' }}
        >
          <button
            onClick={() => setShowSuggestion((prev) => !prev)}
            className='button'
          >
            <span className='icon is-small'>
              {showSuggestion ? <EyeOff /> : <Eye />}
            </span>
            &emsp;{!showSuggestion ? 'View Suggestions' : 'Close Suggestions'}
          </button>
        </div>

        {(window.innerWidth > 767 || showSuggestion) && (
          <Suggestion />
        )}
        <ResourceCards />
      </div>
    </Page>
  );
};

export default Resources;
