import generateTheme from '.';
import generateColors, { DEFAULT_COLORS } from './colors';

describe('generateTheme', () => {
  it('applies default colors when none are provided', () => {
    const theme = generateTheme({});

    expect(theme.colors.primary).toBe(DEFAULT_COLORS.primary);
  });

  it('applies given custom colors', () => {
    const primary = '#FF0000';
    const theme = generateTheme({ primary });

    expect(theme.colors.primary).toBe(primary);
  });
});

describe('generateColors', () => {
  it('applies default colors when none are provided', () => {
    const colors = generateColors();

    expect(colors.primary).toBe(DEFAULT_COLORS.primary);
  });

  it('applies given custom colors', () => {
    const primary = '#FF0000';
    const colors = generateColors({ primary });

    expect(colors.primary).toBe(primary);
  });
});
