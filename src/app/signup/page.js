"use client"
import React from 'react'
import Signup from '../entities/signup/page'
import AuthService from '../../services/AuthService';   
import { useRouter } from "next/navigation";
import { useLoader } from '../LoderHelper/context/loaderHelperContext';

function SignupScreen() {
    const router = useRouter(); 
    const handleSignUp = async (data) => {
          const {setLoader} = useLoader()
          setLoader(true)
          try {
          const result = await AuthService.SignUp(data);
          console.log(result, "result----")
          if (result?.success) {
            setLoader(false)
            localStorage.setItem('token', result?.data?.token);
            // const isInterestValue = result?.data?.isInterest === true ? '1' : '0';
            // console.log(result?.data?.isInterest, "interest----")
            // localStorage.setItem('interest', isInterestValue);
            // navigation.navigate('Welcome');
            router.push("/onboarding");
          } else {
            setLoader(false)
            // AlertHelper.show('danger', 'Gimmel', result?.message);
          }
        } catch (error) {
          setLoader(false)
          //   console.log('Error occurred:', 'Gimmel', error);
        }
      };
  return (
    <Signup  handleSignUp={handleSignUp} />
  )
}

export default SignupScreen
