'use client'
import React, { useContext } from 'react'
import SearchList from '../entities/searchlist/page';
import { SearchListContext } from '../Context/searchlist/searchListContext';

function search() {
  const [searchListState, updatesearchListState] = useContext(SearchListContext);
  console.log(searchListState,"searchListState--000")
  return (
   <SearchList searchListState={searchListState}/>
  )
}

export default search;
