import SectionContainer from 'components/SectionContainer';
import PropTypes from 'prop-types';
import React from 'react';
import JSXCodeViewer from '../JSXCodeViewer';
import { ComponentFrame, Title } from './DocExampleRenderer.styled';

const DocExampleRenderer = ({ title, code, content }) => {
  return (
    <SectionContainer>
      <Title>{title}</Title>
      <ComponentFrame>{content}</ComponentFrame>
      <JSXCodeViewer code={code} />
    </SectionContainer>
  );
};

export default DocExampleRenderer;

DocExampleRenderer.propTypes = {
  title: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired
};
