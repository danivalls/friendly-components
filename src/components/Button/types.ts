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

export interface RippleProps {
  x: number;
  y: number;
  key: number;
  duration: number;
  colored: boolean;
  colorType: string;
}
