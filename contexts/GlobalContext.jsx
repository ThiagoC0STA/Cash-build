import React, { createContext, useState } from "react";

export const Contexts = createContext();

export const GlobalContext = ({ children }) => {
  return <Contexts.Provider value={{}}>{children}</Contexts.Provider>;
};

export default GlobalContext;
