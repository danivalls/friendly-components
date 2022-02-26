import iconNames from './iconNames';

export type IconName = typeof iconNames[number];

export interface IconProps {
  name: IconName;
  size?: string;
  color?: string;
}
