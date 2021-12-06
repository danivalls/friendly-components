import PropTypes from 'prop-types'
import React from 'react'
import JSXCode from '../JSXCode'
import { ComponentFrame, Container } from './DocExampleRenderer.styled'

const DocExampleRenderer = ({ code, children }) => {
  return (
    <Container>
      <ComponentFrame>{children}</ComponentFrame>
      <JSXCode code={code} />
    </Container>
  )
}

export default DocExampleRenderer

DocExampleRenderer.propTypes = {
  code: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired
}
