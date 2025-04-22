"use client";

import React, { useEffect,useState,} from "react";
import WatchHistoryData from "../entities/mylibrary/watchhistorydata";
import AuthService from "../../services/AuthService";
import {useIsMobile} from "../../hooks/useIsMobile";
import HistoryWatch from "../(MobileFlow)/historywatch/page";
import { useParams, useSearchParams } from "next/navigation";
import { UseLoader } from "../LoderHelper/context/loaderHelperContext";


const PageComponent = () => {
    const isMobile = useIsMobile();
    const [libraryVideo, setLibraryVideo] = useState("")
    const router = useSearchParams();
    const title = router?.get("from")
    const { setLoader } = UseLoader();
    const params = useParams();
    const [getFolder, setGetFolder] = useState("")
    const [rename, setRename] = useState("")
    const [selectedFolderId, setSelectedFolderId] = useState(null);
    const [getSaveVideo,setGetSaveVideo] = useState([]);
    const [getSubFolder,setGetFolderSub]= useState();
    const [suggested,setsuggested]=useState()
    const id = params.video_id;
    const postId = id?.video_id|| id;
    // const idvideo = data?._id;
    const [value, setValue] = useState(null);
  
  
    useEffect(() => {
       
      handleGetPostid();
     
      // handleSave()
      handleGetFolder(value);
      handleCreateFolder()
      handleCreateFolderSub()
      handleGetFolderSub()
  
      // handleSaveVideonext(selectedFolderId)
  }, []);
  
  
  useEffect(() => {
  if (selectedFolderId) {
    // handleSaveVideonext(selectedFolderId);
  }
  }, [selectedFolderId]);
  
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


   
  
  const handleGetPostid = async () => {
         
    setLoader(true);
  
    try {
    const result = await AuthService.getvideoid(id);
    setLoader(false);
  
    if (result?.success) {
      // setgetvideoid(result?.data);
      setLoader(false);
  
     
     setdata(result?.data)
    //  (result, "data----nwetest");
  
      // if (result?.data?.postId) {
      //   setPostId(result.data.postId);
      //   ("Post ID Updated:", result.data.postId);
      // } else {
      //   console.warn("postId not found in API response");
      // }
      setLoader(false);
  
    }
  } catch (error) {
    console.error("Error occurred:", error);
  } 
  };
  
    const handleGetFolder = async (value) => {
   
      // setLoader(true);
        try {
        const result = await AuthService.GetFolder(value);
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
          AlertHelper.show('success', 'Gimmel', result?.data);
        } else {
          // setLoader(false);
          AlertHelper.show('danger', 'Gimmel', result?.message);
        }
      } catch (error) {
        // setLoader(false);
        // ('Error occurred:', 'Gimmel', error);
      }
    };
  
    const handleDeleteFolder = async (id) => {
  
      setLoader(true);
      try {
        const result = await AuthService.deleteFolder(id);
       
        // (result, "result---delete")
        if (result?.success) {
          setLoader(false);
          handleGetFolderSub();
          handleGetFolder()
  
          AlertHelper.show('success', 'Gimmel',result?.message);
        } else {
          setLoader(false);
          AlertHelper.show('danger', 'Gimmel', result?.message);
        }
      } catch (error) {
        setLoader(false);
        // ('Error occurred:', 'Gimmel', error);
      }
    };
  
    const handleRename = async (rename, id) => {
  
      // (rename, id, "rename and id --------------")
      // setLoader(true);
      try {
        const result = await AuthService.renames(rename, id);
        if (result?.success) {
          // (result, "result of rename")
          // setLoader(false);
          handleGetFolder();
          setRename("");
          // AlertHelper.show('success', 'Gimmel', result?.message);
        } else {
          // setLoader(false);
          // AlertHelper.show('danger', 'Gimmel', result?.message);
        }
      } catch (error) {
        // setLoader(false);
        // ('Error occurred:', 'Gimmel', error);
      }
    };
  
    const handleSaveVideo = async () => {
      // ("handleSaveVideo function called");
  
      // setLoader(true);
  
      if(!selectedFolderId){
        // ("No folder selected. Exiting function.");
  
        // AlertHelper.show('warning', 'Gimmel',"Please select folder");
        return;
      }
      // setLoader(false);
  
      try {
        // ("Calling AuthService.SaveVideo with:", selectedFolderId, postId);
  
        const result = await AuthService.SaveVideo(selectedFolderId, postId);
        if (result?.success) {
          // ("Video saved successfully:", result);
  
          // setLoader(false);
          setSelectedFolderId(null)
          // navigation.navigate("videodetails2");
          handleGetPostid()
          // navigation.setParams({
          //   data: null,
          // });
          // ("Navigation to videodetails2 triggered.");
  
          // AlertHelper.show('success', 'Gimmel', result?.data);
        } else {
          // setLoader(false);
          // ("Failed to save video. Error message:", result?.message);
  
          // AlertHelper.show('danger', 'Gimmel', result?.message);
        }
      } catch (error) {
        // setLoader(false);
        // ('Error occurred:', 'Gimmel', error);
      }
    };
  
    const handleSaveSubFolderVideo = async (selectSubFolder,selectFolder) => {
      // console.log("sub folder Api")
      if(!selectedFolderId){
        // AlertHelper.show('warning', 'Gimmel',"Please select folder");
        // console.log("select sub folder")
        return;
      }
      // LoaderHelper.loaderStatus(true);
      try {
        // console.log("sub folder Api ++")
          const result = await AuthService.SaveSubFolderVideo(postId,selectSubFolder,selectFolder);
          // console.log(result,"result")
          if (result?.success) {
              // LoaderHelper.loaderStatus(false);
              // AlertHelper.show('success', 'Gimmel', result?.data);
              // navigation.navigate('TabNavigation', {
              //   screen: 'Home',
              // })
          } else {
              // LoaderHelper.loaderStatus(false);
              // AlertHelper.show('danger', 'Gimmel', result?.message);
          }
      } catch (error) {
          // LoaderHelper.loaderStatus(false);
          // console.log('Error occurred:', 'Gimmel', error);
      }
  };
  
  const handleSaveVideonext = async (selectedFolderId) => {
  
    // LoaderHelper.loaderStatus(true);
    try {
      ("Calling API to fetch saved videos...");
      const result = await AuthService.GetSaveVideo(selectedFolderId);
  
  
      if (result?.success) {
  
        // LoaderHelper.loaderStatus(false);
        setGetSaveVideo(result?.videos);
      } else {
  
        // LoaderHelper.loaderStatus(false);
        // AlertHelper.show('danger', 'Gimmel', result?.message || result );
      }
    } catch (error) {
      console.error("Error occurred while fetching videos:", error);
  
      // LoaderHelper.loaderStatus(false);
      // ('Error occurred:', 'Gimmel', error);
    }
  };
  
  const handleCreateFolderSub = async (id,addnewFolder) => {
    // LoaderHelper.loaderStatus(true);
    try {
      const result = await AuthService.createSubFolder(id,addnewFolder);
      if (result?.success) {
        // LoaderHelper.loaderStatus(false);
        // AlertHelper.show('success', 'Gimmel', result?.data);
        handleGetFolderSub(id);
      } else {
        // LoaderHelper.loaderStatus(false);
        // AlertHelper.show('danger', 'Gimmel', result?.message  );
      }
    } catch (error) {
      // LoaderHelper.loaderStatus(false);
      // ('Error occurred:', 'Gimmel', error);
    }
  };
  
  const handleGetFolderSub = async (selectedFolderId) => {
    // console.log(selectedFolderId,"selectedFolderId-----")
    // LoaderHelper.loaderStatus(true);
    try {
      const result = await AuthService.GetSubFolder(selectedFolderId,value);
      if (result?.success) {
        // LoaderHelper.loaderStatus(false);
        setGetFolderSub(result?.data?.data);
      } else {
        // LoaderHelper.loaderStatus(false);
        // AlertHelper.show('danger', 'Gimmel', result?.message  );
      }
    } catch (error) {
      // LoaderHelper.loaderStatus(false);
      // ('Error occurred:', 'Gimmel', error);
    }
  };
  
  const handleDeleteSubFolder = async (id,SubFolderId) => {
    // console.log("delete sub folder----")
     setLoader(true);
     try {
       const result = await AuthService.DeleteSubFolder(id,SubFolderId);
      // console.log(result,"resultDeletefolder---")
       // (result, "result---delete")
       if (result) {
        //  console.log("r-test----")
         setLoader(false);
         handleGetFolderSub(selectedFolderId);
         handleGetFolder();
   
         AlertHelper.show('success', 'Gimmel',result?.message);
       } else {
         setLoader(false);
         AlertHelper.show('danger', 'Gimmel', result?.message);
       }
     } catch (error) {
       setLoader(false);
       // ('Error occurred:', 'Gimmel', error);
     }
   };
   
  
    return (
        <>{isMobile ?
            <HistoryWatch  watchHistoryData={libraryVideo} title={title} 
           
            />
            :
            <WatchHistoryData watchHistoryData={libraryVideo} title={title}
              getFolder={getFolder} rename={rename} setValue={setValue} handleCreateFolder={handleCreateFolder} handleDeleteFolder={handleDeleteFolder} handleRename={handleRename} handleSaveVideo={handleSaveVideo} setSelectedFolderId={setSelectedFolderId} setRename={setRename} 
            getSaveVideo={getSaveVideo} getSubFolder={getSubFolder} handleCreateFolderSub={handleCreateFolderSub} handleGetFolderSub={handleGetFolderSub} handleGetFolder={handleGetFolder}
            handleSaveVideonext={handleSaveVideonext}
            handleSaveSubFolderVideo={handleSaveSubFolderVideo}
            handleDeleteSubFolder={handleDeleteSubFolder}
            
            />
        }</>
    );
};

export default PageComponent;