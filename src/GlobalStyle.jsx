import { createGlobalStyle } from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";

export const GlobalStyle = createGlobalStyle`
  body {
  font-size:62.5%;
  background-color: ${(props) => props.bgc};
  max-width: 350px;
  margin: 20px auto;
  font-family: 'Oswald', sans-serif
  }
`;

export const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#f50057",
    },
  },
});
