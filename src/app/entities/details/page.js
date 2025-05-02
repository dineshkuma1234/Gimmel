"use client";

import React, { useState, useRef, useEffect } from "react";
import Header from "../../../components/header/header";
import ReactPlayer from "react-player";
import "../../CommenStyle/details.css";
import {
  MdMoreVert,
  MdAddCircleOutline,
  MdDeleteOutline,
} from "react-icons/md";
import Image from "next/image";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Stap1 from "../../componentsIn/details-step/step1";
import Stap2 from "../../componentsIn/details-step/step2";
import Stap3 from "../../componentsIn/details-step/step3";
import Stap4 from "../../componentsIn/details-step/step4";
import Stap5 from "../../componentsIn/details-step/step5";
import SuggestedCardGrid from "../../componentsIn/Suggested/Suggested";
import Reviews from "../../componentsIn/reviews/reviews";
import Modal from "react-bootstrap/Modal";
import { Alert, Form } from "react-bootstrap";
import Link from "next/link";
import { TbEdit } from "react-icons/tb";
import { FiAlertOctagon } from "react-icons/fi";
import { type } from "os";
import {calculateMonthsAgo} from "../../utils/monthsAgo/page";
import RenameModel from "@/components/Models/Rename";
import DeleteModel from "../../../components/Models/Delete";
import SaveLibraryModal from "../../../components/Models/SaveLibrary";
import NewfolderAdd from "@/components/Models/NewfolderAdd";
import toast, { Toaster } from "react-hot-toast";
import { useModal } from "../../../components/registerpop/page"; 
import { IoMdInformationCircle } from "react-icons/io";
import { useHeader } from "@/app/Context/headerContext/HeaderContext";

