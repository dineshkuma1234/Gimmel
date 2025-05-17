import React, { useEffect, useRef, useState } from "react";
import { FaEllipsisV, FaCaretDown } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { calculateMonthsAgo, formatDuration } from "@/app/utils/monthsAgo/page";

import RenameModel from "@/components/Models/Rename";
import DeleteModel from "@/components/Models/Delete";
import SaveLibraryModal from "@/components/Models/SaveLibrary";
import NewfolderAdd from "../../../components/Models/NewfolderAdd";
import { Modal } from "react-bootstrap";
import { useModal } from "@/components/registerpop/page";

function Suggested({
  video,
  getFolder,
  handleCreateFolder,
  handleDeleteFolder,
  handleSaveVideo,
  setSelectedFolderId,
  handleRename,
  rename,
  setRename,
  handleNotIntrested,
  getSubFolder,
  handleGetFolder,
  getSaveVideo,
  selectedFolderId,
  handleDeleteSubFolder,
  handleSaveVideonext,
  handleSaveSubFolderVideo,
  handleCreateFolderSub,
  calculateMonthsAgo,
  handleGetFolderSub,
  setValue,setPostId,
  // setSubfolderView,
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
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show6, setShow6] = useState(false);
  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => {
    setShow1(false);
    setSubfolder("");
    setSubfolderView(false);
  };
  const handleShow1 = () => setShow1(true);
  const [show5, setShow5] = useState(false);
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  const [show8, setShow8] = useState(false);
  const handleClose8 = () => setShow8(false);
  const handleShow8 = () => setShow8(true);
  const handleNavigateSave = (item) => {
    // ('_id', _id)
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

  const toggleDropdown = (video) => {
    setIsDropdownOpen(!isDropdownOpen);
    setPostId(video?._id)
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const [threeDotItem, setThreeDotItem] = useState(null);

  const convertToKM = (num) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    } else {
      return `${num}`;
    }
  };
  const inputDate = getSaveVideo?.createdAt;
  const formatTimeAgo = (inputDate) => {
    // if (!getSaveVideo?.createdAt) return "Invalid date"; // Handle empty/null values

    const date = new Date(getSaveVideo?.createdAt); // Convert backend date to Date object
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

  const isTopicSelected = (topicText) => selectedTopics.includes(topicText);

  const deselectAll = () => {
    if (!setIsSelectTeachingAll) {
      // Select all topics
      setIsSelectTeachingAll(true);
      setSelectedTopics(Share.map((topic) => topic.text));
    } else {
      // Deselect all topics
      setIsSelectTeachingAll(false);
      setSelectedTopics([]);
    }
  };

  const copyUrl = () => {
    navigator.clipboard.writeText(shareLink);
  };
  const Share = [];

  return (
    <>
      {/* <RenameModel
        renameModel={renameModel}
        show7={show}
        handleClose7={handleClose}
        setSubfolder={setSubfolder}
        rename={rename}
        setRename={setRename}
        handleRename={handleRename}
        setRenameModel={setRenameModel}
      /> */}

      <Modal
        show={show8}
        onHide={handleClose8}
        centered
        className="custom-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Full Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{video?.description}</p>
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
        calculateMonthsAgo={calculateMonthsAgo}
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
      <div className="video-card suggested-card">
        <div className="video-card-content row">
          <div className="col-6">
            <Link href={`/mainHome/${video?._id}/videodetails2`}>
              <div className="video-card-image">
                <Image
                  src={video?.thumbnail}
                  width={100}
                  height={100}
                  alt="video card"
                />
                <div className="video-duration">
                  {formatDuration(video?.duration)}
                </div>
              </div>
            </Link>
          </div>
          <div className="col-6 pe-0 ps-0">
            <div className="video-card-detail">
              <div className="video-de-title">
                <div className="de-title">
                  <h4>
                    <Link href={`/mainHome/${video?._id}/videodetails2`}>
                      {video.title}
                    </Link>
                  </h4>
                </div>
                <div className="more-btn" ref={dropdownRef}>
                  <button className="btn btn-more" onClick={()=>toggleDropdown(video)}>
                    <FaEllipsisV />
                  </button>
                  {isDropdownOpen && (
                    <div className="dropdown-menu-card">
                      <ul>
                        <li>
                          <button variant="primary" onClick={handleShow8}>
                            <Image
                              src={require("../../../assets/images/summary.svg")}
                              alt="summary"
                            />
                            See full summary
                          </button>
                        </li>
                        <li>
                          {video?.isSaved?(
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
                                setPostId(video?._id);
                              }
                            }}
                          >
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.6665 28V6.66667C6.6665 5.93333 6.92762 5.30556 7.44984 4.78333C7.97206 4.26111 8.59984 4 9.33317 4H22.6665C23.3998 4 24.0276 4.26111 24.5498 4.78333C25.0721 5.30556 25.3332 5.93333 25.3332 6.66667V28L15.9998 24L6.6665 28ZM9.33317 23.9333L15.9998 21.0667L22.6665 23.9333V6.66667H9.33317V23.9333Z"
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
                                handleNotIntrested(video?._id);
                                setIsDropdownOpen(false);
                              }
                            }}
                          >
                            <Image
                              src={require("../../../assets/images/notIntrest.svg")}
                              alt="summary"
                            />
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
                    width="16"
                    height="17"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3816_18800)">
                      <path
                        d="M8.00013 12.2465L8.98346 11.2632H10.3335V9.91315L11.3168 8.92982L10.3335 7.94648V6.59648H8.98346L8.00013 5.61315L7.0168 6.59648H5.6668V7.94648L4.68346 8.92982L5.6668 9.91315V11.2632H7.0168L8.00013 12.2465ZM8.00013 16.4632L5.7668 14.2632H2.6668V11.1632L0.466797 8.92982L2.6668 6.69648V3.59648H5.7668L8.00013 1.39648L10.2335 3.59648H13.3335V6.69648L15.5335 8.92982L13.3335 11.1632V14.2632H10.2335L8.00013 16.4632ZM8.00013 14.5965L9.6668 12.9298H12.0001V10.5965L13.6668 8.92982L12.0001 7.26315V4.92982H9.6668L8.00013 3.26315L6.33346 4.92982H4.00013V7.26315L2.33346 8.92982L4.00013 10.5965V12.9298H6.33346L8.00013 14.5965Z"
                        fill="#F18D51"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3816_18800">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0 0.929688)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="rating">
                  <span>{video?.rating}</span>
                </div>
                <div className="eng-name">
                  {video?.engagement}/10 Engagement Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const SuggestedCardGrid = ({
  suggested,
  getFolder,
  handleCreateFolder,
  handleDeleteFolder,
  handleSaveVideo,
  setSelectedFolderId,
  handleRename,
  rename,
  setRename,
  handleNotIntrested,
  getSaveVideo,
  getSubFolder,
  handleCreateFolderSub,
  handleGetFolderSub,
  calculateMonthsAgo,
  setValue,
  setSubfolderView,setPostId
}) => (
  <div className="row">
    {suggested?.map((video, index) => (
      <Suggested
        key={video?.id || index}
        video={video}
        getFolder={getFolder}
        rename={rename}
        handleCreateFolder={handleCreateFolder}
        handleDeleteFolder={handleDeleteFolder}
        handleRename={handleRename}
        handleSaveVideo={handleSaveVideo}
        setSelectedFolderId={setSelectedFolderId}
        setRename={setRename}
        handleNotIntrested={handleNotIntrested}
        getSaveVideo={getSaveVideo}
        getSubFolder={getSubFolder}
        handleCreateFolderSub={handleCreateFolderSub}
        handleGetFolderSub={handleGetFolderSub}
        calculateMonthsAgo={calculateMonthsAgo}
        setValue={setValue}
        setSubfolderView={setSubfolderView}
        setPostId={setPostId}
      />
    ))}
  </div>
);

export default SuggestedCardGrid;
