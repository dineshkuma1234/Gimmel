'use client'
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { SearchListContext } from "../searchlist/searchListContext";
import AuthService from "../../../services/AuthService";
import toast, { Toaster } from "react-hot-toast";

// Create Context
const HeaderContext = createContext();

// Provider Component
export const HeaderProvider = ({ children }) => {

    const [searchListState, updatesearchListState] = useContext(SearchListContext);
    const router = useRouter(); 
    
    const [isOn,setIsOn]=useState(false)
    const [chips,setChips]=useState([]);
    const [inputValue, setInputValue] = useState('');
    const [selectedAge, setSelectedAge] = useState("");
    const [selectedEngagement, setSelectedEngagement] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [sliderValue, setSliderValue] = useState(5);
    const [selectedValue,setSelectedValue] =useState('');
    const [selectedAudience, setSelectedAudience] = useState("");
    const [historyList, setHistoryList] = useState([]);
    const [headerSearch, setHeaderSearch] = useState("")

     useEffect(() => {
        if (headerSearch) {
            // console.log(headerSearch,"headerSearch in useeffect")
          handleHistoryList(headerSearch);
        }
      }, [headerSearch]);
      useEffect(() => {
        handleHistoryList();
      },[]);
    
      // console.log(searchListState,"searchListState--0000")  

    // const handleSearchCont = (value) => {
    //     console.log("Searching with:", value);
    //     // API call or logic here...
    // };
   
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
        console.log(headerSearch,"usecase--0000")
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


    return (
        <HeaderContext.Provider value={{
            // isOn,setIsOn,chips,setChips,inputValue, setInputValue,selectedAge, setSelectedAge,selectedEngagement, setSelectedEngagement,selectedDate, setSelectedDate,sliderValue, setSliderValue,selectedValue,setSelectedValue,selectedAudience, setSelectedAudience,
            handleSearchCont,handleHistoryList,headerSearch,setHeaderSearch,historyList,
        }}>
            {children}
        </HeaderContext.Provider>
    );
};

// Hook to use HeaderContext
export const useHeader = () => useContext(HeaderContext);
