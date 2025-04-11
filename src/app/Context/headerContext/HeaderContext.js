"use client";
import { createContext, useContext, useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchListContext } from "../searchlist/searchListContext";
import AuthService from "../../../services/AuthService";
import toast, { Toaster } from "react-hot-toast";
import { UseLoader } from "@/app/LoderHelper/context/loaderHelperContext";

// Create Context
const HeaderContext = createContext();

// Provider Component
export const HeaderProvider = ({ children }) => {
  const [searchListState, updatesearchListState] =
    useContext(SearchListContext);
  const router = useRouter();
  const { setLoader } = UseLoader();

  const [historyList, setHistoryList] = useState([]);
  const [headerSearch, setHeaderSearch] = useState("");
  const [topicPost, setTopicPost] = useState("");

  useEffect(() => {
    if (headerSearch) {
      handleHistoryList(headerSearch);
    }
  }, [headerSearch]);
  useEffect(() => {
    handleHistoryList();
  }, []);

  const handleHistoryList = async (headerSearch) => {
    // setLoader(true);
    // (headerSearch,"headerSearch in api func")
    try {
      const result = await AuthService.SearchHistory(headerSearch);
      // (result.data, 'result');
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
      // ('Error occurred:', 'Gimmel', error);
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
    selectedAudience
) => {
    setLoader(true);
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
            selectedAudience
        );
        setLoader(false);

        if (result?.success) {
          handleSaveSearchHistory(headerSearch);
            updatesearchListState(result?.data);
            router.push(
                "/searchlist",
                { data: JSON.stringify(result?.data) } 
            );
        } else {
            setLoader(false);
        }
    } catch (error) {
        setLoader(false);
    }
};

const handleSaveSearchHistory = async (
  headerSearch,postid
  
) => {
  console.log(postid,"this is handleSaveSearchHistory")
  try {
    const result = await AuthService.saveSearchHistory(
      headerSearch,postid
      
    );
    // LoaderHelper.loaderStatus(false);
    console.log(result,"ressslllllllll")
    if (result?.success) {
      
      
    } 
  } catch (error) {
    // LoaderHelper.loaderStatus(false);
    console.log('Error occurred:', 'Gimmel', error);
  }
};

  const handleTopicPost = async () => {
    setLoader(true);
    try {
      const result = await AuthService.TopicPost();
      // (result, 'result---')
      if (result?.success) {
        setTopicPost(result?.data);
        setLoader(false);
      } else {
        AlertHelper.show("danger", "Gimmel", result?.message);
        setLoader(false);
      }
    } catch (error) {
      setLoader(false);

      // ('Error occurred:', 'Gimmel', error);
    }
  };

  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "No Category Selected";

  const [getCategoryData, setGetCategoryData] = useState([]);

  useEffect(() => {
    if (category) {
      handleGetCategories(category);
    }
  }, [category]);

  const handleGetCategories = async (category) => {
    try {
      const result = await AuthService.GetCategories(category);

      if (result?.success) {
        setGetCategoryData(result?.data?.posts);
      }
    } catch (error) {}
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

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Suspense fallback={<div>Loading...</div>}>
      <HeaderContext.Provider
        value={{
          // isOn,setIsOn,chips,setChips,inputValue, setInputValue,selectedAge, setSelectedAge,selectedEngagement, setSelectedEngagement,selectedDate, setSelectedDate,sliderValue, setSliderValue,selectedValue,setSelectedValue,selectedAudience, setSelectedAudience,
          handleSearchCont,
          handleHistoryList,
          headerSearch,
          setHeaderSearch,
          historyList,
          handleNotIntrested,
          handleSaveSearchHistory,
        }}
      > 
        {children}
      </HeaderContext.Provider>
      </Suspense>
    </>
  );
};

// Hook to use HeaderContext
export const useHeader = () => useContext(HeaderContext);
