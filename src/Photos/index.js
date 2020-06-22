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
  swipeable: false,
  transitionTime: 750,
  useKeyboardArrows: true,
};
const LOAD_ALL_AFTER_DELAY = 5000;

const Photos = () => {
  const [showIndicators, setShowIndicators] = useState(false);
  const [photoList, setPhotoList] = useState([]);
  const useSmall = document.body.clientWidth < BREAKPOINT;
  const photos = photoList.map(({ large, small }) =>
    useSmall && small ? small : large,
  );

  useEffect(() => {
    const { REACT_APP_PHOTOS } = process.env;
    const list = shuffle(
      (REACT_APP_PHOTOS && JSON.parse(REACT_APP_PHOTOS)) || [],
    );
    const [first] = list;

    setPhotoList([first]);

    setTimeout(() => {
      setPhotoList(list);

      if (list.length > 1) {
        setShowIndicators(true);
      }
    }, LOAD_ALL_AFTER_DELAY);
  }, []);

  if (photos.length === 0) {
    return null;
  }

  return (
    <Component
      {...DEFAULT_CAROUSEL_SETTINGS}
      photos={photos}
      showIndicators={showIndicators}
    />
  );
};

export default Photos;
