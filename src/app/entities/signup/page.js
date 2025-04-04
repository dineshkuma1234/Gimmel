'use client';

import React,{useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {useForm} from "../../../hooks/useForm";
import { signUpData } from "../../../Constants/dummyData";
import { register } from "../../../helper/Validation";
import GooglesignupButton from "./googelsignup"
import { useModal } from "@/components/registerpop/page";

const Signup = ({handleSignUp}) => {

    const [dateError, setDateError] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleSend = data => {
        // const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        // const cutOffDate = new Date("2020-01-01"); // January 1, 2020
        
        const signUpData = {
            firstName: data?.firstName.value,
            lastName: data?.lastName.value,
            email: data?.email.value.toLowerCase(),
            password: data?.password.value,
            confirmpassword: data?.confirmPassword?.value,
            date: data.date.value,
        };
        // (data?.firstName.value,"data000=====");

                   handleSignUp(signUpData);
        
    };

    const { state, disable, handleChange, handleSubmit, handleFocus } = useForm(
        signUpData,
        register,
        handleSend,
    );
    const {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        date
    } = state;
// (firstName,"this the f-----")
    const { openModal,setIsOpen,Registeremail } = useModal(); 
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
                                    <Image src={require("../../../assets/images/banner_login.svg")} alt="banner" />
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
                                        <Link href="/signup" className="btn btn-primary">
                                            {/* <Image src={require("../../../assets/images/google-logo.svg")} alt="google logo" className="img-fluid" /> */}
                                            <GooglesignupButton />
                                        </Link>
                                    </div>
                                    <hr className="border-line" />
                                    <div className="form-section">
                                        <form className="form">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="fname">Firstname</label>
                                                        <input name="firstName" type="text" className={`form-control ${firstName?.error ? 'is-invalid' : ''}`} id="firstName" placeholder="" value={firstName.value} onFocus={()=>handleFocus('firstName',true)} onBlur={()=>handleFocus('firstName',false)} onChange={(e)=>handleChange('firstName',e.target.value,null,"FirstName")}  />
                                                        {firstName?.error && <div className="invalid-feedback">{firstName.error}</div>}
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="lname">Lastname</label>
                                                        <input type="text" name="lastName" className={`form-control ${lastName?.error?'is-invalid':''}`} id="lastName" placeholder="" value={lastName.value} onFocus={()=>handleFocus('lastName',true)} onBlur={()=>handleFocus('lastName',false)} onChange={(e)=>handleChange('lastName',e.target.value,null,'LastName')} />
                                                        {lastName?.error && <div className="invalid-feedback">{lastName.error}</div>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="email">Email address*</label>
                                                    <input type="email" name="email" className={`form-control ${email?.error?'is-invalid':''}` } id="email" placeholder="" value={Registeremail} onFocus={() => handleFocus('email', true)}  onBlur={() => handleFocus('email', false)} onChange={(e)=>handleChange('email',e.target.value,null,'e-mailaddress')} />
                                                    {email?.error && <div className="invalid-feedback">{email.error}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="dob">Date of Birth</label>
                                                    <input type="date" className={`form-control ${date?.error?'is-invalid':''}`} id="dob" placeholder=""  value={date?.value} max="2019-12-31"  onFocus={()=>handleFocus('date',true)} onChange={(e)=>handleChange('date',e.target.value,'date')}  />
                                                    {date?.error && <div className="invalid-feedback">{date.error}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="Password">Password*</label>
                                                    <input type="password" name="password" className={`form-control ${password?.error?'is-invalid':''}`} id="Password" placeholder=""  value={password.value} onFocus={() => handleFocus('password', true)} onBlur={() => handleFocus('password', false)} onChange={(e)=>handleChange('password',e.target.value,null, 'Password')}  />
                                                    {password?.error && <div className="invalid-feedback">{password.error}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="confirmPassword">Repeat password*</label>
                                                    <input type="password" name="confirmPassword" className={`form-control ${confirmPassword?.error?'is-invalid':''}`} id="confirmPassword" placeholder=""  value={confirmPassword.value} onFocus={() => handleFocus('confirmPassword', true)} onBlur={() => handleFocus('confirmPassword', false)} onChange={(e)=>handleChange('confirmPassword',e.target.value,password?.value, 'ConfirmPassword')}  />
                                                     {confirmPassword?.error && <div className="invalid-feedback">{confirmPassword.error}</div>}
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
                                                            onChange={()=>{setIsChecked(!isChecked);}}
                                                        />
                                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                                            I agree with the terms and conditions and the <Link href="#">Privacy Policy*</Link>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="g-recaptcha mt-24" data-sitekey="6Lel4Z4UAAAAAOa8LO1Q9mqKRUiMYl_00o5mXJrR"></div>
                                            <div className="form-group">
                                                <button type="submit" className="btn-color-blue" onClick={handleSubmit}  disabled={!isChecked || !date || disable}>
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