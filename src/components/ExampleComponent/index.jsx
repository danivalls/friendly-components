import PropTypes from 'prop-types'
import React from 'react'
import { ColorCard, ColorPalette, Container } from './ExampleComponent.styled'

const ExampleComponent = ({ className }) => {
  const colors = [
    'primary',
    'secondary',
    'error',
    'warning',
    'success',
    'neutral'
  ]

  return (
    <Container>
      <ColorPalette>
        {colors.map((color) => (
          <ColorCard color={color} key={color} />
        ))}
      </ColorPalette>
    </Container>
  )
}

export default ExampleComponent

ExampleComponent.propTypes = {
  className: PropTypes.string
}
