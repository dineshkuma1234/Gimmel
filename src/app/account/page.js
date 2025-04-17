'use client'

import React, { useEffect,useState,} from "react";
import AccountDetails from "../entities/account-details/page";
import AuthService from "../../services/AuthService";
import {useIsMobile} from "../../hooks/useIsMobile"
import UserProfile from "../(MobileFlow)/userprofile/page";
import { UseLoader } from "../LoderHelper/context/loaderHelperContext";

function PageComponent() {
    const isMobile = useIsMobile();
    const [profileInfo, setProfileInfo] = useState("");
    const [watchHistoryData,setWatchHistoryData]=useState("")
    const [libraryVideo, setLibraryVideo] = useState("")
    const [teachingTopic, setTeachingTopic] = useState([])
    const [contentMaturity, setContentMaturity] = useState([])
    const [eduction, setEducation] = useState([])
    const {setLoader} = UseLoader();
    // ("page load")
    useEffect(()=>{
        handleUserInfo();
        handleWatchHistory();
        handleLibraryVideos();
        handleTeachingToic();
        handleContentmaturity();
        handleEducationalObjectives();
        // ("this is console") 
    },[]);
   
    
    const handleUserInfo = async () => {
        setLoader(true);
        try {
            const result = await AuthService.userInfo();
            if (result?.success) {
                setLoader(false);
                setProfileInfo(result?.data)
     
            } else {
                setLoader(false);
            }
        } catch (error) {
            setLoader(false);
        }
    };
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
    
    const handleTeachingToic = async () => {
        setLoader(true);
        try {
            const result = await AuthService.Teaching();
            if (result?.success) {
                setLoader(false);
                setTeachingTopic(result?.data?.teachTopic)
            } else {
                setLoader(false);
            }
        } catch (error) {
            setLoader(false);
        }
    };

    const handleContentmaturity = async () => {
        setLoader(true);
        try {
            const result = await AuthService.Contentmaturity();
            if (result?.success) {
                setLoader(false);
                setContentMaturity(result?.data?.contMaturity)
            } else {
                setLoader(false);
            }
        } catch (error) {
            setLoader(false);
        }
    };

    const handleEducationalObjectives = async () => {
        setLoader(true);
        try {
            const result = await AuthService.EducationalObjectives();
            if (result?.success) {
                setLoader(false);
                setEducation(result?.data?.education)
            } else {
                setLoader(false);
            }
        } catch (error) {
            setLoader(false);
        }
    };
    
    const handleEditProfile = async (selected, selected1, selected2, phoneNumber, school, minAge, maxAge) => {
        setLoader(true);
        try {
            const result = await AuthService.editProfile(selected, selected1, selected2, phoneNumber, school, minAge, maxAge, profileInfo);
            // (result, "result")
            if (result?.success) {
                setLoader(false);
                handleUserInfo();
            } else {
                setLoader(false);
            }
        } catch (error) {
            setLoader(false);
        }
    };
    const handleImageUpdate = async data => {
        // LoaderHelper.loaderStatus(true);
        try {
          const result = await AuthService.UpdateProfileImage(data);
          if (result?.success) {
            // console.log(result,"result")
            // navigation.navigate('Profile');
            // LoaderHelper.loaderStatus(false);
            // AlertHelper.show('success', 'Gimmel', result?.data);
          } else {
            // LoaderHelper.loaderStatus(false);
            // // setError(result?.message);
            // AlertHelper.show('error', 'Gimmel', result?.message);
            // console.log(result?.message, 'kjshakjh');
          }
        } catch (error) {
        //   LoaderHelper.loaderStatus(false);
        //   console.error('Error occurred:', error);
        }
      };
    
    return (
        <>{isMobile ? 
            
            <UserProfile profileInfo={profileInfo} watchHistoryData={watchHistoryData} libraryVideo={libraryVideo} teachingTopic={teachingTopic} contentMaturity={contentMaturity} eduction={eduction} handleEditProfile={handleEditProfile} handleImageUpdate={handleImageUpdate}/>
            :
            <AccountDetails  profileInfo={profileInfo} watchHistoryData={watchHistoryData} libraryVideo={libraryVideo} teachingTopic={teachingTopic} contentMaturity={contentMaturity} eduction={eduction} handleEditProfile={handleEditProfile} handleImageUpdate={handleImageUpdate}/>
         } </>
    );
}

export default PageComponent;