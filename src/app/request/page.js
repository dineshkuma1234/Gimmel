"use client";

import React, { useEffect, useState } from "react";
import RequestData from "../entities/request-data/page";
import AuthService from "@/services/AuthService";
import AddRequest from "../(MobileFlow)/requestmobile/addrequest/page";
import RequestSuccess from "../(MobileFlow)/requestmobile/request-success/page";
import RequestOverview from "../(MobileFlow)/requestmobile/requestoverview/page";
import RequestMobile from "../(MobileFlow)/requestmobile/page";
import { useRequestContext } from "../Context/request/page";
import RequestPreview from "../(MobileFlow)/requestmobile/requestpreview/page";

function PageComponent() {
  const [requestListData, setRequestListData] = useState("");
  const [getVideoRequestData, setgetVideoRequestData] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const id = requestListData?.[0]?._id;
  const [shareLink, setShareLink] = useState("");
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [deviceWidth, setDeviceWidth] = useState(0);

  const {
    yourRequest,
    setYourRequest,
    discription,
    setDiscription,
    avoided,
    setavoided,
    details,
    setDetails,
  } = useRequestContext();

  useEffect(() => {
    handleRequestList();
    // handleRequestSaveVideo();
  }, []);

  useEffect(() => {
    handleSharePost(id, selectedTopics);
  }, [selectedTopics]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateWidth = () => {
      setDeviceWidth(window.innerWidth);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleCreateRequest = async (
    yourRequest,
    discription,
    avoided,
    details
  ) => {
    try {
      const result = await AuthService.CreateRequest(
        yourRequest,
        discription,
        avoided,
        details
      );
      if (result?.success) {
        handleRequestList();
      } else {
      }
    } catch (error) {}
  };
  const handleRequestList = async () => {
    try {
      const result = await AuthService.RequestList();
      if (result?.success) {
        setRequestListData(result?.data?.data);
      } else {
        AlertHelper.show("danger", "Gimmel", result?.message);
      }
    } catch (error) {}
  };

  const handlegetVideoRequest = async () => {
    try {
      const result = await AuthService.getVideoRequest(id);

      if (result?.success) {
        setgetVideoRequestData(result?.data?.data);
      } else {
        console.warn("Request failed:", result?.message);
      }
    } catch (error) {
      console.error(
        "An error occurred while fetching videos:",
        error?.message || error
      );
    }
  };

  const handleRequestSaveVideo = async () => {
    try {
      const result = await AuthService.RequestSaveVideo(selectedItems, id);
      if (result?.success) {
      } else {
      }
    } catch (error) {}
  };

  const handleSharePost = async (id, selectedTopics) => {
    try {
      const result = await AuthService.SharePost(id, selectedTopics);
      if (result?.success) {
        setShareLink(result?.data);
      } else {
      }
    } catch (error) {}
  };
  return (
    <>
      {deviceWidth > 991 ? (
        <RequestData
          handleCreateRequest={handleCreateRequest}
          requestListData={requestListData}
          handlegetVideoRequest={handlegetVideoRequest}
          getVideoRequestData={getVideoRequestData}
          setSelectedItems={setSelectedItems}
          handleRequestSaveVideo={handleRequestSaveVideo}
          setSelectedTopics={setSelectedTopics}
          selectedTopics={selectedTopics}
          handleSharePost={handleSharePost}
          shareLink={shareLink}
        />
      ) : (
        <>
          <AddRequest
            yourRequest={yourRequest}
            description={discription}
            avoided={avoided}
            details={details}
          />
          {/* <RequestOverview yourRequest={yourRequest} description={discription} avoided={avoided} details={details} handleCreateRequest={handleCreateRequest}/> */}
          <RequestSuccess />
          <RequestMobile />
          <RequestPreview
            handleRequestSaveVideo={handleRequestSaveVideo}
            setSelectedItems={setSelectedItems}
          />
        </>
      )}
    </>
  );
}

export default PageComponent;
