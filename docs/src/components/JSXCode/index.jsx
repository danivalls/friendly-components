import PropTypes from 'prop-types'
import React from 'react'
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Highlighter } from './JSXCode.style'

const JSXCode = ({ code }) => {
  return <Highlighter style={atomOneDarkReasonable}>{code.trim()}</Highlighter>
}

export default JSXCode

JSXCode.propTypes = {
  code: PropTypes.string.isRequired
}
