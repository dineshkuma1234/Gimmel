"use client ";

import { useState, useEffect, useContext, createContext } from "react";
import AuthService from "../../../../src/services/AuthService";

const SaveContext = createContext();

export const SaveProvider = ({ children }) => {
  const [getSaveVideo, setGetSaveVideo] = useState([]);
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const [getFolder, setGetFolder] = useState("");
  useEffect(() => {
    if (selectedFolderId) {
      handleSaveVideonext(selectedFolderId);
    }
  }, [selectedFolderId]);

  useEffect(()=>{
    handleGetFolder();
  },[])

  // console.log(getFolder,"getfolder")
  const handleGetFolder = async () => {
    // setLoader(true);
    try {
      const result = await AuthService.GetFolder();
      if (result?.success) {
        // (result,"result of get folder")
        // LoaderHelper.loaderStatus(false);
        setGetFolder(result?.data?.data);
      } else {
        // setLoader(false);
      }
    } catch (error) {
      // setLoader(false);
      // ('Error occurred:', 'Gimmel', error);
    }
  };

  const handleCreateFolder = async (folders) => {
    // setLoader(true);
    try {
      const result = await AuthService.createFolder(folders);
      // (result, 'result');
      if (result?.success) {
        // setLoader(false);
        handleGetFolder();
        AlertHelper.show("success", "Gimmel", result?.data);
      } else {
        // setLoader(false);
        AlertHelper.show("danger", "Gimmel", result?.message);
      }
    } catch (error) {
      // setLoader(false);
      // ('Error occurred:', 'Gimmel', error);
    }
  };

    const handleRename = async (rename, id) => {
    // console.log(rename, id, "rename and id --------------");
    setLoader(true);
    try {
      const result = await AuthService.renames(rename, id);
      if (result?.success) {
        // console.log("yes its call rename")
        setLoader(false);
        handleGetFolder();
        // setRename("");
        AlertHelper.show("success", "Gimmel", result?.message);
      } else {
        setLoader(false);
        AlertHelper.show("danger", "Gimmel", result?.message);
      }
    } catch (error) {
      // setLoader(false);
      // ('Error occurred:', 'Gimmel', error);
    }
  };
  const handleSaveVideonext = async (selectedFolderId) => {
    // LoaderHelper.loaderStatus(true);
    try {
      const result = await AuthService.GetSaveVideo(selectedFolderId);
      if (result?.success) {
        LoaderHelper.loaderStatus(false);
        setGetSaveVideo(result?.videos);
        // (result,"result++++++++++++++++++++++")
      } else {
        // LoaderHelper.loaderStatus(false);
        // AlertHelper.show('danger', 'Gimmel', result?.message || result );
      }
    } catch (error) {
      // LoaderHelper.loaderStatus(false);
      // ('Error occurred:', 'Gimmel', error);
    }
  };

  return (
    <>
      <SaveContext.Provider
        value={{
          getSaveVideo,
          setSelectedFolderId,
          handleCreateFolder,
          getFolder,
          handleRename
        }}
      >
        {children}
      </SaveContext.Provider>
    </>
  );
};

export const useSave = () => useContext(SaveContext);
