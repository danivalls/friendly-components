import React from 'react';
import Mask from '../Mask';
import Portal from '../Portal';
import { DrawerBody } from './Drawer.styled';
import { Direction } from './types';

const DEFAULT_SIZE = '378px';

interface Props {
  visible: boolean;
  placement?: Direction;
  onClose: React.MouseEventHandler<HTMLElement>;
  size?: string;
  mountNode?: string | HTMLElement;
  rounded?: boolean;
}

const Drawer: React.FC<Props> = ({
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
