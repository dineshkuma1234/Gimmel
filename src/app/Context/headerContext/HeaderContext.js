"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  Suspense,
} from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchListContext } from "../searchlist/searchListContext";
import AuthService from "../../../services/AuthService";
import toast, { Toaster } from "react-hot-toast";
import { UseLoader } from "@/app/LoderHelper/context/loaderHelperContext";
import { usePathname } from "next/navigation";
import profileImage from "../../../assets/images/user.svg";
import { categorylistcontext } from "../categorylistcontext/categorylistcontext";

// Create Context
const HeaderContext = createContext();

// Provider Component
export const HeaderProvider = ({ children }) => {
  const [searchListState, updatesearchListState] =
    useContext(SearchListContext);
  const [getCategoryData, setGetCategoryData] = useState([]);
  const router = useRouter();
  const { setLoader } = UseLoader();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [historyList, setHistoryList] = useState([]);
  const [headerSearch, setHeaderSearch] = useState("");
  const [topicPost, setTopicPost] = useState("");

  const [isOn, setIsOn] = useState(false);
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedEngagement, setSelectedEngagement] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedAudience, setSelectedAudience] = useState("");
  const [chips, setChips] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [sliderValue, setSliderValue] = useState(null);
  const [selectedValue, setSelectedValue] = useState("");
  const [imageSrc, setImageSrc] = useState(profileImage.src);
  const [selectedCategory, setSelectedCategory] = useState("");

  console.log(selectedCategory, "selectedCategory in header context");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const searchQuery = searchParams.get("search_query");
    if (searchQuery) {
      setHeaderSearch(searchQuery);
    }
    // handleHistoryList();
  }, []);

  useEffect(() => {
    if (headerSearch) {
      // console.log("Calling handleHistoryList with:", headerSearch);
      handleHistoryList(headerSearch);
    }
  }, [headerSearch]);

  useEffect(() => {
    if (pathname === "/") {
      setHeaderSearch("");
    }
  }, [pathname]);

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
        if (headerSearch) {
          router.push(
            `/searchlist?search_query=${encodeURIComponent(headerSearch)}`,
            { data: JSON.stringify(result?.data) }
          );
        }
      } else {
        setLoader(false);
      }
    } catch (error) {
      setLoader(false);
    }
  };

  const handleSaveSearchHistory = async (headerSearch, postid) => {
    // setLoader(true);
    try {
      const result = await AuthService.saveSearchHistory(headerSearch, postid);
      // LoaderHelper.loaderStatus(false);
      // console.log(result,"ressslllllllll")
      if (result?.success) {
        setLoader(false);
      }
    } catch (error) {
      setLoader(false);
      // LoaderHelper.loaderStatus(false);
      // console.log('Error occurred:', 'Gimmel', error);
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

  // const category = searchParams.get("category") || "No Category Selected";

  // const [getCategoryData, setGetCategoryData] = useState([]);

  // useEffect(() => {
  //   if (category) {
  //     handleGetCategories(category);
  //   }
  // }, [category]);

  // const handleGetCategories = async (category) => {
  //   console.log(category, "category in getCategories headerContext");
  //   try {
  //     const result = await AuthService.GetCategories(category);

  //     if (result?.success) {
  //       setGetCategoryData(result?.data?.posts);
  //     }
  //   } catch (error) {}
  // };

  const handleGetCategories = async (
    category,
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
    // console.log(category, "category in get categories");
    setLoader(true);
    try {
      const result = await AuthService.GetCategories(
        category,
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
        // console.log(result, "result in get categories");
        setGetCategoryData(result?.data?.posts);
        router.push(
          "/categorieslist",
          { data: JSON.stringify(category) } // Convert the object to a JSON string
        );

        // console.log(result, "result in get categories++++++++++");
        // setGetCategoryData(result?.data?.posts);
      }
    } catch (error) {setLoader(false);}
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
            handleSearchCont,
            handleHistoryList,
            headerSearch,
            setHeaderSearch,
            historyList,
            handleNotIntrested,
            handleSaveSearchHistory,
            isOn,
            setIsOn,
            selectedAge,
            setSelectedAge,
            selectedEngagement,
            setSelectedEngagement,
            selectedDate,
            setSelectedDate,
            selectedAudience,
            setSelectedAudience,
            chips,
            setChips,
            inputValue,
            setInputValue,
            sliderValue,
            setSliderValue,
            selectedValue,
            setSelectedValue,
            imageSrc,
            setImageSrc,
            selectedCategory,
            setSelectedCategory,
            getCategoryData,
            setGetCategoryData,
            handleGetCategories,
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
