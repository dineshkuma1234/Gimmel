"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Login from "../entities/login/page";
import AuthService from "../../services/AuthService";
import { UseLoader } from "../LoderHelper/context/loaderHelperContext";
import toast, { Toaster } from "react-hot-toast";

function PageComponent() {
  const router = useRouter();
  const { setLoader } = UseLoader();

  const handleUserInfo = async () => {
    try {
      const result = await AuthService.userInfo();

      if (result?.success) {
        localStorage.setItem("firstName", result?.data?.firstName);
      }
    } catch (error) {}
  };
  const handleLogIn = async (data) => {
    // (data,"this the data")
    setLoader(true);

    try {
      const result = await AuthService.LogIn(data?.signId, data?.password);
      // (result,"result----")
      if (result?.success) {
        setLoader(false);
      
        localStorage.setItem("token", result?.data?.token);
        const isInterestValue = result?.data?.isInterest === true ? "1" : "0";
        result?.data?.token, "this the value";
        localStorage.setItem("interest", isInterestValue);
        localStorage.setItem("userId", result?.data?.id);

        handleUserInfo();
        router.push("/");
          toast.success(result?.message || "Login successful!", {
          className: "custom-toast-success",
        });
      } else {
        setLoader(false);
        // AlertHelper.show('danger', 'Gimmel', result?.message);
        toast.error(result?.message || "Invalid credentials!", {
          className: "custom-toast", // Apply the custom class
        });
      }
    } catch (error) {
      setLoader(false);
      // ('Error occurred:', 'Gimmel', error);
    }
  };

  const handleResetPassword = async (e, email) => {
    e.preventDefault();
    setLoader(true);
    try {
      const result = await AuthService.ResetEmail(email);
      console.log(result, "result");
      if (result?.success) {
        setLoader(false);
        localStorage.setItem("email", email);
        toast.success(result?.message || "success", {
          className: "custom-toast-success",
        });
        router.push(`/resetemail`);
        
      } else {
        setLoader(false);
        toast.error(result?.message || "Please select folder", {
          className: "custom-toast",
        });
      }
    } catch (error) {
      setLoader(false);
      console.log("Error occurred:", "Gimmel", error);
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Login
        handleLogIn={handleLogIn}
        handleResetPassword={handleResetPassword}
      />
    </>
  );
}

export default PageComponent;
