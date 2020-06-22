import React from 'react';

import Photos from '../Photos';

import styles from './styles.module.scss';

const BIO = 'Builder of stuff, explorer of things.';
const NAME = 'Steve McKenzie';

const App = () => (
  <div className={styles.app}>
    <Photos />
    <div className={styles.content} title={`${NAME} - ${BIO}`}>
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

export default App;
