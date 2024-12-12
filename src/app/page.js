'use client';

import React, { useEffect, useState } from 'react';
import Main from "./entities/main/page";
import MainMobile from './(MobileFlow)/mobile-main/page';

export default function Home() {
  const [deviceWidth, setDeviceWidth] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateWidth = () => {
      setDeviceWidth(window.innerWidth);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <>
      {deviceWidth > 991 ? (
        <Main />
      ) : (
        <MainMobile />
      )}
    </>
  );
}
