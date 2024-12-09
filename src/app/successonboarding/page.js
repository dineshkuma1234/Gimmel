'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";

function Success() {
    return (
        <>
            <div className="main-screen bg-blue">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <div className="left-banner remove-shadow">
                            <div className="left-banner-content">
                                <div className="banner-image">
                                    <Image src={require("../../assets/images/pixel.svg")} alt="banner" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="right-banner">
                            <div className="right-banner-content">
                                <div className="page-title">
                                    <h1>Find Personalized Learning Materials!</h1>
                                </div>
                                <div className="banner-text">
                                    <p className="hide_mobile">
                                        We&apos;ve tailored the content just for you, based on your <br /> preferences and goals. Get ready to explore and learn at <br /> your own pace!
                                    </p>
                                    <p className="show_mobile">
                                        We&apos;ve tailored the content just for you, based on your preferences and goals. Get ready to explore and learn at your own pace!
                                    </p>
                                </div>
                                <div className="banner-btn">
                                    <Link href="/" className="btn-color-orange">
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