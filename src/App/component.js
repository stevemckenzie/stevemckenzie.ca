import PropTypes from 'prop-types';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Card from '../Card';
import Menu from '../Menu';
import Photos from '../Photos';
import Treks from '../Treks';

import styles from './styles.module.scss';

const App = ({ showContent }) => (
  <div className={styles.app}>
    <Menu />
    <Photos hideIndicators={showContent} />
    <Card link={showContent} />
    {showContent && (
      <div className={styles.content}>
        <Switch>
          <Route path="/treks">
            <Treks />
          </Route>
        </Switch>
      </div>
    )}
  </div>
);

App.propTypes = {
  showContent: PropTypes.bool.isRequired,
};

export default App;
