import PropTypes from 'prop-types'
import React from 'react'
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Highlighter } from './JSXCode.style'

const JSXCode = ({ children }) => {
  return <Highlighter style={atomOneDarkReasonable}>{children}</Highlighter>
}

export default JSXCode

JSXCode.propTypes = {
  children: PropTypes.string.isRequired
}
