import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

const Menu = forwardRef(({ isOpened, items, toggleMenu }, ref) => (
  <div className={classnames(styles.menu, { [styles.opened]: isOpened })}>
    <button className={styles.toggle} onClick={toggleMenu} ref={ref}>
      <span>Menu</span>
    </button>
    <div className={styles.items}>
      <ul>
        {items.map(({ title, ...props }) => (
          <li key={title}>
            <Link title={title} {...props}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
));

Menu.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    to: PropTypes.string,
  })),
  toggleMenu: PropTypes.func.isRequired,
};

export default Menu;
