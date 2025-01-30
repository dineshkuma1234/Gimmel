'use client';

import React, { useEffect, useState } from 'react';
import Main from "./entities/main/page";
import MainMobile from './(MobileFlow)/mobile-main/page';
import AuthService from '../services/AuthService';
export default function Home() {
  const [page, setPage] = useState(1);
  const [deviceWidth, setDeviceWidth] = useState(0);
  const [total, setTotal] = useState();
  const [noLoad, setNoLoad] = useState(false);
  const [skeltonShow, setSkeltonShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [getPost, setGetPost] = useState('');
  const [noData, setNodata] = useState(false);
  const [data, setData] = useState('');
  

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateWidth = () => {
      setDeviceWidth(window.innerWidth);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useEffect(() => {
    if (!noLoad) {
      handleGetPost(page);
    }
  }, [page]);
  console.log(getPost,"this is get post")

  const handleGetPost = async () => {
    if(page ===1 ) {
      setTotal();
      setNoLoad(false)
    }
    // setSkeltonShow(true);
    // setLoading(page === 1);
    try {
      const result = await AuthService.GetPost(page);
      console.log(result,"result----")

      if (result?.success) {
        // setSkeltonShow(false);
        setTotal(result?.data?.totalPosts);

        if (result?.data?.totalPosts?.length === 0) {
          setGetPost(result?.data?.posts);
          // setNodata(true);
        }
        else if (!result?.data?.posts) {
          setGetPost([]);
          // setNoLoad(true);
          // setNodata(false);
        } else {
          if (page > 1) {
            const newarray = getPost.concat(result?.data?.posts);
            setGetPost(newarray);
            setData(newarray);
          } else {
            setGetPost(result?.data?.posts);
            setData(result?.data?.posts);
          }
        }
        // setLoading(false);
      } else {
        // AlertHelper.show('danger', 'Gimmel', result?.message);
        // setSkeltonShow(false);
        // setLoading(false);
      }
    } catch (error) {
      console.error('Error occurred:', error);
      // setSkeltonShow(false);
      // setLoading(false);
    }
  };

  return (
    <>
      {deviceWidth > 991 ? (
        <Main getPost={getPost} handleGetPost={handleGetPost}/>
      ) : (
        <MainMobile />
      )}
    </>
  );
}
