'use client'
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { SearchListContext } from "../searchlist/searchListContext";
import AuthService from "../../../services/AuthService";
import toast, { Toaster } from "react-hot-toast";
import { UseLoader } from "@/app/LoderHelper/context/loaderHelperContext";

// Create Context
const HeaderContext = createContext();

// Provider Component
export const HeaderProvider = ({ children }) => {

    const [searchListState, updatesearchListState] = useContext(SearchListContext);
    const router = useRouter(); 
    const {setLoader} = UseLoader()
    
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
      },[]);
    
   
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
        selectedAudience,
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
            selectedAudience,
          );
          // (result, 'result---111');
          setLoader(false);
    
          if (result?.success) {
            if (result?.data?.length <= 0) {
              // AlertHelper.show('gray', 'Gimmel', 'No data');
              toast.error(result?.message, {
                className: "custom-toast", // Apply the custom class
            });
              
            } else {
              updatesearchListState(result?.data);

              router.push( "/searchlist",
                { data: JSON.stringify(result?.data) }, // Convert the object to a JSON string
              );
            }
          } else {
            // AlertHelper.show('danger', 'Gimmel', result?.message);
            setLoader(false);
    
          }
        } catch (error) {
          setLoader(false);
          // ('Error occurred:', 'Gimmel', error);
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
        <HeaderContext.Provider value={{
            // isOn,setIsOn,chips,setChips,inputValue, setInputValue,selectedAge, setSelectedAge,selectedEngagement, setSelectedEngagement,selectedDate, setSelectedDate,sliderValue, setSliderValue,selectedValue,setSelectedValue,selectedAudience, setSelectedAudience,
            handleSearchCont,handleHistoryList,headerSearch,setHeaderSearch,historyList,handleNotIntrested,
        }}>
            {children}
        </HeaderContext.Provider>
        </>
    );
};

// Hook to use HeaderContext
export const useHeader = () => useContext(HeaderContext);
