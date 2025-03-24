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
import SuggestedCardGrid from "../../componentsIn/Suggested/Suggested";
import Reviews from "../../componentsIn/reviews/reviews";
import Modal from "react-bootstrap/Modal";
import { Alert, Form } from "react-bootstrap";
import Link from "next/link";
import { TbEdit } from "react-icons/tb";
import { FiAlertOctagon } from "react-icons/fi";
import { type } from "os";
import calculateMonthsAgo from "../../utils/monthsAgo/page";
import RenameModel from "@/components/Models/Rename";
import DeleteModel from "../../../components/Models/Delete";
import SaveLibraryModal from "../../../components/Models/SaveLibrary";
import NewfolderAdd from "@/components/Models/NewfolderAdd";

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
  setGetQuiz,handleMaterialQuestion,
  handleQuizPdf,
  getid,
  quizRegenrate,
  getDiscussion,
  getDiscusionHeader,
  handleDiscussPdf,
  discussionRegenrate
}) {
  const [color, setColor] = useState(false);
  const [show1, setShow1] = useState(false);
  const [materialItem, setMaterialItem] = useState('Quiz');
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
  // Function to add a new folder
  // const addNewFolder = () => {
  //     const newFolder = {
  //         id: folders.length + 1,
  //         name: `New Folder ${folders.length + 1}`,
  //     };
  //     setFolders([...folders, newFolder]);
  // };

  // (data,"datat9999")

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

  const [active, setActive] = useState(null);
  const [subfolderid, setsubfolderid] = useState(null);

  const handleNavigateSave = (item) => {
    // ('_id', _id)
    setSelectedFolderId(item?._id);
    setSubfolderName(item?.name);
    setSubfolderView(true);
    setActive(item?._id);
    setsubfolderid(item?._id);

    // handleCreateFolderSub(addnewFolder);
    // handleGetFolderSub(item?._id)
  };

  const handleNavigatename = (item) => {
    // ('_id', _id)
    setSelectedFolderId(item?._id);
    setColor(true);
    setActive(item?._id);
    // handleCreateFolderSub(addnewFolder);
    // handleGetFolderSub(item?._id)
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

  const handleTranscript = (topic) => {
    if (transcript.includes(topic)) {
      setTranscript(transcript.filter((item) => item !== topic));
    } else {
      setTranscript([...transcript, topic]);
    }
  };

  const isTranscript = (topic) => transcript.includes(topic);

  const toggleCheckbox = (itemName) => {
    if (selectedValues.includes(itemName)) {
      setSelectedValues(selectedValues.filter((item) => item !== itemName));
    } else {
      setSelectedValues([...selectedValues, itemName]);
    }
  };

  const isTopicSelectedTeach = (itemName) => {
    return selectedValues.includes(itemName);
  };

  const copyUrl = () => {
    navigator.clipboard.writeText(shareLink);
  };
  const Share = [
    { id: 1, text: "Discussion points", value: "discussionPoints" },
    { id: 2, text: "Quizzes", value: "Quizzes" },
    { id: 3, text: "Tests", value: "Tests" },
    { id: 4, text: "Exercises", value: "Exercises" },
    { id: 5, text: "Homework assignments", value: "homeworkAssignments" },
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
      />
      {/* Delete folder modal start */}
      {/* <Modal
        open={deleteModel}
        show={show6}
        onHide={handleClose6}
        centered
        className="custom-modal"
      >
        <Modal.Body>
          <div className="modal-body-container">
            <div className="icon-container d-flex justify-content-center">
              <FiAlertOctagon />
            </div>
            <div className="title-container d-flex justify-content-center align-items-center">
              <p className="modal-title">Are you sure?</p>
            </div>
            <div className="input-container modal-input">
              <p className="modal-text text-center">
                Do you want to delete this folder? This action cannot be undone.
              </p>
            </div>
          </div>
          <div className="btn-container d-flex gap-3">
            <button
              className="btn btn-color-orange"
              onClick={() => {
                handleDeleteFolder(isDropdownOpenid?._id);
                setDeleteModel(true);
                handleClose6();
              }}
            >
              Delete
            </button>
            <button
              className="btn btn-color-orange-outline"
              onClick={handleClose6}
            >
              Cancel
            </button>
          </div>
        </Modal.Body>
      </Modal> */}
      <DeleteModel
        deleteModel={deleteModel}
        show={show6}
        handleClose={handleClose6}
        handleDeleteFolder={handleDeleteFolder}
        setDeleteModel={setDeleteModel}
        isDropdownOpenid={isDropdownOpenid}
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
                onClick={() => {
                  copyUrl();
                  handleClose2();
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
                onClick={() => {
                  handleClose3(),
                    handleReportPost(selectedValue, text, data?._id);
                }}
                disabled={!text || !selectedValue}
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
      {/* Save to My Library Modal start */}
      {/* <Modal
        show={show1}
        onHide={handleClose1}
        onClick={() => c("Subfolder")}
        centered
        className="custom-modal pe-0"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {subFolderView ? subfolderName : `Save to My Library`}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="body-top">
            <div className="body-top-left">
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
      {/* {getSaveVideo === "getFolder"} */}/
      {/* {Array.isArray(getSubFolder) &&
                    getSubFolder?.map((item, index) => (
                      <div key={index} className="folder-view">
                        <div
                          className="folder-inner"
                          onClick={() => {
                            handleNavigateSave(item?._id);
                          }}
                        >
                          <div className="folder-content-inline">
                            <div
                              className="folder-content-left"
                              onClick={() => handleNavigateSave(item?._id)}
                            >
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
                                <p className="">{item.name}</p>
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
                                    onClick={() => toggleDropdownnwe(item)} // Use item.id here
                                  >
                                    <MdMoreVert />
                                  </button>

                                  {/* Show the dropdown only if it matches the current item's ID */}
      {/* {isDropdownOpenid?._id === item._id && (
                                    <div className="dropdown-menu-card">
                                      <ul>
                                        <li>
                                          <button
                                            variant="primary"
                                            onClick={handleShow}
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
                    ))} */}
      {/* {Array.isArray(getSaveVideo) &&
                    getSaveVideo.map((item, index) => (
                      <div className="video-card-container" key={index}>
                        <div className="video-card-content">
                          {/* <Link href={`/mainHome/${item?._id}/videodetails2`}> */}
      {/* <div className="video-card-image">
                            <Image
                              src={item?.thumbnailUrl}
                              alt="video card"
                              width={150}
                              height={200}
                            />
                            <div className="video-duration">
                              {item?.duration}
                            </div>
                          </div> */}
      {/* </Link> */}
      {/* <div className="inline-gap-8">
                            <div className="video-title">
                              <h2>{item?.title}</h2>
                            </div>
                          </div>
                          <div className="bold-text">{item?.channelName}</div>
                          <div className="accout-rating">
                            <div className="rating-icon align-items-center gap-2 ">
                              <Image
                                src={require("../../../assets/images/time.svg")}
                                alt="Rating"
                              />{" "}
                              <span>{calculateMonthsAgo(item?.createdAt)}</span>
                            </div> */}
      {/* <span>month</span> */}
      {/* </div>
                          <div className="video-card-detail">
                            <div className="video-de-title">
                              <div className="de-title"> */}
      {/* <Link href={`/mainHome/${item?._id}/videodetails2`}>{item?.title}</Link> */}
      {/* </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </>
              ) : null}
            </div> */}
      {/* <div className="add-new-folder">
              <button
                type="button"
                className="btn btn-new-folder"
                onClick={handleShow5}
              >
                <MdAddCircleOutline /> New Folder
              </button>
            </div>
          </div> */}
      {/* <div className="body-footer">
            <button
              type="button"
              value={color}
              className="btn-color-orange"
              onClick={() => {
                handleClose1();
                handleSaveVideo();
              }}
            >
              Save here
            </button>
          </div>--
        </Modal.Body>
      </Modal>  */}
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
      />
      {/* New folder Modal start */}
      {/* <Modal
        show={show5}
        onHide={handleClose5}
        centered
        className="custom-modal new-folder-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>New folder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body-container">
            <div className="input-container modal-input">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Folder name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>
            </div>
          </div>
          <div className="btn-container">
            <button
              className="btn btn-color-orange"
              onClick={() => {
                handleClose5();
                // addNewFolder();
                if (subFolderView) {
                  handleCreateFolderSub(active, addnewFolder);
                } else {
                  handleCreateFolder(folders);
                }
              }}
            >
              Create folder
            </button>
          </div>
        </Modal.Body>
      </Modal> */}
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
                        onClick={handleShow1}
                      >
                        {data?.isSaved ? (
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
                                <button variant="primary" onClick={handleShow1}>
                                  {data?.isSaved ? (
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
                  <div className="video-description">
                    <p>
                      {data?.description}

                      <span className="view-more">
                        <button
                          className="btn btn-view"
                          onClick={() => {
                            document.querySelector(".view-more").style.display =
                              "none";
                            document.querySelector(".view-less").style.display =
                              "block";
                          }}
                        >
                          ...more
                        </button>
                      </span>
                    </p>

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
                          <Nav.Link eventKey="second">Discussion</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Activity</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="fourth">Homework</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="fifth">Test</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={12}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <Stap1 getQuiz={getQuiz}  handleQuizPdf={handleQuizPdf} getid={getid} quizRegenrate={quizRegenrate}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Stap2 getDiscussion={getDiscussion} getDiscusionHeader={getDiscusionHeader} getid={getid} handleDiscussPdf={handleDiscussPdf} discussionRegenrate={discussionRegenrate}/>
                        </Tab.Pane>
                      </Tab.Content>
                      {/* <Tab.Content>
                        <Tab.Pane eventKey="second">
                          <Stap1 getQuiz={getQuiz} />
                        </Tab.Pane>
                      </Tab.Content> */}
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
                          <Nav.Link eventKey="second">Reviews 96</Nav.Link>
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
                            />
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <div className="tab-details-container">
                            <Reviews />
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
