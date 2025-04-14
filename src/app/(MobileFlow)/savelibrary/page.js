'use client'

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MdMoreVert, MdAddCircleOutline, MdDeleteOutline } from "react-icons/md";
import Link from "next/link";
import { TbEdit } from "react-icons/tb";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import '../../CommenStyle/details.css';
import { FiAlertOctagon } from "react-icons/fi";
import {calculateMonthsAgo} from "@/app/utils/monthsAgo/page";
import RenameModel from "@/components/Models/Rename";
import DeleteModel from "@/components/Models/Delete";
import SaveLibraryModal from "@/components/Models/SaveLibrary";
import NewfolderAdd from "@/components/Models/NewfolderAdd";
import { useModal } from "@/components/registerpop/page";

function SaveLibrary({  getFolder,
    handleCreateFolder,
    handleDeleteFolder,
    handleSaveVideo,
    handleRename,
    rename,
    setRename,
    getSubFolder,
    handleGetFolder,
    getSaveVideo,
    selectedFolderId,
    handleDeleteSubFolder,
    handleSaveVideonext,
    handleSaveSubFolderVideo,
    handleCreateFolderSub,
    handleGetFolderSub,
    setSelectedFolderId
  }) {


           const [renameModel, setRenameModel] = useState(false);
              const [Subfolder, setSubfolder] = useState();
              const [isDropdownOpenid, setisDropdownOpenid] = useState(null);
              const [subfolderid, setsubfolderid] = useState(null);
              const [deleteModel, setDeleteModel] = useState(false);
              const [inerFolder, setinerFolder] = useState()
              const [selectFolder, setSelectFolder] = useState(null);
              const [subFolderView, setSubfolderView] = useState(false);
             const [subfolderName, setSubfolderName] = useState("");
             const [color, setColor] = useState(false);
             const [active, setActive] = useState(null);
             const [isDropdownOpen, setIsDropdownOpen] = useState(false);
             const [folders, setFolders] = useState([]);
             const [addnewFolder, setAddNewFolder] = useState("");
             const [selectedValue, setSelectedValue] = useState([]);
              const { openModal,setIsOpen } = useModal(); 
              const dropdownRefnwe = useRef(null);
              const dropdownRef = useRef()
          const [show, setShow] = useState(false);
        
          const handleClose = () => setShow(false);
          const handleShow = () => setShow(true);
        
          const [show1, setShow1] = useState(true);
        
          const handleClose1 = () => setShow1(false);
          const handleShow1 = () => setShow1(true);
        
          const [show6, setShow6] = useState(false);
          const handleClose6 = () => setShow6(false);
          const handleShow6 = () => setShow6(true);
        
          const [show5, setShow5] = useState(false);
          const handleClose5 = () => setShow5(false);
          const handleShow5 = () => setShow5(true)
          const swiperRef = useRef(null);
        
        
          const handleNavigateSave = (item) => {
            // ('_id', _id)
            setSelectedFolderId(item?._id);
            setSubfolderName(item?.name);
            setSubfolderView(true);
            // setActive(item?._id);
            setsubfolderid(item?._id);
            setinerFolder(item?._id)
            // handleCreateFolderSub(addnewFolder);
            handleGetFolderSub(item?._id)
            handleSaveVideonext(item?._id)
          };
        
          const handleNavigatename = (item) => {
            // ('_id', _id)
            setSelectedFolderId(item?._id);
            setColor(true);
            setActive(item?._id);
            handleGetFolderSub(item?._id)
          };
        
          const handleChange = (e) => {
            if (subFolderView) {
              setAddNewFolder(e.target.value);
            } else {
              setFolders(e.target.value);
            }
          };
        
          
        
          const toggleDropdownnwe = (item) => {
            // (item,"if")
            setisDropdownOpenid((prev) => (prev === item ? null : item));
            setThreeDotItem(item);
          };
        
          const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
              setIsDropdownOpen(false);
            }
          };
        
        
        
        
        
          
        
        
        
        useEffect(() => {
          window.addEventListener("click", handleClickOutside);
          return () => {
            window.removeEventListener("click", handleClickOutside);
          };
        }, []);
        
        
          const [openDropdownId, setOpenDropdownId] = useState(null);
          const toggleDropdown = (id) => {
            setOpenDropdownId((prevId) => (prevId === id ? null : id));
          };
        
          const handleOutsideClick = (event) => {
            if (
              !event.target.closest(".dropdown-menu-card") &&
              !event.target.closest(".dropdown-toggle")
            ) {
              setOpenDropdownId(null);
            }
          };
        
          useEffect(() => {
            document.addEventListener("mousedown", handleOutsideClick);
            return () => {
              document.removeEventListener("mousedown", handleOutsideClick);
            };
          }, []);
        
         
        
          // Function to add a new folder
          const addNewFolder = () => {
            const newFolder = {
              id: folders.length + 1,
              name: `New Folder ${folders.length + 1}`,
            };
            setFolders([...folders, newFolder]);
          };
        
          const [expandedVideoId, setExpandedVideoId] = useState(null);
        
          const handleToggleExpand = (_id) => {
            setExpandedVideoId(expandedVideoId === _id ? null : _id);
          };
        
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

<SaveLibraryModal
        show_modal={show1}
        close_library_modal={handleClose1}
        handleShow={handleShow}
        show_new_folder_popup={handleShow5}
        setSubfolder={setSubfolder}
        subFolderView={subFolderView}
        subfolderName={subfolderName}
        getFolder={getFolder}
        handleNavigateSave={handleNavigateSave}
        setColor={setColor}
        handleNavigatename={handleNavigatename}
        dropdownRefnwe={dropdownRefnwe}
        toggleDropdownnwe={toggleDropdownnwe}
        setRenameModel={setRenameModel}
        isDropdownOpenid={isDropdownOpenid}
        getSubFolder={getSubFolder}
        active={active}
        getSaveVideo={getSaveVideo}
        color={color}
        handleSaveVideo={handleSaveVideo}
        handle_show_delete={handleShow6}
        handleSaveVideonext={handleSaveVideonext}
        handleSaveSubFolderVideo={handleSaveSubFolderVideo}
        inerFolder={inerFolder}
        setSelectFolder={setSelectFolder}
        selectFolder={selectFolder}
      />
        <NewfolderAdd
        show={show5}
        handleClose={handleClose5}
        handleChange={handleChange}
        subFolderView={subFolderView}
        active={active}
        addnewFolder={addnewFolder}
        folders={folders}
        handleCreateFolder={handleCreateFolder}
        handleGetFolder={handleGetFolder}
        handleCreateFolderSub={handleCreateFolderSub}
      />
        </>
    );

}

export default SaveLibrary;