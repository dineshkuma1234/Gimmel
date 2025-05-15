"use client";

import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import RequestData from "../entities/request-data/page";
import AuthService from "@/services/AuthService";
import AddRequest from "../(MobileFlow)/requestmobile/addrequest/page";
import RequestSuccess from "../(MobileFlow)/requestmobile/request-success/page";
import RequestOverview from "../(MobileFlow)/requestmobile/requestoverview/page";
import RequestMobile from "../(MobileFlow)/requestmobile/page";
import { useRequestContext } from "../Context/request/page";
import RequestPreview from "../(MobileFlow)/requestmobile/requestpreview/page";
import { useParams, useRouter } from "next/navigation";
import { UseLoader } from "../LoderHelper/context/loaderHelperContext";

function PageComponent() {
  const [requestListData, setRequestListData] = useState("");
  const [getVideoRequestData, setgetVideoRequestData] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  // const id = requestListData?.[0]?._id;
  const [id,setId]= useState();
  const [shareLink, setShareLink] = useState("");
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [deviceWidth, setDeviceWidth] = useState(0);
  const [idvideo , setidvideo] = useState()
    const router = useRouter();
      const { setLoader } = UseLoader();
      const params = useParams();
      const [getFolder, setGetFolder] = useState("")
      const [rename, setRename] = useState("")
      const [selectedFolderId, setSelectedFolderId] = useState(null);
      const [getSaveVideo,setGetSaveVideo] = useState([]);
      const [getSubFolder,setGetFolderSub]= useState();
      const [suggested,setsuggested]=useState()
      const postId = id?.video_id|| id;
      const [value, setValue] = useState(null);
    
    
      useEffect(() => {
         
        // handleGetPostid();
       
        // handleSave()
        handleGetFolder(value);
        handleCreateFolder()
        // handleNotIntrested()
        handleCreateFolderSub()
        handleGetFolderSub()
    
        // handleSaveVideonext(selectedFolderId)
    }, []);
    
    console.log(getSaveVideo,"getSaveVideo-----------")
    
    useEffect(() => {
    if (selectedFolderId) {
      handleSaveVideonext(selectedFolderId);
    }
    }, [selectedFolderId]);
    
    
// console.log(getVideoRequestData,"getVideoRequestData---")
// console.log(id,"idvideo--")
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

  const handlegetVideoRequest = async (id) => {
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

  const handleRequestSaveVideo = async (selectedItems) => {
    setLoader(true);
    try {
      setLoader(false);
      const result = await AuthService.RequestSaveVideo(selectedItems, id);
      if (result?.success) {
       
      } else {
        setLoader(false);
      }
    } catch (error) {}
  };
    const handleSharePost = async (idvideo, selectedTopics) => {
    try {
      const result = await AuthService.SharePost(idvideo, selectedTopics);
      if (result?.success) {
        const videoUrl = `https://gimmeldevelop.netlify.app/mainHome/${idvideo}/videodetails2`;

        setShareLink(videoUrl);
      } else {
      }
    } catch (error) {}
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
    
    if (!selectedFolderId) {
      toast.error( "Please select folder", {
          className: "custom-toast",
        });
      return;
    }
    setLoader(true);

    try {
      // console.log("Calling AuthService.SaveVideo with:", selectedFolderId, postId);

      const result = await AuthService.SaveVideo(selectedFolderId, postId);
      if (result?.success) {
        // handleGetPost();
        // setNoLoad(false); 
        // setPage(1);
        setLoader(false);
        setSelectedFolderId(null);
      //  console.log("  id save after check")
        // handleGetPostid();
         toast.success(result?.data || "success", {
          className: "custom-toast-success",
        });
      } else {
        setLoader(false);
      }
    } catch (error) {
      setLoader(false);
      // console.log('Error occurred:', 'Gimmel', error);
    } finally {
      setLoader(false);
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

const handleSaveVideonext = async (id) => {

  // LoaderHelper.loaderStatus(true);
  try {
    ("Calling API to fetch saved videos...");
    const result = await AuthService.GetSaveVideo(id);


    if (result?.success) {

      // LoaderHelper.loaderStatus(false);
      setGetSaveVideo(result?.data?.videos);
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
    <>
     <Toaster position="top-right" reverseOrder={false} />
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
          idvideo={idvideo}
          setId={setId}
          setidvideo={setidvideo}
            getFolder={getFolder} rename={rename} setValue={setValue} handleCreateFolder={handleCreateFolder} handleDeleteFolder={handleDeleteFolder} handleRename={handleRename} handleSaveVideo={handleSaveVideo} setSelectedFolderId={setSelectedFolderId} setRename={setRename} 
            getSaveVideo={getSaveVideo} getSubFolder={getSubFolder} handleCreateFolderSub={handleCreateFolderSub} handleGetFolderSub={handleGetFolderSub} handleGetFolder={handleGetFolder}
            handleSaveVideonext={handleSaveVideonext}
            handleSaveSubFolderVideo={handleSaveSubFolderVideo}
            handleDeleteSubFolder={handleDeleteSubFolder}
        />
      ) : (
        <>
          <AddRequest/>
          {/* <RequestOverview yourRequest={yourRequest} description={discription} avoided={avoided} details={details} handleCreateRequest={handleCreateRequest}/> */}
          <RequestSuccess />
          <RequestMobile />
          <RequestPreview />
        </>
      )}
    </>
  );
}

export default PageComponent;
