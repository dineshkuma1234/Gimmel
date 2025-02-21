"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import Login from "../entities/login/page";
import AuthService from '../../services/AuthService';
import { UseLoader } from '../LoderHelper/context/loaderHelperContext';
import { Toaster } from 'react-hot-toast';


function PageComponent() {
    const router = useRouter(); 
    const {setLoader} = UseLoader()
    const handleLogIn = async( data) => {
        console.log(data,"this the data")
        setLoader(true);
        
        try {
            const result = await AuthService.LogIn(data?.signId, data?.password);
            console.log(result,"result----")
            if (result?.success) {
                setLoader(false);
                // AlertHelper.show('success', 'Gimmel', result?.message);
                localStorage.setItem( 'token', result?.data?.token);
                // const isInterestValue = result?.data?.isInterest === true ? '1' : '0';
                console.log(result?.data?.token,"this the value")
                // AsyncStorage.setItem('interest', isInterestValue);
                router.push("/");
                
            } else {
                setLoader(false);
                AlertHelper.show('danger', 'Gimmel', result?.message);
            }
        } catch (error) {
            setLoader(false);
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