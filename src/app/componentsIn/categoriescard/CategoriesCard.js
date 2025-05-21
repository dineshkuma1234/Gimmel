"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import { FiAlertOctagon } from "react-icons/fi";
import {
  MdMoreVert,
  MdAddCircleOutline,
  MdDeleteOutline,
} from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { FaEllipsisV, FaCaretDown } from "react-icons/fa";
import Link from "next/link";
import { Form } from "react-bootstrap";
import { useHeader } from "@/app/Context/headerContext/HeaderContext";
import SliderThumbnil from "../../../assets/images/video-thumbnil.svg";
import { useModal } from "@/components/registerpop/page";
import { formatDuration } from "@/app/utils/monthsAgo/page";
import RenameModel from "@/components/Models/Rename";
import DeleteModel from "@/components/Models/Delete";
import SaveLibraryModal from "@/components/Models/SaveLibrary";
import NewfolderAdd from "@/components/Models/NewfolderAdd";

function CategoriesCard({
  watchHistoryData,
  getFolder,
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
  setSelectedFolderId,
  setValue,
  setPostId,
}) {
  const [renameModel, setRenameModel] = useState(false);
  const [Subfolder, setSubfolder] = useState();
  const [isDropdownOpenid, setisDropdownOpenid] = useState(null);
  const [subfolderid, setsubfolderid] = useState(null);
  const [deleteModel, setDeleteModel] = useState(false);
  const [inerFolder, setinerFolder] = useState();
  const [selectFolder, setSelectFolder] = useState(null);
  const [subFolderView, setSubfolderView] = useState(false);
  const [subfolderName, setSubfolderName] = useState("");
  const [color, setColor] = useState(false);
  const [active, setActive] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [folders, setFolders] = useState([]);
  const [addnewFolder, setAddNewFolder] = useState("");
  const [selectedValue, setSelectedValue] = useState([]);
  const { openModal, setIsOpen } = useModal();
  const dropdownRefnwe = useRef(null);
  const dropdownRef = useRef();
  const [show, setShow] = useState(false);
  const [isSearchListPage, setIsSearchListPage] = useState(false);
  const [iscategoriesPage, setcategoriesPage] = useState(false);
  const [isMyLibraryPage, setMyLibraryPage]=useState(false);

  const [showFullSummary, setShowFullSummary] = useState(false);
  const handleShowFullSummary = () => setShowFullSummary(true);
  const handleCloseFullSummary = () => setShowFullSummary(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show6, setShow6] = useState(false);
  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);

  const [show5, setShow5] = useState(false);
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);
  const swiperRef = useRef(null);

  const handleNavigateSave = (item) => {
    // ('_id', _id)
    // console.log(item, "item for subfolder");
    setSelectedFolderId(item?._id);
    setSubfolderName(item?.name);
    setSubfolderView(true);
    // setActive(item?._id);
    setsubfolderid(item?._id);
    setinerFolder(item?._id);
    // handleCreateFolderSub(addnewFolder);
    handleGetFolderSub(item?._id);
  };

  const handleNavigatename = (item) => {
    // ('_id', _id)
    setSelectedFolderId(item?._id);
    setColor(true);
    setActive(item?._id);
    handleGetFolderSub(item?._id);
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
    // console.log("setPostId will be called with:", id?._id);
    setPostId(id);
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

  const { handleNotIntrested } = useHeader();

  // Function to add a new folder

  const [disc, setDisc] = useState(null);

  const [show4, setShow4] = useState(false);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const toggleDropdownFolder = (folderId) => {
    setOpenDropdownId((prev) => (prev === folderId ? null : folderId));
  };

  useEffect(() => {
    setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 100); // Ensure it runs after the click event on button

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openDropdownId]);

  useEffect(() => {
    setIsSearchListPage(window.location.pathname.includes("savematerial"));
    setcategoriesPage(window.location.pathname.includes("watchhistory"));
    setMyLibraryPage(window.location.pathname.includes("materials"));
  }, []);
  return (
    <>
      <Modal
        show={showFullSummary}
        onHide={handleCloseFullSummary}
        centered
        className="custom-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Full Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> {disc}</p>
        </Modal.Body>
      </Modal>

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
         setValue={setValue}
        setSubfolderView={setSubfolderView}
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
      {watchHistoryData &&
      Array.isArray(watchHistoryData) &&
      watchHistoryData.length > 0 ? (
        watchHistoryData.map((item, index) => (
          <div className="categories-card" key={(item, index)}>
            <div className="row">
              <div className="col-md-6">
                <Link href={`/mainHome/${item?._id}/videodetails2`}>
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
                </Link>
              </div>
              <div className="col-md-6">
                <div className="categories-card__details">
                  <div className="categories-card__inline">
                    <div className="categories-card__title">
                      <h3>{item?.title}</h3>
                    </div>
                    <div className="more-btn" ref={dropdownRef}>
                      {!isMyLibraryPage&& !isSearchListPage&& !iscategoriesPage && (
                        <button
                        className="btn btn-more"
                        onClick={() => {
                          toggleDropdown(item?._id);
                          setDisc(item?.description);
                        }}
                      >
                        <FaEllipsisV />
                      </button>
                      )}
                      
                      {openDropdownId === item?._id && (
                        <div className="dropdown-menu-card">
                          <ul>
                            <li>
                              <button
                                variant="primary"
                                onClick={handleShowFullSummary}
                              >
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4 19V17H14V19H4ZM4 15V13H20V15H4ZM4 11V9H20V11H4ZM4 7V5H20V7H4Z"
                                    fill="#104E5B"
                                  />
                                </svg>
                                See full summary
                              </button>
                            </li>
                            <li>
                              {item?.isSaved ? (
                                <button className="active">
                              <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.66602 28V6.66667C6.66602 5.93333 6.92713 5.30556 7.44935 4.78333C7.97157 4.26111 8.59935 4 9.33268 4H22.666C23.3993 4 24.0271 4.26111 24.5494 4.78333C25.0716 5.30556 25.3327 5.93333 25.3327 6.66667V28L15.9993 24L6.66602 28Z"
                                  fill="#F18D51"
                                />
                              </svg>
                              Save to your library
                            </button>
                              ):(
                                <button
                                variant="primary"
                                onClick={(e) => {
                                  const token = localStorage.getItem("token");
                                  if (!token) {
                                    e.preventDefault(); // Prevents navigation
                                    setIsOpen(true);
                                  } else {
                                    handleShow1();
                                  }
                                }}
                              >
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5 21V5C5 4.45 5.19583 3.97917 5.5875 3.5875C5.97917 3.19583 6.45 3 7 3H17C17.55 3 18.0208 3.19583 18.4125 3.5875C18.8042 3.97917 19 4.45 19 5V21L12 18L5 21ZM7 17.95L12 15.8L17 17.95V5H7V17.95Z"
                                    fill="#104E5B"
                                  />
                                </svg>
                                Save
                              </button>
                              )}
                              
                            </li>
                            <div className="dropdown-divider"></div>
                            <li>
                              <button
                                href="#"
                                onClick={(e) => {
                                  const token = localStorage.getItem("token");
                                  if (!token) {
                                    e.preventDefault(); // Prevents navigation
                                    setIsOpen(true);
                                  } else {
                                    handleNotIntrested(item?._id);
                                    setOpenDropdownId(null);
                                  }
                                }}
                              >
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C12.9 20 13.7667 19.8542 14.6 19.5625C15.0781 19.3952 15.5342 19.1853 15.9684 18.933C16.4868 18.6317 16.5269 17.9269 16.103 17.503L6.49703 7.89703C6.07311 7.47311 5.36828 7.51324 5.06703 8.03157C4.81467 8.46577 4.60483 8.92192 4.4375 9.4C4.14583 10.2333 4 11.1 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20ZM17.503 16.103C17.9269 16.5269 18.6317 16.4868 18.933 15.9684C19.1853 15.5342 19.3952 15.0781 19.5625 14.6C19.8542 13.7667 20 12.9 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C11.1 4 10.2333 4.14583 9.4 4.4375C8.92192 4.60483 8.46577 4.81467 8.03157 5.06703C7.51324 5.36828 7.47311 6.07311 7.89703 6.49703L17.503 16.103Z"
                                    fill="#104E5B"
                                  />
                                </svg>
                                Not interested in this channel
                              </button>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
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

                  <div className="summary">
                    <div className="summary-title">Short Summary</div>
                    <div className="summary-content">
                      <p>{item?.summary}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="no-search">
          <span>Stay tuned!</span> We are working on finding you the best
          fitting materials.
        </p>
      )}
    </>
  );
}

export default CategoriesCard;
