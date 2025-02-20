"use client";
import React, { useContext, useEffect, useState } from 'react';
import VideoDetails from '@/app/entities/details/page';
import AuthService from "@/services/AuthService";
import { useParams } from 'next/navigation';
import { VideoDetailsContext } from '@/app/Context/VideoDetails/videoDetailsContext';
import { useLoader } from '@/app/LoderHelper/context/loaderHelperContext';
// import LoaderHelper from '../../../../../src/LoaderHelper/LoaderHelper';
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
  const [shareLink,setShareLink] = useState("")
  const [selectedTopics, setSelectedTopics] = useState([]);
  const postId = id?.video_id|| id;
  const {setLoader} = useLoader()
  console.log('selectedFolderId', selectedFolderId)
  useEffect(() => {
     
          handleGetPostid();
          handleQuiz()
          // handleSave()
          handleGetFolder(value);
          handleCreateFolder()
          handleSaveVideo()

  }, []);
  
  useEffect(()=>{
    handleSharePost(id, selectedTopics);
  },[selectedTopics])
   // getid video 
   const handleGetPostid = async () => {
       
        setLoader(true);

        try {
        const result = await AuthService.getvideoid(id);
        console.log(result, "getvideoid----");
        setLoader(true);

        if (result?.success) {
          // setgetvideoid(result?.data);
          setLoader(true);

          
         setdata(result.data)
          // if (result?.data?.postId) {
          //   setPostId(result.data.postId);
          //   console.log("Post ID Updated:", result.data.postId);
          // } else {
          //   console.warn("postId not found in API response");
          // }
          setLoader(true);

        }
      } catch (error) {
        console.error("Error occurred:", error);
      } finally {
        setLoading(false);
      }
    };
    const handleQuiz = async () => {

      setLoader(true);
      try {
          const result = await AuthService.getQuize(id);
          console.log(result,"result of quize-----")
          if (result?.success) {
              setGetQuiz(result?.questions)
              setLoader(true);
            } else {
            setLoader(true);
            // AlertHelper.show('danger', 'Gimmel', result?.message);
          }
      } catch (error) {
        setLoader(true);
        // console.log('Error occurred:', 'Gimmel', error);
      }
    };
    
    const handleGetFolder = async (value) => {

      setLoader(true);
        try {
        const result = await AuthService.GetFolder(value);
        if (result?.success) {
          // console.log(result,"result of get folder")
          // LoaderHelper.loaderStatus(false);
          setGetFolder(result?.data?.data);
        } else {
          setLoader(true);        }
      } catch (error) {
        setLoader(true);
        console.log('Error occurred:', 'Gimmel', error);
      }
    };
  
    const handleCreateFolder = async (folders) => {

      setLoader(true);
      try {
        const result = await AuthService.createFolder(folders);
        console.log(result, 'result');
        if (result?.success) {
          setLoader(true);
          handleGetFolder();
          AlertHelper.show('success', 'Gimmel', result?.data);
        } else {
          setLoader(true);
          AlertHelper.show('danger', 'Gimmel', result?.message);
        }
      } catch (error) {
        setLoader(true);
        console.log('Error occurred:', 'Gimmel', error);
      }
    };
  
    const handleDeleteFolder = async (id) => {

      setLoader(true);
      try {
        const result = await AuthService.deleteFolder(id);
        
        console.log(result, "result---")
        if (result?.success) {
          setLoader(true);
          handleGetFolder();
          AlertHelper.show('success', 'Gimmel',result?.message);
        } else {
          setLoader(true);
          AlertHelper.show('danger', 'Gimmel', result?.message);
        }
      } catch (error) {
        setLoader(true);
        console.log('Error occurred:', 'Gimmel', error);
      }
    };
  
    const handleRename = async (rename, id) => {

      console.log(rename, id, "rename and id --------------")
      setLoader(true);
      try {
        const result = await AuthService.renames(rename, id);
        if (result?.success) {
          console.log(result, "result of rename")
          setLoader(true);
          handleGetFolder();
          setRename("");
          AlertHelper.show('success', 'Gimmel', result?.message);
        } else {
          setLoader(true);
          AlertHelper.show('danger', 'Gimmel', result?.message);
        }
      } catch (error) {
        setLoader(true);
        console.log('Error occurred:', 'Gimmel', error);
      }
    };
  
    const handleSaveVideo = async () => {

      if(!selectedFolderId){
        // AlertHelper.show('warning', 'Gimmel',"Please select folder");
        return;
      }
      setLoader(true);
      try {
        const result = await AuthService.SaveVideo(selectedFolderId, postId);
        console.log(result,"result of save video ---")
        if (result?.success) {
          setLoader(true);
          setSelectedFolderId(null)
          navigation.navigate("Home");
          navigation.setParams({
            data: null,
          });
          // AlertHelper.show('success', 'Gimmel', result?.data);
        } else {
          setLoader(true);
          // AlertHelper.show('danger', 'Gimmel', result?.message);
        }
      } catch (error) {
        setLoader(true);
        console.log('Error occurred:', 'Gimmel', error);
      }
    };
    const handleSharePost = async (id, selectedTopics) => {
      setLoader(true);
      console.log(handleSharePost, "handleSharePost")
      try {
          const result = await AuthService.SharePost(id, selectedTopics);
          if (result?.success) {
            setShareLink(result?.data)
            setLoader(true);
              // AlertHelper.show('success', 'Gimmel', result?.data);
          } else {
            setLoader(true);
              // AlertHelper.show('danger', 'Gimmel', result?.message);
          }
      } catch (error) {
        setLoader(true);
          // console.log('Error occurred:', 'Gimmel', error);
      }
    };
    

  return (
    <VideoDetails getvideoid={getvideoid} data={data} VideoDetailsState={VideoDetailsState} getQuiz={getQuiz} getFolder={getFolder} rename={rename} setValue={setValue} handleCreateFolder={handleCreateFolder} handleDeleteFolder={handleDeleteFolder} handleRename={handleRename} handleSaveVideo={handleSaveVideo} setSelectedFolderId={setSelectedFolderId} setRename={setRename} handleSharePost={handleSharePost} shareLink={shareLink} setSelectedTopics={setSelectedTopics} selectedTopics={selectedTopics}  />
  )
}

export default PageComponent;