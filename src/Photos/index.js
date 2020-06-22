import { shuffle } from 'lodash';
import React from 'react';

import Component from './component';

const DEFAULT_CAROUSEL_SETTINGS = {
  autoPlay: true,
  dynamicHeight: false,
  infiniteLoop: true,
  interval: 10000,
  showArrows: false,
  showStatus: false,
  showThumbs: false,
  swipeable: true,
  transitionTime: 750,
  useKeyboardArrows: true,
};

const Photos = () => {
  const { REACT_APP_PHOTOS = '' } = process.env;
  const photos = shuffle(REACT_APP_PHOTOS.split(' '));

  return <Component {...DEFAULT_CAROUSEL_SETTINGS} photos={photos} />;
};

export default Photos;
