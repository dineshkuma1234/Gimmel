"use client"
import React from 'react'
import Signup from '../entities/signup/page'
import AuthService from '../../services/AuthService';   
import { useRouter } from "next/navigation";
import toast, { Toaster } from 'react-hot-toast';

function SignupScreen() {
    const router = useRouter(); 
    const handleSignUp = async (data) => {
        // LoaderHelper.loaderStatus(true);
        try {
          const result = await AuthService.SignUp(data);
          console.log(result, "result----")
          if (result?.success) {
            // LoaderHelper.loaderStatus(false);
            localStorage.setItem('token', result?.data?.token);
            // const isInterestValue = result?.data?.isInterest === true ? '1' : '0';
            // console.log(result?.data?.isInterest, "interest----")
            // localStorage.setItem('interest', isInterestValue);
            // navigation.navigate('Welcome');
            router.push("/onboarding");
          } else {
            // LoaderHelper.loaderStatus(false);
            toast.error(result?.message,{className: "custom-toast",});
          }
        } catch (error) {
          // LoaderHelper.loaderStatus(false);
        //   console.log('Error occurred:', 'Gimmel', error);
        }
      };
  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
    <Signup  handleSignUp={handleSignUp} />
    </>
    
  )
}

export default SignupScreen
