"use client ";

import { useState, useEffect, useContext, createContext } from "react";
import AuthService from "../../../../src/services/AuthService";
import { UseLoader } from "@/app/LoderHelper/context/loaderHelperContext";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const SaveContext = createContext();

export const SaveProvider = ({ children }) => {
  const { setLoader } = UseLoader();
  const router=useRouter();

  const [getSaveVideo, setGetSaveVideo] = useState([]);
  const [getSaveSubFolderVideo, setGetSaveSubFolderVideo] = useState("");
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const [getFolder, setGetFolder] = useState("");
  const [getSubFolder, setGetFolderSub] = useState();
  const [value, setValue] = useState(null);
  const [postId,setPostId]=useState("")
  const [selectIcon , setSelectIcon] = useState(true);
  const [selectSortValue , setSelectSortValue]=useState(null);
  const [selectedSubFolder, setSelectedSubFolder] = useState("");
  

  useEffect(() => {
    if (selectedFolderId) {
      handleSaveVideonext(selectedFolderId);
      }
  }, [selectedFolderId,selectIcon]);

  useEffect(()=>{
    handleGetFolder();
  },[])

  useEffect(()=>{
    if(selectedSubFolder){
     handleGetSubfolderVideo(selectedFolderId ,selectedSubFolder );
    }
    
  },[selectedSubFolder])

  useEffect(() => {
  const timeout = setTimeout(() => {
    handleGetFolder(selectSortValue);
  }, 500); // Delay execution by 0.5 seconds

  return () => clearTimeout(timeout); 
}, [selectSortValue]);

   useEffect(() => {
    handleGetFolderSub(selectedFolderId,value );
  }, [value])

  const handleGetFolder = async (value) => {
    setLoader(true);
    try {
      const result = await AuthService.GetFolder(value);
      if (result?.success) {
        // (result,"result of get folder")
        setLoader(false);
        setGetFolder(result?.data?.data);
      } else {
        setLoader(false);
      }
    } catch (error) {
      setLoader(false);
      // ('Error occurred:', 'Gimmel', error);
    }
  };

  const handleCreateFolder = async (folders) => {
    setLoader(true);
    try {
      const result = await AuthService.createFolder(folders);
      // (result, 'result');
      if (result?.success) {
        setLoader(false);
        handleGetFolder();
         toast.success(result?.data || "success", {
          className: "custom-toast-success",
        });
      } else {
        toast.error( result?.message, {
          className: "custom-toast",
        });
        setLoader(false);
        // AlertHelper.show("danger", "Gimmel", result?.message);
      }
    } catch (error) {
      setLoader(false);
      // ('Error occurred:', 'Gimmel', error);
    }
  };

    const handleRename = async (rename, id) => {
    // console.log(rename, id, "rename and id --------------");
    setLoader(true);
    try {
      const result = await AuthService.renames(rename, id);
      if (result?.success) {
        // console.log("yes its call rename")
        setLoader(false);
        handleGetFolder();
        toast.success(result?.message || "success", {
          className: "custom-toast-success",
        });
      } else {
        setLoader(false);
        // AlertHelper.show("danger", "Gimmel", result?.message);
      }
    } catch (error) {
      setLoader(false);
      // ('Error occurred:', 'Gimmel', error);
    }
  };

   const handleDeleteFolder = async (id) => {
    setLoader(true);
    try {
      const result = await AuthService.deleteFolder(id);

      // (result, "result---delete")
      if (result?.success) {
        setLoader(false);
        handleGetFolder();
        toast.success(result?.message || "success", {
          className: "custom-toast-success",
        });
      } else {
        setLoader(false);
        // AlertHelper.show("danger", "Gimmel", result?.message);
      }
    } catch (error) {
      setLoader(false);
      // ('Error occurred:', 'Gimmel', error);
    }
  };
  
  const handleSaveVideo = async () => {
      
      if (!selectedFolderId) {
        toast.error( "Please select folder", {
            className: "custom-toast",
          });
        return;
      }
      setLoader(true);
  
      try {
        // console.log("Calling AuthService.SaveVideo with:", selectedFolderId, postId);
  
        const result = await AuthService.SaveVideo(selectedFolderId, postId);
        if (result?.success) {
          setLoader(false)
           toast.success(result?.data || "success", {
            className: "custom-toast-success",
          });
        router.push("/");
        setSelectedFolderId(null)

        } else {
          setLoader(false);
        }
      } catch (error) {
        setLoader(false);
        // console.log('Error occurred:', 'Gimmel', error);
      } finally {
        setLoader(false);
      }
    };

  const handleSaveVideonext = async (selectedFolderId) => {
    // LoaderHelper.loaderStatus(true);
    try {
      const result = await AuthService.GetSaveVideo(selectedFolderId);
      if (result?.success) {
        // LoaderHelper.loaderStatus(false);
        setGetSaveVideo(result?.data?.videos);
        // (result,"result++++++++++++++++++++++")
      } else {
        // LoaderHelper.loaderStatus(false);
        // AlertHelper.show('danger', 'Gimmel', result?.message || result );
      }
    } catch (error) {
      // LoaderHelper.loaderStatus(false);
      // ('Error occurred:', 'Gimmel', error);
    }
  };

  //---------subFolder----------//


  const handleCreateSubFolder = async (addnewFolder) => {
    setLoader(true);
    try {
      const result = await AuthService.createSubFolder(selectedFolderId, addnewFolder);
      result, "result---";
      if (result?.success) {
        setLoader(false);
        toast.success(result?.data || "success", {
          className: "custom-toast-success",
        });
        handleGetFolderSub();
      } else {
         setLoader(false);
        // AlertHelper.show('danger', 'Gimmel', result?.message  );
      }
    } catch (error) {
       setLoader(false);
      // ('Error occurred:', 'Gimmel', error);
    }
  };

    const handleGetFolderSub = async () => {
    setLoader(true)
    try {
      const result = await AuthService.GetSubFolder(selectedFolderId, value);
      if (result?.success) {
        setLoader(false);
        result?.data?.data, "dat in api";
        setGetFolderSub(result?.data?.data);
      } else {
        setLoader(false);
        // AlertHelper.show('danger', 'Gimmel', result?.message  );
      }
    } catch (error) {
      setLoader(false);
      // ('Error occurred:', 'Gimmel', error);
    }
  };

  const handleRenameFolder = async (rename, SubId) => {
    setLoader(true)
    try {
      const result = await AuthService.RenameSubFolder(selectedFolderId, rename, SubId);
      // console.log(result, 'result---');
      if (result?.success) {
        setLoader(false)
        toast.success(result?.message || "success", {
          className: "custom-toast-success",
        });
        handleGetFolderSub();
        // setRename();
      } else {
        setLoader(false)
        // AlertHelper.show('danger', 'Gimmel', result?.message);
      }
    } catch (error) {
     setLoader(false)
      console.log('Error occurred:', 'Gimmel', error);
    }
  };

  const handleDeleteSubFolder = async (subId) => {
    setLoader(true);
    try {
      const result = await AuthService.DeleteSubFolder(selectedFolderId, subId);
      if (result?.success) {
        setLoader(false);
        toast.success(result?.message || "success", {
          className: "custom-toast-success",
        });
        handleGetFolderSub();
      } else {
        setLoader(false);
        // AlertHelper.show('danger', 'Gimmel', result?.message);
      }
    } catch (error) {
      setLoader(false);
      console.log('Error occurred:', 'Gimmel', error);
    }
  };

   const handleSaveSubFolderVideo = async (selectedSubFolder,selectedFolderId) => {
    if (!selectedFolderId) {
        toast.error( "Please select folder", {
            className: "custom-toast",
          });
        return;
      }
      setLoader(true);
    try {
      const result = await AuthService.SaveSubFolderVideo(
        postId,
        selectedSubFolder,
        selectedFolderId
      );
        if (result?.success) {
        setLoader(false)
          toast.success(result?.data || "success", {
          className: "custom-toast-success",
        });
        router.push("/");
       
      } else {
        setLoader(false);
        
      }
    } catch (error) {
      setLoader(false);
    }
  };

  const handleGetSubfolderVideo = async (selectedFolderId ,selectedSubFolder ) => {
    console.log("handleGetSubfolderVideo")
        setLoader(true)
        try {
            const result = await AuthService.getSubfolderSaveVideo(selectedFolderId ,selectedSubFolder );
            if (result?.success) {
              console.log(result,"result-------")
                setLoader(false);
                setGetSaveSubFolderVideo(result?.data?.videos);
            } else {
                setLoader(false);
                // AlertHelper.show('danger', 'Gimmel', result?.message);
            }
        } catch (error) {
            setLoader(false);
            // console.log('Error occurred:', 'Gimmel', error);
        }
    };

  console.log(getSaveSubFolderVideo,"getSaveSubFolderVideo 243 243v  ---------")
  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
      <SaveContext.Provider
        value={{
          getSaveVideo,
          selectedFolderId,
          setSelectedFolderId,
          handleCreateFolder,
          getFolder,
          handleRename,
          handleDeleteFolder,
          handleCreateSubFolder,
          getSubFolder,
          value,
          setValue,
          handleGetFolderSub,
          handleRenameFolder,
          handleDeleteSubFolder,
          setPostId,
          handleSaveVideo,setSelectIcon,handleSaveSubFolderVideo,selectSortValue,setSelectSortValue,selectedSubFolder,setSelectedSubFolder,getSaveSubFolderVideo
        }}
      >
        {children}
      </SaveContext.Provider>
    </>
  );
};

export const useSave = () => useContext(SaveContext);
