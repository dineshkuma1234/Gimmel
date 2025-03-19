"use client";

import React, { useEffect, useState } from "react";
import RequestData from "../entities/request-data/page";
import AuthService from "@/services/AuthService";

function PageComponent() {
  const [requestListData, setRequestListData] = useState("");
  const [getVideoRequestData, setgetVideoRequestData] = useState("");
  const [getRequestSaveVideo, setgetRequestSaveVideo] = useState("");
  const id = requestListData?.[0]?._id;
  useEffect(() => {
    handleRequestList();
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
      const result = await AuthService.RequestSaveVideo(
        getRequestSaveVideo,
        id
      );
      if (result?.success) {
      } else {
      }
    } catch (error) {}
  };

  return (
    <>
      <RequestData
        handleCreateRequest={handleCreateRequest}
        requestListData={requestListData}
        handlegetVideoRequest={handlegetVideoRequest}
        getVideoRequestData={getVideoRequestData}
        setgetRequestSaveVideo={setgetRequestSaveVideo}
        handleRequestSaveVideo={handleRequestSaveVideo}
      />
    </>
  );
}

export default PageComponent;
