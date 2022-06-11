import PropTypes from 'prop-types';
import React from 'react';
import { Title } from './DocSectionTitle.styled';

const DocSectionTitle = ({ id, children }) => {
  return <Title id={id}>{children}</Title>;
};

export default DocSectionTitle;

DocSectionTitle.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node
};
