import PropTypes from 'prop-types';
import React from 'react';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Highlighter } from './JSXCodeViewer.style';

const JSXCodeViewer = ({ code }) => {
  return <Highlighter style={atomOneDarkReasonable}>{code.trim()}</Highlighter>;
};

export default JSXCodeViewer;

JSXCodeViewer.propTypes = {
  code: PropTypes.string.isRequired
};
