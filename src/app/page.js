"use client";

import React, { useContext, useEffect, useState } from "react";
import Main from "./entities/main/page";
import MainMobile from "./(MobileFlow)/mobile-main/page";
import AuthService from "../services/AuthService";
import { useParams, useRouter } from "next/navigation";
import { UseLoader } from "./LoderHelper/context/loaderHelperContext";
import unAuthToken from "../Constants/constant";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./LoderHelper/page";
import { categorylistcontext } from "./Context/categorylistcontext/categorylistcontext";
import SliderThumbnil from "../assets/images/video-thumbnil.svg"
import { useHeader } from "./Context/headerContext/HeaderContext";
// import LoaderHelper from '../LoaderHelper/page';
// import Home from './Home/page';
// import LoaderHelper from '../LoaderHelper/page'

export default function PageComponent() {
  const router = useRouter();
  const { setLoader } = UseLoader();
  const {getCategoryData, setGetCategoryData ,handleGetCategories} = useHeader();

  const [page, setPage] = useState(1);
  const [deviceWidth, setDeviceWidth] = useState(0);
  const [total, setTotal] = useState();
  const [noLoad, setNoLoad] = useState(false);
  const [loading, setLoading] = useState(false);
  const [getPost, setGetPost] = useState([]);
  const [sliderData, setSliderData] = useState([]);
  const [noSuggetion, setNoSuggetion] = useState("");
  const [data, setdata] = useState();
  const [getFolder, setGetFolder] = useState("");
  const [rename, setRename] = useState("");
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const [value, setValue] = useState(null);
  const [getSaveVideo, setGetSaveVideo] = useState([]);
  const [isSaved,setIsSaved]=useState();
  const [getSubFolder, setGetFolderSub] = useState();
  const [categoryVideo, setgetCategoryVideo] = useState([]);
  const [categoryimg, setgetCategoryimg] = useState();
  const [saveVideoScreen, setSaveVideoScreen] = useState(false);
  const [postId, setPostId] = useState("");
  

  // console.log(selectedFolderId, "selectedFolderId============");

  console.log(getSubFolder,"getSubFolder")
  useEffect(() => {
    checkUserLogedIn();
    if (typeof window === "undefined") return;

    const updateWidth = () => {
      setDeviceWidth(window.innerWidth);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  });

  useEffect(() => {
    handleGetPostid();
    // handleQuiz()
    // handleSave()
    handleGetFolder(value);
    handleCreateFolder();
    handleGetCategoryVideo();
  }, []);
  // Fetch posts when the page changes
  useEffect(() => {
    if (!noLoad) {
      handleGetPost(page);
    }
  }, [page]);

  // Infinite Scroll - Detect when the user scrolls to the bottom
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 10 &&
        !loading &&
        !noLoad
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, noLoad]);

  const handleGetPost = async (page) => {
    setLoading(true);
    setLoader(true);

    try {
      const result = await AuthService.GetPost(page);

      if (result?.success) {
        setTotal(result?.data?.totalPosts);
        const newPosts = result?.data?.posts || [];

        if (newPosts.length === 0) {
          setNoLoad(true); // Stop further API calls when no more data
          setLoader(false);
        } else {
          setGetPost((prevPosts) => [...prevPosts, ...newPosts]);
          setLoader(false);
        }
      }
    } catch (error) {
      console.error("Error occurred:", error);
    } finally {
      setLoading(false);
    }
  };

  // PostSlider on home page//
  const [topicPost, setTopicPost] = useState("");
  useEffect(() => {
    handleTopicPost();
  }, []);

  const handleTopicPost = async () => {
    setLoader(true);
    try {
      const result = await AuthService.TopicPost();
      if (result?.success) {
        setTopicPost(result?.data);
        setLoader(false);
      } else {
        AlertHelper.show("danger", "Gimmel", result?.message);
        setLoader(false);
      }
    } catch (error) {
      setLoader(false);
    }
  };



  // My Intrest //

  const [substance, setSubstance] = useState([]);
  const [mentalHealth, setMentalHealth] = useState([]);
  const [neuroScience, setNeuroScience] = useState([]);
  const [socialIssues, setSocialIssues] = useState([]);
  const [interest, setInterest] = useState(null);

  useEffect(() => {
    handleSubstance();
    handleMentalHealth();
    handleNeuroscience();
    handleSocialIssue();
    getInterestFromStorage();
    handleSliderData();
  }, []);

  useEffect(() => {
    if (selectedFolderId) {
      handleSaveVideonext(selectedFolderId);
    }
  }, [selectedFolderId]);
  const checkUserLogedIn = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      localStorage.setItem("unAuthToken", unAuthToken);
    }
  };
  const handleSubstance = async () => {
    // setLoader(true);

    try {
      const result = await AuthService.Substance();
      if (result?.success) {
        // setLoader(false);

        setSubstance(result?.data?.data);
      } else {
        // AlertHelper.show('danger', 'Gimmel', result?.message);
        // setLoader(false);
      }
    } catch (error) {
      // setLoader(false);
    }
  };

  const handleMentalHealth = async () => {
    // setLoader(true);

    try {
      const result = await AuthService.MentalHealth();
      if (result?.success) {
        // setLoader(false);

        setMentalHealth(result?.data?.data);
      } else {
        // AlertHelper.show('danger', 'Gimmel', result?.message);
        // setLoader(false);
      }
    } catch (error) {
      // setLoader(false);
      // ('Error occurred:', 'Gimmel', error);
    }
  };
  const handleNeuroscience = async () => {
    // setLoader(true);

    try {
      const result = await AuthService.Neuroscience();
      if (result?.success) {
        setNeuroScience(result?.data?.data);
        // setLoader(false);
      } else {
        // AlertHelper.show('danger', 'Gimmel', result?.message);
        // setLoader(false);
      }
    } catch (error) {
      // setLoader(false);
      // ('Error occurred:', 'Gimmel', error);
    }
  };
  const handleSocialIssue = async () => {
    // setLoader(true);

    try {
      const result = await AuthService.SocialIssue();
      if (result?.success) {
        // setLoader(false);

        setSocialIssues(result?.data?.data);
      } else {
        // AlertHelper.show('danger', 'Gimmel', result?.message);
        // setLoader(false);
      }
    } catch (error) {
      // ('Error occurred:', 'Gimmel', error);
    }
  };
  const handleSaveIntrest = async () => {
    // setLoader(true);

    try {
      const result = await AuthService.SaveInt();
      if (result?.success) {
        // setLoader(false);
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
  const getInterestFromStorage = () => {
    const value = localStorage.getItem("interest");
    setInterest(value);
  };
  const handleInterestFilter = async (
    selectedSubstance,
    selectedHealth,
    selectedneuroscience,
    selectSocialIssue,
    interestsDescription
  ) => {
    // setLoader(true);
    try {
      const result = await AuthService.InterestFilter(
        selectedSubstance,
        selectedHealth,
        selectedneuroscience,
        selectSocialIssue,
        interestsDescription
      );
      // (result,"result of interest filter ---")
      if (result?.success) {
        // setLoader(false);
        // AlertHelper.show('success', 'Gimmel', result?.message);
        const isInterestValue = result?.data?.isInterest === true ? "1" : "0";
        localStorage.setItem("interest", isInterestValue);
        handleSaveIntrest();
        getInterestFromStorage();
        handleGetPost();
      } else {
        // setLoader(false);
        // AlertHelper.show('danger', 'Gimmel', result?.message);
      }
    } catch (error) {
      // setLoader(false);
      // ('Error occurred:', 'Gimmel', error);
    }
  };

  const handleSliderData = async () => {
    try {
      const result = await AuthService.HomeSlider();
      if (result?.success) {
        setSliderData(result?.data?.posts);
      } else {
        AlertHelper.show("danger", "Gimmel", result?.message);
      }
    } catch (error) {
      // ('Error occurred:', 'Gimmel', error);
    }
  };

  const handleMoreLike = async () => {
    // LoaderHelper.loaderStatus(true);
    try {
      const result = await AuthService.MoreLike();
      // (result,"result of more int video ----")
      if (result) {
        // LoaderHelper.loaderStatus(false);
        setTopicPost(result?.data);
        // AlertHelper.show('success', 'Gimmel', result?.message);
        handleSliderData();
      } else {
        // LoaderHelper.loaderStatus(false);
        // AlertHelper.show('danger', 'Gimmel', result?.message);
      }
    } catch (error) {
      // LoaderHelper.loaderStatus(false);
      // ('Error occurred:', 'Gimmel', error);
    }
  };

  const handleNotInterestedTopic = async () => {
    // LoaderHelper.loaderStatus(true);
    try {
      const result = await AuthService.Notintrested();
      if (result?.success) {
        // LoaderHelper.loaderStatus(false);
        // AlertHelper.show('success', 'Gimmel', result?.message);
        handleSliderData();
      } else {
        // LoaderHelper.loaderStatus(false);
        // AlertHelper.show('danger', 'Gimmel', result?.message);
      }
    } catch (error) {
      // ('Error occurred:', 'Gimmel', error);
    }
  };

  const handleRemoveSuggation = async () => {
    // LoaderHelper.loaderStatus(true);
    try {
      const result = await AuthService.removeSuggation();
      if (result) {
        // LoaderHelper.loaderStatus(false);
        // (result,"result")
        // AlertHelper.show('success', 'Gimmel', result?.message);
        handleSliderData();
        setNoSuggetion(result);
      } else {
        // LoaderHelper.loaderStatus(false);
        // AlertHelper.show('danger', 'Gimmel', result?.message);
      }
    } catch (error) {
      // LoaderHelper.loaderStatus(false);
      // ('Error occurred:', 'Gimmel', error);
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
        AlertHelper.show("success", "Gimmel", result?.data);
      } else {
        // setLoader(false);
        AlertHelper.show("danger", "Gimmel", result?.message);
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
        AlertHelper.show("success", "Gimmel", result?.message);
      } else {
        setLoader(false);
        AlertHelper.show("danger", "Gimmel", result?.message);
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
        AlertHelper.show("success", "Gimmel", result?.message);
      } else {
        // setLoader(false);
        AlertHelper.show("danger", "Gimmel", result?.message);
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
// console.log(selectedFolderId,"selectedFolderId");
  const handleGetPostid = async () => {
    setLoader(true);

    try {
      const result = await AuthService.getvideoid(id);
      setLoader(false);

      if (result?.success) {
        // setgetvideoid(result?.data);
        setLoader(false);

        setdata(result?.data);
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
      // console.error("Error occurred:", error);
    }
  };

  const handleNotIntrested = async (id) => {
    // LoaderHelper.loaderStatus(true);
    // ('function calll')
    setLoader(true);
    try {
      // ("loading" )
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

  const handleSaveVideonext = async (id) => {
    "Function called with Folder ID:", id;
    console.log( "function called with Folder ID:", id);

    // LoaderHelper.loaderStatus(true);
    try {
      ("Calling API to fetch saved videos...");
      const result = await AuthService.GetSaveVideo(id);
      "API Response:", result;

      if (result?.success) {
        "Videos received successfully:", result.videos;

        // LoaderHelper.loaderStatus(false);
        setGetSaveVideo(result?.data?.videos);
      
      } else {
        "API call was unsuccessful:", result?.message || result;

        // LoaderHelper.loaderStatus(false);
        // AlertHelper.show('danger', 'Gimmel', result?.message || result );
      }
    } catch (error) {
      console.error("Error occurred while fetching videos:", error);

      // LoaderHelper.loaderStatus(false);
      // ('Error occurred:', 'Gimmel', error);
    }
  };

  // console.log(isSaved, "isSaved");.
  const handleCreateFolderSub = async (addnewFolder) => {
    // LoaderHelper.loaderStatus(true);
    try {
      const result = await AuthService.createSubFolder(selectedFolderId, addnewFolder);
      result, "result---";
      if (result?.success) {
        // LoaderHelper.loaderStatus(false);
        // AlertHelper.show('success', 'Gimmel', result?.data);
        handleGetFolderSub();
      } else {
        // LoaderHelper.loaderStatus(false);
        // AlertHelper.show('danger', 'Gimmel', result?.message  );
      }
    } catch (error) {
      // LoaderHelper.loaderStatus(false);
      // ('Error occurred:', 'Gimmel', error);
    }
  };

  const handleGetFolderSub = async (id, value) => {
    // console.log("Get Subfolder function called with ID:", id,value);
    // LoaderHelper.loaderStatus(true);
    try {
      const result = await AuthService.GetSubFolder(id, value);
      if (result?.success) {
        // LoaderHelper.loaderStatus(false);
        result?.data?.data, "dat in api";
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

  // (headerSearch,"interest---")

  const handleGetCategoryVideo = async () => {
    // LoaderHelper.loaderStatus(true);
    try {
      const result = await AuthService.CategoryVideoList();
      if (result?.success) {
        // LoaderHelper.loaderStatus(false);
        setgetCategoryVideo(result?.data);
       
        const thumbnails = result.data.map(category => {
          const firstPost = category.posts?.[0];
          return {
            category: category.category || "Unknown",
            thumbnail: firstPost?.thumbnail || SliderThumbnil,
          };
        });
        setgetCategoryimg(thumbnails);
        // AlertHelper.show('success', 'Gimmel', result?.message);
      } else {
        // LoaderHelper.loaderStatus(false);
        // AlertHelper.show('danger', 'Gimmel', result?.message);
      }
    } catch (error) {
      // LoaderHelper.loaderStatus(false);
    }
  };


  const handleSaveSubFolderVideo = async (selectSubFolder, selectFolder) => {
    if (!selectedFolderId) {
      // AlertHelper.show('warning', 'Gimmel',"Please select folder");
      return;
    }
    // LoaderHelper.loaderStatus(true);
    try {
      const result = await AuthService.SaveSubFolderVideo(
        postId,
        selectSubFolder,
        selectFolder
      );
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
    }
  };

  const handleDeleteSubFolder = async (id, SubFolderId) => {
    // console.log("Delete function called with ID");
    setLoader(true);
    try {
      const result = await AuthService.DeleteSubFolder(id, SubFolderId);
      // (result, "result---delete")
      if (result) {
        setLoader(false);
        handleGetFolderSub(selectedFolderId);
        handleGetFolder();

        AlertHelper.show("success", "Gimmel", result?.message);
      } else {
        setLoader(false);
        AlertHelper.show("danger", "Gimmel", result?.message);
      }
    } catch (error) {
      setLoader(false);
      // ('Error occurred:', 'Gimmel', error);
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      {deviceWidth > 991 ? (
        <Main
          getPost={getPost}
          handleGetCategories={handleGetCategories}
          substance={substance}
          mentalHealth={mentalHealth}
          neuroScience={neuroScience}
          socialIssues={socialIssues}
          handleInterestFilter={handleInterestFilter}
          interest={interest}
          setInterest={setInterest}
          data={data}
          getFolder={getFolder}
          rename={rename}
          setValue={setValue}
          handleCreateFolder={handleCreateFolder}
          handleDeleteFolder={handleDeleteFolder}
          handleRename={handleRename}
          handleSaveVideo={handleSaveVideo}
          setSelectedFolderId={setSelectedFolderId}
          setRename={setRename}
          handleNotIntrested={handleNotIntrested}
          getSaveVideo={getSaveVideo}
          getSubFolder={getSubFolder}
          handleCreateFolderSub={handleCreateFolderSub}
          handleGetFolderSub={handleGetFolderSub}
          categoryVideo={categoryVideo}
          setSaveVideoScreen={setSaveVideoScreen}
          saveVideoScreen={saveVideoScreen}
          handleSaveSubFolderVideo={handleSaveSubFolderVideo}
          handleDeleteSubFolder={handleDeleteSubFolder}
          handleGetFolder={handleGetFolder}
          selectedFolderId={selectedFolderId}
          handleSaveVideonext={handleSaveVideonext}
          setPostId={setPostId}
          categoryimg={categoryimg}
        />
      ) : (
        <MainMobile
          handleSaveSubFolderVideo={handleSaveSubFolderVideo}
          getPost={getPost}
          substance={substance}
          mentalHealth={mentalHealth}
          neuroScience={neuroScience}
          socialIssues={socialIssues}
          handleInterestFilter={handleInterestFilter}
          interest={interest}
          setInterest={setInterest}
          topicPost={topicPost}
          handleMoreLike={handleMoreLike}
          sliderData={sliderData}
          handleNotInterestedTopic={handleNotInterestedTopic}
          handleRemoveSuggation={handleRemoveSuggation}
          noSuggetion={noSuggetion}
          data={data}
          getFolder={getFolder}
          rename={rename}
          setValue={setValue}
          handleCreateFolder={handleCreateFolder}
          handleDeleteFolder={handleDeleteFolder}
          handleRename={handleRename}
          handleSaveVideo={handleSaveVideo}
          setSelectedFolderId={setSelectedFolderId}
          setRename={setRename}
          handleNotIntrested={handleNotIntrested}
          getSaveVideo={getSaveVideo}
          getSubFolder={getSubFolder}
          handleCreateFolderSub={handleCreateFolderSub}
          handleGetFolderSub={handleGetFolderSub}
          categoryVideo={categoryVideo}
          handleGetCategories={handleGetCategories}
          setSaveVideoScreen={setSaveVideoScreen}
          saveVideoScreen={saveVideoScreen}
          handleDeleteSubFolder={handleSaveSubFolderVideo}
          handleGetFolder={handleGetFolder}
          selectedFolderId={selectedFolderId}
          categoryimg={categoryimg}
        />
      )}

      {loading && (
        <p style={{ textAlign: "center", margin: "20px 0" }}>
          Loading more posts...
        </p>
      )}

      {/* <Home /> */}
    </>
  );
}
