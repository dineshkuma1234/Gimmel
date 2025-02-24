"use client";
import React, { useContext, useEffect, useState } from 'react';
import VideoDetails from '@/app/entities/details/page';
import AuthService from "@/services/AuthService";
import { useParams } from 'next/navigation';
import { VideoDetailsContext } from '@/app/Context/VideoDetails/videoDetailsContext';
import { UseLoader } from '@/app/LoderHelper/context/loaderHelperContext';
import WatchVideo from '@/app/(MobileFlow)/watchvideo/page';
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
  const {setLoader} = UseLoader()
    const [deviceWidth, setDeviceWidth] = useState(0);
  
  useEffect(() => {
     
          handleGetPostid();
          handleQuiz()
          // handleSave()
          handleGetFolder(value);
          handleCreateFolder()
        

  }, []);
  
  useEffect(() => {
      
      
  
      const updateWidth = () => {
        setDeviceWidth(window.innerWidth);
      };
  
      updateWidth();
      window.addEventListener('resize', updateWidth);
  
      return () => window.removeEventListener('resize', updateWidth);
    }, []);

  useEffect(()=>{
    handleSharePost(id, selectedTopics);
  },[selectedTopics])
   // getid video 
   const handleGetPostid = async () => {
       
        setLoader(true);

        try {
        const result = await AuthService.getvideoid(id);
        setLoader(false);

        if (result?.success) {
          // setgetvideoid(result?.data);
          setLoader(false);

          
         setdata(result?.data)
         console.log(result, "data----nwetest");

          // if (result?.data?.postId) {
          //   setPostId(result.data.postId);
          //   console.log("Post ID Updated:", result.data.postId);
          // } else {
          //   console.warn("postId not found in API response");
          // }
          setLoader(false);

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
              setLoader(false);
            } else {
              setLoader(false);
              // AlertHelper.show('danger', 'Gimmel', result?.message);
          }
      } catch (error) {
        setLoader(false);
        // console.log('Error occurred:', 'Gimmel', error);
      }
    };
    
    const handleGetFolder = async (value) => {

      // setLoader(true);
        try {
        const result = await AuthService.GetFolder(value);
        if (result?.success) {
          console.log(result,"result of get folder")
          // LoaderHelper.loaderStatus(false);
          setGetFolder(result?.data?.data);
        } else {
          // setLoader(false);
        }
      } catch (error) {
        // setLoader(false);
        console.log('Error occurred:', 'Gimmel', error);
      }
    };
  
    const handleCreateFolder = async (folders) => {

      // setLoader(true);
      try {
        const result = await AuthService.createFolder(folders);
        console.log(result, 'result');
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
        console.log('Error occurred:', 'Gimmel', error);
      }
    };
  
    const handleDeleteFolder = async (id) => {

      setLoader(true);
      try {
        const result = await AuthService.deleteFolder(id);
        
        console.log(result, "result---delete")
        if (result?.success) {
          setLoader(false);
          handleGetFolder();
          AlertHelper.show('success', 'Gimmel',result?.message);
        } else {
          setLoader(false);
          AlertHelper.show('danger', 'Gimmel', result?.message);
        }
      } catch (error) {
        setLoader(false);
        console.log('Error occurred:', 'Gimmel', error);
      }
    };
  
    const handleRename = async (rename, id) => {

      console.log(rename, id, "rename and id --------------")
      // setLoader(true);
      try {
        const result = await AuthService.renames(rename, id);
        if (result?.success) {
          console.log(result, "result of rename")
          // setLoader(false);
          handleGetFolder();
          setRename("");
          AlertHelper.show('success', 'Gimmel', result?.message);
        } else {
          // setLoader(false);
          AlertHelper.show('danger', 'Gimmel', result?.message);
        }
      } catch (error) {
        // setLoader(false);
        console.log('Error occurred:', 'Gimmel', error);
      }
    };
  
    const handleSaveVideo = async () => {
      console.log("handleSaveVideo function called");

      // setLoader(true);

      if(!selectedFolderId){
        console.log("No folder selected. Exiting function.");

        // AlertHelper.show('warning', 'Gimmel',"Please select folder");
        return;
      }
      setLoader(false);

      try {
        console.log("Calling AuthService.SaveVideo with:", selectedFolderId, postId);

        const result = await AuthService.SaveVideo(selectedFolderId, postId);
        if (result?.success) {
          console.log("Video saved successfully:", result);

          // setLoader(false);
          setSelectedFolderId(null)
          // navigation.navigate("videodetails2");
          handleGetPostid()
          // navigation.setParams({
          //   data: null,
          // });
          console.log("Navigation to videodetails2 triggered.");

          // AlertHelper.show('success', 'Gimmel', result?.data);
        } else {
          // setLoader(false);
          console.log("Failed to save video. Error message:", result?.message);

          // AlertHelper.show('danger', 'Gimmel', result?.message);
        }
      } catch (error) {
        // setLoader(false);
        console.log('Error occurred:', 'Gimmel', error);
      }
    };
    const handleSharePost = async (id, selectedTopics) => {
      // setLoader(true);
      // console.log(handleSharePost, "handleSharePost")
      try {
          const result = await AuthService.SharePost(id, selectedTopics);
          if (result?.success) {
            setShareLink(result?.data)
            // setLoader(false);
              // AlertHelper.show('success', 'Gimmel', result?.data);
          } else {
            // setLoader(false);
              // AlertHelper.show('danger', 'Gimmel', result?.message);
          }
      } catch (error) {
        // setLoader(false);
          // console.log('Error occurred:', 'Gimmel', error);
      }
    };
    const handleReportPost = async (selectedValues,text,postId) => {
      // LoaderHelper.loaderStatus(true);
      try {
          const result = await AuthService.ReportPost(selectedValues,text, postId);
          if (result?.success) {
              // LoaderHelper.loaderStatus(false);
              // AlertHelper.show('success', 'Gimmel', result?.data);
              // navigation.navigate('TabNavigation', {
              //   screen: 'Home',
              // })
              router.push("/")
          } else {
              // LoaderHelper.loaderStatus(false);
              // AlertHelper.show('danger', 'Gimmel', result?.message);
          }
      } catch (error) {
          // LoaderHelper.loaderStatus(false);
          console.log('Error occurred:', 'Gimmel', error);
      }
    };
    

  return (
    <>

    {deviceWidth > 991 ? ( 
    <VideoDetails getvideoid={getvideoid} data={data} VideoDetailsState={VideoDetailsState} getQuiz={getQuiz} getFolder={getFolder} rename={rename} setValue={setValue} handleCreateFolder={handleCreateFolder} handleDeleteFolder={handleDeleteFolder} handleRename={handleRename} handleSaveVideo={handleSaveVideo} setSelectedFolderId={setSelectedFolderId} setRename={setRename} handleSharePost={handleSharePost} shareLink={shareLink} setSelectedTopics={setSelectedTopics} selectedTopics={selectedTopics}  />
  ) : ( 
    <WatchVideo getvideoid={getvideoid} data={data} VideoDetailsState={VideoDetailsState} getQuiz={getQuiz} getFolder={getFolder} rename={rename} setValue={setValue} handleCreateFolder={handleCreateFolder} handleDeleteFolder={handleDeleteFolder} handleRename={handleRename} handleSaveVideo={handleSaveVideo} setSelectedFolderId={setSelectedFolderId} setRename={setRename} handleSharePost={handleSharePost} shareLink={shareLink} setSelectedTopics={setSelectedTopics} selectedTopics={selectedTopics}/>

  )}
  </>
);
}

export default PageComponent;