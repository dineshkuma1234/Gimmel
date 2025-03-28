"use client";

import React, { useEffect,useState,} from "react";
import WatchHistoryData from "../entities/mylibrary/watchhistorydata";
import AuthService from "../../services/AuthService";
import {useIsMobile} from "../../hooks/useIsMobile";
import HistoryWatch from "../(MobileFlow)/historywatch/page";
import { useSearchParams } from "next/navigation";

const PageComponent = () => {
    const isMobile = useIsMobile();
    const [libraryVideo, setLibraryVideo] = useState("")
    const router = useSearchParams();
    const title = router?.get("from")
    console.log("router", router?.get("from"));
    // const {from } = router.query;
    useEffect(()=>{
        handleLibraryVideos();
    },[]);
    const handleLibraryVideos = async () => {
        // LoaderHelper.loaderStatus(true);
        try {
            const result = await AuthService.LibraryVideo();
            if (result?.message === "No videos found in history.") {
                // LoaderHelper.loaderStatus(false);
                // AlertHelper.show('warning', 'Gimmel', 'No data available');
                return;
            }

            if (result?.success) {
                // LoaderHelper.loaderStatus(false);
                setLibraryVideo(result?.data);
            } else {
                // LoaderHelper.loaderStatus(false);
                // AlertHelper.show('danger', 'Gimmel', result?.message);
            }
        } catch (error) {
            // LoaderHelper.loaderStatus(false);
            // ('Error occurred:', 'Gimmel', error);
        }
    };

    console.log(libraryVideo,router,"libraryVideo--1213")
    return (
        <>{isMobile ?
            <HistoryWatch  watchHistoryData={libraryVideo}/>
            :
            <WatchHistoryData watchHistoryData={libraryVideo} title={title}/>
        }</>
    );
};

export default PageComponent;