import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
  font-size:62.5%;
  background: ${({ theme }) => theme.palette.background.default};
  color:${({ theme }) => theme.palette.text.primary};
  margin:0 auto;
  font-family: 'Oswald', sans-serif;
  user-select:text;
  }
#root{
  overflow:hidden
}
h2{
  margin:0;
}
`;
