'use client';

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";

function ResetEmail() {

    const [deviceWidth, setDeviceWidth] = useState(0); // Default to 0 for SSR

    useEffect(() => {
      if (typeof window === 'undefined') return;
  
      const updateWidth = () => {
        setDeviceWidth(window.innerWidth);
      };
  
      // Set the initial width and listen for resize events
      updateWidth();
      window.addEventListener('resize', updateWidth);
  
      return () => window.removeEventListener('resize', updateWidth);
    }, []);


    return (
        <>
            {deviceWidth > 768 ? (
                <div className="main-screen bg-blue">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <div className="left-banner remove-shadow">
                                <div className="left-banner-content">
                                    <div className="banner-image">
                                        <Image src={require("../../assets/images/password-bg.svg")} alt="banner" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="right-banner">
                                <div className="right-banner-content">
                                    <div className="page-title">
                                        <h1>We sent a link to your email address!</h1>
                                    </div>
                                    <div className="banner-text">
                                        <p>
                                            Click on the link in the email we sent <br /> to your address to set up a new password to your account.
                                        </p>
                                    </div>
                                    <div className="banner-btn">
                                        <button type="button" className="btn-color-orange">
                                            Okay
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <main id="main" className="logout-space">
                    <div className="custom-container">
                        <div className="logout-vector">
                            <Image src={require("../../assets/images/password-bg.svg")} alt="banner" />
                        </div>
                        <div className="right-banner">
                            <div className="right-banner-content">
                                <div className="page-title">
                                    <h1>We sent a link to your email address!</h1>
                                </div>
                                <div className="banner-text">
                                    <p>
                                        Click on the link in the email we sent <br /> to your address to set up a new password to your account.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="logout-button">
                            <button type="button" className="btn-color-orange">Okay</button>
                        </div>
                    </div>
                </main>
            )}

        </>
    );
}

export default ResetEmail;