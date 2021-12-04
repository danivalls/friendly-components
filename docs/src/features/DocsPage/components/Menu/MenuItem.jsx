import PropTypes from 'prop-types'
import React from 'react'
import { Container, Indicator } from './MenuItem.styled'

const MenuItem = ({ label, to, active }) => {
  return (
    <Container to={to} active={active}>
      <Indicator active={active} />
      {label}
    </Container>
  )
}

export default MenuItem

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
}
