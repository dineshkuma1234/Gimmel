"use client";
import React from "react";
import { UseLoader } from "./context/loaderHelperContext"; // Import context
import "./loder.css";

const Loader = () => {
  const { loaderState } = UseLoader(); // Get loader state from context

  if (!loaderState) return null; // Hide loader when false

  return (
    <div className="loader-full-width">
      <div class="loader-1">
        
      </div>
    </div>
  );
};

export default Loader;
