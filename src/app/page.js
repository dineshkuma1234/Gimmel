'use client';

import React, { useContext, useEffect, useState } from 'react';
import Main from "./entities/main/page";
import MainMobile from './(MobileFlow)/mobile-main/page';
import AuthService from '../services/AuthService';
import { useRouter } from "next/navigation";
import { UseLoader } from './LoderHelper/context/loaderHelperContext';
import unAuthToken from '../Constants/constant'
import { SearchListContext } from './Context/searchlist/searchListContext';
import toast, { Toaster } from "react-hot-toast";
import Loader from './LoderHelper/page';
// import LoaderHelper from '../LoaderHelper/page';
// import Home from './Home/page';
// import LoaderHelper from '../LoaderHelper/page'

export default function PageComponent() {
  const router = useRouter(); 
 
  const [page, setPage] = useState(1);
  const [deviceWidth, setDeviceWidth] = useState(0);
  const [total, setTotal] = useState();
  const [noLoad, setNoLoad] = useState(false);
  const [loading, setLoading] = useState(false);
  const [getPost, setGetPost] = useState([]);
  const [sliderData, setSliderData] = useState([]);
  const [noSuggetion, setNoSuggetion] = useState("")
  const {setLoader} = UseLoader()
  const [data , setdata] = useState();
  const [getFolder, setGetFolder] = useState("")
  const [rename, setRename] = useState("")
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const [value, setValue] = useState(null);

  useEffect(() => {
    
    checkUserLogedIn();
    if (typeof window === 'undefined') return;

    const updateWidth = () => {
      setDeviceWidth(window.innerWidth);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);


 useEffect(() => {
     
          handleGetPostid();
          // handleQuiz()
          // handleSave()
          handleGetFolder(value);
          handleCreateFolder()
        

  }, []);
  // Fetch posts when the page changes
  useEffect(() => {
    if (!noLoad) {
      handleGetPost(page);
    }
    
  }, [page]);

  // Infinite Scroll - Detect when the user scrolls to the bottom
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10 &&
        !loading &&
        !noLoad
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, noLoad]);

  const handleGetPost = async (page) => {
    setLoading(true);
    setLoader(true);

    try {
      const result = await AuthService.GetPost(page);
      // console.log(result, "result----");

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
      console.error('Error occurred:', error);
    } finally {
      setLoading(false);
    }
  };
 
// PostSlider on home page//
const [topicPost, setTopicPost] = useState("")
// console.log(topicPost,"topicPost---")
useEffect(() => {
  handleTopicPost();
}, []);


const handleTopicPost = async () => {
  setLoader(true);
  try {
    const result = await AuthService.TopicPost();
    // console.log(result, 'result---')
    if (result?.success) {
      setTopicPost(result?.data)
      setLoader(false);

    } else {
      AlertHelper.show('danger', 'Gimmel', result?.message);
      setLoader(false);

    }
  } catch (error) {
    setLoader(false);

    // console.log('Error occurred:', 'Gimmel', error);
  }
};

  ///////Search \\\\\\
  const [historyList, setHistoryList] = useState([]);
  const [selectSearchList, setSelectSearchList] = useState('')
  const [headerSearch, setHeaderSearch] = useState("")
  // const [searchList, setSearchList] = useState('');
  const [searchListState, updatesearchListState] = useContext(SearchListContext);
  // console.log(searchListState,"searchListState--")
  useEffect(() => {
    if (headerSearch) {
      handleHistoryList(headerSearch);
    }
  }, [])
  useEffect(() => {
    handleHistoryList();
  },[]);

  
const handleHistoryList = async (headerSearch) => {
  // setLoader(true);
  // console.log(headerSearch,"headerSearch in api func")
  try {
      const result = await AuthService.SearchHistory(headerSearch);
      // console.log(result.data, 'result');
      if (result?.success) {
        // setLoader(false);
        setHistoryList(result?.data?.data || []);
      } else {
        // setLoader(false);
        // AlertHelper.show('danger', 'Gimmel', result?.message);
        toast.error(result?.message, {
          className: "custom-toast", // Apply the custom class
      });
      }
    } catch (error) {
      // console.log('Error occurred:', 'Gimmel', error);
    }
  };
  const handleSearchCont = async (
    headerSearch,
    isOn,
    chips,
    inputValue,
    selectedAge,
    selectedEngagement,
    selectedDate,
    sliderValue,
    selectedValue,
    selectedAudience,
  ) => {
    // console.log(headerSearch,"usecase--0000")
    // setLoader(true);

    try {
      const result = await AuthService.SearchResult(
        headerSearch,
        isOn,
        chips,
        inputValue,
        selectedAge,
        selectedEngagement,
        selectedDate,
        sliderValue,
        selectedValue,
        selectedAudience,
      );
      // console.log(result, 'result---111');
      // setLoader(false);

      if (result?.success) {
        if (result?.data?.length <= 0) {
          // AlertHelper.show('gray', 'Gimmel', 'No data');
          toast.error(result?.message, {
            className: "custom-toast", // Apply the custom class
        });
          
        } else {
          updatesearchListState(result?.data);
          // navigation.navigate('TabNavigation', {
          //   screen: 'Search',
          //   params: { data: result?.data },
          // });
          router.push( "/searchlist",
            { data: JSON.stringify(result?.data) }, // Convert the object to a JSON string
          );
        }
      } else {
        // AlertHelper.show('danger', 'Gimmel', result?.message);
        // setLoader(false);

      }
    } catch (error) {
      // setLoader(false);
      // console.log('Error occurred:', 'Gimmel', error);
    }
  };
 
  // My Intrest //

  const [substance, setSubstance] = useState([]);
  const [mentalHealth, setMentalHealth] = useState([]);
  const [neuroScience, setNeuroScience] = useState([]);
  const [socialIssues, setSocialIssues] = useState([]);
  const [interest, setInterest] = useState(null);
  useEffect(()=>{
    handleSubstance();
    handleMentalHealth();
    handleNeuroscience();
    handleSocialIssue();
    getInterestFromStorage();
    handleSliderData();
  },[]);

  const checkUserLogedIn = () => {
    const token = localStorage.getItem('token');
    if(!token){
      localStorage.setItem('unAuthToken',unAuthToken)
    }
  }
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

      // console.log('Error occurred:', 'Gimmel', error);
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

      // console.log('Error occurred:', 'Gimmel', error);
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

      // console.log('Error occurred:', 'Gimmel', error);
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

      // console.log('Error occurred:', 'Gimmel', error);
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

      // console.log('Error occurred:', 'Gimmel', error);
    }
  };
  const getInterestFromStorage =  () => {
      
    const value =  localStorage.getItem('interest');
    // console.log(value)
        setInterest(value); 
   
};
  const handleInterestFilter = async (selectedSubstance, selectedHealth, selectedneuroscience, selectSocialIssue, interestsDescription) => {
    // setLoader(true);
    try {
      const result = await AuthService.InterestFilter(selectedSubstance, selectedHealth, selectedneuroscience, selectSocialIssue, interestsDescription);
      // console.log(result,"result of interest filter ---")
      if (result?.success) {
        // setLoader(false);
        // AlertHelper.show('success', 'Gimmel', result?.message);
        const isInterestValue = result?.data?.isInterest === true ? '1' : '0';
        localStorage.setItem('interest', isInterestValue);
        handleSaveIntrest();
        getInterestFromStorage();
        handleGetPost();
      } else {
        // setLoader(false);
        // AlertHelper.show('danger', 'Gimmel', result?.message);
      }
    } catch (error) {
      // setLoader(false);
      // console.log('Error occurred:', 'Gimmel', error);
    }
  };



  const handleSliderData = async () => {
    try {
      const result = await AuthService.HomeSlider();
      if (result?.success) {
        setSliderData(result?.data?.posts);
      } else {
        AlertHelper.show('danger', 'Gimmel', result?.message);
      }
    } catch (error) {
      // console.log('Error occurred:', 'Gimmel', error);
    }
  };


  const handleMoreLike = async () => {
    // LoaderHelper.loaderStatus(true);
    try {
      const result = await AuthService.MoreLike();
      // console.log(result,"result of more int video ----")
      if (result) {
        // LoaderHelper.loaderStatus(false);
        setTopicPost(result?.data)
        // AlertHelper.show('success', 'Gimmel', result?.message);
        handleSliderData();
      } else {
        // LoaderHelper.loaderStatus(false);
        // AlertHelper.show('danger', 'Gimmel', result?.message);
      }
    } catch (error) {
      // LoaderHelper.loaderStatus(false);
      // console.log('Error occurred:', 'Gimmel', error);
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

      // console.log('Error occurred:', 'Gimmel', error);
    }
  };

  const handleRemoveSuggation = async () => {
    // LoaderHelper.loaderStatus(true);
    try {
      const result = await AuthService.removeSuggation();
      if (result) {
        // LoaderHelper.loaderStatus(false);
        // console.log(result,"result")
        // AlertHelper.show('success', 'Gimmel', result?.message);
        handleSliderData();
        setNoSuggetion(result)
      } else {
        // LoaderHelper.loaderStatus(false);
        // AlertHelper.show('danger', 'Gimmel', result?.message);
      }
    } catch (error) {
      // LoaderHelper.loaderStatus(false);
      // console.log('Error occurred:', 'Gimmel', error);
    }
  };

  const handleGetFolder = async (value) => {

    // setLoader(true);
      try {
      const result = await AuthService.GetFolder(value);
      if (result?.success) {
        // console.log(result,"result of get folder")
        // LoaderHelper.loaderStatus(false);
        setGetFolder(result?.data?.data);
      } else {
        // setLoader(false);
      }
    } catch (error) {
      // setLoader(false);
      // console.log('Error occurred:', 'Gimmel', error);
    }
  };

  const handleCreateFolder = async (folders) => {

    // setLoader(true);
    try {
      const result = await AuthService.createFolder(folders);
      // console.log(result, 'result');
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
      // console.log('Error occurred:', 'Gimmel', error);
    }
  };

  const handleDeleteFolder = async (id) => {

    setLoader(true);
    try {
      const result = await AuthService.deleteFolder(id);
      
      // console.log(result, "result---delete")
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
      // console.log('Error occurred:', 'Gimmel', error);
    }
  };

  const handleRename = async (rename, id) => {

    // console.log(rename, id, "rename and id --------------")
    // setLoader(true);
    try {
      const result = await AuthService.renames(rename, id);
      if (result?.success) {
        // console.log(result, "result of rename")
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
      // console.log('Error occurred:', 'Gimmel', error);
    }
  };

  const handleSaveVideo = async () => {
    // console.log("handleSaveVideo function called");

    // setLoader(true);

    if(!selectedFolderId){
      // console.log("No folder selected. Exiting function.");

      // AlertHelper.show('warning', 'Gimmel',"Please select folder");
      return;
    }
    setLoader(false);

    try {
      // console.log("Calling AuthService.SaveVideo with:", selectedFolderId, postId);

      const result = await AuthService.SaveVideo(selectedFolderId, postId);
      if (result?.success) {
        // console.log("Video saved successfully:", result);

        // setLoader(false);
        setSelectedFolderId(null)
        // navigation.navigate("videodetails2");
        handleGetPostid()
        // navigation.setParams({
        //   data: null,
        // });
        // console.log("Navigation to videodetails2 triggered.");

        // AlertHelper.show('success', 'Gimmel', result?.data);
      } else {
        // setLoader(false);
        // console.log("Failed to save video. Error message:", result?.message);

        // AlertHelper.show('danger', 'Gimmel', result?.message);
      }
    } catch (error) {
      // setLoader(false);
      // console.log('Error occurred:', 'Gimmel', error);
    }
  };

  const handleGetPostid = async () => {
       
    setLoader(true);

    try {
    const result = await AuthService.getvideoid(id);
    setLoader(false);

    if (result?.success) {
      // setgetvideoid(result?.data);
      setLoader(false);

      
     setdata(result?.data)
    //  console.log(result, "data----nwetest");

      // if (result?.data?.postId) {
      //   setPostId(result.data.postId);
      //   console.log("Post ID Updated:", result.data.postId);
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
  // console.log('function calll')
  setLoader(true);
  try {
  // console.log("loading" )
    const result = await AuthService.NotIntrested(id);
    // console.log(result, "result---")
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
    // console.log('Error occurred:', 'Gimmel', error);
  }
};



  // console.log(headerSearch,"interest---") 

  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
      {deviceWidth > 991 ? (
        <Main getPost={getPost} historyList={historyList} setHeaderSearch={setHeaderSearch} headerSearch={headerSearch} handleHistoryList={handleHistoryList} handleSearchCont={handleSearchCont} substance={substance} mentalHealth={mentalHealth} neuroScience={neuroScience} socialIssues={socialIssues} handleInterestFilter={handleInterestFilter} interest={interest}  data={data} getFolder={getFolder} rename={rename} setValue={setValue} handleCreateFolder={handleCreateFolder} handleDeleteFolder={handleDeleteFolder} handleRename={handleRename} handleSaveVideo={handleSaveVideo} setSelectedFolderId={setSelectedFolderId} setRename={setRename} handleNotIntrested={handleNotIntrested} />
      ) : (

        

        <MainMobile  getPost={getPost} substance={substance} mentalHealth={mentalHealth} neuroScience={neuroScience} socialIssues={socialIssues} handleInterestFilter={handleInterestFilter} interest={interest} topicPost={topicPost} handleMoreLike={handleMoreLike} sliderData={sliderData} handleNotInterestedTopic={handleNotInterestedTopic}  handleRemoveSuggation={handleRemoveSuggation}noSuggetion={noSuggetion}  data={data} getFolder={getFolder} rename={rename} setValue={setValue} handleCreateFolder={handleCreateFolder} handleDeleteFolder={handleDeleteFolder} handleRename={handleRename} handleSaveVideo={handleSaveVideo} setSelectedFolderId={setSelectedFolderId} setRename={setRename} handleNotIntrested={handleNotIntrested} />

        
        

      )}

      {loading && <p style={{ textAlign: 'center', margin: '20px 0' }}>Loading more posts...</p>}

      {/* <Home /> */}
    </>
  );
}
