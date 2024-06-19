import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
}

body{
  background: ${(p) => p.theme['gray-800']};
  background:  ${(p) => `linear-gradient(180deg, ${p.theme['gray-900']} 212px, ${p.theme['gray-800']} 212px)`};
  color: ${(p) => p.theme['gray-100']};
}
`
