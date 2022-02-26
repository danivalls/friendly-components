import PropTypes from 'prop-types';
import React from 'react';
import DocHeader from '../DocHeader';
import { TemplateBody } from './DocTemplate.styled';

const DocTemplate = ({ title, description, children }) => {
  return (
    <>
      <DocHeader title={title} description={description} />
      <TemplateBody>{children}</TemplateBody>
    </>
  );
};

export default DocTemplate;

DocHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.arrayOf(PropTypes.node)
};

DocHeader.defaultProps = {
  description: '',
  children: []
};
