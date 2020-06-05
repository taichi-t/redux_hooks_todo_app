import { useState, useLayoutEffect } from "react";
import { useSelector } from "react-redux";

export const useTheme = () => {
  const setting = useSelector((state) => state.users.userSettings);
  const [theme, setTheme] = useState();
  useLayoutEffect(() => {
    setTheme({
      palette: {
        type: setting.type,
        primary: {
          main: setting.color,
        },
        secondary: {
          main: "#f50057",
        },
      },
    });
  }, [setting]);

  return [theme];
};
