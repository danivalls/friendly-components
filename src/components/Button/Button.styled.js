import styled from 'styled-components'

const generatePadding = ({ theme }) => {
  const { small, tiny } = theme.spacing

  return `${tiny} ${small}`
}

const generateThemeColor = ({ theme, colorType, outlined }) => {
  const { colors } = theme

  if (outlined) return 'transparent'

  if (colors[colorType]) return theme.colors[colorType]

  return colorType
}

const generateTextColor = ({ theme, colorType, outlined }) => {
  if (outlined) return generateThemeColor({ theme, colorType })

  return 'white'
}

const generateShadow = ({ theme, colorType, outlined }) => {
  if (outlined)
    return `inset 0px 0px 0px 2px ${generateThemeColor({
      theme,
      colorType
    })};`

  return 'none'
}

export const BaseButton = styled.button`
  border: none;
  outline: none;
  padding: ${generatePadding};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  cursor: pointer;
  background-color: ${generateThemeColor};
  color: ${generateTextColor};
  box-shadow: ${generateShadow};
`
