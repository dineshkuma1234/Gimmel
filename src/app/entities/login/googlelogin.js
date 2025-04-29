import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import Link from "next/link";
import Image from "next/image";
import AuthService from "@/services/AuthService";
import {useRouter} from "next/navigation";

const GoogleLoginButton = () => {
  const router = useRouter(); 

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
        const accessToken = tokenResponse.access_token;

        if (!accessToken) {
            return;
        }

        
         handleGoogleLogin(accessToken);
    },
    // onError: () => console.log("Login Failed"),
  });


const handleGoogleLogin = async (accessToken) => {
    
    try {
        const result = await AuthService.GoogleLogin(accessToken);

        if (result?.success) {
            if (!result?.data?.isRegister) {

               
                if (typeof window !== "undefined") {
                    localStorage.setItem("token", result?.data?.token);
                    localStorage.setItem("firstName",result?.data?.firstName);
                    
                }


               
                router.push("/");
            } else {
                
              
                if (typeof window !== "undefined") {
                    localStorage.removeItem("token");
                    
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
        Google Login
      </button>
    </div>
  );
};

const GoogleAuth = () => {
  return (
    <GoogleOAuthProvider clientId="352379691785-qlgb2lmpqjc68rp73eevo167nb7b0qi6.apps.googleusercontent.com">
      <GoogleLoginButton />
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;
