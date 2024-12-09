"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const ResetPassword = () => {
    return (
        <>
            <div className="main-screen">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <div className="left-banner">
                            <div className="left-banner-content">
                                <div className="banner-image">
                                    <Image src={require("../../assets/images/banner_login.svg")} alt="banner" />
                                </div>
                                <div className="banner-text">
                                    <h1 className="text-center">Slogan or tagline goes here</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="login-details justify-content-center">
                            <div className="login-form">
                                <div className="login-form-inner">
                                    <div className="form-section">
                                        <form className="form">
                                            <div className="form-group">
                                                <label htmlFor="password">New Password</label>
                                                <input type="password" className="form-control" id="password" placeholder="" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password">Confirm Password</label>
                                                <input type="password" className="form-control" id="password" placeholder="" />
                                            </div>
                                            <div className="form-group">
                                                <Link href="/login" className="btn-color-blue">
                                                    New Password
                                                </Link>
                                            </div>
                                        </form>
                                        <div className="form-group">
                                            <Link href="/login" className="btn-color-blue transparent-btn">Back to Login</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ResetPassword;