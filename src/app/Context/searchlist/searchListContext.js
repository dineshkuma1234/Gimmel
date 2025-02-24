"use client";
import { createContext, useState, useContext } from 'react';
import AuthService from '../../../services/AuthService'

// Create a context for the searchList
const SearchListContext = createContext();

// Create a provider to manage the searchList state
export const SearchListProvider = ({ children }) => {
  const [searchList, setSearchList] = useState([]);

//   // Set the searchList data
//   const setSearchListData = (data) => {
//     setSearchList(data);
//   };
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
    // LoaderHelper.loaderStatus(true);
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
      console.log(result, 'result---');
      // LoaderHelper.loaderStatus(false);

      if (result?.success) {
        if (result?.data?.length <= 0) {
          // AlertHelper.show('gray', 'Gimmel', 'No data');
        } else {
          setSearchList(result?.data);
          // navigation.navigate('TabNavigation', {
          //   screen: 'Search',
          //   params: { data: result?.data },
          // });
          router.push( "/searchlist",
            // { data: JSON.stringify(result?.data) }, // Convert the object to a JSON string
          );
        }
      } else {
        // AlertHelper.show('danger', 'Gimmel', result?.message);
      }
    } catch (error) {
      // LoaderHelper.loaderStatus(false);
      console.log('Error occurred:', 'Gimmel', error);
    }
  };
 console.log(searchList,"searchList--1212121212")

  return (
    <SearchListContext.Provider value={{ searchList, handleSearchCont }}>
      {children}
    </SearchListContext.Provider>
  );
};

// Custom hook to use the searchList context
export const useSearchList = () => useContext(SearchListContext);
console.log(useSearchList,"useSearchList--1212121212")