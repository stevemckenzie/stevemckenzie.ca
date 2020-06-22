import React, { useEffect, useState } from 'react';

import { TRANSITION_DELAY } from '../constants';

import Component from './component';

const Card = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed(!collapsed);

  useEffect(() => {
    setTimeout(() => {
      setCollapsed(true);
    }, TRANSITION_DELAY);
  }, []);

  return <Component collapsed={collapsed} toggle={toggle} />;
};

export default Card;
