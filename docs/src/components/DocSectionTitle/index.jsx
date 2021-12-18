import PropTypes from 'prop-types';
import React from 'react';
import { Title } from './DocSectionTitle.styled';

const DocSectionTitle = ({ children }) => {
  return <Title>{children}</Title>;
};

export default DocSectionTitle;

DocSectionTitle.propTypes = {
  children: PropTypes.node
};
