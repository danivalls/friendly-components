import styled from 'styled-components'

const generateGradient = ({ theme, color }) => {
  const main = theme.colors[color]
  const dark = theme.colors[`${color}Dark`]

  return `linear-gradient(180deg, ${main} 49.9%, ${dark} 50%);`
}

export const Container = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacing.base};
  gap: ${({ theme }) => theme.spacing.small};
  align-items: center;
`

export const Title = styled.div`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.title2};
`

export const ColorPalette = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.large};
`

export const ColorCard = styled.div`
  background-color: ${({ theme, color }) => theme.colors[color]};
  background: ${generateGradient};
  width: ${({ theme }) => theme.spacing.large};
  aspect-ratio: 1 / 1;
`
