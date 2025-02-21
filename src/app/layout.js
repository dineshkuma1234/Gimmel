"use client";  // Ensure this is treated as a client-side component

import React, { useEffect } from "react";
import localFont from "next/font/local";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import { SearchListProvider } from "./Context/searchlist/searchListContext";
import { LoaderProvider, UseLoader } from "../app/LoderHelper/context/loaderHelperContext";  // Import loader context provider
import Loader from "../app/LoderHelper/page";  // Import your loader component
import LoaderHelper from "../app/LoderHelper/LoaderHelper";  // Import loader helper

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LoaderProvider>
          <SearchListProvider>
            <LoaderSetup /> {/* Separate component for useEffect */}
            <Loader /> {/* Your global loader */}
            {children}
          </SearchListProvider>
        </LoaderProvider>
      </body>
    </html>
  );
}

// ✅ Create a separate component for useEffect
const LoaderSetup = () => {
  const { setLoader } = UseLoader();

  useEffect(() => {
    LoaderHelper.setLoader(setLoader);
  }, []);

  return null; // No UI needed
};
