import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import styles from './styles.module.scss';

const Photos = ({ hideIndicators, photos, showIndicators, ...props }) => {
  const renderIndicator = (onClick, isSelected, index) => (
    <button
      className={classnames(styles.indicator, {
        [styles.selected]: isSelected,
        [styles.hidden]: !showIndicators || hideIndicators,
      })}
      onClick={onClick}
    >
      <span>{index + 1}</span>
    </button>
  );

  return (
    <div className={styles.photos}>
      <Carousel renderIndicator={renderIndicator} {...props}>
        {photos.map(({ file, style = {} }) => (
          <div
            className={styles.photo}
            key={file}
            style={{ backgroundImage: `url('${file}')`, ...style }}
          />
        ))}
      </Carousel>
    </div>
  );
};

Photos.propTypes = {
  hideIndicators: PropTypes.bool,
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Photos;
