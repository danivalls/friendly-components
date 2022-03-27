import { IconName } from '../Icon/Icon.types';

const inputTypes = [
  'text',
  'number',
  'password',
  'date',
  'time',
  'month',
  'week'
] as const;

export interface InputProps {
  value: string;
  onChange: Function;
  label?: string;
  placeholder?: string;
  type?: typeof inputTypes[number];
  icon?: IconName;
}

export interface InputContainerProps {
  hasIcon: boolean;
}

export interface IconContainerProps {
  elevated: boolean;
}

export interface InputLabelProps {
  hasIcon: boolean;
  focused: boolean;
}
