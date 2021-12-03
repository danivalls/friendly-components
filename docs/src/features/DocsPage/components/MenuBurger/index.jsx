import PropTypes from 'prop-types'
import React from 'react'
import { Container, Line } from './MenuBurger.styled'

const MenuBurger = ({ onClick, active, className }) => {
  return (
    <Container onClick={onClick} active={active} className={className}>
      <Line />
      <Line />
      <Line />
    </Container>
  )
}

export default MenuBurger

MenuBurger.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  className: PropTypes.string
}

MenuBurger.defaultProps = {
  className: ''
}
