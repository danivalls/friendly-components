import PropTypes from 'prop-types';
import React from 'react';
import { Indicator, Layout, StyledLink } from './MenuItem.styled';

const MenuItem = ({ label, to, active }) => {
  return (
    <StyledLink to={to}>
      <Layout activeItem={active}>
        <Indicator activeItem={active} />
        {label}
      </Layout>
    </StyledLink>
  );
};

export default MenuItem;

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
};
