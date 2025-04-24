"use client";

import React, { useEffect, useState } from "react";
import AccountDetails from "../entities/account-details/page";
import AuthService from "../../services/AuthService";
import { useIsMobile } from "../../hooks/useIsMobile";
import UserProfile from "../(MobileFlow)/userprofile/page";
import { UseLoader } from "../LoderHelper/context/loaderHelperContext";

function PageComponent() {
  const isMobile = useIsMobile();
  const [profileInfo, setProfileInfo] = useState("");
  const [watchHistoryData, setWatchHistoryData] = useState("");
  const [libraryVideo, setLibraryVideo] = useState("");
  const [teachingTopic, setTeachingTopic] = useState([]);
  const [contentMaturity, setContentMaturity] = useState([]);
  const [eduction, setEducation] = useState([]);
  const { setLoader } = UseLoader();
  const [page, setPage] = useState(1);
  const [maturitypage, setMaturityPage] = useState(1);
  const [maturitytotal, setMaturityTotal] = useState();
  const [total, setTotal] = useState();
  // ("page load")
  useEffect(() => {
    handleUserInfo();
    handleWatchHistory();
    handleLibraryVideos();
    handleEducationalObjectives();
    // ("this is console")
  }, []);
  useEffect(() => {
    handleTeachingToic(page);
  }, [page]);

  useEffect(() => {
    handleContentmaturity(maturitypage);
  }, [maturitypage]);

  const handleUserInfo = async () => {
    setLoader(true);
    try {
      const result = await AuthService.userInfo();
      if (result?.success) {
        setLoader(false);
        setProfileInfo(result?.data);
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

  const handleTeachingToic = async (page) => {
    if (total === teachingTopic?.length) {
      return;
    }
    // setLoader(true);
    try {
      const result = await AuthService.Teaching(page);
      if (result?.success) {
        setTotal(result?.data?.total);
        // setLoader(false);
        if (page === 1) {
          setTeachingTopic(result?.data?.teachTopic);
        } else {
          const newTeachingTopic = [
            ...teachingTopic,
            ...result?.data?.teachTopic,
          ];
          setTeachingTopic(newTeachingTopic);
        }
        if (result?.data?.total > teachingTopic?.length) {
          setPage(page + 1);
        }
      } else {
        setLoader(false);
      }
    } catch (error) {
      setLoader(false);
    }
  };

  const handleContentmaturity = async (maturitypage) => {
    if (maturitytotal === contentMaturity?.length) {
      return;
    }
    try {
      const result = await AuthService.Contentmaturity(maturitypage);
      if (result?.success) {
        setMaturityTotal(result?.data?.total);
        if (page === 1) {
          setContentMaturity(result?.data?.contMaturity);
        } else {
          const newTeachingTopic = [
            ...contentMaturity,
            ...result?.data?.contMaturity,
          ];
          setContentMaturity(newTeachingTopic);
        }
        if (result?.data?.total > contentMaturity?.length) {
          setMaturityPage(maturitypage + 1);
        }
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
        setEducation(result?.data?.education);
      } else {
        setLoader(false);
      }
    } catch (error) {
      setLoader(false);
    }
  };

  const handleEditProfile = async (
    selected,
    selected1,
    selected2,
    phoneNumber,
    school,
    minAge,
    maxAge
  ) => {
    setLoader(true);
    try {
      const result = await AuthService.editProfile(
        selected,
        selected1,
        selected2,
        phoneNumber,
        school,
        minAge,
        maxAge,
        profileInfo
      );
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
  const handleImageUpdate = async (data) => {
    // LoaderHelper.loaderStatus(true);
    try {
      const result = await AuthService.UpdateProfileImage(data);
      if (result?.success) {
        handleUserInfo();
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
    <>
      {isMobile ? (
        <UserProfile
          profileInfo={profileInfo}
          watchHistoryData={watchHistoryData}
          libraryVideo={libraryVideo}
          teachingTopic={teachingTopic}
          contentMaturity={contentMaturity}
          eduction={eduction}
          handleEditProfile={handleEditProfile}
          handleImageUpdate={handleImageUpdate}
        />
      ) : (
        <AccountDetails
          profileInfo={profileInfo}
          watchHistoryData={watchHistoryData}
          libraryVideo={libraryVideo}
          teachingTopic={teachingTopic}
          contentMaturity={contentMaturity}
          eduction={eduction}
          handleEditProfile={handleEditProfile}
          handleImageUpdate={handleImageUpdate}
        />
      )}{" "}
    </>
  );
}

export default PageComponent;
