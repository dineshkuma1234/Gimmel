"use client";

import React, { useEffect,useState,} from "react";
import WatchHistoryData from "../entities/mylibrary/watchhistorydata";
import AuthService from "../../services/AuthService";

const PageComponent = () => {
    const [watchHistoryData,setWatchHistoryData]=useState('')

    useEffect(()=>{
        handleWatchHistory();
    },[]);
    const handleWatchHistory = async () => {
        // LoaderHelper.loaderStatus(true);
        try {
            const result = await AuthService.WatchHistory();
            console.log(result, "result----");
    
            // if (result?.message === "No videos found in history.") {
            //     LoaderHelper.loaderStatus(false);
            //     AlertHelper.show('warning', 'Gimmel', 'No data available');
            //     return; 
            // }
    
            if (result?.success) {
                // LoaderHelper.loaderStatus(false);
                setWatchHistoryData(result?.data);
            } else {
                // LoaderHelper.loaderStatus(false);
                // AlertHelper.show('danger', 'Gimmel', result?.message);
            }
        } catch (error) {
            // LoaderHelper.loaderStatus(false);
            console.log('Error occurred:', 'Gimmel', error);
        }
    };
    return (
        <>  
            <WatchHistoryData watchHistoryData={watchHistoryData}/>
        </>
    );
};

export default PageComponent;