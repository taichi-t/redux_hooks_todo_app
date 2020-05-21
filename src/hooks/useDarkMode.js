import { useState } from "react";
import { themeObjectFunction } from "../GlobalStyle";

export const useDarkMode = () => {
  const [theme, setTheme] = useState(themeObjectFunction);

  const {
    palette: { type },
  } = theme;
  const toggleDarkMode = () => {
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === "light" ? "dark" : "light",
      },
    };
    setTheme(updatedTheme);
  };
  return [theme, toggleDarkMode];
};
