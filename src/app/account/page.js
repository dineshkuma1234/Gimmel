'use client'

import React, { useEffect,useState,} from "react";
import AccountDetails from "../entities/account-details/page";
import AuthService from "../../services/AuthService";
import {useIsMobile} from "../../hooks/useIsMobile"
import UserProfile from "../(MobileFlow)/userprofile/page";

function PageComponent() {
    const isMobile = useIsMobile();
    const [profileInfo, setProfileInfo] = useState("");
    const [watchHistoryData,setWatchHistoryData]=useState("")
    const [libraryVideo, setLibraryVideo] = useState("")
    const [teachingTopic, setTeachingTopic] = useState([])
    const [contentMaturity, setContentMaturity] = useState([])
    const [eduction, setEducation] = useState([])
    // console.log("page load")
    useEffect(()=>{
        handleUserInfo();
        handleWatchHistory();
        handleLibraryVideos();
        handleTeachingToic();
        handleContentmaturity();
        handleEducationalObjectives();
        // console.log("this is console") 
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
            console.log('Error occurred:', 'Gimmel', error);
        }
    };
    
    const handleTeachingToic = async () => {
        // LoaderHelper.loaderStatus(true);
        try {
            const result = await AuthService.Teaching();
            if (result?.success) {
                // LoaderHelper.loaderStatus(false);
                setTeachingTopic(result?.data?.teachTopic)
            } else {
                // LoaderHelper.loaderStatus(false);
                // AlertHelper.show('danger', 'Gimmel', result?.message);
            }
        } catch (error) {
            // LoaderHelper.loaderStatus(false);
            console.log('Error occurred:', 'Gimmel', error);
        }
    };

    const handleContentmaturity = async () => {
        // LoaderHelper.loaderStatus(true);
        try {
            const result = await AuthService.Contentmaturity();
            if (result?.success) {
                // LoaderHelper.loaderStatus(false);
                setContentMaturity(result?.data?.contMaturity)
            } else {
                // LoaderHelper.loaderStatus(false);
                // AlertHelper.show('danger', 'Gimmel', result?.message);
            }
        } catch (error) {
            // LoaderHelper.loaderStatus(false);
            console.log('Error occurred:', 'Gimmel', error);
        }
    };

    const handleEducationalObjectives = async () => {
        // LoaderHelper.loaderStatus(true);
        try {
            const result = await AuthService.EducationalObjectives();
            if (result?.success) {
                // LoaderHelper.loaderStatus(false);
                setEducation(result?.data?.education)
            } else {
                // LoaderHelper.loaderStatus(false);
                // AlertHelper.show('danger', 'Gimmel', result?.message);
            }
        } catch (error) {
            // LoaderHelper.loaderStatus(false);
            console.log('Error occurred:', 'Gimmel', error);
        }
    };
    
    const handleEditProfile = async (selected, selected1, selected2, phoneNumber, school, minAge, maxAge) => {
        // LoaderHelper.loaderStatus(true);
        try {
            const result = await AuthService.editProfile(selected, selected1, selected2, phoneNumber, school, minAge, maxAge, profileInfo);
            // console.log(result, "result")
            if (result?.success) {
                // LoaderHelper.loaderStatus(false);
                // AlertHelper.show('success', 'Gimmel', result?.data);
                handleUserInfo();
            } else {
                // LoaderHelper.loaderStatus(false);
                // AlertHelper.show('danger', 'Gimmel', result?.message);
            }
        } catch (error) {
            // LoaderHelper.loaderStatus(false);
            console.log('Error occurred:', 'Gimmel', error);
        }
    };

    // console.log(contentMaturity,"contentMaturity----");
    console.log(libraryVideo,"libraryVideo")
    
    return (
        <>{isMobile ? 
            
            <UserProfile profileInfo={profileInfo} watchHistoryData={watchHistoryData} libraryVideo={libraryVideo} teachingTopic={teachingTopic} contentMaturity={contentMaturity} eduction={eduction} handleEditProfile={handleEditProfile} />
            :
            <AccountDetails  profileInfo={profileInfo} watchHistoryData={watchHistoryData} libraryVideo={libraryVideo} teachingTopic={teachingTopic} contentMaturity={contentMaturity} eduction={eduction} handleEditProfile={handleEditProfile}/>
         } </>
    );
}

export default PageComponent;