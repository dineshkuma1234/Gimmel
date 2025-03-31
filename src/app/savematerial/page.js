"use client";

import React, { useEffect,useState,} from "react";
import WatchHistoryData from "../entities/mylibrary/watchhistorydata";
import AuthService from "../../services/AuthService";
import {useIsMobile} from "../../hooks/useIsMobile";
import HistoryWatch from "../(MobileFlow)/historywatch/page";
import { useSearchParams } from "next/navigation";
import { UseLoader } from "../LoderHelper/context/loaderHelperContext";


const PageComponent = () => {
    const isMobile = useIsMobile();
    const [libraryVideo, setLibraryVideo] = useState("")
    const router = useSearchParams();
    const title = router?.get("from")
    const { setLoader } = UseLoader();
    // console.log("router", router?.get("from"));
    // const {from } = router.query;
    useEffect(()=>{
        handleLibraryVideos();
    },[]);
    const handleLibraryVideos = async () => {
        setLoader(true);
        try {
            const result = await AuthService.LibraryVideo();
            if (result?.message === "No videos found in history.") {
                setLoader(false);
                return;
            }

            if (result?.success) {
                setLoader(false);
                setLibraryVideo(result?.data);
            } else {
                setLoader(false);
            }
        } catch (error) {
            setLoader(false);
        }
    };

    return (
        <>{isMobile ?
            <HistoryWatch  watchHistoryData={libraryVideo} title={title}/>
            :
            <WatchHistoryData watchHistoryData={libraryVideo} title={title}/>
        }</>
    );
};

export default PageComponent;