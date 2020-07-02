import { useEffect } from 'react';

export const useHideOnGlobalClick = (ref, action) => {
  useEffect(() => {
    const { current: container } = ref;
    if (!container) {
      return;
    }

    const handleClick = ({ target }) => {
      if (container && !container.contains(target)) {
        action();
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [action, ref]);
};
