"use client";
import React, { useContext, useEffect, useState } from 'react';
import VideoDetails from '@/app/entities/details/page';
import AuthService from "@/services/AuthService";
import { useParams } from 'next/navigation';
import { VideoDetailsContext } from '@/app/Context/VideoDetails/videoDetailsContext';
import LoaderHelper from '../../../../../src/LoaderHelper/LoaderHelper';
function PageComponent() {

  const params = useParams();
  const id = params.video_id;
  const [getvideoid, setgetvideoid] = useState([]);
  const [data , setdata] = useState();
  const [loading,setLoading] = useState(false);
  const [VideoDetailsState, updateVideoDetailsState] =useContext(VideoDetailsContext);
  const [getQuiz,setGetQuiz] = useState("")
  const [getFolder, setGetFolder] = useState("")
  const [rename, setRename] = useState("")
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const [value, setValue] = useState(null);

  console.log('getQuiz', getQuiz)
  useEffect(() => {
     
          handleGetPostid();
          handleQuiz()
          // handleSave()
          handleGetFolder(value);

  }, []);
  
   // getid video 
   const handleGetPostid = async () => {
      setLoading(true);
      try {
        const result = await AuthService.getvideoid(id);
        console.log(result, "getvideoid----");
    
        if (result?.success) {
          // setgetvideoid(result?.data);
          
         setdata(result.data)
          // if (result?.data?.postId) {
          //   setPostId(result.data.postId);
          //   console.log("Post ID Updated:", result.data.postId);
          // } else {
          //   console.warn("postId not found in API response");
          // }
        }
      } catch (error) {
        console.error("Error occurred:", error);
      } finally {
        setLoading(false);
      }
    };
    const handleQuiz = async () => {
      LoaderHelper.loaderStatus(true);
      try {
          const result = await AuthService.getQuize(id);
          console.log(result,"result of quize-----")
          if (result?.success) {
              setGetQuiz(result?.questions)
              LoaderHelper.loaderStatus(false);
          } else {
              LoaderHelper.loaderStatus(false);
              // AlertHelper.show('danger', 'Gimmel', result?.message);
          }
      } catch (error) {
          LoaderHelper.loaderStatus(false);
          // console.log('Error occurred:', 'Gimmel', error);
      }
    };
    
    const handleGetFolder = async (value) => {
      LoaderHelper.loaderStatus(true);
      try {
        const result = await AuthService.GetFolder(value);
        if (result?.success) {
          LoaderHelper.loaderStatus(false);
          setGetFolder(result?.data?.data);
        } else {
          LoaderHelper.loaderStatus(false);
        }
      } catch (error) {
        LoaderHelper.loaderStatus(false);
        console.log('Error occurred:', 'Gimmel', error);
      }
    };
  
    const handleCreateFolder = async (addnewFolder) => {
      LoaderHelper.loaderStatus(true);
      try {
        const result = await AuthService.createFolder(addnewFolder);
        console.log(result, 'result');
        if (result?.success) {
          LoaderHelper.loaderStatus(false);
          handleGetFolder();
          AlertHelper.show('success', 'Gimmel', result?.data);
        } else {
          LoaderHelper.loaderStatus(false);
          AlertHelper.show('danger', 'Gimmel', result?.message);
        }
      } catch (error) {
        LoaderHelper.loaderStatus(false);
        console.log('Error occurred:', 'Gimmel', error);
      }
    };
  
    const handleDeleteFolder = async (id) => {
      LoaderHelper.loaderStatus(true);
      try {
        const result = await AuthService.deleteFolder(id);
        
        console.log(result, "result---")
        if (result?.success) {
          LoaderHelper.loaderStatus(false);
          handleGetFolder();
          AlertHelper.show('success', 'Gimmel',result?.message);
        } else {
          LoaderHelper.loaderStatus(false);
          AlertHelper.show('danger', 'Gimmel', result?.message);
        }
      } catch (error) {
        LoaderHelper.loaderStatus(false);
        console.log('Error occurred:', 'Gimmel', error);
      }
    };
  
    const handleRename = async (rename, id) => {
      LoaderHelper.loaderStatus(true);
      try {
        const result = await AuthService.renames(rename, id);
        if (result?.success) {
          LoaderHelper.loaderStatus(false);
          handleGetFolder();
          setRename("");
          AlertHelper.show('success', 'Gimmel', result?.message);
        } else {
          LoaderHelper.loaderStatus(false);
          AlertHelper.show('danger', 'Gimmel', result?.message);
        }
      } catch (error) {
        LoaderHelper.loaderStatus(false);
        console.log('Error occurred:', 'Gimmel', error);
      }
    };
  
    const handleSaveVideo = async () => {
      
      if(!selectedFolderId){
        AlertHelper.show('warning', 'Gimmel',"Please select folder");
        return;
      }
      LoaderHelper.loaderStatus(true);
      try {
        const result = await AuthService.SaveVideo(selectedFolderId, postId);
        console.log(result,"result of save video ---")
        if (result?.success) {
          LoaderHelper.loaderStatus(false);
          setSelectedFolderId(null)
          navigation.navigate("Home");
          navigation.setParams({
            data: null,
          });
          AlertHelper.show('success', 'Gimmel', result?.data);
        } else {
          LoaderHelper.loaderStatus(false);
          AlertHelper.show('danger', 'Gimmel', result?.message);
        }
      } catch (error) {
        LoaderHelper.loaderStatus(false);
        console.log('Error occurred:', 'Gimmel', error);
      }
    };
  

  return (
    <VideoDetails getvideoid={getvideoid} data={data} VideoDetailsState={VideoDetailsState} getQuiz={getQuiz} getFolder={getFolder} rename={rename} setValue={setValue} handleCreateFolder={handleCreateFolder} handleDeleteFolder={handleDeleteFolder} handleRename={handleRename} handleSaveVideo={handleSaveVideo}/>
  )
}

export default PageComponent;