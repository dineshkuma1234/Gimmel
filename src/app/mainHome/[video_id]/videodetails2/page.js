"use client";
import React, { useContext, useEffect, useState } from 'react'
import VideoDetails from "../../../entities/details/page"
import AuthService from "@/services/AuthService";
import { useParams } from 'next/navigation';
import { VideoDetailsContext } from '@/app/Context/VideoDetails/videoDetailsContext';

function PageComponent() {

  const params = useParams();
  const id = params.video_id;
  const [getvideoid, setgetvideoid] = useState([]);
  const [data , setdata] = useState();
  const [loading,setLoading] = useState(false);
  const [VideoDetailsState, updateVideoDetailsState] =useContext(VideoDetailsContext);
  console.log('data', VideoDetailsState)
  useEffect(() => {
     
          handleGetPostid();
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
    
  return (
    <VideoDetails getvideoid={getvideoid} data={data} VideoDetailsState={VideoDetailsState} />
  )
}

export default PageComponent;