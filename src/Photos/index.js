import { shuffle } from 'lodash';
import React, { useEffect, useState } from 'react';

import Component from './component';

const BREAKPOINT = 768;
const DEFAULT_CAROUSEL_SETTINGS = {
  autoPlay: true,
  dynamicHeight: false,
  infiniteLoop: true,
  interval: 8000,
  showArrows: false,
  showStatus: false,
  showThumbs: false,
  swipeable: true,
  transitionTime: 800,
  useKeyboardArrows: true,
};

const Photos = () => {
  const [photoList, setPhotoList] = useState([]);
  const useSmall = document.body.clientWidth < BREAKPOINT;
  const photos = photoList.map(({ large, small }) =>
    useSmall && small ? small : large,
  );

  useEffect(() => {
    const { REACT_APP_PHOTOS } = process.env;
    const list = JSON.parse(REACT_APP_PHOTOS || {});

    setPhotoList(shuffle(list));
  }, []);

  if (photos.length === 0) {
    return null;
  }

  return <Component {...DEFAULT_CAROUSEL_SETTINGS} photos={photos} />;
};

export default Photos;
