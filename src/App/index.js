import React from 'react';
import { useLocation } from 'react-router-dom';

import Component from './component';

const App = () => {
  const location = useLocation();
  const showContent = location.pathname !== '/';

  return (
    <Component showContent={showContent} />
  );
}

export default App;
