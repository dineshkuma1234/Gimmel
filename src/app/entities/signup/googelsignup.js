import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/navigation";
import AuthService from "@/services/AuthService";
// import { useEffect } from "react";

const GooglesignupButton = () => {
      const router = useRouter(); 
    
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
        const accessToken = tokenResponse.access_token;

        if (!accessToken) {
            console.error("No Access Token Found");
            return;
        }

         handleGoogleLogin(accessToken);
    },
    // onError: () => console.log("Login Failed"), 
  });


//     const token = localStorage.getItem("token"); // Token ko localStorage se le rahe hain

//     if (!token) {
//       router.push("/onboarding"); // Token nahi hai to onboarding par redirect
//     } else {
//       router.push("/"); // Token hai to dashboard par redirect
//     }
//   }, []); //

const handleGoogleLogin = async (accessToken) => {
    
    try {
        const result = await AuthService.GoogleLogin(accessToken);

        if (result?.success) {
            if (!result?.data?.isRegister) {
               
                if (typeof window !== "undefined") {
                    localStorage.setItem("token", result?.data?.token);
                    localStorage.setItem("firstName",result?.data?.firstName);
                    localStorage.setItem('userId', result?.data?._id);
                    const isInterestValue = result?.data?.isInterest === true ? "1" : "0";
                     localStorage.setItem("interest", isInterestValue);
                    
                   ;
                }

                router.push("/"); 

                // if (!result?.data?.isRegister) {
                //     router.push("/"); 
                //   } else {
                //     router.push("/onboarding"); 
                //   }
            } else {
                
                if (typeof window !== "undefined") {
                    // localStorage.removeItem("token");
                    localStorage.setItem("token", result?.data?.token);
                    localStorage.setItem("firstName",result?.data?.firstName);
                    localStorage.setItem('userId', result?.data?._id);
                    const isInterestValue = result?.data?.isInterest === true ? "1" : "0";
                    (result?.data?.isInterest, "interest----")
                    localStorage.setItem("interest", isInterestValue);
                    router.push("/onboarding"); 
                }
                

            }
        } else {
            console.error("Login Failed:", result?.message);
        }
    } catch (error) {
        console.error("Error occurred during login:", error);
    }
};



  return (
    <div className="google-login">
      <button onClick={() => login()}
  className="bg-transparent border-0 outline-none text-black p-2 cursor-pointer hover:opacity-80"
  >
        <Image
          src={require("../../../assets/images/google-logo.svg")}
          alt="google logo"
          className="img-fluid"
        />
         Google Sign Up
      </button>
    </div>
  );
};

const GoogleAuthsignup = () => {
  return (
    <GoogleOAuthProvider clientId="352379691785-qlgb2lmpqjc68rp73eevo167nb7b0qi6.apps.googleusercontent.com">
      <GooglesignupButton />
    </GoogleOAuthProvider>
  );
};

export default GoogleAuthsignup;
