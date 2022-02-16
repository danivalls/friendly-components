import React from 'react';
import Portal from '../Portal';
import { DrawerBody, DrawerMask } from './Drawer.styled';
import { Direction } from './types';

const DEFAULT_SIZE = '378px';

interface Props {
  visible: boolean;
  placement?: Direction;
  onClose: React.MouseEventHandler<HTMLElement>;
  size?: string;
  mountNode?: string | HTMLElement;
}

const Drawer: React.FC<Props> = ({
  visible,
  onClose,
  placement = 'right',
  size = DEFAULT_SIZE,
  mountNode = document.body,
  children
}) => {
  return (
    <Portal target={mountNode}>
      <DrawerBody visible={visible} placement={placement} size={size}>
        {children}
      </DrawerBody>
      <DrawerMask visible={visible} onClick={onClose} />
    </Portal>
  );
};

export default Drawer;
