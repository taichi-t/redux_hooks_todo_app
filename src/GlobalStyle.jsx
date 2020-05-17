import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
  font-size:62.5%;
  background: ${({ theme }) => theme.palette.background.default};
  color:${({ theme }) => theme.palette.text.primary};
  max-width: 350px;
  margin:0 auto;
  font-family: 'Oswald', sans-serif;
  user-select:text;
  }
`;

export const themeObject = {
  palette: {
    type: "light",
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#f50057",
    },
  },
};
