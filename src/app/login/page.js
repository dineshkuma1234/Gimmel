"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import Login from "../entities/login/page";
import AuthService from '../../services/AuthService';
import toast, { Toaster } from 'react-hot-toast';


function PageComponent() {
    const router = useRouter(); 

    const handleLogIn = async( data) => {
        console.log(data,"this the data")
        // LoaderHelper.loaderStatus(true);
        
        try {
            const result = await AuthService.LogIn(data?.signId, data?.password);
            console.log(result,"result----")
            if (result?.success) {
                // LoaderHelper.loaderStatus(false);
                toast.success( result?.message,{className: "custom-toast-success"});
                localStorage.setItem( 'token', result?.data?.token);
                // const isInterestValue = result?.data?.isInterest === true ? '1' : '0';
                console.log(result?.data?.token,"this the value")
                // AsyncStorage.setItem('interest', isInterestValue);
                router.push("/");
                
            } else {
                // LoaderHelper.loaderStatus(false);
                toast.error(result?.message,{className: "custom-toast",});
            }
        } catch (error) {
            // LoaderHelper.loaderStatus(false);
            console.log('Error occurred:', 'Gimmel', error);
        }
    };
    return (
        <>
        <Toaster position="top-right" reverseOrder={false} />
        <Login handleLogIn={handleLogIn}/>
        </>
        
    );
}

export default PageComponent;