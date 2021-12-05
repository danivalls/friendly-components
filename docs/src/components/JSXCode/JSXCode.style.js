import SyntaxHighlighter from 'react-syntax-highlighter'
import styled from 'styled-components'

export const Highlighter = styled(SyntaxHighlighter).attrs(() => ({
  language: 'javascript'
}))`
  margin: 0;
  padding: ${({ theme }) => theme.spacing.small} !important;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  font-size: ${({ theme }) => theme.fontSize.small};

  * {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace !important;
  }
`
