import React, { memo, useContext, useEffect } from 'react';
import resourceContext from '../context/resources/resourceContext';

// used to change title of page
function Page({ title, children }) {
  const ResourceContext = useContext(resourceContext) || {};
  const { pageTitle } = ResourceContext;
  useEffect(() => {
    if (title) document.title = `${title} | WebDevsCom`;
    else document.title = `${pageTitle} | WebDevsCom`;
    // eslint-disable-next-line
  }, [pageTitle, title]);

  return <>{children}</>;
}

export default memo(Page);
