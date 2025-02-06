'use client';

import React, { useEffect, useState } from 'react';
import Main from "./entities/main/page";
import MainMobile from './(MobileFlow)/mobile-main/page';
import AuthService from '../services/AuthService';
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter(); 

  const [page, setPage] = useState(1);
  const [deviceWidth, setDeviceWidth] = useState(0);
  const [total, setTotal] = useState();
  const [noLoad, setNoLoad] = useState(false);
  const [loading, setLoading] = useState(false);
  const [getPost, setGetPost] = useState([]);

  // Track screen width for responsive rendering
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateWidth = () => {
      setDeviceWidth(window.innerWidth);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
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
    try {
      const result = await AuthService.GetPost(page);
      console.log(result, "result----");

      if (result?.success) {
        setTotal(result?.data?.totalPosts);
        const newPosts = result?.data?.posts || [];

        if (newPosts.length === 0) {
          setNoLoad(true); // Stop further API calls when no more data
        } else {
          setGetPost((prevPosts) => [...prevPosts, ...newPosts]);
        }
      }
    } catch (error) {
      console.error('Error occurred:', error);
    } finally {
      setLoading(false);
    }
  };
  ///////Search \\\\\\
  const [historyList, setHistoryList] = useState([]);
  const [selectSearchList, setSelectSearchList] = useState('')
  const [headerSearch, setHeaderSearch] = useState("")
  const [searchList, setSearchList] = useState('');
  useEffect(() => {
    if (headerSearch) {
      handleHistoryList(headerSearch);
    }
  }, [headerSearch])
  // useEffect(() => {
  //   handleHistoryList();
  // },[]);

  
  console.log(historyList,"historyList--------");
const handleHistoryList = async (headerSearch) => {
    // LoaderHelper.loaderStatus(true);
    try {
      const result = await AuthService.SearchHistory(headerSearch);
      console.log(result.data, 'result');
      if (result?.success) {
        // LoaderHelper.loaderStatus(false);
        setHistoryList(result?.data?.data || []);
      } else {
        // LoaderHelper.loaderStatus(false);
        // AlertHelper.show('danger', 'Gimmel', result?.message);
      }
    } catch (error) {
      console.log('Error occurred:', 'Gimmel', error);
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
            { data: JSON.stringify(result?.data) }, // Convert the object to a JSON string
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

  return (
    <>
      {deviceWidth > 991 ? (
        <Main getPost={getPost} historyList={historyList} setHeaderSearch={setHeaderSearch} headerSearch={headerSearch} handleHistoryList={handleHistoryList} handleSearchCont={handleSearchCont}  />
      ) : (
        <MainMobile  getPost={getPost} />
        
        

      )}

      {loading && <p style={{ textAlign: 'center', margin: '20px 0' }}>Loading more posts...</p>}
    </>
  );
}
