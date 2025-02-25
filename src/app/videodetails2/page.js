"use client";
import React, { useEffect, useState } from 'react'
import VideoDetails from '@/app/entities/details/page';
import AuthService from "@/services/AuthService";
import { useParams, useRouter } from 'next/navigation';
import { UseLoader } from '../LoderHelper/context/loaderHelperContext';

function PageComponent() {
  const router = useRouter();
  const datas = router.location?.state; 
  const params = useParams();
  // const id = params.video_id;
  const [getvideoid, setgetvideoid] = useState([]);
  const [data , setdata] = useState();
  const [loading,setLoading] = useState(false);
  const {setLoader} = UseLoader()

  // console.log('getQuiz+++++++++++++', getQuiz)
  useEffect(() => {
     
          // handleGetPostid();
  }, []);
  
   // getid video 
   const handleGetPostid = async () => {
      setLoading(true);
      try {
        const result = await AuthService.getvideoid(id);
        console.log(result, "getvideoid----");
    setLoader(false);
        if (result?.success) {
          setLoader(false);

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
        setLoader(false);

      }
    };

    
    
  return (
    
    <VideoDetails getvideoid={getvideoid} data={data}  />
  )
}

export default PageComponent;