import React from 'react';
import styled from 'styled-components';
import ThemeProvider from '.';
import { render, screen } from '../../test-utils/customRender';
import { DEFAULT_COLORS } from '../../theme/colors';

const AuxComponent = styled.div.attrs(() => ({
  'aria-label': 'aux'
}))`
  color: ${({ theme }): string => theme.colors.primary};
`;

describe('ThemeProvider', () => {
  it('provides default theme if no customTheme or colors are provided', () => {
    render(
      <ThemeProvider>
        <AuxComponent />
      </ThemeProvider>
    );

    const aux = screen.getByLabelText('aux');

    expect(aux).toHaveStyle(`color: ${DEFAULT_COLORS.primary}`);
  });

  it('applies customTheme if provided', () => {
    const primary = '#FF0000';
    render(
      <ThemeProvider customTheme={{ colors: { primary } }}>
        <AuxComponent />
      </ThemeProvider>
    );

    const aux = screen.getByLabelText('aux');

    expect(aux).toHaveStyle(`color: ${primary};`);
  });
});
