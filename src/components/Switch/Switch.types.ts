export type LabelPosition = 'left' | 'right';

export interface SwitchProps {
  onChange: Function;
  value: boolean;
  color?: string;
  label?: string;
  labelPosition?: LabelPosition;
  disabled?: boolean;
  keepColor?: boolean;
}

export interface SwitchContainerProps {
  labelPosition: LabelPosition;
  disabled: boolean;
}

export interface SwitchBodyProps {
  bgColor: string;
  checked: boolean;
  disabled: boolean;
  keepColor: boolean;
}

export interface SwitchIndicatorProps {
  checked: boolean;
}
