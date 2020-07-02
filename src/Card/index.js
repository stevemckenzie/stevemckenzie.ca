import PropTypes from 'prop-types';
import React, { createRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useHideOnGlobalClick } from '../useHideOnGlobalClick';

import { TRANSITION_DELAY } from '../constants';

import Component from './component';

const Card = ({ link }) => {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(link);
  const ref = createRef();
  const toggle = () => (link ? history.push('/') : setCollapsed(!collapsed));

  useHideOnGlobalClick(ref, () => setCollapsed(true));

  useEffect(() => {
    setCollapsed(link);

    if (link) {
      return;
    }

    const timeout = setTimeout(() => {
      setCollapsed(true);
    }, TRANSITION_DELAY);

    return () => {
      clearTimeout(timeout);
    }
  }, [link]);

  return <Component collapsed={collapsed} ref={ref} toggle={toggle} />;
};

Card.propTypes = {
  link: PropTypes.bool,
};

export default Card;
