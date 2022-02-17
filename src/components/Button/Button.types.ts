export type ButtonType = 'default' | 'outlined';

export interface ButtonProps {
  color?: string;
  type?: ButtonType;
  children?: React.ReactNode | string;
  className?: string;
  onClick?: Function;
}

export interface BaseButtonProps {
  className: string;
  colorType: string;
  styleType: string;
}

export type RippleElement = {
  x: number;
  y: number;
  key: number;
};

export interface RippleProps extends RippleElement {
  duration: number;
  colored: boolean;
  colorType: string;
}
