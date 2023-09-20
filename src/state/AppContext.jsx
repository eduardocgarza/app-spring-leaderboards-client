import React, { useContext } from "react";
import useUsers from "./hooks/useUsers";

const initialState = {};

const AppContext = React.createContext(initialState);

export function AppContextProvider(props) {
  const usersEntity = useUsers();

  const context = {
    usersEntity,
  };

  return (
    <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
  );
}

export default function useAppContext() {
  return useContext(AppContext);
}
