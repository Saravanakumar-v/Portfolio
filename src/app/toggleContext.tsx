'use client';

import React from "react";
import { useContext } from "react";

const ToggleContext = React.createContext<any>(undefined);

export const ToggleProvider = ({ children }:any) => {
  const [toggle, setToggle] = React.useState('exp'); 

  return (
    <ToggleContext.Provider value={{ toggle, setToggle }}>
      {children}
    </ToggleContext.Provider>
  )
}

export const useToggle = () => useContext(ToggleContext);