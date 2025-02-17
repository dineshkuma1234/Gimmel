'use client'

import React, { useEffect,useState } from "react";
import AccountDetails from "../entities/account-details/page";
import AuthService from "../../services/AuthService";

function PageComponent() {
    const [profileInfo, setProfileInfo] = useState('');
    useEffect(()=>{
        handleUserInfo();
        console.log("this is console")
    },[]);
    
    const handleUserInfo = async () => {
        // LoaderHelper.loaderStatus(true);
        console.log("object----")
        try {
            const result = await AuthService.userInfo();
            console.log(result,"result----")
            if (result?.success) {
                console.log(result?.data, "data")
                // LoaderHelper.loaderStatus(false);
                setProfileInfo(result?.data)
                // const register =result?.data?.isType === true ? '1' : '0'
                // console.log(result?.data?.isType,"register----");
                // localStorage.setItem('register', register);
            } else {
                // LoaderHelper.loaderStatus(false);
                // AlertHelper.show('danger', 'Gimmel', result?.message);
            }
        } catch (error) {
            // LoaderHelper.loaderStatus(false);
            // console.log('Error occurred:', 'Gimmel', error);
        }
    };
    console.log(profileInfo,"profileInfo----");
    return (
        <>
            <AccountDetails  profileInfo={profileInfo}/>
        </>
    );
}

export default PageComponent;