// import { useSave } from "@/app/Context/saveContext/SaveContext";
function VideoDetails({
  data,
  VideoDetailsState,
  getQuiz,
  getFolder,
  handleCreateFolder,
  handleDeleteFolder,
  handleSaveVideo,
  setSelectedFolderId,
  handleRename,
  rename,
  setRename,
  shareLink,
  setSelectedTopics,
  selectedTopics,
  handleReportPost,
  suggested,
  handleNotIntrested,
  getSaveVideo,
  getSubFolder,
  handleCreateFolderSub,
  handleGetFolderSub,
  handleGetFolder,
  selectedFolderId,
  setGetQuiz,
  handleMaterialQuestion,
  handleQuizPdf,
  getid,
  quizRegenrate,
  getDiscussion,
  getHeader,
  handleDiscussPdf,
  discussionRegenrate,
  idvideo,
  getReview,
  handleSendComment,
  getActivity,
  handleActivityPdf,
  activityRegenrate,
  getHomeWork,
  handleHomeWorkPdf,
  homeworkRegenrate,
  handleLikeReview,
   handleDislikeReview,
    handleReplayPost,
  getTest,
  handleTestPdf,
  TestRegenrate,
  handleSaveVideonext,
  handleSaveSubFolderVideo,
  handleDeleteSubFolder
}) {
  const [color, setColor] = useState(false);
  const [show1, setShow1] = useState(false);
  const [materialItem, setMaterialItem] = useState("Quiz");
  const { openModal,setIsOpen } = useModal(); 
  const [showMore, setShowMore] = useState(false);
  const [selectFolder, setSelectFolder] = useState(null);

  useEffect(() => {
    if (!show1) {
      setSubfolder(""); // Jab modal close ho jaye to subfolder clear ho jaye
    }
  }, [show1]);

  const handleClose1 = () => {
    setShow1(false);
    setSubfolder("");
    setSubfolderView(false);
  };
  const handleShow1 = () => setShow1(true);
  const [subFolderView, setSubfolderView] = useState(false);
  const [subfolderName, setSubfolderName] = useState("");
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [show4, setShow4] = useState(false);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const [show5, setShow5] = useState(false);

  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
      // setShow(false)
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const [folders, setFolders] = useState("");
 
  const [active, setActive] = useState(null);
  const [subfolderid, setsubfolderid] = useState(null);
const [inerFolder, setinerFolder] = useState()
  const handleNavigateSave = (item) => {
    // ('_id', _id)
    setSelectedFolderId(item?._id);
    setSubfolderName(item?.name);
    setSubfolderView(true);
    setActive(item?._id);
    setsubfolderid(item?._id);
    setinerFolder(item?._id)
    // handleCreateFolderSub(addnewFolder);
    handleGetFolderSub(item?._id)
  };

  const handleNavigatename = (item) => {
    // ('_id', _id)
    setSelectedFolderId(item?._id);
    setColor(true);
    setActive(item?._id);
    // handleCreateFolderSub(addnewFolder);
    handleGetFolderSub(item?._id)
  };
  const [deleteModel, setDeleteModel] = useState(false);
  // const [selectedItem, setSelectedItem] = useState(null);
  const [renameModel, setRenameModel] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show6, setShow6] = useState(false);

  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);

  const dropdownRefnwe = useRef(null);

  const [isDropdownOpenid, setisDropdownOpenid] = useState(null);
  const [threeDotItem, setThreeDotItem] = useState(null);
  const toggleDropdownnwe = (item) => {
    // (item,"if")
    setisDropdownOpenid((prev) => (prev === item ? null : item));
    setThreeDotItem(item);
  };


  const convertToKM = (num) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    } else {
      return `${num}`;
    }
  };
  const inputDate = data?.createdAt;
  const formatTimeAgo = (inputDate) => {
    // if (!data?.createdAt) return "Invalid date"; // Handle empty/null values

    const date = new Date(data?.createdAt); // Convert backend date to Date object
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

  const handleChange = (e) => {
    if (subFolderView) {
      setAddNewFolder(e.target.value);
    } else {
      setFolders(e.target.value);
    }
  };

  



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

  const toggleSelection = (topicText) => {
    setSelectedTopics((prevSelected) => {
      if (prevSelected.includes(topicText)) {
        // Remove topic if already selected
        return prevSelected.filter((item) => item !== topicText);
      } else {
        // Add topic if not selected
        return [...prevSelected, topicText];
      }
    });
  };

   const copyUrl = (idvideo) => {
    <Toaster position="top-right" reverseOrder={false} />;
    toast.success("Link copied to clipboard");
    navigator.clipboard.writeText(
      `https://gimmeldevelop.netlify.app/mainHome/${idvideo}/videodetails2`
    );
  };
  const Share = [
    { id: 1, text: "Discussion points", value: "discussionPoints" },
    { id: 2, text: "Quizzes", value: "Quizzes" },
    { id: 3, text: "Tests", value: "Tests" },
    { id: 4, text: "Exercises", value: "Exercises" },
    { id: 5, text: "Homework", value: "homeworkAssignments" },
  ];
  const [selectedValue, setSelectedValue] = useState([]);

  const handleChange1 = (e) => {
    setSelectedValue(e.target.value);
  };
  const [text, setText] = useState("");

  const handleChange2 = (e) => {
    setText(e.target.value);
  };
  // (text,"text value8888")
  // (selectedValue,"selectedValue value8888")
  const [Subfolder, setSubfolder] = useState();
  const [addnewFolder, setAddNewFolder] = useState("");

  React.useEffect(() => {}, [show]);

  return (
    <>
      {/* Rename folder modal start */}
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
      />
      {/* Share Modal */}
      <Modal
        show={show2}
        onHide={handleClose2}
        centered
        className="custom-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Share</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body-container share-modal">
            <div className="share-comtent">
              <div className="share-alart">
                Do you want to attach the generated materials to the shared
                link?
              </div>
              <div className="checkbox-container">
                <Form.Check
                  className="question-select mb-3"
                  inline
                  label="Deselect all"
                  name="group2"
                  type={"checkbox"}
                  id={`inline-deselect-4`}
                  onClick={deselectAll}
                />
                <Form className="question-select">
                  {Share.map((topic, index) => (
                    <div
                      key={`inline-${topic}-${index}`}
                      className=" d-flex flex-column"
                    >
                      <Form.Check
                        inline
                        label={topic.text}
                        name="group2"
                        type={"checkbox"}
                        id={`inline-${topic}-5`}
                        onClick={() => toggleSelection(topic.text)}
                      />
                    </div>
                  ))}
                </Form>
              </div>
            </div>
            <div className="btn-container">
              <button
                className="btn btn-color-orange"
                onClick={(e) => {
                  const token = localStorage.getItem("token");
                  if (!token) {
                  e.preventDefault(); // Prevents navigation
                  setIsOpen(true);
                  } else {
                    copyUrl(idvideo);
                    handleClose2();                  }
              }}
              >
                Copy Link
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* Report Modal */}
      <Modal
        show={show3}
        onHide={handleClose3}
        centered
        className="custom-modal"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="modal-body-container">
            <div className="success-icon report-modal">
              <Image
                src={require("../../../assets/images/report-item.svg")}
                alt="Success"
                style={{ width: "auto" }}
              />
            </div>

            <div className="report-modal-text">
              <div className="report-modal-title">Report material</div>
              <div className="share-alart">
                Provide us more detail about the reason you reporting this
                material.
              </div>
              <div className="checkbox-container">
                <Form className="question-select">
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="d-flex flex-column">
                      <Form.Check
                        inline
                        label="Bug Report"
                        name="group2"
                        type="radio"
                        id="inline-radio-4"
                        value="Bug Report"
                        checked={selectedValue === "Bug Report"}
                        onChange={handleChange1}
                      />
                      <Form.Check
                        inline
                        label="Violent content"
                        name="group2"
                        type="radio"
                        id="inline-radio-5"
                        value="Violent Content"
                        checked={selectedValue === "Violent Content"}
                        onChange={handleChange1}
                      />
                    </div>
                  ))}
                </Form>
              </div>
              <div className="textarea-container mb-4">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder=""
                  value={text}
                  onChange={handleChange2}
                />
              </div>
            </div>
            <div className="btn-container">
              <button
                className="btn btn-color-orange"
                disabled={!text || !selectedValue}
                onClick={(e) => {
                  const token = localStorage.getItem("token");
                  if (!token) {
                  e.preventDefault(); // Prevents navigation
                  setIsOpen(true);
                  } else {
                    handleClose3(),
                    handleReportPost(selectedValue, text, data?._id);                 
                  }
              }}
              >
                   
                Send Report
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* Full summary Modal start */}
      <Modal
        show={show4}
        onHide={handleClose4}
        centered
        className="custom-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Full Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body className="overflow-hidden">
          <div className="modal-bar show_mobile">
            <div className="bar-line"></div>
          </div>
          <p>{data?.description}</p>
        </Modal.Body>
      </Modal>
     
     
 
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
      <Header />
      <main id="main" className="top-space-filter">
        <div className="video-show-container">
          <ReactPlayer
            className="react-player"
            playing
            controls
            url={data?.URL}
          />
        </div>

        <div className="custom-container">
          <div className="row">
            <div className="col-md-8 pe-0">
              <div className="card-white">
                <div className="card-inner">
                  <div className="video-title">
                    <h1>{data?.title}</h1>
                  </div>
                  <div className="sec-inline-row">
                    <div className="user-info-container">
                      <div className="user-avatar">
                        <Image
                          src={require("../../../assets/images/user.svg")}
                          alt="User Avatar"
                        />
                      </div>
                      <div className="user-name">
                        <h4>Content creator</h4>
                      </div>
                    </div>
                    <div className="btn-list-container gap-8-flex">
                      <button
                        className="btn btn-light-bg"
                        onClick={handleShow2}
                      >
                        <Image
                          src={require("../../../assets/images/share.svg")}
                          alt="Share"
                        />
                        Share
                      </button>
                      <button
                        className="btn btn-light-bg"
                        onClick={(e) => {
                          const token = localStorage.getItem("token");
                          if (!token) {
                          e.preventDefault(); // Prevents navigation
                          setIsOpen(true);
                          } else {
                            handleShow1()
                         }
                      }}
                      >
                     {localStorage.getItem("token") && data?.isSaved ?  (
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
                        ) : (
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
                        )}
                        Save
                      </button>
                      <button
                        className="btn btn-light-bg"
                        onClick={handleShow4}
                      >
                        <Image
                          src={require("../../../assets/images/summary.svg")}
                          alt="Share"
                        />
                        Summary
                      </button>
                      <div className="more-btn" ref={dropdownRef}>
                        <button
                          className="btn btn-light-bg w-40"
                          onClick={toggleDropdown}
                        >
                          <MdMoreVert />
                        </button>
                        {isDropdownOpen && (
                          <div className="dropdown-menu-card">
                            <ul>
                              <li>
                                <button variant="primary" onClick={handleShow4}>
                                  <Image
                                    src={require("../../../assets/images/summary.svg")}
                                    alt="summary"
                                  />
                                  See full summary
                                </button>
                              </li>
                              <li>
                                <button variant="primary"
                                onClick={(e) => {
                                  const token = localStorage.getItem("token");
                                  if (!token) {
                                  e.preventDefault(); // Prevents navigation
                                  setIsOpen(true);
                                  } else {
                                    handleShow1()
                                 }
                              }}
                                >
                               {localStorage.getItem("token") && data?.isSaved ?  (
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
                                  ) : (
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
                                  )}
                                  Save
                                </button>
                              </li>
                              <li>
                                <button variant="primary" onClick={handleShow2}>
                                  <Image
                                    src={require("../../../assets/images/share.svg")}
                                    alt="share"
                                  />
                                  Share
                                </button>
                              </li>
                              <div className="dropdown-divider"></div>
                              <li>
                                <button href="#" onClick={handleShow3}>
                                  <Image
                                    src={require("../../../assets/images/report-icon.svg")}
                                    alt="report"
                                  />
                                  Report
                                </button>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="account-info-container">
                    <ul className="account-info-list">
                      <li>
                        <div className="accout-rating">
                          <div className="rating-icon">
                            <Image
                              src={require("../../../assets/images/rating-light.svg")}
                              alt="Rating"
                            />
                          </div>
                          <span>{data?.engagement}/10</span>
                          <span>Rating</span>
                        </div>
                      </li>
                      <li>
                        <div className="accout-rating">
                          <div className="rating-icon">
                            <Image
                              src={require("../../../assets/images/view.svg")}
                              alt="Rating"
                            />
                          </div>
                          <span>{convertToKM(data?.viewCount)}</span>
                          <span>Views</span>
                        </div>
                      </li>
                      <li>
                        <div className="accout-rating">
                          <div className="rating-icon">
                            <Image
                              src={require("../../../assets/images/time.svg")}
                              alt="Rating"
                            />
                          </div>
                          <span>{formatTimeAgo(inputDate)}</span>
                          {/* <span>month</span> */}
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className={`video-description `}>
                    <p  className={showMore ? "full-text" : "truncated-text"}>
                      {data?.description}
                      
                      </p>

                      <span className="view-more">
                      {!showMore && (  
                        <button
                          className="btn btn-view"
                          onClick={() => {
                            document.querySelector(".view-more").style.display =
                              "none";
                            document.querySelector(".view-less").style.display =
                              "block";
                              setShowMore(true)
                          }}
                        >
                          ...more
                        </button>
                          )}
                      </span>

                    <div className="view-less" style={{ display: "none" }}>
                      <div className="account-info-container">
                        <ul className="account-list">
                          <li>
                            <div className="accout-list-inner">
                              <div className="topic-title">Source</div>
                              <div className="topic-value">{data?.source}</div>
                            </div>
                          </li>
                          <li>
                            <div className="accout-list-inner">
                              <div className="topic-title">Verified</div>
                              <div className="topic-value">
                                {data?.isVerified ? "Yes" : "No"}
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="accout-list-inner">
                              <div className="topic-title">
                                Targeted audience
                              </div>
                              <div className="topic-value">1th - 4th grade</div>
                              <div className="topic-value">5th - 8th grade</div>
                            </div>
                          </li>
                          <li>
                            <div className="accout-list-inner">
                              <div className="topic-title">Age group</div>
                              <div className="topic-value">
                                {data?.ageRange}
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="accout-list-inner">
                              <div className="topic-title">Creator</div>
                              <div className="topic-value">
                                {data?.channelName}
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="accout-list-inner">
                              <div className="topic-title">
                                Published/Uploaded
                              </div>
                              <div className="topic-value">
                                {new Date(data?.createdAt).toLocaleDateString(
                                  "en-GB"
                                )}
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="accout-list-inner">
                              <div className="topic-title">Subject area</div>
                              <div className="topic-value">
                                {data?.topic?.length > 30
                                  ? data.topic.slice(0, 30) + "..."
                                  : data?.topic}
                              </div>
                              {/* <div className="topic-value">Neuroscience</div> */}
                            </div>
                          </li>
                          <li>
                            <div className="accout-list-inner">
                              <div className="topic-title">Content type</div>
                              <div className="topic-value">Animated video</div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <button
                        className="btn btn-view"
                        onClick={() => {
                          document.querySelector(".view-more").style.display =
                            "block";
                          document.querySelector(".view-less").style.display =
                            "none";
                            setShowMore(false)
                        }}
                      >
                        Show less
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-white">
                <div className="card-inner">
                  <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="first"
                  >
                    <Col sm={12}>
                      <Nav variant="pills" className="flex-row details-tabs">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Quiz</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second"  disabled={!localStorage.getItem("token")}>Discussion</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third"  disabled={!localStorage.getItem("token")}>Activity</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="fourth"  disabled={!localStorage.getItem("token")}>Homework</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="fifth"  disabled={!localStorage.getItem("token")}>Test</Nav.Link>
                        </Nav.Item>
                      </Nav>
                       {/* Alert Message */}
                       {!localStorage.getItem("token") && (
                        <div className="alert alert-warning custom-alert mt-3">
                        <span className="Inform-Pop">
                        <IoMdInformationCircle />
                          You can generate pressurized attachments by registering and upgrading to our XY Plan.
                        </span>
                        <a href="/signup" className="button-sart-ragisration">
                          Start Registration
                        </a>
                      </div>
                      )}

                    </Col>
                    <Col sm={12}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <Stap1
                            getQuiz={getQuiz}
                            handleQuizPdf={handleQuizPdf}
                            getid={getid}
                            quizRegenrate={quizRegenrate}
                          />
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Stap2 getDiscussion={getDiscussion} getHeader={getHeader} getid={getid} handleDiscussPdf={handleDiscussPdf} discussionRegenrate={discussionRegenrate}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <Stap3 getActivity={getActivity} getHeader={getHeader} getid={getid} handleActivityPdf={handleActivityPdf} activityRegenrate={activityRegenrate}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                          <Stap4 getHomeWork={getHomeWork} getHeader={getHeader} getid={getid} handleHomeWorkPdf={handleHomeWorkPdf} homeworkRegenrate={homeworkRegenrate}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fifth">
                          <Stap5 getTest={getTest} getid={getid} handleTestPdf={handleTestPdf} TestRegenrate={TestRegenrate}/>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Tab.Container>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-white">
                <div className="card-inner">
                  <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="first"
                  >
                    <Col sm={12}>
                      <Nav variant="pills" className="flex-row details-tabs">
                        <Nav.Item className="w-50">
                          <Nav.Link eventKey="first">Suggested videos</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="w-50">
                          <Nav.Link eventKey="second">Reviews  {getReview?.length || 0}</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={12}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <div className="tab-details-container">
                            <SuggestedCardGrid
                              suggested={suggested}
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
                              handleGetFolder={handleGetFolder}
                              selectedFolderId={selectedFolderId}
                              handleDeleteSubFolder={handleDeleteSubFolder}
                              handleSaveVideonext={handleSaveVideonext}
                              handleSaveSubFolderVideo={handleSaveSubFolderVideo}
                               calculateMonthsAgo={calculateMonthsAgo}
                              
                            />
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <div className="tab-details-container">
                            <Reviews
                              getReview={getReview}
                              handleSendComment={handleSendComment}
                              handleLikeReview={handleLikeReview}
                               handleDislikeReview={handleDislikeReview}
                                handleReplayPost={handleReplayPost}
                            />
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default VideoDetails;
