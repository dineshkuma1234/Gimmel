"use client";

import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; 
import Categories from "../entities/categories/page";
import AuthService from "@/services/AuthService";
import { UseLoader } from "../LoderHelper/context/loaderHelperContext";
import toast from "react-hot-toast";
import img1 from "../../assets/images/13 years.svg"
import img2 from "../../assets/images/18 years.svg"
import img3 from "../../assets/images/Alcohol issues.svg"
import img4 from "../../assets/images/Drug prevention.svg"
import img5 from "../../assets/images/Mental health.svg"
import img6 from "../../assets/images/15 years.svg"
import { SearchListContext } from "../Context/searchlist/searchListContext";
import { useRouter } from "next/navigation";

const PageComponent = () => {
  const router = useRouter();
      const [categoryVideo,setgetCategoryVideo]=useState([])
      console.log(categoryVideo,"categoryVideo+++++++nwe---test--by--dev")
      const { setLoader } = UseLoader();
      const [searchListState, updatesearchListState] =
      useContext(SearchListContext);
      useEffect(() => {
        
         handleGetCategoryVideo()
       }, []);


    const handleGetCategoryVideo = async () => {
      console.log("Function Called: handleGetCategoryVideo"); 
        // LoaderHelper.loaderStatus(true);
        try {
          console.log("Fetching data from API...");
          const result = await AuthService.CategoryVideoList();
          console.log("API Response:", result); // API response log
          if (result?.success) {
            console.log("Success: Setting category video data", result?.data);
            // LoaderHelper.loaderStatus(false);
            setgetCategoryVideo(result?.data)
            // AlertHelper.show('success', 'Gimmel', result?.message);
          } else {
            console.log("API Call Failed:", result?.message);
            // LoaderHelper.loaderStatus(false);
            // AlertHelper.show('danger', 'Gimmel', result?.message);
          }
        } catch (error) {
          // LoaderHelper.loaderStatus(false);
          console.log('Error occurred:', 'Gimmel', error);
        }
      };

    const handleNotIntrested = async (id) => {
        setLoader(true);
        try {
          const result = await AuthService.NotIntrested(id);
          if (result?.success) {
            setLoader(false);
            handleGetCategoryVideo();
            toast.success(result?.message || "success", {
              className: "custom-toast-success",
            });
          } else {
            setLoader(false);
          }
        } catch (error) {
          setLoader(false);
        }
      };
      const searchParams = useSearchParams(); 
      const category = searchParams.get("category") || "No Category Selected";
  
      const [getCategoryData, setGetCategoryData] = useState([]);
  
      console.log("Selected Category from URL:", category);
      console.log("getCategoryData+++++++++++", getCategoryData);
  
     
  
      const handleGetCategories = async (category) => {
          try {
              console.log(category,"category =============")
              const result = await AuthService.GetCategories(category);
              console.log("API Response++++++:", result);
  
              if (result?.success) {
                updatesearchListState(result?.data?.posts);
                router.push( "/searchlist",
                  { data: JSON.stringify(category) }, // Convert the object to a JSON string
                );
                  // setGetCategoryData(result?.data?.posts);
              }
          } catch (error) {
              console.error("Error occurred:", error);
          }
      };

    
      
    return (
        <>
            <Categories  handleNotIntrested={handleNotIntrested} categoryVideo={categoryVideo[0]?.posts} categoryVideoname={categoryVideo[0]?.category} img={img1} handleGetCategories={handleGetCategories}  />
            <Categories  handleNotIntrested={handleNotIntrested} categoryVideo={categoryVideo[1]?.posts} categoryVideoname={categoryVideo[1]?.category} img={img2} handleGetCategories={handleGetCategories}  />
            <Categories  handleNotIntrested={handleNotIntrested} categoryVideo={categoryVideo[2]?.posts} categoryVideoname={categoryVideo[2]?.category} img={img3} handleGetCategories={handleGetCategories} />
            <Categories  handleNotIntrested={handleNotIntrested} categoryVideo={categoryVideo[3]?.posts} categoryVideoname={categoryVideo[3]?.category} img={img4}  handleGetCategories={handleGetCategories} />
            <Categories  handleNotIntrested={handleNotIntrested} categoryVideo={categoryVideo[4]?.posts} categoryVideoname={categoryVideo[4]?.category}  img={img5} handleGetCategories={handleGetCategories} />
            <Categories  handleNotIntrested={handleNotIntrested} categoryVideo={categoryVideo[5]?.posts} categoryVideoname={categoryVideo[5]?.category} img={img6}  handleGetCategories={handleGetCategories}  />

        </>
    );
};

export default PageComponent;
