import React, { useState } from "react";

export const UiContext = React.createContext();
export const UiProvider = UiContext.Provider;

export const Provider = ({ children }) => {
  const UiInitialState = {
    dialogFormFromRoutine: false,
    dialogFormFromHistory: false,
    dialogFolder: false,
    ahchorEl: null,
  };

  const [Ui, setUi] = useState(UiInitialState);

  //
  return <UiProvider value={{ Ui, setUi }}>{children}</UiProvider>;
};
