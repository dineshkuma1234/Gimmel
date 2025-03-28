"use client";

import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Categories from "../entities/categories/page";
import AuthService from "@/services/AuthService";
import { UseLoader } from "../LoderHelper/context/loaderHelperContext";
import toast from "react-hot-toast";
import img1 from "../../assets/images/13 years.svg";
import img2 from "../../assets/images/18 years.svg";
import img3 from "../../assets/images/Alcohol issues.svg";
import img4 from "../../assets/images/Drugprevention-2.svg";
import img5 from "../../assets/images/Mental health.svg";
import img6 from "../../assets/images/15 years.svg";
import { SearchListContext } from "../Context/searchlist/searchListContext";
import { useRouter } from "next/navigation";
import Categorie from "../(MobileFlow)/categorie/page";
import unAuthToken from "@/Constants/constant";
const PageComponent = () => {
  const router = useRouter();
  const [categoryVideo, setgetCategoryVideo] = useState([]);
  const { setLoader } = UseLoader();
  const [searchListState, updatesearchListState] =
    useContext(SearchListContext);
  const [deviceWidth, setDeviceWidth] = useState(0);

  useEffect(() => {
    checkUserLogedIn();
    if (typeof window === "undefined") return;

    const updateWidth = () => {
      setDeviceWidth(window.innerWidth);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const checkUserLogedIn = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      localStorage.setItem("unAuthToken", unAuthToken);
    }
  };

  useEffect(() => {
    handleGetCategoryVideo();
  }, []);

  const handleGetCategoryVideo = async () => {
    // LoaderHelper.loaderStatus(true);
    try {
      const result = await AuthService.CategoryVideoList();
      if (result?.success) {
        // LoaderHelper.loaderStatus(false);
        setgetCategoryVideo(result?.data);
        // AlertHelper.show('success', 'Gimmel', result?.message);
      } else {
        // LoaderHelper.loaderStatus(false);
        // AlertHelper.show('danger', 'Gimmel', result?.message);
      }
    } catch (error) {
      // LoaderHelper.loaderStatus(false);
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
  // const searchParams = useSearchParams();
  // const category = searchParams.get("category") || "No Category Selected";

  // const [getCategoryData, setGetCategoryData] = useState([]);

  const handleGetCategories = async (category) => {
    try {
      const result = await AuthService.GetCategories(category);

      if (result?.success) {
        updatesearchListState(result?.data?.posts);
        router.push(
          "/searchlist",
          { data: JSON.stringify(category) } // Convert the object to a JSON string
        );
        // setGetCategoryData(result?.data?.posts);
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <>
      {deviceWidth > 991 ? (
        <>
          <Categories
            handleNotIntrested={handleNotIntrested}
            categoryVideo={categoryVideo[0]?.posts}
            categoryVideoname={categoryVideo[0]?.category}
            img={img1}
            handleGetCategories={handleGetCategories}
          />
          <Categories
            handleNotIntrested={handleNotIntrested}
            categoryVideo={categoryVideo[1]?.posts}
            categoryVideoname={categoryVideo[1]?.category}
            img={img2}
            handleGetCategories={handleGetCategories}
          />
          <Categories
            handleNotIntrested={handleNotIntrested}
            categoryVideo={categoryVideo[2]?.posts}
            categoryVideoname={categoryVideo[2]?.category}
            img={img3}
            handleGetCategories={handleGetCategories}
          />
          <Categories
            handleNotIntrested={handleNotIntrested}
            categoryVideo={categoryVideo[3]?.posts}
            categoryVideoname={categoryVideo[3]?.category}
            img={img4}
            handleGetCategories={handleGetCategories}
          />
          <Categories
            handleNotIntrested={handleNotIntrested}
            categoryVideo={categoryVideo[4]?.posts}
            categoryVideoname={categoryVideo[4]?.category}
            img={img5}
            handleGetCategories={handleGetCategories}
          />
          <Categories
            handleNotIntrested={handleNotIntrested}
            categoryVideo={categoryVideo[5]?.posts}
            categoryVideoname={categoryVideo[5]?.category}
            img={img6}
            handleGetCategories={handleGetCategories}
          />
        </>
      ) : (
        <>
          <Categorie
            handleNotIntrested={handleNotIntrested}
            categoryVideo={categoryVideo[0]?.posts}
            categoryVideoname={categoryVideo[0]?.category}
            img={img1}
            handleGetCategories={handleGetCategories}
          />
          <Categorie
            handleNotIntrested={handleNotIntrested}
            categoryVideo={categoryVideo[1]?.posts}
            categoryVideoname={categoryVideo[1]?.category}
            img={img2}
            handleGetCategories={handleGetCategories}
          />
          <Categorie
            handleNotIntrested={handleNotIntrested}
            categoryVideo={categoryVideo[2]?.posts}
            categoryVideoname={categoryVideo[2]?.category}
            img={img3}
            handleGetCategories={handleGetCategories}
          />
          <Categorie
            handleNotIntrested={handleNotIntrested}
            categoryVideo={categoryVideo[3]?.posts}
            categoryVideoname={categoryVideo[3]?.category}
            img={img4}
            handleGetCategories={handleGetCategories}
          />
          <Categorie
            handleNotIntrested={handleNotIntrested}
            categoryVideo={categoryVideo[4]?.posts}
            categoryVideoname={categoryVideo[4]?.category}
            img={img5}
            handleGetCategories={handleGetCategories}
          />
          <Categorie
            handleNotIntrested={handleNotIntrested}
            categoryVideo={categoryVideo[5]?.posts}
            categoryVideoname={categoryVideo[5]?.category}
            img={img6}
            handleGetCategories={handleGetCategories}
          />
        </>
      )}
    </>
  );
};

export default PageComponent;
