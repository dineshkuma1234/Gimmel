"use client";

import React, { useEffect,useState,} from "react";
import WatchHistoryData from "../entities/mylibrary/watchhistorydata";
import AuthService from "../../services/AuthService";
import {useIsMobile} from "../../hooks/useIsMobile";
import HistoryWatch from "../(MobileFlow)/historywatch/page";
import { UseLoader } from "../LoderHelper/context/loaderHelperContext";

const PageComponent = () => {
    const isMobile = useIsMobile();
    const [watchHistoryData,setWatchHistoryData]=useState('')

    const {setLoader} = UseLoader();

    useEffect(()=>{
        handleWatchHistory();
    },[]);
    const handleWatchHistory = async () => {
        setLoader(true);
        try {
            const result = await AuthService.WatchHistory();
     
            if (result?.success) {
                setLoader(false);
                setWatchHistoryData(result?.data);
            } else {
                setLoader(false);
            }
        } catch (error) {
            setLoader(false);
        }
    };
   
    return (
        <>{isMobile ?
            <HistoryWatch  watchHistoryData={watchHistoryData}/>
            :
            <WatchHistoryData watchHistoryData={watchHistoryData}/>
        }</>
    );
};

export default PageComponent;