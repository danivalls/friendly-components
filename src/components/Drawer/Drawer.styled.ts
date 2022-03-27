import styled, {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation
} from 'styled-components';
import { Direction, DrawerBodyProps } from './Drawer.types';

const X_AXIS = ['left', 'right'];
const Y_AXIS = ['top', 'bottom'];

const getPositioning = (
  direction: Direction,
  side: 'left' | 'right' | 'top' | 'bottom'
): string => {
  const axisDirections = X_AXIS.includes(direction) ? X_AXIS : Y_AXIS;
  const opposite = axisDirections.find((dir) => dir !== direction);

  return opposite === side ? 'unset' : '0';
};

const getBorderRadiusStyles = (
  rounded: boolean,
  theme: DefaultTheme,
  placement: Direction
): FlattenSimpleInterpolation => {
  if (!rounded) {
    return css`
      border-radius: unset;
    `;
  }

  const borderRadius = theme?.borderRadius.large;
  const axis = X_AXIS.includes(placement) ? 'x' : 'y';
  const axisDirections = X_AXIS.includes(placement) ? X_AXIS : Y_AXIS;
  const opposite = axisDirections.find((dir) => dir !== placement);

  if (axis === 'x') {
    return css`
      border-top-${opposite}-radius: ${borderRadius};
      border-bottom-${opposite}-radius: ${borderRadius};
    `;
  }

  return css`
      border-${opposite}-left-radius: ${borderRadius};
      border-${opposite}-right-radius: ${borderRadius};
  `;
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

  max-width: ${({ placement }): string =>
    X_AXIS.includes(placement) ? '80vw' : 'unset'};
  max-height: ${({ placement }): string =>
    Y_AXIS.includes(placement) ? '80vh' : 'unset'};

  padding: ${({ theme }): string => theme.spacing.base};
  background-color: white;

  ${({ rounded, theme, placement }): FlattenSimpleInterpolation =>
    getBorderRadiusStyles(rounded, theme, placement)}

  transform: ${({ visible, placement }): string =>
    visible ? 'translate(0, 0)' : TRANSFORMING[placement]};

  transition: all 0.3s;
`;
