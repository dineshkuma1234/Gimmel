"use client"
import React from 'react'
import Signup from '../entities/signup/page'
import AuthService from '../../services/AuthService';   
import { useRouter } from "next/navigation";
import { UseLoader } from '../LoderHelper/context/loaderHelperContext';
import toast, { Toaster } from "react-hot-toast";

function SignupScreen() {
    const router = useRouter(); 
    const {setLoader} = UseLoader()

    const handleUserInfo = async () => {
       
      try {
          const result = await AuthService.userInfo();
          
          if (result?.success) {
              
              localStorage.setItem( 'firstName', result?.data?.firstName);

          }
      } catch (error) {
      }
  };
    const handleSignUp = async (data) => {
        
          setLoader(true);
          try {
          const result = await AuthService.SignUp(data);

          if (result?.success) {
            // console.log(result, "result----1010")
            // return
            setLoader(false);
            localStorage.setItem('token', result?.data?.token);
            handleUserInfo();
            const isInterestValue = result?.data?.isInterest === true ? '1' : '0';
            (result?.data?.isInterest, "interest----")
            localStorage.setItem('interest', isInterestValue);
            localStorage.setItem('userId', result?.data?.id);
            router.push("/onboarding");
            
          } else {
            setLoader(false)
            // AlertHelper.show('danger', 'Gimmel', result?.message);
            toast.error(result?.message, {
              className: "custom-toast", // Apply the custom class
          });
          }
        } catch (error) {
          setLoader(false)
          //   ('Error occurred:', 'Gimmel', error);
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
