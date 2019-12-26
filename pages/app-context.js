import React from "react";

export const AppStateContext = React.createContext();
// funcion para compartir estado entre paginas
export function AppStateProvider({ initialState, children }) {
  const [state, setState] = React.useState(initialState);

  return (
    <AppStateContext.Provider value={{ state, setState }}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const context = React.useContext(AppStateContext);

  if (context === undefined) {
    throw new Error("useAppState must be used inside of AppStateContext");
  }

  return context;
}