import React from 'react';
import Mask from '../Mask';
import Portal from '../Portal';
import { DrawerBody } from './Drawer.styled';
import { DrawerProps } from './Drawer.types';

const DEFAULT_SIZE = '378px';

const Drawer: React.FC<DrawerProps> = ({
  visible,
  onClose,
  placement = 'right',
  size = DEFAULT_SIZE,
  mountNode = document.body,
  rounded = false,
  children
}) => {
  return (
    <Portal target={mountNode}>
      <DrawerBody
        visible={visible}
        placement={placement}
        size={size}
        rounded={rounded}
      >
        {children}
      </DrawerBody>
      <Mask visible={visible} onClick={onClose} />
    </Portal>
  );
};

export default Drawer;
