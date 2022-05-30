export type LabelPosition = 'left' | 'right';

export interface ToggleProps {
  onChange: Function;
  value: boolean;
  color?: string;
  disabled?: boolean;
  keepColor?: boolean;
}

export interface ToggleContainerProps {
  disabled: boolean;
}

export interface ToggleBodyProps {
  bgColor: string;
  checked: boolean;
  disabled: boolean;
  keepColor: boolean;
}

export interface ToggleIndicatorProps {
  checked: boolean;
}
