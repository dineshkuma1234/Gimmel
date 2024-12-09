'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Signup = () => {
    return (
        <>
            <div className="page-top-bar show_mobile">
                <div className="page-inner">
                    <div className="page-section-left">
                        <div className="back-button">
                            <button
                                className="btn"
                                onClick={() => window.history.back()}
                            >
                                <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10.434 17.334L17.9007 24.8006L16.0007 26.6673L5.33398 16.0007L16.0007 5.33398L17.9007 7.20065L10.434 14.6673H26.6673V17.334H10.434Z"
                                        fill="#104E5B"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="page-title">
                            <h5>Sign Up Gimmel</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-screen">
                <div className="d-flex align-items-center">
                    <div className="col-md-7 hide_mobile">
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
                    <div className="col-md-5 right-banner">
                        <div className="login-details mobile-login-details">
                            <div className="login-form">
                                <div className="login-form-inner">
                                    <div className="google-login">
                                        <Link href="login.html" className="btn btn-primary">
                                            <Image src={require("../../assets/images/google-logo.svg")} alt="google logo" className="img-fluid" />
                                            Google Login
                                        </Link>
                                    </div>
                                    <hr className="border-line" />
                                    <div className="form-section">
                                        <form className="form">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="fname">Firstname</label>
                                                        <input type="text" className="form-control" id="fname" placeholder="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="lname">Lastname</label>
                                                        <input type="text" className="form-control" id="lname" placeholder="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="email">Email address*</label>
                                                    <input type="email" className="form-control" id="email" placeholder="" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="Password">Password*</label>
                                                    <input type="password" className="form-control" id="Password" placeholder="" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="Password">Repeat password*</label>
                                                    <input type="password" className="form-control" id="Password" placeholder="" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="flexCheckDefault"
                                                        />
                                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                                            I agree with the terms and conditions and the <Link href="#">Privacy Policy*</Link>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="g-recaptcha mt-24" data-sitekey="6Lel4Z4UAAAAAOa8LO1Q9mqKRUiMYl_00o5mXJrR"></div>
                                            <div className="form-group">
                                                <button type="submit" className="btn-color-blue">
                                                    Sign Up
                                                </button>
                                            </div>
                                            <div className="button-group hide_mobile">
                                                <Link href="/login" className="btn-back">
                                                    Back to Login
                                                </Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;