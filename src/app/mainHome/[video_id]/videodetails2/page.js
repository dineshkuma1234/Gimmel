"use client";
import React, { useContext, useEffect, useState } from 'react';
import VideoDetails from '../../../entities/details/page';
import AuthService from "@/services/AuthService";
import { useParams } from 'next/navigation';
import { VideoDetailsContext } from '@/app/Context/VideoDetails/videoDetailsContext';
import { UseLoader } from '@/app/LoderHelper/context/loaderHelperContext';
import WatchVideo from '@/app/(MobileFlow)/watchvideo/page';
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
// import { downloadMaterialQuestion, materialQuestion, regenerateMaterialQuestion } from '@/services/MaterialServices/materialServices';
// import LoaderHelper from '../../../../../src/LoaderHelper/LoaderHelper';
function PageComponent() {
  const router = useRouter();
 
  const params = useParams();
  const id = params.video_id;
  const [getvideoid, setgetvideoid] = useState([]);
  const [data , setdata] = useState();
  const [loading,setLoading] = useState(false);
  const [VideoDetailsState, updateVideoDetailsState] =useContext(VideoDetailsContext);
  const [getQuiz,setGetQuiz] = useState("")
  const [getid,setId]=useState("")
  const [getHomeWork,setHomeWork] = useState("")
  const [getDiscussion,setDiscussion] = useState("")
  const [getHeader,setHeader] = useState("")
  const [getActivity,setActivity] = useState("")
  const [getTest,setTest] = useState("")
  const [getQuizPdf,setGetQuizPdf] = useState("")
  const [getFolder, setGetFolder] = useState("")
  const [rename, setRename] = useState("")
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const [value, setValue] = useState(null);
  const [shareLink,setShareLink] = useState("")
  const [selectedTopics, setSelectedTopics] = useState([]);
  const postId = id?.video_id|| id;
  const {setLoader} = UseLoader()
  const [deviceWidth, setDeviceWidth] = useState(0);
  const [suggested,setsuggested]=useState()
  const [getSaveVideo,setGetSaveVideo] = useState([]);
  const [getSubFolder,setGetFolderSub]= useState();
  const [topicPost, setTopicPost] = useState("")
  const idvideo = data?._id;
  const [getReview, setReview] = useState("");
  const [like, setLike] = useState("")


  useEffect(() => {
     
          handleGetPostid();
          handleQuiz()
          handleDiscussion()
          handleActivity();
          handleHomeWork();
          handleTest();
          // handleSave()
          handleGetFolder(value);
          handleCreateFolder()
          handleGetSuggested()
          handleNotIntrested()
          handleCreateFolderSub()
          handleGetFolderSub()
          handleTopicPost();
          handleReviewGet(postId || id);
          // handleSaveVideonext(selectedFolderId)
  }, []);
 
 
  useEffect(() => {
    if (selectedFolderId) {
        // handleSaveVideonext(selectedFolderId);
    }
}, [selectedFolderId]);
 
 
  useEffect(() => {
     
     
 
      const updateWidth = () => {
        setDeviceWidth(window.innerWidth);
      };
 
      updateWidth();
      window.addEventListener('resize', updateWidth);
 
      return () => window.removeEventListener('resize', updateWidth);
    }, []);
 
  // useEffect(()=>{
  //   handleSharePost(id, selectedTopics);
  // },[selectedTopics])
  //  // getid video
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
      } finally {
        setLoading(false);
      }
    };
 
    const handleQuiz = async () => {
      setLoader(true);
      try {
          const result = await AuthService.getQuize(id);
          // (result?.data[0]?.questions,"result of quize-----")
          if (result?.success) {
              setGetQuiz(result?.data[0]?.questions)
              setId(result?.data[0]?.postId)
              setLoader(false);
            } else {
              setLoader(false);
              // AlertHelper.show('danger', 'Gimmel', result?.message);
          }
      } catch (error) {
        setLoader(false);
        // ('Error occurred:', 'Gimmel', error);
      }
    };
 
    const handleDiscussion = async () => {
      setLoader(true);
      try {
          const result = await AuthService.getDiscusion(id);
          // (result,"result of quize-----")
          if (result?.success) {
              setDiscussion(result?.data?.discussions[0]?.discussionPoints);
              setHeader(result?.data?.header);
              setLoader(false);
            } else {
              setLoader(false);
              // AlertHelper.show('danger', 'Gimmel', result?.message);
          }
      } catch (error) {
        setLoader(false);
        // ('Error occurred:', 'Gimmel', error);
      }
    };
 
    const handleActivity = async () => {
      setLoader(true);
      try {
          const result = await AuthService.getActivity(id);
          // (result,"result of quize-----")
          if (result?.success) {
            setActivity(result?.data?.activities[0]?.activities);
            setHeader(result?.data?.header);
              setLoader(false);
            } else {
              setLoader(false);
              // AlertHelper.show('danger', 'Gimmel', result?.message);
          }
      } catch (error) {
        setLoader(false);
        // ('Error occurred:', 'Gimmel', error);
      }
    };
 
    const handleHomeWork = async () => {
      setLoader(true);
      try {
          const result = await AuthService.getHomeWork(id);
          // (result,"result of quize-----")
          if (result?.success) {
              setHomeWork(result?.data?.homework[0]?.assignments);
              setHeader(result?.data?.header);
              setLoader(false);
            } else {
              setLoader(false);
              // AlertHelper.show('danger', 'Gimmel', result?.message);
          }
      } catch (error) {
        setLoader(false);
        // ('Error occurred:', 'Gimmel', error);
      }
    };
 
    const handleTest = async () => {
      setLoader(true);
      try {
          const result = await AuthService.getTest(id);
          // (result,"result of quize-----")
          if (result?.success) {
              setTest(result?.data[0]?.tasks)
              setLoader(false);
            } else {
              setLoader(false);
              // AlertHelper.show('danger', 'Gimmel', result?.message);
          }
      } catch (error) {
        setLoader(false);
        // ('Error occurred:', 'Gimmel', error);
      }
    };
 
    const quizRegenrate  = async () =>{
      setLoader (true);
      try{
        const result = await AuthService.QuizRegenerate(id);
        if(result?.success){
          setGetQuiz(result?.questions)
          setLoader(false);
 
        }else{
          setLoader(false);
        }
      }catch(error){
        setLoader(false);
      }
    };
 
    const discussionRegenrate  = async () =>{
      setLoader (true);
      try{
        const result = await AuthService.DiscussionRegenerate(id);
        if(result?.success){
          setDiscussion(result?.discussionPoints);
          setLoader(false);
 
        }else{
          setLoader(false);
        }
      }catch(error){
        setLoader(false);
      }
    };
 
    const activityRegenrate  = async () =>{
      setLoader (true);
      try{
        const result = await AuthService.ActivityRegenerate(id);
        if(result?.success){
          setActivity(result?.activities?.activities);
          setLoader(false);
 
        }else{
          setLoader(false);
        }
      }catch(error){
        setLoader(false);
      }
    };
 
    const homeworkRegenrate  = async () =>{
      setLoader (true);
      try{
        const result = await AuthService.HomeWorkRegenerate(id);
        if(result?.success){
          setHomeWork(result?.homework.assignments);
          setLoader(false);
 
        }else{
          setLoader(false);
        }
      }catch(error){
        setLoader(false);
      }
    };
 
 
    const handleQuizPdf = async (id,handleShow) => {
      setLoader(true);
      try {
      const result = await AuthService.getQuizPdf(id);
      setLoader(false);
      const blob = new Blob([result], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
     
      const link = document.createElement("a");
      link.href = url;
      link.download = "quiz.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      if (handleShow) handleShow();
     
      } catch (error) {
      setLoader(false);
      console.error("Error downloading PDF:", error);
      }
      };
 
      const handleDiscussPdf = async (id,handleShow) => {
        setLoader(true);
        try {
        const result = await AuthService.getDiscussionPdf(id);      
        setLoader(false);
        const blob = new Blob([result], { type: "application/pdf" });
        const url = window.URL.createObjectURL(blob);
       
        const link = document.createElement("a");
        link.href = url;
        link.download = "discussion.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        if (handleShow) handleShow();
       
        } catch (error) {
        setLoader(false);
        console.error("Error downloading PDF:", error);
        }
        };
 
        const handleActivityPdf = async (id,handleShow) => {
          setLoader(true);
          try {
          const result = await AuthService.getActivityPdf(id);      
          setLoader(false);
          const blob = new Blob([result], { type: "application/pdf" });
          const url = window.URL.createObjectURL(blob);
         
          const link = document.createElement("a");
          link.href = url;
          link.download = "discussion.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
          if (handleShow) handleShow();
         
          } catch (error) {
          setLoader(false);
          console.error("Error downloading PDF:", error);
          }
          };
 
          const handleHomeWorkPdf = async (id,handleShow) => {
            setLoader(true);
            try {
            const result = await AuthService.getHomeWorkPdf(id);      
            setLoader(false);
            const blob = new Blob([result], { type: "application/pdf" });
            const url = window.URL.createObjectURL(blob);
           
            const link = document.createElement("a");
            link.href = url;
            link.download = "homework.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
            if (handleShow) handleShow();
           
            } catch (error) {
            setLoader(false);
            console.error("Error downloading PDF:", error);
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
   
  
    const handleGetSuggested = async () => {  
      // setLoader(true); // Start loader
   
      try {
        const result = await AuthService.getSuggested(postId);
        // ("API Response:", result);
   
        if (result?.success) {
          // ("Suggested Data Set:", result?.data);
          setsuggested(result?.data); // Set suggested data
        } else {
          // console.warn("API call was not successful");
        }
      } catch (error) {
        // console.error("Error occurred:", error);
      } finally {
        // setLoader(false); // Ensure loader stops after API call
      }
    };
 
 
   
    const handleTopicPost = async () => {
      setLoader(true);
      try {
        const result = await AuthService.TopicPost();
        // (result, 'result---')
        if (result?.success) {
          setTopicPost(result?.data)
          setLoader(false);
   
        } else {
          AlertHelper.show('danger', 'Gimmel', result?.message);
          setLoader(false);
   
        }
      } catch (error) {
        setLoader(false);
   
        // ('Error occurred:', 'Gimmel', error);
      }
    };
   
 
    const handleNotIntrested = async (id) => {
      // LoaderHelper.loaderStatus(true);
      // ('function calll')
      setLoader(true);
      try {
 
        const result = await AuthService.NotIntrested(id);
        // (result, "result---")
        if (result?.success) {
          // LoaderHelper.loaderStatus(false);
          setLoader(false);
          handleTopicPost();
          // AlertHelper.show('success', 'Gimmel', result?.message);
          toast.success(result?.message || "success", {
            className: "custom-toast-success",
        });
        } else {
          // LoaderHelper.loaderStatus(false);
          setLoader(false);
          // AlertHelper.show('danger', 'Gimmel', result?.message);
        }
      } catch (error) {
        // LoaderHelper.loaderStatus(false);
        setLoader(false);
        // ('Error occurred:', 'Gimmel', error);
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
 
    const handleSharePost = async (idvideo, selectedTopics) => {
      try {
        const result = await AuthService.SharePost(idvideo, selectedTopics);
        if (result?.success) {
          const videoUrl = `http://localhost:3000/mainHome/${idvideo}/videodetails2`;
  
          setShareLink(videoUrl);
        } else {
        }
      } catch (error) {
        console.error("Error sharing post:", error);
      }
    };
   const handleReportPost = async (selectedValues, text, postId) => {
      // LoaderHelper.loaderStatus(true);
      try {
        const result = await AuthService.ReportPost(selectedValues, text, postId);
        if (result?.success) {
          // LoaderHelper.loaderStatus(false);
          // AlertHelper.show('success', 'Gimmel', result?.data);
          // navigation.navigate('TabNavigation', {
          //   screen: 'Home',
          // })
          router.push("/");
        } else {
          // LoaderHelper.loaderStatus(false);
          // AlertHelper.show('danger', 'Gimmel', result?.message);
        }
      } catch (error) {
        // LoaderHelper.loaderStatus(false);
        // ('Error occurred:', 'Gimmel', error);
      }
    };
 
   const handleReviewGet = async (postId) => {
      try {
        const result = await AuthService.getReview(postId);
        if (result?.success) {
          setReview(result?.data?.reviews);
        } else {
        }
      } catch (error) {}
    };


    const handleSendComment = async (commentText) => {
      try {
        const result = await AuthService.sendComment(commentText, postId);
        if (result?.success) {
          // AlertHelper.show('success', 'Gimmel', result?.message);
          handleReviewGet(postId);
        } else {
          // AlertHelper.show('danger', 'Gimmel', result?.message);
        }
      } catch (error) {}
    };
 
    const handleLikeReview = async (likeId) => {
      // LoaderHelper.loaderStatus(true);
      try {
          const result = await AuthService.LikeReview(likeId);
          if (result?.success) {
              // LoaderHelper.loaderStatus(false);
              // AlertHelper.show('success', 'Gimmel', result?.message);
              setLike(result?.data)
              handleReviewGet(postId)
          } else {
              // LoaderHelper.loaderStatus(false);
              // AlertHelper.show('danger', 'Gimmel', result?.message);
          }
      } catch (error) {
          // LoaderHelper.loaderStatus(false);
      }
  };

  const handleDislikeReview = async (likeId) => {
      // LoaderHelper.loaderStatus(true);
      try {
          const result = await AuthService.dislikeReview(likeId);
          if (result?.success) {
              // LoaderHelper.loaderStatus(false);
              // AlertHelper.show('success', 'Gimmel', result?.message);
              setLike(result?.data)
              handleReviewGet(postId)

          } else {
              // LoaderHelper.loaderStatus(false);
              // AlertHelper.show('danger', 'Gimmel', result?.message);
          }
      } catch (error) {
          // LoaderHelper.loaderStatus(false);
      }
  };

  const handleReplayPost = async (postId, reply) => {
    // LoaderHelper.loaderStatus(true);
    try {
        const result = await AuthService.replayPost(postId, reply);
        if (result?.success) {
            // LoaderHelper.loaderStatus(false);
            // AlertHelper.show('success', 'Gimmel', result?.data);
        } else {
            // LoaderHelper.loaderStatus(false);
            // AlertHelper.show('danger', 'Gimmel', result?.message);
        }
    } catch (error) {
        // LoaderHelper.loaderStatus(false);
    }
};

  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
    {deviceWidth > 991 ? (
    <VideoDetails getvideoid={getvideoid} data={data} VideoDetailsState={VideoDetailsState} getQuiz={getQuiz} getFolder={getFolder} rename={rename} setValue={setValue} handleCreateFolder={handleCreateFolder} handleDeleteFolder={handleDeleteFolder} handleRename={handleRename} handleSaveVideo={handleSaveVideo} setSelectedFolderId={setSelectedFolderId} setRename={setRename} handleSharePost={handleSharePost} shareLink={shareLink} setSelectedTopics={setSelectedTopics} selectedTopics={selectedTopics} handleReportPost={handleReportPost} suggested={suggested} handleNotIntrested={handleNotIntrested} getSaveVideo={getSaveVideo} getSubFolder={getSubFolder} handleCreateFolderSub={handleCreateFolderSub} handleGetFolderSub={handleGetFolderSub} handleGetFolder={handleGetFolder} selectedFolderId={selectedFolderId}  setGetQuiz={setGetQuiz} handleQuizPdf={handleQuizPdf} getid={getid} quizRegenrate={quizRegenrate} getDiscussion={getDiscussion} getHeader={getHeader} handleDiscussPdf={handleDiscussPdf} discussionRegenrate={discussionRegenrate} getActivity={getActivity} handleActivityPdf={handleActivityPdf} activityRegenrate={activityRegenrate} getHomeWork={getHomeWork} handleHomeWorkPdf={handleHomeWorkPdf} homeworkRegenrate={homeworkRegenrate}
    idvideo={idvideo}
    getReview={getReview}
    handleSendComment={handleSendComment}
    handleLikeReview={handleLikeReview}
    handleDislikeReview={handleDislikeReview}
    handleReplayPost={handleReplayPost}
    />
  ) : (
    <WatchVideo getvideoid={getvideoid} data={data} VideoDetailsState={VideoDetailsState} getQuiz={getQuiz} getFolder={getFolder} rename={rename} setValue={setValue} handleCreateFolder={handleCreateFolder} handleDeleteFolder={handleDeleteFolder} handleRename={handleRename} handleSaveVideo={handleSaveVideo} setSelectedFolderId={setSelectedFolderId} setRename={setRename} handleSharePost={handleSharePost} shareLink={shareLink} setSelectedTopics={setSelectedTopics} selectedTopics={selectedTopics} handleReportPost={handleReportPost} suggested={suggested} handleNotIntrested={handleNotIntrested} getSaveVideo={getSaveVideo} getSubFolder={getSubFolder} handleCreateFolderSub={handleCreateFolderSub} handleGetFolderSub={handleGetFolderSub}
    idvideo={idvideo}
    getReview={getReview} handleSendComment={handleSendComment} handleLikeReview={handleLikeReview} handleDislikeReview={handleDislikeReview} handleReplayPost={handleReplayPost}
    />
 
  )}
  </>
);
}
 
export default PageComponent;
 