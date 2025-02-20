"use client";

import Image from "next/image";
import Link from "next/link";
import React,{useState} from "react";
import {useForm} from "../../../hooks/useForm";
import {loginData} from "../../../Constants/dummyData";
import {SigninValidate} from "../../../helper/Validation"
// import { text } from "stream/consumers";

const Login = ({handleLogIn}) => {
    const [user, setUser] = useState(null);

    const handleSend = data => {
        console.log(data,"data iss...")
        const loginData = {
            signId: data?.email?.value.toLowerCase(),
            password: data?.password.value,
        };
        if (!data?.email?.value) {
            return;
        } else if (!data?.password?.value) {
            return;
        } else if (data?.password?.error || data?.email?.error) {
            return;
        }
        handleLogIn(loginData);
    };
    const { state, disable, handleSubmit, handleFocus,handleChange } = useForm(
        loginData,
        SigninValidate,
        handleSend,
    );
    const { email, password } = state;
    console.log(email,password,"this the email.....")
    return (
        <>
            <div className="main-screen">
                <div className="d-flex align-items-center">
                    <div className="col-md-7">
                        <div className="left-banner hide_mobile">
                            <div className="left-banner-content">
                                <div className="banner-image">
                                    <Image src={require("../../../assets/images/banner_login.svg")} alt="banner" />
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
                                <Image src={require("../../../assets/images/logo.svg")} alt="logo" className="img-fluid" />
                            </div>
                            <div className="login-form">
                                <div className="login-form-inner">
                                    <div className="google-login">
                                        <Link href="login.html" className="btn btn-primary">
                                            <Image src={require("../../../assets/images/google-logo.svg")} alt="google logo" className="img-fluid" /> Google Login
                                        </Link>
                                    </div>
                                    <hr className="border-line" />
                                    <div className="form-section">
                                        <form className="form">
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input name="email"  type="email" value={email?.value} className={`form-control ${email?.error ? 'is-invalid' : ''}`} id="email" placeholder="" onFocus={() => handleFocus('email', true)} onChange={e => handleChange('email',e.target.value,null,'valid Email')} />
                                                {email?.error && <div className="invalid-feedback">{email.error}</div>}
                                            </div>
                                            { email.value && !email.error && (
                                            <div className="form-group">
                                                <label htmlFor="password">Password</label>
                                                <input type="password" name="password" className={`form-control ${password?.error ? 'is-invalid' : ''}`} value={password?.value} id="password" placeholder=""  onFocus={() => handleFocus('password', true)}  onChange={e=> handleChange('password', e.target.value, null, 'your password')} />
                                                {password?.error && <div className="invalid-feedback">{password.error}</div>}
                                            </div>
                                            )}
                                            <div className="forgot-password">
                                                <Link href="/reset-email" className="btn-link">Forgot Password?</Link>
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="btn-color-blue" onClick={handleSubmit} disabled={disable}>
                                                    Login
                                                </button>
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