"use client";
import React, { useReducer, useMemo } from "react";
import PropTypes from "prop-types";

const initialState = {}; // Default to an object

const initialContext = [{ ...initialState }, () => {}];

export const categorylistcontext = React.createContext(initialContext);

// ✅ Fix: Handle both arrays and objects in the updater function
const updater = (state, update) => {
  if (Array.isArray(update)) {
    return [...update]; // Replace with a new array
  } else if (typeof update === "object" && update !== null) {
    return { ...state, ...update }; // Merge objects
  } else {
    console.error("Error: update must be an object or array", update);
    return state; // Return previous state if update is invalid
  }
};

export function CategoriesProvider({ children }) {
  const[getCategoryData, setGetCategoryData] =useReducer(
    updater,
    initialState
  );

  const value = useMemo(
    () => [getCategoryData, setGetCategoryData],
    [getCategoryData]
  );

  return (
    <categorylistcontext.Provider value={value}>
      {children}
    </categorylistcontext.Provider>
  );
}

CategoriesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
