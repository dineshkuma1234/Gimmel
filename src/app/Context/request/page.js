"use client";
import AuthService from "@/services/AuthService";
import React, { createContext, useContext, useEffect, useState } from "react";

// Context Create Kiya
const RequestContext = createContext();

// Provider Component
export const RequestProvider = ({ children }) => {
  const [yourRequest, setYourRequest] = useState("");
  const [discription, setDiscription] = useState("");
  const [avoided, setavoided] = useState("");
  const [details, setDetails] = useState("");
  const [requestListData, setRequestListData] = useState([]);
  const [getVideoRequestData, setgetVideoRequestData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const id = requestListData?.[0]?._id;

  useEffect(() => {
    handleRequestList();
    // handlegetVideoRequest()
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

  return (
    <RequestContext.Provider
      value={{
        yourRequest,
        setYourRequest,
        discription,
        setDiscription,
        avoided,
        setavoided,
        details,
        setDetails,
        requestListData,
        setRequestListData,
        selectedItems,
        setSelectedItems,
        handleCreateRequest,
        handleRequestList,
        requestListData,
        getVideoRequestData,
        handlegetVideoRequest,
        handleRequestSaveVideo,
      }}
    >
      {children}
    </RequestContext.Provider>
  );
};

// Custom Hook to use Context
export const useRequestContext = () => {
  return useContext(RequestContext);
};
