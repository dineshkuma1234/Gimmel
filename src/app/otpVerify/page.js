"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AuthService from "../../services/AuthService";
import { UseLoader } from "../LoderHelper/context/loaderHelperContext";
import toast, { Toaster } from "react-hot-toast";
import OtpScreen from "../entities/otp-screen/page";

function PageComponent() {
  const router = useRouter();
  const { setLoader } = UseLoader();
  const [otp, setOtp] = useState("");

  const email = localStorage.getItem("email");

  const handleVerify = async () => {
    setLoader(true);
    try {
      const result = await AuthService.VerifyOtp(email, otp);
      console.log(result, "result");
      if (result?.success) {
        setLoader(false);
        toast.success(result?.message, {
          className: "custom-toast-success",
        });
        router.push("/resetPassword");
      } else {
        setLoader(false);
        toast.error(result?.message, {
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
      <OtpScreen handleVerify={handleVerify} otp={otp} setOtp={setOtp} />
    </>
  );
}

export default PageComponent;
