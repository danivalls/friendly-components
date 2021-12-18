import PropTypes from 'prop-types'
import React from 'react'
import { BaseButton } from './Button.styled'

const Button = ({ color, outlined, children, className }) => {
  return (
    <BaseButton className={className} colorType={color} outlined={outlined}>
      {children}
    </BaseButton>
  )
}

export default Button

Button.propTypes = {
  color: PropTypes.string,
  outlined: PropTypes.bool,
  children: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  className: PropTypes.string
}

Button.defaultProps = {
  color: 'primary',
  outlined: false
}
