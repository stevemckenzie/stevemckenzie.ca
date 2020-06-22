import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import styles from './styles.module.scss';

const Photos = ({ photos, ...props }) => {
  const renderIndicator = (onClick, isSelected, index, label) => (
    <button
      className={classnames(styles.indicator, {
        [styles.selected]: isSelected,
      })}
      onClick={onClick}
    >
      <span>{index + 1}</span>
    </button>
  );

  return (
    <div className={styles.photos}>
      <Carousel renderIndicator={renderIndicator} {...props}>
        {photos.map((photo) => (
          <div
            className={styles.photo}
            key={photo}
            style={{ backgroundImage: `url('/photos/${photo}')` }}
          />
        ))}
      </Carousel>
    </div>
  );
};

Photos.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string),
};

export default Photos;
