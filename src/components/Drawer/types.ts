export type Direction = 'left' | 'right' | 'top' | 'bottom';
export interface DrawerBodyProps {
  visible: boolean;
  placement: Direction;
  size: string;
  rounded: boolean;
}
