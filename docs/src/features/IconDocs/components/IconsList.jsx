import { Icon, iconNames } from 'friendly-components';
import React from 'react';
import LazyLoad from 'react-lazyload';
import { IconsShowcase, IconWrapper } from './IconsList.styled';

const IconsList = () => {
  return (
    <IconsShowcase>
      {iconNames.map((iconName) => (
        <LazyLoad key={iconName} offset={100}>
          <IconWrapper>
            <Icon name={iconName} size="32px" />
            {iconName}
          </IconWrapper>
        </LazyLoad>
      ))}
    </IconsShowcase>
  );
};

export default IconsList;
