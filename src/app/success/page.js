'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { sign } from "crypto";
import pixelImage from "../../assets/images/pixel.svg";

function Success() {
    return (
        <>
            <div className="main-screen bg-blue">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <div className="left-banner remove-shadow">
                            <div className="left-banner-content">
                                <div className="banner-image">
                                    <Image src={pixelImage} alt="banner" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="right-banner">
                            <div className="right-banner-content">
                                <div className="page-title">
                                    <h1>Welcome to Gimmel!</h1>
                                </div>
                                <div className="banner-text">
                                    <p>
                                        You’ve successfully signed up for Gimmel!<br /> We’re thrilled to have you on board. 🎉
                                    </p>
                                </div>
                                <div className="banner-btn">
                                    <Link href="/onboarding" className="btn-color-orange">
                                        Okay
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Success;