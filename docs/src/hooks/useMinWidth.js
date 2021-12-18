import { useEffect, useState } from 'react';

export const useMinWidth = (minWidth) => {
  const [isBelowMinWidth, setIsBelowMinWidth] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsBelowMinWidth(window.innerWidth <= minWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [minWidth]);

  return isBelowMinWidth;
};
