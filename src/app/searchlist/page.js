'use client'
import React, { useContext,useState } from 'react'
import SearchList from '../entities/searchlist/page';
import SearchListMobile from '../(MobileFlow)/searchdata/searchlistdata/page';
import { SearchListContext } from '../Context/searchlist/searchListContext';
import { useIsMobile } from '@/hooks/useIsMobile';
import { UseLoader } from '../LoderHelper/context/loaderHelperContext';
import toast, { Toaster } from "react-hot-toast";
import AuthService from "../../services/AuthService";

function search() {
  const [searchListState, updatesearchListState] = useContext(SearchListContext);
  const isMobile = useIsMobile()
  const {setLoader} = UseLoader()



  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
     { isMobile?
    <SearchListMobile  searchListState={searchListState} />
    :

   <SearchList searchListState={searchListState}/>}
    </>
   
  )
}

export default search;
