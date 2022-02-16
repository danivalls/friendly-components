export type Direction = 'left' | 'right' | 'top' | 'bottom';

export interface DrawerMaskProps {
  visible: boolean;
}

export interface DrawerBodyProps {
  visible: boolean;
  placement: Direction;
  size: string;
}
