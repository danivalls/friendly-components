import PropTypes from 'prop-types';
import React from 'react';
import JSXCodeViewer from '../JSXCodeViewer';
import { ComponentFrame, Container, Title } from './DocExampleRenderer.styled';

const DocExampleRenderer = ({ title, code, content }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ComponentFrame>{content}</ComponentFrame>
      <JSXCodeViewer code={code} />
    </Container>
  );
};

export default DocExampleRenderer;

DocExampleRenderer.propTypes = {
  title: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired
};
