'use client'
import React, { useContext } from 'react'
import SearchList from '../entities/searchlist/page';
import SearchListMobile from '../(MobileFlow)/searchdata/searchlist/page';
import { SearchListContext } from '../Context/searchlist/searchListContext';
import { useIsMobile } from '@/hooks/useIsMobile';

function search() {
  const [searchListState, updatesearchListState] = useContext(SearchListContext);
  const isMobile = useIsMobile()
    console.log(searchListState,"searchListState--000")


  return (
    isMobile?
    <SearchListMobile  searchListState={searchListState}/>
    :

   <SearchList searchListState={searchListState}/>
  )
}

export default search;
