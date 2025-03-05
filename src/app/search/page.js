"use client"
import React, { useState , useEffect, useContext} from 'react'
import AuthService from '../../services/AuthService';
import Search from '../(MobileFlow)/searchdata/page';
import { SearchListContext } from '../Context/searchlist/searchListContext';
import toast, { Toaster } from "react-hot-toast";

export default function SearchScreen() {
    const [historyList, setHistoryList] = useState([]);
    const [searchListState, updatesearchListState] = useContext(SearchListContext);
     const [headerSearch, setHeaderSearch] = useState("")
       useEffect(() => {
         if (headerSearch) {
           handleHistoryList(headerSearch);
         }
       }, [headerSearch]);
//  console.log(historyList,"historyList====")
    const handleHistoryList =async (headerSearch) =>{
        try {
            const result = await AuthService.SearchHistory(headerSearch);
            if (result?.success) {
                setHistoryList(result?.data?.data || []);
            }
            else {
                // console.log(result?.message);
            }
        }catch (error) {
            // console.log('Error occurred:', 'Gimmel', error);
    }

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

            router.push( "/search/searchlist",
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
  
};
  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
    <Search  historyList={historyList} headerSearch={headerSearch} setHeaderSearch={setHeaderSearch} handleHistoryList={handleHistoryList} />
    </>
  )
}