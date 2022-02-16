import styled from 'styled-components';
import { MaskProps } from './types';

export const MaskCover = styled.div.attrs(() => ({
  'aria-label': 'mask'
}))<MaskProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;

  pointer-events: ${({ visible }): string => (visible ? 'all' : 'none')};
  opacity: ${({ visible }): number => (visible ? 0.25 : 0)};
  background-color: ${({ color }): string => color || 'black'};
  transition: all 0.3s;

  overflow: hidden;
`;
