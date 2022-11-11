import React, { createContext, useState } from "react";
import { AllProperties } from "../components/Items/Items";
import { PropertiesType } from "../Types/Types";

export const Contexts = createContext<any | null>(null);

export const GlobalContext = ({ children }: any) => {
  const [mainItems, setMainItems] = useState<PropertiesType[]>(AllProperties);

  return (
    <Contexts.Provider value={{ mainItems, setMainItems }}>
      {children}
    </Contexts.Provider>
  );
};

export default GlobalContext;
