import { IconName } from '../Icon/Icon.types';

export interface InputProps {
  value: string;
  onChange: Function;
  label?: string;
  placeholder?: string;
  icon?: IconName;
  type?: 'text' | 'number' | 'password' | 'date' | 'time' | 'month' | 'week';
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
