"use client"
import React, { useState , useEffect} from 'react'
import AuthService from '../../services/AuthService';
import Search from '../(MobileFlow)/searchdata/page';

export default function SearchScreen() {
    const [historyList, setHistoryList] = useState([]);
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
};
  return (
    <Search  historyList={historyList} headerSearch={headerSearch} setHeaderSearch={setHeaderSearch} handleHistoryList={handleHistoryList}/>
  )
}