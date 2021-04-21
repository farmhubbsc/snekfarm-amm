import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    background: url(https://snek.farm/images/backgrounds/bg-3.png);
    background-size: cover;
    background-attachment: fixed;
    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
