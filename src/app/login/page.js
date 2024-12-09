"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Login = () => {
    return (
        <>
            <div className="main-screen">
                <div className="d-flex align-items-center">
                    <div className="col-md-7">
                        <div className="left-banner hide_mobile">
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
                    <div className="col-md-5 right-banner">
                        <div className="login-details">
                            <div className="logo">
                                <Image src={require("../../assets/images/logo.svg")} alt="logo" className="img-fluid" />
                            </div>
                            <div className="login-form">
                                <div className="login-form-inner">
                                    <div className="google-login">
                                        <Link href="login.html" className="btn btn-primary">
                                            <Image src={require("../../assets/images/google-logo.svg")} alt="google logo" className="img-fluid" /> Google Login
                                        </Link>
                                    </div>
                                    <hr className="border-line" />
                                    <div className="form-section">
                                        <form className="form">
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input type="email" className="form-control" id="email" placeholder="" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password">Password</label>
                                                <input type="password" className="form-control" id="password" placeholder="" />
                                            </div>
                                            <div className="forgot-password">
                                                <Link href="/reset-email" className="btn-link">Forgot Password?</Link>
                                            </div>
                                            <div className="form-group">
                                                <Link href="/success" className="btn-color-blue">
                                                    Login
                                                </Link>
                                            </div>
                                        </form>
                                        <div className="form-group">
                                            <Link href="/signup" className="btn-color-blue transparent-btn">Sign Up</Link>
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

export default Login;