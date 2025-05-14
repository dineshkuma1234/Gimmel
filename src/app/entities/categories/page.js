"use client"

import React, { useEffect, useState } from 'react';
import Header from "../../../components/header/header";
import SliderSection from "../../componentsIn/slidercategories/slider";
import AuthService from "@/services/AuthService";
import { useParams, useRouter } from "next/navigation";
import { UseLoader } from '@/app/LoderHelper/context/loaderHelperContext';
import toast, { Toaster } from "react-hot-toast";
import   calculateMonthsAgo from "@/app/utils/monthsAgo/page";

function Categories({
  handleNotIntrested,
  categoryVideo,
  categoryVideoname,
  img,
  handleGetCategories,
}) {

  const params = useParams();
  const [getFolder, setGetFolder] = useState("")
  const [rename, setRename] = useState("")
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const [getSaveVideo,setGetSaveVideo] = useState([]);
  const [getSubFolder,setGetFolderSub]= useState();
  const [suggested,setsuggested]=useState()
  const id = params.video_id;
  // const postId = id?.video_id|| id;
  const [postId, setPostId] = useState("");
  // const idvideo = data?._id;
  const [value, setValue] = useState(null);
  const {setLoader} = UseLoader()


  useEffect(() => {
     
    handleGetPostid();
   
    // handleSave()
    handleGetFolder(value);
    handleCreateFolder()
    handleNotIntrested()
    handleCreateFolderSub()
    handleGetFolderSub()

    // handleSaveVideonext(selectedFolderId)
}, []);


useEffect(() => {
if (selectedFolderId) {
  // handleSaveVideonext(selectedFolderId);
}
}, [selectedFolderId]);


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
// finally {
//   setLoading(false);
// }
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

        setLoader(false);
        setSelectedFolderId(null);
       
        handleGetPostid();
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
    <>
    <Toaster position="top-right" reverseOrder={false} />
      

      <div className="mt-2">
        <div className="custom-container">
          <div className="page-main-title">
            <h3>{categoryVideoname}</h3>
          </div>
        </div>

        <div className="swiper-container">
          <SliderSection
            categoryVideo={categoryVideo}
            categoryVideoname={categoryVideoname}
            handleNotIntrested={handleNotIntrested}
            img={img}
            // handleGetCategories={handleGetCategories}
            getFolder={getFolder} rename={rename} setValue={setValue} handleCreateFolder={handleCreateFolder} handleDeleteFolder={handleDeleteFolder} handleRename={handleRename} handleSaveVideo={handleSaveVideo} setSelectedFolderId={setSelectedFolderId} setRename={setRename} 
            getSaveVideo={getSaveVideo} getSubFolder={getSubFolder} handleCreateFolderSub={handleCreateFolderSub} handleGetFolderSub={handleGetFolderSub} handleGetFolder={handleGetFolder}
            handleSaveVideonext={handleSaveVideonext}
            handleSaveSubFolderVideo={handleSaveSubFolderVideo}
            handleDeleteSubFolder={handleDeleteSubFolder}
            setPostId={setPostId}
          />
        </div>
      </div>
    </>
  );
}

export default Categories;
