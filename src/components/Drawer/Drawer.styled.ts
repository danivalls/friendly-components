import styled from 'styled-components';
import { Direction, DrawerBodyProps } from './types';

const X_AXIS = ['left', 'right'];
const Y_AXIS = ['top', 'bottom'];

const getPositioning = (
  direction: Direction,
  side: 'left' | 'right' | 'top' | 'bottom'
): string => {
  const axis = X_AXIS.includes(direction) ? X_AXIS : Y_AXIS;
  const opposite = axis.find((dir) => dir !== direction);

  return opposite === side ? 'unset' : '0';
};

const TRANSFORMING = {
  left: 'translateX(-100%)',
  right: 'translateX(100%)',
  top: 'translateY(-100%)',
  bottom: 'translateY(100%)'
};

export const DrawerBody = styled.aside<DrawerBodyProps>`
  position: fixed;
  top: ${({ placement }): string => getPositioning(placement, 'top')};
  bottom: ${({ placement }): string => getPositioning(placement, 'bottom')};
  left: ${({ placement }): string => getPositioning(placement, 'left')};
  right: ${({ placement }): string => getPositioning(placement, 'right')};
  z-index: 1001;

  width: ${({ size, placement }): string =>
    X_AXIS.includes(placement) ? size : 'unset'};
  height: ${({ size, placement: placement }): string =>
    Y_AXIS.includes(placement) ? size : 'unset'};

  padding: ${({ theme }): string => theme.spacing.base};
  background-color: white;

  transform: ${({ visible, placement }): string =>
    visible ? 'translate(0, 0)' : TRANSFORMING[placement]};

  transition: all 0.3s;
`;
