"use client"

import React, { useState, useEffect, useRef } from "react";
import Header from "../../../components/header/header";
import Sidebar from "../../componentsIn/sidebar/sidebar";
import "../../CommenStyle/filter.css";
import { MdMoreVert, MdDeleteOutline } from "react-icons/md";
import Link from "next/link";
import { TbEdit } from "react-icons/tb";
import { Modal, Form } from "react-bootstrap";
import { FiAlertOctagon } from "react-icons/fi";
import Image from 'next/image';
import {calculateMonthsAgo, formatDuration} from "@/app/utils/monthsAgo/page";
import { useRouter } from "next/navigation";
function MyLibrary({getFolder,handleCreateFolder,handleGetFolderSub,handleDeleteFolder,handleSaveVideo,setSelectedFolderId,handleRename,rename,setRename,getSaveVideo,getSubFolder,handleCreateFolderSub,}) {
console.log(getSaveVideo,"getSaveVideo+++++++++++:LLivnbugnvn")
    const [show, setShow] = useState(false);
    const router = useRouter(); 

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
    },[router])

    // const [folders] = useState([
    //     { id: 1, name: 'My Library' },
    //     { id: 2, name: 'Work Documents' },
    //     { id: 3, name: 'Personal Files' },
    // ]);

    const dropdownRef = useRef(null);

    const [isDropdownOpen, setIsDropdownOpen] = useState(null);

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

      const [active, setActive]  = useState(null)
        
      const handleNavigateSave = (item) => {
        ('_id', item)
        setSelectedFolderId(item?._id);
        setSubfolderName(item?.name);
        setSubfolderView(true);
        setActive(item?._id);
        handleGetFolderSub(item?._id)
        
    };
                const dropdownRefnwe = useRef(null);
                const [deleteModel, setDeleteModel] = useState(false)
                const [renameModel, setRenameModel] = useState(false);
               const [isDropdownOpenid, setisDropdownOpenid] = useState(null);
               const [threeDotItem, setThreeDotItem] = useState(null);
               const toggleDropdownnwe = (item) => {
                // (item,"item====")
                // (item,"if")
                   setisDropdownOpenid((prev) => (prev === item ? null : item));
                   setThreeDotItem(item);
        
        
               };
        (isDropdownOpenid,"isDropdownOpenid======================")

            
                    const [subFolderView,setSubfolderView] = useState(false);
                    const [subfolderName,setSubfolderName] = useState('');
                
             const [show7, setShow7] = useState(false);
                
                    const handleClose7 = () => setShow7(false);
                    const handleShow7 = () => setShow7(true);
                
                    const [show6, setShow6] = useState(false);
                
                    const handleClose6 = () => setShow6(false);
                    const handleShow6 = () => setShow6(true);
                
           
              
        const [folders, setFolders] = useState([])
    
               const handleChange = (e) => {
                setFolders(e.target.value);
            }
            const inputDateVideo = getSaveVideo?.createdAt;
            const formatTimeAgoVideo = (createdAt) => {
                if (!createdAt) return "Invalid date"; // Handle empty/null values
            
                const date = new Date(createdAt); // Convert backend date to Date object
                if (isNaN(date.getTime())) return "Invalid date"; // Check for invalid dates
            
                const currentDate = new Date(); // Get current date
            
                // Calculate the difference in months
                const monthsDiff =
                    currentDate.getMonth() - date.getMonth() +
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
                return (
                    <div className="loading-spinner">
                        Loading.....
                    </div>
                );
              }
        
    return (
        <>
            {/* Rename folder modal start */}
                         <Modal open={renameModel} show={show7} onHide={handleClose7} centered className='custom-modal'>
                          <Modal.Header closeButton>
                              <Modal.Title>Rename folder</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                              <div className="modal-body-container">
                                  <div className="input-container modal-input">
                                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                          <Form.Label>Folder name</Form.Label>
                                          <Form.Control type="text" placeholder="" value={rename}  onChange={(event) => setRename(event.target.value)} />
                                      </Form.Group>
                                  </div>
                              </div>
                              <div className="btn-container">
                                  <button className="btn btn-color-orange" onClick={()=>{ handleRename( rename, threeDotItem?._id); setRenameModel(false);handleClose7(); }}>Save</button>
                              </div>
                          </Modal.Body>
                      </Modal>
          
                      {/* Delete folder modal start */}
                      <Modal open={deleteModel} show={show6} onHide={handleClose6} centered className='custom-modal'>
                          <Modal.Body>
                              <div className="modal-body-container">
                                  <div className="icon-container d-flex justify-content-center">
                                      <FiAlertOctagon />
                                  </div>
                                  <div className="title-container d-flex justify-content-center align-items-center">
                                      <p className='modal-title'>Are you sure?</p>
                                  </div>
                                  <div className="input-container modal-input">
                                      <p className='modal-text text-center'>Do you want to delete this folder? This action cannot be undone.</p>
                                  </div>
                              </div>
                              <div className="btn-container d-flex gap-3">
                                  <button className="btn btn-color-orange" onClick={()=>{handleDeleteFolder(threeDotItem?._id) ;setDeleteModel(true); handleClose6()}}>Delete</button>
                                  <button className="btn btn-color-orange-outline" onClick={handleClose6}>Cancel</button>
                              </div>
                          </Modal.Body>
                      </Modal>

            <Header />

            <main id="main" className="top-space-filter">
                <div className="category-filter-container">
                    <div className="sidebar">
                        <div className="sidebar-inner">
                            <Sidebar />
                        </div>
                    </div>
                    <div className='main-container'>
                        <div className="page-main-title-mylibrary">
                            <h3>{subFolderView? subfolderName :`  My Library`}</h3>
                        </div>
                        <div className='body-top'>
                            <div className='body-top-left mt-3 mb-3'>
                                <div className='short-by'>
                                    <p>Sort by</p>
                                    <select name="" id="" className='short-by-select'>
                                        <option>Most recent</option>
                                        <option>Most popular</option>
                                    </select>
                                </div>
                            </div>
                            <div className='body-top-right'>
                                <div className='view-type'>
                                    <div className='list-type-view'>
                                        <div className='list-icon-text'>List view</div>
                                        <div className='list-icon'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 20H20C20.55 20 21.0208 19.8042 21.4125 19.4125C21.8042 19.0208 22 18.55 22 18V16H9V20ZM2 8H7V4H4C3.45 4 2.97917 4.19583 2.5875 4.5875C2.19583 4.97917 2 5.45 2 6V8ZM2 14H7V10H2V14ZM4 20H7V16H2V18C2 18.55 2.19583 19.0208 2.5875 19.4125C2.97917 19.8042 3.45 20 4 20ZM9 14H22V10H9V14ZM9 8H22V6C22 5.45 21.8042 4.97917 21.4125 4.5875C21.0208 4.19583 20.55 4 20 4H9V8Z" fill="#104E5B" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                           <div className='folder-lists'>
                       
                                               {/* // doesnt make sense */}
                                           {/* {getSaveVideo === "getFolder"} */}
                       
                                           {Array.isArray(getFolder) &&!subFolderView ?( getFolder.length > 0 ?(    
                                           getFolder.map((item, index) => (
                                                   <div key={index} className='folder-view'>
                                                   <div className='folder-inner' >
                                                       <div className='folder-content-inline'>
                                                       <div className='folder-content-left' style={{width:"90%"}} onClick={() => handleNavigateSave(item)}>
                                                           <div className='folder-icon'>
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
                                                           <div className={`folder-name ${active === item._id ? "active" : ""}`} onClick={()=>{}} >
                                                               <p className="">{item.name}</p>
                                                           </div>
                                                       </div>
                       
                                                       <div className='folder-content-right'>
                                                           <div className='folder-icon'>
                                                           <div className="folder-content-right " onClick={() => toggleDropdownnwe(item)}  ref={dropdownRefnwe}>
                                                               <button
                                                               className="folder-icon"
                                                              // Use item.id here
                                                               >
                                                               <MdMoreVert />
                                                               </button>
                       
                                                               {/* Show the dropdown only if it matches the current item's ID */}
                                                               {isDropdownOpenid?._id === item._id && (
                                                               <div className="dropdown-menu-card">
                                                                   <ul>
                                                                   <li>
                                                                       <button variant="primary" onClick={handleShow7}>
                                                                       <TbEdit />
                                                                       Rename
                                                                       </button>
                                                                   </li>
                                                                   <li className="hide_mobile">
                                                                       <button variant="primary" onClick={handleShow6}>
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
                                                    ) : (
                                                        <p className="no-search">No folders available</p>
                                                    )
                                               ):subFolderView ?
                       <>
                                              { Array.isArray(getSubFolder)&&getSubFolder?.map((item, index) => (
                                                   <div key={index} className='folder-view'>
                                                   <div className='folder-inner' onClick={() =>{ handleNavigateSave(item)}}>
                                                       <div className='folder-content-inline'>
                                                       <div className='folder-content-left' onClick={() => handleNavigateSave(item)}>
                                                           <div className='folder-icon'>
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
                                                           <div className={`folder-name ${active === item._id ? "active" : ""}`} >
                                                               <p className="">{item.name}</p>
                                                           </div>
                                                       </div>
                       
                                                       <div className='folder-content-right'>
                                                           <div className='folder-icon'>
                                                           <div className="folder-content-right" ref={dropdownRefnwe}>
                                                               <button
                                                               className="folder-icon"
                                                               onClick={() => toggleDropdownnwe(item)} // Use item.id here
                                                               >
                                                               <MdMoreVert />
                                                               </button>
                       
                                                               {/* Show the dropdown only if it matches the current item's ID */}
                                                               {isDropdownOpenid?._id === item._id && (
                                                               <div className="dropdown-menu-card">
                                                                   <ul>
                                                                   <li>
                                                                       <button variant="primary" onClick={handleShow7}>
                                                                       <TbEdit />
                                                                       Rename
                                                                       </button>
                                                                   </li>
                                                                   <li className="hide_mobile">
                                                                       <button variant="primary" onClick={handleShow6}>
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
                                              
                                               {getSaveVideo &&
  Array.isArray(getSaveVideo) && getSaveVideo.length > 0 ? (
    getSaveVideo.map((item, index) => (
      <div className="categories-card" key={item?._id || index}>
        <div className="row">
          <div className="col-md-6">
            {/* <Link href={`/mainHome/${item?._id}/videodetails2`}> */}
              <div className="categories-card__thumbnail">
                <Image
                  src={item?.thumbnail || item?.thumbnailUrl}
                  alt="video card"
                  width={300}
                  height={150}
                />
                <div className="video-duration">
                  {formatDuration(item?.duration)}
                </div>
              </div>
            {/* </Link> */}
          </div>
          <div className="col-md-6">
            <div className="categories-card__details">
              <div className="categories-card__title">
                <h3>{item?.title}</h3>
              </div>

              <div className="eng-rating">
                <div className="rating-icon">
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_4081_18510)">
                      <path
                        d="M8.50013 11.3168L9.48346 10.3335H10.8335V8.98346L11.8168 8.00013L10.8335 7.0168V5.6668H9.48346L8.50013 4.68346L7.5168 5.6668H6.1668V7.0168L5.18346 8.00013L6.1668 8.98346V10.3335H7.5168L8.50013 11.3168ZM8.50013 15.5335L6.2668 13.3335H3.1668V10.2335L0.966797 8.00013L3.1668 5.7668V2.6668H6.2668L8.50013 0.466797L10.7335 2.6668H13.8335V5.7668L16.0335 8.00013L13.8335 10.2335V13.3335H10.7335L8.50013 15.5335ZM8.50013 13.6668L10.1668 12.0001H12.5001V9.6668L14.1668 8.00013L12.5001 6.33346V4.00013H10.1668L8.50013 2.33346L6.83346 4.00013H4.50013V6.33346L2.83346 8.00013L4.50013 9.6668V12.0001H6.83346L8.50013 13.6668Z"
                        fill="#F18D51"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4081_18510">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="rating-category">
                  <span>{item?.engagement}/10</span>
                </div>
                <div className="eng-name-category">Engagement Rating</div>
              </div>
              <div className="summary-content">
                      <p>{item?.description}</p>
                    </div>
            </div>
          </div>
        </div>
      </div>
    
    ))
  ) : (
    <></>
  )}

                                               </>
                                               :null
                                               }
                                               
                                               </div>
                                               
                    </div>
                </div>
            </main>
        </>
    );
}

export default MyLibrary;