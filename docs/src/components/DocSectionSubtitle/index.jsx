import PropTypes from 'prop-types';
import React from 'react';
import { Title } from './DocSectionSubtitle.styled';

const DocSectionSubtitle = ({ children }) => {
  return <Title>{children}</Title>;
};

export default DocSectionSubtitle;

DocSectionSubtitle.propTypes = {
  children: PropTypes.node
};
