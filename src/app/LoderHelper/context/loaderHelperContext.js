"use client";
import React, { createContext, useContext, useState } from "react";
 
// Create Context
const LoaderContext = createContext();
 
// Loader Provider to manage loader state
export const LoaderProvider = ({ children }) => {
  const [loaderState, setLoaderState] = useState(false);
 
  // Set the loader state
  const setLoader = (status) => {
    setLoaderState(status);
  };

  // console.log(loaderState,"loaderState");
 
  return (
<LoaderContext.Provider value={{ loaderState, setLoader }}>
      {children}
</LoaderContext.Provider>
  );
};
 
// Custom hook to use the loader context
export const UseLoader = () => {
  return useContext(LoaderContext);
};