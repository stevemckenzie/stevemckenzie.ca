import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import styles from './styles.module.scss';
import { BIO, GITHUB_URL, LINKEDIN_URL, NAME } from '../constants';

const Card = forwardRef(({ collapsed, toggle }, ref) => (
  <div
    className={classnames(styles.card, { [styles.collapsed]: collapsed })}
    ref={ref}
    title={`${NAME} - ${BIO}`}
  >
    <button className={styles.me} onClick={toggle} type="button" />
    <h1>{NAME}</h1>
    <h2>{BIO}</h2>
    <div className={styles.social}>
      <a
        className={styles.github}
        href={GITHUB_URL}
        rel="noopener noreferrer"
        target="_blank"
        title="GitHub"
      >
        <span>GitHub</span>
      </a>
      <a
        className={styles.linkedin}
        href={LINKEDIN_URL}
        rel="noopener noreferrer"
        target="_blank"
        title="LinkedIn"
      >
        <span>LinkedIn</span>
      </a>
    </div>
  </div>
));

Card.propTypes = {
  collapsed: PropTypes.bool,
  toggle: PropTypes.func,
};

export default Card;
