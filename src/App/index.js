import { shuffle } from 'lodash';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import styles from './styles.module.scss';

const BIO = 'Builder of stuff, explorer of things.';
const CAROUSEL_SETTINGS = {
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
const NAME = 'Steve McKenzie';

function App() {
  const { REACT_APP_PHOTOS = '' } = process.env;
  const photos = shuffle(REACT_APP_PHOTOS.split(' '));

  return (
    <div className={styles.app} title={`${NAME} - ${BIO}`}>
      <div className={styles.photos}>
        <Carousel {...CAROUSEL_SETTINGS}>
          {photos.map((photo) => (
            <div
              className={styles.photo}
              key={photo}
              style={{ backgroundImage: `url('/photos/${photo}')` }}
            />
          ))}
        </Carousel>
      </div>
      <div className={styles.content}>
        <div className={styles.me} />
        <h1>{NAME}</h1>
        <h2>{BIO}</h2>
        <div className={styles.social}>
          <a
            className={styles.github}
            href="https://github.com/stevemckenzie"
            rel="noopener noreferrer"
            target="_blank"
            title="GitHub"
          >
            <span>GitHub</span>
          </a>
          <a
            className={styles.linkedin}
            href="https://www.linkedin.com/in/steve-mckenzie"
            rel="noopener noreferrer"
            target="_blank"
            title="LinkedIn"
          >
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
