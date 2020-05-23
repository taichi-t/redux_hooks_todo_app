import { useState } from "react";
import { themeObjectFunction } from "../GlobalStyle";

export const useTheme = () => {
  const [theme, setTheme] = useState(themeObjectFunction);

  const {
    palette: { type },
  } = theme;
  const toggleTheme = (props) => {
    let updatedTheme;
    if (props) {
      const { color } = props && props;

      updatedTheme = {
        ...theme,
        palette: {
          ...theme.palette,
          primary: color,
        },
      };
    } else {
      updatedTheme = {
        ...theme,
        palette: {
          ...theme.palette,
          type: type === "light" ? "dark" : "light",
        },
      };
    }

    setTheme(updatedTheme);
  };
  return [theme, toggleTheme];
};
