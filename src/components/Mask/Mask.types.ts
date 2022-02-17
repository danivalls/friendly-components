import { MouseEventHandler } from 'react';

export interface MaskProps {
  visible: boolean;
  onClick: MouseEventHandler<HTMLElement>;
  color?: string;
}
