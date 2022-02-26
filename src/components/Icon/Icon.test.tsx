import React from 'react';
import Icon from '.';
import { render, screen } from '../../test-utils/customRender';

describe('Icon', () => {
  it('renders an svg', () => {
    render(<Icon name="Accessibility" />);

    const svg = screen.getByLabelText('AccessibilityIcon');

    expect(svg).toBeInTheDocument();
  });
});
