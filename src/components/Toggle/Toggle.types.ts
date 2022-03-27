export type LabelPosition = 'left' | 'right';

export interface ToggleProps {
  onChange: Function;
  value: boolean;
  color?: string;
  label?: string;
  labelPosition?: LabelPosition;
  disabled?: boolean;
  keepColor?: boolean;
}

export interface ToggleContainerProps {
  labelPosition: LabelPosition;
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
