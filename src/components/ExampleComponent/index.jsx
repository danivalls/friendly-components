import React from 'react'
import {
  ColorCard,
  ColorPalette,
  Container,
  Title
} from './ExampleComponent.styled'

const ExampleComponent = () => {
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
      <Title>Colors</Title>
      <ColorPalette>
        {colors.map((color) => (
          <ColorCard color={color} key={color} />
        ))}
      </ColorPalette>
    </Container>
  )
}

export default ExampleComponent
