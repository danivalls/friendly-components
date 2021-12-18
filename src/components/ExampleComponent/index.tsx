import React from 'react';
import { ColorCard, ColorPalette, Container } from './ExampleComponent.styled';

interface ExampleProps {
  className?: string;
}

const ExampleComponent: React.FC<ExampleProps> = ({ className }) => {
  const colors = [
    'primary',
    'secondary',
    'error',
    'warning',
    'success',
    'neutral'
  ];

  return (
    <Container className={className}>
      <ColorPalette>
        {colors.map((color) => (
          <ColorCard color={color} key={color} />
        ))}
      </ColorPalette>
    </Container>
  );
};

export default ExampleComponent;
