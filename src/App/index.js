import React from 'react';

import Card from '../Card';
import Photos from '../Photos';

import styles from './styles.module.scss';

const App = () => (
  <div className={styles.app}>
    <Photos />
    <Card />
  </div>
);

export default App;
