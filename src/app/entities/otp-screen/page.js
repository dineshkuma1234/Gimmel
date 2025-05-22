"use client";

import React, { useState } from "react";
import OtpInput from "react-otp-input";
import "./style.css";
import Image from "next/image";
import Link from "next/link";

function OtpScreen({ handleVerify, otp, setOtp }) {
  // const [otp, setOtp] = useState("");

  // const handleSubmit = () => {
  //   alert(`Entered OTP is: ${otp}`);
  // };

  return (
    <div className="main-screen">
      <div className="row">
        <div className="col-md-7">
          <div className="left-banner mobile-hiden-img">
            <div className="left-banner-content">
              <div className="banner-image">
                <Image
                  src={require("../../../assets/images/banner_login.svg")}
                  alt="banner"
                />
              </div>
              <div className="banner-text">
                <h1 className="text-center">Slogan or tagline goes here</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-5 right-banner">
          <div className="login-details otp-screen justify-content-center">
            <div className="logo">
              <Image
                src={require("../../../assets/images/logo.svg")}
                alt="logo"
                className="img-fluid"
              />
            </div>

            <div className="login-form">
              <div className="login-form-inner">
                <form
                  className="form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    // handleSubmit();
                  }}
                >
                  <div className="reset-container">
                    <h2 className="otp-title">Verify Otp</h2>

                    <div className="otp-box-numbers flex items-center justify-center gap-2">
                      <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderInput={(props) => (
                          <>
                            <input
                              {...props}
                              className="otp-input w-12 h-12 text-center text-xl border  rounded-md"
                              placeholder="0"
                              maxLength={1}
                            />
                          </>
                        )}
                      />
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn-color-blue"
                        onClick={() => {
                          handleVerify();
                        }}
                        disabled={otp.length !== 6}
                      >
                        Confirm
                      </button>
                    </div>

                    {/* <div className="form-group mt-4">
                  <button type="submit" className="btn-color-blue" onClick={()=>{handleVerify();}} disabled={otp.length !== 6}>
                    Confirm
                  </button>
                </div> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtpScreen;
