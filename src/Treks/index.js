import React from 'react';

import styles from './styles.module.scss';

const Treks = () => (
  <div className={styles.treks}>
    <h2>Recent Treks</h2>
    <iframe
      scrolling="no"
      seamless="seamless"
      src="https://www.gaiagps.com/public/twBB298TK1iQttymlSBUWdxx?embed=True"
      title="Treks"
    />
  </div>
);

export default Treks;
