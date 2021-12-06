import PropTypes from 'prop-types'
import React from 'react'
import { Container, Description, Title } from './DocHeader.styled'

const DocHeader = ({ title, description }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
    </Container>
  )
}

export default DocHeader

DocHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
}

DocHeader.defaultProps = {
  description: ''
}
