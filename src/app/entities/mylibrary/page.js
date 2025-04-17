"use client";

import React, { useState, useEffect, useRef } from "react";
import Header from "../../../components/header/header";
import Sidebar from "../../componentsIn/sidebar/sidebar";
import "../../CommenStyle/filter.css";
import { MdMoreVert, MdDeleteOutline } from "react-icons/md";
import Link from "next/link";
import { TbEdit } from "react-icons/tb";
import { Modal, Form } from "react-bootstrap";
import { FiAlertOctagon } from "react-icons/fi";
import Image from "next/image";
import { calculateMonthsAgo, formatDuration } from "@/app/utils/monthsAgo/page";
import { useRouter } from "next/navigation";
import Time from "../../../assets/images/time.svg";
import RenameModel from "@/components/Models/Rename";
import DeleteModel from "@/components/Models/Delete";
import AuthService from "@/services/AuthService";
function MyLibrary({
  getFolder,
  handleCreateFolder,
  handleGetFolderSub,
  handleDeleteFolder,
  handleSaveVideo,
  setSelectedFolderId,
  handleRename,
  rename,
  setRename,
  getSaveVideo,
  getSubFolder,
  handleCreateFolderSub,
  selectedFolderId,
  handleGetFolder,
  handleDeleteSubFolder,
  handleSaveVideonext
}) {
  // console.log(getSubFolder, "getSubFolder+++++++++++:getSubFolder");
  const router = useRouter();
  const [getSubFolderVideo,setGetSubFolderVideo]=useState("")
  const [selectFolder, setSelectFolder] = useState(null);
 const [selectSubFolder, setSelectSubFolder] = useState(null);
  const [selectSubFolderId, setSelectSubFolderId] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage?.getItem("token");
    if (!token) {
      router.push("/");
    } else {
      setLoading(false);
    }
  }, [router]);

  // const [folders] = useState([
  //     { id: 1, name: 'My Library' },
  //     { id: 2, name: 'Work Documents' },
  //     { id: 3, name: 'Personal Files' },
  // ]);

  const dropdownRef = useRef(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [subFolderVideos, setSubFolderVideos] = useState(false);
  const [subfolderid, setsubfolderid] = useState(null);
  const [inerFolder, setinerFolder] = useState()

  // console.log(subfolderid,"subfolderid")
  const toggleDropdown = (folderId) => {
    setIsDropdownOpen((prev) => (prev === folderId ? null : folderId));
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(null);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const [active, setActive] = useState(null);

 

  const handleNavigateSave = (item) => {
    // ('_id', _id)
    // console.log(item,"item for subfolder")
    setSelectedFolderId(item?._id);
    setSubfolderName(item?.name);
    setSubfolderView(true);
    // setActive(item?._id);
    setsubfolderid(item?._id);
    setinerFolder(item?._id)
    // handleCreateFolderSub(addnewFolder);
    handleGetFolderSub(item?._id)
  };
  const dropdownRefnwe = useRef(null);
  const [deleteModel, setDeleteModel] = useState(false);
  const [renameModel, setRenameModel] = useState(false);
  const [isDropdownOpenid, setisDropdownOpenid] = useState(null);
  const [threeDotItem, setThreeDotItem] = useState(null);
  const [Subfolder, setSubfolder] = useState();

  const toggleDropdownnwe = (item) => {
    // (item,"item====")
    // (item,"if")
    setisDropdownOpenid((prev) => (prev === item ? null : item));
    setThreeDotItem(item);
  };
  isDropdownOpenid, "isDropdownOpenid======================";

  const [subFolderView, setSubfolderView] = useState(false);
  const [subfolderName, setSubfolderName] = useState("");

  const [show5, setShow5] = useState(false);
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  const [show6, setShow6] = useState(false);

  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);

  const [folders, setFolders] = useState([]);

  const handleChange = (e) => {
    setFolders(e.target.value);
  };
  const inputDateVideo = getSaveVideo?.createdAt;
  const formatTimeAgoVideo = (createdAt) => {
    if (!createdAt) return "Invalid date"; // Handle empty/null values

    const date = new Date(createdAt); // Convert backend date to Date object
    if (isNaN(date.getTime())) return "Invalid date"; // Check for invalid dates

    const currentDate = new Date(); // Get current date

    // Calculate the difference in months
    const monthsDiff =
      currentDate.getMonth() -
      date.getMonth() +
      12 * (currentDate.getFullYear() - date.getFullYear());

    // Calculate the difference in days
    const daysDiff = Math.floor((currentDate - date) / (1000 * 3600 * 24));

    let timeAgo = "";
    if (monthsDiff > 0) {
      timeAgo = `${monthsDiff} month${monthsDiff > 1 ? "s" : ""} ago`;
    } else if (daysDiff > 0) {
      timeAgo = `${daysDiff} day${daysDiff > 1 ? "s" : ""} ago`;
    } else {
      timeAgo = "Today";
    }
    return timeAgo;
  };

  if (loading) {
    return <div className="loading-spinner">Loading.....</div>;
  }


  const handleGetSubFolderVideo = async (id) => {


    try {
      const result = await AuthService.getSubFolderVideos(selectFolder,id);
      // console.log(result, "result-----+++++++++++++++++++++");
      if (result?.success) {
        setGetSubFolderVideo(result?.videos);
      } else {
      }
    } catch (error) {}
  };

  const handleNavigatename = (item) => {
    // ('_id', _id)
    setSelectedFolderId(item?._id);
    setColor(true);
    setActive(item?._id);
    handleGetFolderSub(item?._id)
  };
// console.log('getSubFolderVideo=====', getSubFolderVideo)
  return (
    <>
     <RenameModel
        renameModel={renameModel}
        show7={show}
        handleClose7={handleClose}
        setSubfolder={setSubfolder}
        rename={rename}
        setRename={setRename}
        handleRename={handleRename}
        setRenameModel={setRenameModel}
        handleGetFolder={handleGetFolder}
        isDropdownOpenid={isDropdownOpenid}
        getFolder={getFolder}
        getSubFolder={getSubFolder}
        subfolderid={subfolderid}
        selectedFolderId={selectedFolderId}
      />
   
      <DeleteModel
        deleteModel={deleteModel}
        show={show6}
        handleClose={handleClose6}
        handleDeleteFolder={handleDeleteFolder}
        setDeleteModel={setDeleteModel}
        isDropdownOpenid={isDropdownOpenid}
        selectedFolderId={selectedFolderId}
        getSubFolder={getSubFolder}
        handleDeleteSubFolder={handleDeleteSubFolder}
        selectFolder={selectFolder}
      />

      <Header />

      <main id="main" className="top-space-filter">
        <div className="category-filter-container">
          <div className="sidebar">
            <div className="sidebar-inner">
              <Sidebar />
            </div>
          </div>
          <div className="main-container">
            <div className="page-main-title-mylibrary">
              <h3>{subFolderView ? subfolderName : `  My Library`}</h3>
            </div>
            <div className="body-top">
              <div className="body-top-left mt-3 mb-3">
                <div className="short-by">
                  <p>Sort by</p>
                  <select name="" id="" className="short-by-select">
                    <option>Most recent</option>
                    <option>Most popular</option>
                  </select>
                </div>
              </div>
              <div className="body-top-right">
                <div className="view-type">
                  <div className="list-type-view">
                    <div className="list-icon-text">List view</div>
                    <div className="list-icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 20H20C20.55 20 21.0208 19.8042 21.4125 19.4125C21.8042 19.0208 22 18.55 22 18V16H9V20ZM2 8H7V4H4C3.45 4 2.97917 4.19583 2.5875 4.5875C2.19583 4.97917 2 5.45 2 6V8ZM2 14H7V10H2V14ZM4 20H7V16H2V18C2 18.55 2.19583 19.0208 2.5875 19.4125C2.97917 19.8042 3.45 20 4 20ZM9 14H22V10H9V14ZM9 8H22V6C22 5.45 21.8042 4.97917 21.4125 4.5875C21.0208 4.19583 20.55 4 20 4H9V8Z"
                          fill="#104E5B"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="body-middle">
                       <div className="folder-lists">
                         {/* // doesnt make sense */}
                         {/* {getSaveVideo === "getFolder"} */}
           
                         {Array.isArray(getFolder) && !subFolderView && !subFolderVideos ? (
                           getFolder.map((item, index) => (
                             <div key={index} className="folder-view">
                               <div
                                 className="folder-inner"
                                 onClick={() => {
                                  //  console.log(item, "item");
                                   setSelectFolder(item?._id)
                                   handleNavigateSave(item),
                                     handleSaveVideonext(item?._id)
                                     
                                 }}
                                 onDoubleClick={() => {
                                   setSubfolderView(true);
                                   // handleGetSubFolderVideo();
                                 }}
                               >
                                 <div className="folder-content-inline">
                                   <div className="folder-content-left">
                                     <div className="folder-icon">
                                       <svg
                                         width="32"
                                         height="32"
                                         viewBox="0 0 32 32"
                                         fill="none"
                                         xmlns="http://www.w3.org/2000/svg"
                                       >
                                         <path
                                           d="M5.33366 26.6673C4.60033 26.6673 3.97255 26.4062 3.45033 25.884C2.9281 25.3618 2.66699 24.734 2.66699 24.0007V8.00065C2.66699 7.26732 2.9281 6.63954 3.45033 6.11732C3.97255 5.5951 4.60033 5.33398 5.33366 5.33398H13.3337L16.0003 8.00065H26.667C27.4003 8.00065 28.0281 8.26176 28.5503 8.78398C29.0725 9.30621 29.3337 9.93398 29.3337 10.6673V24.0007C29.3337 24.734 29.0725 25.3618 28.5503 25.884C28.0281 26.4062 27.4003 26.6673 26.667 26.6673H5.33366ZM5.33366 24.0007H26.667V10.6673H14.9003L12.2337 8.00065H5.33366V24.0007Z"
                                           fill="#104E5B"
                                         />
                                       </svg>
                                     </div>
                                     <div
                                       className={`folder-name ${
                                         active === item._id ? "active" : ""
                                       }`}
                                     >
                                       <p
                                         className=""
                                         onClick={(event) => {
                                           setColor(true);
                                           event.stopPropagation();
                                           handleNavigatename(item);
                                           // setRenameModel(true);
                                         }}
                                       >
                                         {item.name}
                                       </p>
                                     </div>
                                   </div>
           
                                   <div className="folder-content-right">
                                     <div className="folder-icon">
                                       <div
                                         className="folder-content-right"
                                         ref={dropdownRefnwe}
                                       >
                                         <button
                                           className="folder-icon"
                                           // onClick={() => toggleDropdownnwe(item)} // Use item.id here
                                           onClick={(e) => {
                                             e.stopPropagation();
                                             toggleDropdownnwe(item);
                                             // setRenameModel(true);
                                           }}
                                         >
                                           <MdMoreVert />
                                         </button>
           
                                         {/* Show the dropdown only if it matches the current item's ID */}
                                         {isDropdownOpenid?._id === item._id && (
                                           <div className="dropdown-menu-card">
                                             <ul>
                                               <li>
                                                 <button
                                                   variant="primary"
                                                   onClick={(event) => {
                                                     event.stopPropagation();
                                                     handleShow();
                                                   }}
                                                 >
                                                   <TbEdit />
                                                   Rename
                                                 </button>
                                               </li>
                                               <li className="hide_mobile">
                                                 <button
                                                   variant="primary"
                                                   onClick={handleShow6}
                                                 >
                                                   <MdDeleteOutline />
                                                   Delete
                                                 </button>
                                               </li>
                                             </ul>
                                           </div>
                                         )}
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           ))
                         ) : subFolderView && !subFolderVideos ? (
                           <>
                             {Array.isArray(getSubFolder) &&
                               getSubFolder?.map((item, index) => (
                                <div key={index} className="folder-view">
                               <div
                                 className="folder-inner"
                                 onClick={() => {
                                  //  console.log(item, "item");
                                   handleNavigateSave(item),
                                     handleSaveVideonext(item?._id),
                                     setSelectSubFolderId(item?._id),
                                     setSelectSubFolder(item?._id)
                                 }}
                                 onDoubleClick={() => {
                                   // console.log(active, "item on double click");
                                   setSubFolderVideos(true); handleGetSubFolderVideo(item?._id)
                                 } }
                               >
                                 <div className="folder-content-inline">
                                   <div className="folder-content-left">
                                     <div className="folder-icon">
                                       <svg
                                         width="32"
                                         height="32"
                                         viewBox="0 0 32 32"
                                         fill="none"
                                         xmlns="http://www.w3.org/2000/svg"
                                       >
                                         <path
                                           d="M5.33366 26.6673C4.60033 26.6673 3.97255 26.4062 3.45033 25.884C2.9281 25.3618 2.66699 24.734 2.66699 24.0007V8.00065C2.66699 7.26732 2.9281 6.63954 3.45033 6.11732C3.97255 5.5951 4.60033 5.33398 5.33366 5.33398H13.3337L16.0003 8.00065H26.667C27.4003 8.00065 28.0281 8.26176 28.5503 8.78398C29.0725 9.30621 29.3337 9.93398 29.3337 10.6673V24.0007C29.3337 24.734 29.0725 25.3618 28.5503 25.884C28.0281 26.4062 27.4003 26.6673 26.667 26.6673H5.33366ZM5.33366 24.0007H26.667V10.6673H14.9003L12.2337 8.00065H5.33366V24.0007Z"
                                           fill="#104E5B"
                                         />
                                       </svg>
                                     </div>
                                     <div
                                       className={`folder-name ${
                                         active === item._id ? "active" : ""
                                       }`}
                                     >
                                       <p
                                         className=""
                                         onClick={(event) => {
                                           setColor(true);
                                           event.stopPropagation();
                                           handleNavigatename(item);
                                           setRenameModel(true);
                                         }}
                                       >
                                         {item.name}
                                       </p>
                                     </div>
                                   </div>
           
                                   <div className="folder-content-right">
                                     <div className="folder-icon">
                                       <div
                                         className="folder-content-right"
                                         ref={dropdownRefnwe}
                                       >
                                         <button
                                           className="folder-icon"
                                           // onClick={() => toggleDropdownnwe(item)} // Use item.id here
                                           onClick={(e) => {
                                             e.stopPropagation();
                                             toggleDropdownnwe(item);
                                             setRenameModel(true);
                                           }}
                                         >
                                           <MdMoreVert />
                                         </button>
           
                                         {/* Show the dropdown only if it matches the current item's ID */}
                                         {isDropdownOpenid?._id === item._id && (
                                           <div className="dropdown-menu-card">
                                             <ul>
                                               <li>
                                                 <button
                                                   variant="primary"
                                                   onClick={(event) => {
                                                     event.stopPropagation();
                                                     handleShow();
                                                   }}
                                                 >
                                                   <TbEdit />
                                                   Rename
                                                 </button>
                                               </li>
                                               <li className="hide_mobile">
                                                 <button
                                                   variant="primary"
                                                   onClick={handleShow6}
                                                 >
                                                   <MdDeleteOutline />
                                                   Delete
                                                 </button>
                                               </li>
                                             </ul>
                                           </div>
                                         )}
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                               </div>
                             </div>
                               ))}
                             {Array.isArray(getSaveVideo) &&
                               getSaveVideo.map((item, index) => (
                                 <div className="video-card-container" key={index}>
                                   <div className="video-card-content">
                                     {/* <Link href={`/mainHome/${item?._id}/videodetails2`}> */}
                                     <div className="video-card-image">
                                       <Image
                                         src={item?.thumbnailUrl}
                                         alt="video card"
                                         width={150}
                                         height={200}
                                       />
                                       <div className="video-duration">
                                         {formatDuration(item?.duration)}
           
                                       </div>
                                     </div>
                                     {/* </Link> */}
                                     <div className="inline-gap-8">
                                       <div className="video-title">
                                         <h2>{item?.title}</h2>
                                       </div>
                                     </div>
                                     <div className="bold-text">{item?.channelName}</div>
                                     <div className="accout-rating">
                                       <div className="rating-icon align-items-center gap-2 ">
                                         <Image
                                           src={Time}
                                           alt="Rating"
                                         />{" "}
                                         <span>{calculateMonthsAgo(item?.createdAt)}</span>
                                       </div>
                                       {/* <span>month</span> */}
                                     </div>
                                     <div className="video-card-detail">
                                       <div className="video-de-title">
                                         <div className="de-title">
                                           {/* <Link href={`/mainHome/${item?._id}/videodetails2`}>{item?.title}</Link> */}
                                         </div>
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                               ))}
                           </>
                         ) : (
                           <>
                           {Array.isArray(getSubFolderVideo) &&
                               getSubFolderVideo.map((item, index) => (
                                 <div className="video-card-container" key={index}>
                                   <div className="video-card-content">
                                     {/* <Link href={`/mainHome/${item?._id}/videodetails2`}> */}
                                     <div className="video-card-image">
                                       <Image
                                         src={item?.thumbnailUrl}
                                         alt="video card"
                                         width={150}
                                         height={200}
                                       />
                                       <div className="video-duration">
                                         {formatDuration(item?.duration)}
           
                                       </div>
                                     </div>
                                     {/* </Link> */}
                                     <div className="inline-gap-8">
                                       <div className="video-title">
                                         <h2>{item?.title}</h2>
                                       </div>
                                     </div>
                                     <div className="bold-text">{item?.channelName}</div>
                                     <div className="accout-rating">
                                       <div className="rating-icon align-items-center gap-2 ">
                                         <Image
                                           src={Time}
                                           alt="Rating"
                                         />{" "}
                                         <span>{calculateMonthsAgo(item?.createdAt)}</span>
                                       </div>
                                       {/* <span>month</span> */}
                                     </div>
                                     <div className="video-card-detail">
                                       <div className="video-de-title">
                                         <div className="de-title">
                                           {/* <Link href={`/mainHome/${item?._id}/videodetails2`}>{item?.title}</Link> */}
                                         </div>
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                               ))}
                               </>
                         )}
                       </div>
           
                          { !subFolderVideos && (
                           <div className="add-new-folder">
                         {/* <button
                           type="button"
                           className="btn btn-new-folder"
                          //  onClick={show_new_folder_popup}
                         >
                           <MdAddCircleOutline /> New Folder
                         </button> */}
                       </div>
                          )}
                       
                     </div>
           
                     { !subFolderVideos &&  <div className="body-footer">
                       {/* <button
                         type="button"
                         value={color}
                         className="btn-color-orange"
                         onClick={() => {
                           close_library_modal();
                           if (subFolderView) {
                             console.log("subFolder");
                             handleSaveSubFolderVideo(selectSubFolder,selectFolder);
                           } else {
                             console.log("folder");
                             handleSaveVideo();
                           }
                         }}
                       >
                         Save here
                       </button> */}
                     </div>}
          </div>
        </div>
      </main>
    </>
  );
}

export default MyLibrary;
