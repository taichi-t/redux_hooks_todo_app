import React, { useState } from "react";

// 複数の Context を作成する
export const UiContext = React.createContext();
export const UiProvider = UiContext.Provider;

// ラップされた子要素全てが、children に props に入ってくる
export const Provider = ({ children }) => {
  const UiInitialState = {
    dialogForm: false,
    dialogFolder: false,
    ahchorEl: null,
  };

  // この例では useState を使用している
  const [Ui, setUi] = useState(UiInitialState);

  //
  return <UiProvider value={{ Ui, setUi }}>{children}</UiProvider>;
};

// const { Ui, setUi } = useContext(UiContext);

/* ------------------------------- CONTEXT API ------------------------------ */
// import { UiContext } from "../../../store/context/provider";
