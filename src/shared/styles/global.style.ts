import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
}

body{
  background: ${(p) => p.theme.gray8};
  background:  ${(p) => `linear-gradient(180deg, ${p.theme.gray9} 212px, ${p.theme.gray8} 212px)`};
  color: ${(p) => p.theme.gray1};
}
`
