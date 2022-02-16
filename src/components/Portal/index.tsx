import React from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  target: string | HTMLElement;
}
const Portal: React.FC<PortalProps> = ({ target, children }) => {
  const domElement =
    typeof target === 'string' ? document.querySelector(target) : target;

  return domElement ? createPortal(children, domElement) : null;
};

export default Portal;
