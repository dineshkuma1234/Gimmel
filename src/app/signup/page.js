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
    const handleSignUp = async (data) => {
        
          setLoader(true);
          try {
          const result = await AuthService.SignUp(data);

          if (result?.success) {
            setLoader(false);
            localStorage.setItem('token', result?.data?.token);
            
            // const isInterestValue = result?.data?.isInterest === true ? '1' : '0';
            // console.log(result?.data?.isInterest, "interest----")
            // localStorage.setItem('interest', isInterestValue);
            // navigation.navigate('Welcome');
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
