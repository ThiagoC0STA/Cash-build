import { useRouter } from "next/router";
import React, { createContext, useEffect, useState } from "react";
import { AllProperties } from "../components/Items/Items";
import { PropertiesType } from "../Types/Types";

export const Contexts = createContext<any | null>(null);

export const GlobalContext = ({ children }: any) => {
  const [mainItems, setMainItems] = useState<PropertiesType[]>(AllProperties);

  const [currentHeader, setCurrentHeader] = useState<string>("whiteHeader");
  const [current, setCurrent] = useState<string>("");

  const [citySelected, setCitySelected] = useState<string>("Todas as cidades");
  const [typeSelected, setTypeSelected] = useState<any>("Todos os tipos");

  const [cities, setCities] = useState<string[]>([]);

  const location = useRouter();

  useEffect(() => {
    const { pathname } = location;

    if (pathname === "/") {
      setCurrentHeader("whiteHeader");
    } else {
      setCurrentHeader("blackHeader");
    }
  }, [location]);

  useEffect(() => {
    const { pathname } = location;

    switch (pathname) {
      case "/":
        setCurrent("home");
        break;
      case "/about":
        setCurrent("about");
        break;
      case "/properties":
        setCurrent("properties");
        break;
      case "/contact":
        setCurrent("contact");
        break;
    }
  }, [location]);

  useEffect(() => {
    var citiesSet = new Set();
    var finalArray: any[] = [];

    mainItems.map((item: any) => {
      return citiesSet.add(item.city);
    });

    citiesSet.forEach((item: any) => {
      finalArray.push(item);
    });

    setCities(finalArray);
  }, [mainItems]);

  return (
    <Contexts.Provider
      value={{
        mainItems,
        setMainItems,
        currentHeader,
        current,
        citySelected,
        typeSelected,
        setCitySelected,
        setTypeSelected,
        cities,
      }}
    >
      {children}
    </Contexts.Provider>
  );
};

export default GlobalContext;
