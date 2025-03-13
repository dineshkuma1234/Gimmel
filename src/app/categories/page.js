'use client'

import React, { use, useEffect, useState } from "react";
import Categories from "../entities/categories/page";
import AuthService from "@/services/AuthService";

const PageComponent = () => {

    
    // const [value1, setValue1] = useState(null);
    // const [value2, setValue2] = useState(null);
    // const [value3, setValue3] = useState(null);
    const [getCategoryData, setGetCategoryData] = useState("")
  
console.log("getCategoryData+++++++++++",getCategoryData)

useEffect(() => {
    handleGetCategories();
}, []);
    const handleGetCategories = async (category) => {
        try {
            const result = await AuthService.GetCategories(category);
            console.log("API Response++++++:", result);
          if (result?.success) {
            setGetCategoryData(result.data.posts);
          }
        } catch (error) {
          // ('Error occurred:', 'Gimmel', error);
        }
      };

      console.log(getCategoryData,"getCategoryData-----")
    return (
        <>
        
            <Categories handleGetCategories={handleGetCategories} getCategoryData={getCategoryData}  />
        </>
    );
};

export default PageComponent;