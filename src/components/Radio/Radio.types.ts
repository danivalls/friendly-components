export type RadioValue = string | number | undefined;
export type RadioValueSetter = (newValue: RadioValue) => void;

export interface RadioOptionData {
  label: string;
  value: RadioValue;
  disabled?: boolean;
}

export interface RadioProps {
  value: RadioValue;
  onChange: RadioValueSetter;
  options: RadioOptionData[];
  color?: string;
  className?: string;
}

export interface RadioIndicatorProps {
  checked: boolean;
  color: string;
}

export interface RadioOptionProps extends RadioOptionData {
  checked: boolean;
  onChange: RadioValueSetter;
  color: string;
}
