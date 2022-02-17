export type Direction = 'left' | 'right' | 'top' | 'bottom';

export interface DrawerProps {
  visible: boolean;
  placement?: Direction;
  onClose: React.MouseEventHandler<HTMLElement>;
  size?: string;
  mountNode?: string | HTMLElement;
  rounded?: boolean;
}

export interface DrawerBodyProps {
  visible: boolean;
  placement: Direction;
  size: string;
  rounded: boolean;
}
