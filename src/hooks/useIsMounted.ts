import { useCallback, useEffect, useRef } from 'react';

const useIsMounted = (): Function => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return (): void => {
      isMounted.current = false;
    };
  }, []);

  return useCallback(() => isMounted.current, []);
};

export default useIsMounted;
