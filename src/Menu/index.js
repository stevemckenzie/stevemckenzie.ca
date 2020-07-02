import React, { createRef, useState } from 'react';

import { useHideOnGlobalClick } from '../useHideOnGlobalClick';

import Component from './component';

const MENU_ITEMS = [
  {
    title: 'Recent Treks',
    to: '/treks',
  },
];

const Menu = () => {
  const ref = createRef();
  const [isOpened, setIsOpened] = useState(false);
  const toggleMenu = () => setIsOpened(!isOpened);

  useHideOnGlobalClick(ref, () => setIsOpened(false));

  return (
    <Component
      isOpened={isOpened}
      items={MENU_ITEMS}
      ref={ref}
      toggleMenu={toggleMenu}
    />
  );
};

export default Menu;
