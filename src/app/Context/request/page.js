"use client";

import { UseLoader } from "@/app/LoderHelper/context/loaderHelperContext";
import AuthService from "@/services/AuthService";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Create Context
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
  const [id, setId] = useState(null);
  const [isClient, setIsClient] = useState(false); // Prevent SSR issues
  const {setLoader} = UseLoader()
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fetch request list when component mounts
  useEffect(() => {
    if (isClient) {
      handleRequestList();
    }
  }, [isClient]);

  // Fetch video request data when ID is available
  useEffect(() => {
    if (isClient && id) {
      handlegetVideoRequest();
    }
  }, [isClient, id]);

  const handleCreateRequest = async (yourRequest, discription, avoided, details) => {
    
    try {
      const result = await AuthService.CreateRequest(yourRequest, discription, avoided, details);
      // console.log("Create Request Result:", result);
      if (result?.success) {
        handleRequestList();
      }
    } catch (error) {
      console.error("Error creating request:", error);
    }
  };

  const handleRequestList = async () => {
    setLoader(true);

    try {
      setLoader(false);

      const result = await AuthService.RequestList();
      // console.log("Request List Result:", result);
      if (result?.success) {
        setLoader(false);

        setRequestListData(result?.data?.data);
      }
    } catch (error) {
      setLoader(false);

      console.error("Error fetching request list:", error);
    }
  };

  const handlegetVideoRequest = async (id) => {
    setLoader(true);

    try {
      setLoader(false);

      if (!id) return; // Ensure `id` is set before calling
      const result = await AuthService.getVideoRequest(id);
      // console.log("Video Request Result:", result);
      if (result?.success) {
        setgetVideoRequestData(result?.data?.data);
      }
    } catch (error) {
      setLoader(false);

      console.error("Error fetching videos:", error);
    }
  };

  const handleRequestSaveVideo = async (selectedItems) => {
    setLoader(true);
    
    try {
      setLoader(false);

      const result = await AuthService.RequestSaveVideo(selectedItems, id);
      if (result?.success) {
       
        router.push("/");
      }
    } catch (error) {
      setLoader(false);

      console.error("Error saving video request:", error);
    }
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
        getVideoRequestData,
        handlegetVideoRequest,
        handleRequestSaveVideo,
        setId,
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
