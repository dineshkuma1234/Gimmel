"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const ResetPassword = ({ handleReset }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [matchError, setMatchError] = useState("");
  const [lengthError, setLengthError] = useState("");

  // Real-time validation
  useEffect(() => {
    if (password && password.length < 8) {
      setLengthError("Password must be at least 8 characters");
    } else {
      setLengthError("");
    }

    if (confirmPassword && password !== confirmPassword) {
      setMatchError("Passwords do not match");
    } else {
      setMatchError("");
    }
  }, [password, confirmPassword]);


  const isDisabled =
    !password || !confirmPassword || lengthError || matchError;

    console.log(password,"password===")

  return (
    <div className="main-screen">
      <div className="row align-items-center">
        <div className="col-md-7">
          <div className="left-banner hide_mobile">
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

        <div className="col-md-5">
          <div className="login-details justify-content-center">
            <div className="login-form">
              <div className="login-form-inner">
                <div className="form-section">
                  <form className="form" >
                    <div className="form-group">
                      <label htmlFor="password">New Password</label>
                      <input
                        type="password"
                        className={`form-control ${lengthError ? "is-invalid" : ""}`}
                        id="password"
                        placeholder=""
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {lengthError && (
                        <div className="invalid-feedback">{lengthError}</div>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="confirmPassword">Confirm Password</label>
                      <input
                        type="password"
                        className={`form-control ${matchError ? "is-invalid" : ""}`}
                        id="confirmPassword"
                        placeholder=""
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      {matchError && (
                        <div className="invalid-feedback">{matchError}</div>
                      )}
                    </div>

                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn-color-blue"
                        onClick={(e)=>{ e.preventDefault(); handleReset(password)}}
                        disabled={isDisabled}
                      >
                        New Password
                      </button>
                    </div>
                  </form>

                  <div className="form-group">
                    <Link href="/login" className="btn-color-blue transparent-btn">
                      Back to Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default ResetPassword;
