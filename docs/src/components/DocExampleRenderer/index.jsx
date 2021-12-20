import PropTypes from 'prop-types';
import React from 'react';
import JSXCode from '../JSXCode';
import { ComponentFrame, Container, Title } from './DocExampleRenderer.styled';

const DocExampleRenderer = ({ title, code, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ComponentFrame>{children}</ComponentFrame>
      <JSXCode code={code} />
    </Container>
  );
};

export default DocExampleRenderer;

DocExampleRenderer.propTypes = {
  title: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
