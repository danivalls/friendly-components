import * as icons from 'iconoir-react';
import React from 'react';
import { IconProps } from './Icon.types';

const Icon: React.FC<IconProps> = ({ name, size = '1em', color }) => {
  const SpecificIcon = icons[name];

  return <SpecificIcon width={size} height={size} color={color} />;
};

export default Icon;
