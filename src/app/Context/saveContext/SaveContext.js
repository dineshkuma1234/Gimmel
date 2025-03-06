"use client "

import { useState,useEffect,useContext,createContext } from "react";
import AuthService from "../../../../src/services/AuthService";



const SaveContext= createContext();
  
export const SaveProvider=({Children})=>{
    const [getSaveVideo,setGetSaveVideo] = useState([]);
    const [selectedFolderId, setSelectedFolderId] = useState(null);
   useEffect(() => {
      if (selectedFolderId) {
          handleSaveVideonext(selectedFolderId);
      }
  }, [selectedFolderId]);
   const handleSaveVideonext = async (selectedFolderId) => {
        // LoaderHelper.loaderStatus(true);
        try {
          const result = await AuthService.GetSaveVideo(selectedFolderId);
          if (result?.success) {
            LoaderHelper.loaderStatus(false);
            setGetSaveVideo(result?.videos);
            // console.log(result,"result++++++++++++++++++++++")
          } else {
            // LoaderHelper.loaderStatus(false);
            // AlertHelper.show('danger', 'Gimmel', result?.message || result );
          }
        } catch (error) {
          // LoaderHelper.loaderStatus(false);
          // console.log('Error occurred:', 'Gimmel', error);
        }
      };

    return(
        <>
        <SaveContext.Provider value={{
         getSaveVideo,setSelectedFolderId
        }}>
            {Children}
        </SaveContext.Provider>
        </>
    )
}

export const useSave=()=>useContext(SaveContext);