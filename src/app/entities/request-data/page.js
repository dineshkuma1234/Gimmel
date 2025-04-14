"use client";

import React, { useState, useEffect, useRef } from "react";
import Header from "../../../components/header/header";
import { MdMoreVert, MdAddCircleOutline } from "react-icons/md";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import "./request.css";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import Link from "next/link";
import VideoDetails from "../details/page";
import { BiSolidBellRing } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import loaderImage from "../../../assets/images/loder_img.svg";
import { formatDuration } from "../../utils/monthsAgo/page";
import RenameModel from "@/components/Models/Rename";
import DeleteModel from "@/components/Models/Delete";
import SaveLibraryModal from "@/components/Models/SaveLibrary";
import NewfolderAdd from "@/components/Models/NewfolderAdd";
import { useModal } from "@/components/registerpop/page";

function RequestData({
  handleCreateRequest,
  requestListData,
  handlegetVideoRequest,
  getVideoRequestData,
  setSelectedItems,
  handleRequestSaveVideo,
  selectedTopics,
  setSelectedTopics,
  shareLink,
  handleSharePost,
  idvideo,
  setId,
  setidvideo,
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
  calculateMonthsAgo,
  handleGetFolderSub,
  setSelectedFolderId,
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
  const swiperRef = useRef(null);
  const router = useRouter();
  const [fullscreen, setFullscreen] = useState(true);

  const [showOverview, setShowOverview] = useState(false);

  const [yourRequest, setYourRequest] = useState("");
  const [discription, setDiscription] = useState("");
  const [avoided, setavoided] = useState("");
  const [details, setDetails] = useState("");

  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

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

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);


  const [showshare, setShowshare] = useState(false);

  const handleCloseshare = () => setShowshare(false);
  const handleShowshare = () => setShowshare(true);

  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [show4, setShow4] = useState(false);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const handleNavigateSave = (item) => {
    // ('_id', _id)
    console.log(item, "item for subfolder");
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

  const [expandedVideoId, setExpandedVideoId] = useState(null);

  const handleToggleExpand = (_id) => {
    setExpandedVideoId(expandedVideoId === _id ? null : _id);
  };

  useEffect(() => {
    const token = localStorage?.getItem("token");
    if (!token) {
      router.push("/");
    } else {
      setLoading(false);
    }
  }, [router]);

  const isTopicSelected = (topicText) => selectedTopics.includes(topicText);

  // const request = {
  //   isNotified: false, // ya true set kar sakte hain testing ke liye
  // };

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
    { id: 5, text: "Homework assignments", value: "homeworkAssignments" },
  ];

  const [activeItem, setActiveItem] = useState([]);
  const handleActiveChange = (id) => {
    setActiveItem(
      (prevSelected) =>
        prevSelected.includes(id)
          ? prevSelected.filter((item) => item !== id) // Remove if already selected
          : [...prevSelected, id] // Add if not selected
    );
    setSelectedItems(id);
  };

  const [currentStep, setCurrentStep] = useState(1); // Step 1 is active by default

  const handleConfirm = () => {
    if (activeItem) {
      setCurrentStep(2); // Move to Step 2
      handleRequestSaveVideo(activeItem);
    } else {
      alert("Please select a video before proceeding."); // Optional validation
    }
  };

  // Function to add a new folder
  const addNewFolder = () => {
    const newFolder = {
      id: folders.length + 1,
      name: `New Folder ${folders.length + 1}`,
    };
    setFolders([...folders, newFolder]);
  };

  const maxWords = 60;
  const handleTextChange = (value) => {
    const inputValue = value.target.value;
    // Split text into words and check the length
    const words = inputValue.trim().split(/\s+/);
    if (words.length <= maxWords) {
      setDiscription(inputValue);
    }
  };

  const handleTextAvoid = (value) => {
    const inputValue = value.target.value;
    // Split text into words and check the length
    const words = inputValue.trim().split(/\s+/);
    if (words.length <= maxWords) {
      setavoided(inputValue);
    }
  };

  const handleTextDetails = (value) => {
    const inputValue = value.target.value;
    // Split text into words and check the length
    const words = inputValue.trim().split(/\s+/);
    if (words.length <= maxWords) {
      setDetails(inputValue);
    }
  };

  if (loading) {
    return <div className="loading-spinner">Loading.....</div>;
  }

  return (
    <>
      {/* Request sent sucesfully Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        centered
        className="custom-modal success-modal"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="modal-body-container">
            <div className="success-icon">
              <Image
                src={require("../../../assets/images/Untitled_Artwork.svg")}
                alt="Success"
              />
            </div>
            <div className="modal-text">Request sent sucesfully!</div>
            <div className="btn-container">
              <button className="btn btn-color-orange" onClick={handleClose}>
                Okay
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={show2}
        onHide={handleClose2}
        centered
        className="custom-modal success-modal"
      >
        <Modal.Header closeButton>
          <h4>Request sent sucesfully!</h4>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body-container">
            <div className="text-small">
              Thank you for your request. We are extending our library every
              day. Stay tuned as a material fitting to your request might appear
              in any day. If you wish a personalised video offer for your
              request consider subscribing to our XY plan.
            </div>
            <div className="btn-container d-block">
              <button className="btn-color-orange" onClick={handleClose2}>
                Upgrade my Plan
              </button>
              <button
                className="btn-color-orange-transprent mt-4"
                onClick={handleShow3}
              >
                Okay
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Feedback Modal */}
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
                src={require("../../../assets/images/feedback.svg")}
                alt="Success"
              />
            </div>

            <div className="report-modal-text">
              <div className="report-modal-title">
                How&apos;s your experience so far?
              </div>
              <div className="share-alart">
                We&apos&apos;d love to hear your thoughts! What&apos;s working
                well, and what would you improve?
              </div>
              <div className="textarea-container mb-4">
                <Form.Control as="textarea" rows={3} placeholder="" />
              </div>
            </div>
            <div className="btn-container">
              <button className="btn btn-color-orange" onClick={handleClose3}>
                Send Report
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={show4}
        onHide={handleClose4}
        centered
        className="custom-modal modal-full"
      >
        <Modal.Body>
          <div className="modal-body-container">
            <VideoDetails />
          </div>
        </Modal.Body>
      </Modal>

      {/* Share Modal */}
      <Modal
        show={show5}
        onHide={handleClose5}
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
                  handleClose5();
                }}
              >
                Copy Link
              </button>
            </div>
          </div>
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
      />
      <NewfolderAdd
        show={showshare}
        handleClose={showshare}
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
        <div className="category-filter-container">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <div className="sidebar">
              <div className="sidebar-inner">
                <Nav variant="pills" className="flex-column request-data">
                  <Nav.Item>
                    <Nav.Link eventKey="first">
                      <div className="d-flex align-items-center">
                        <MdAddCircleOutline className="me-2 d-block" />
                        New Request
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <div className="dropdown-divider"></div>
                  {requestListData &&
                    Array.isArray(requestListData) &&
                    requestListData.map((request, index) => (
                      <Nav.Item
                        eventKey={`request-${index}`}
                        className={
                          request?.isNotified === true ? "notified-link" : ""
                        }
                        onClick={() => {
                          // console.log(request?._id,"request")
                          handlegetVideoRequest(request?._id);
                          setId(request?._id);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <Nav.Link
                          eventKey={`request-${index}`}
                          className={
                            request?.isNotified === true ? "notified-link" : ""
                          }
                        >
                          <div className="d-flex align-items-center">
                            {request?.isNotified && (
                              <BiSolidBellRing className="bell-icon d-flex align-items-center" />
                            )}
                            <span className="notification-title">
                              {request?.title}
                            </span>
                          </div>

                          <MdMoreVert />
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                </Nav>
              </div>
            </div>
            <div className="main-container pt-4">
              <div className="card-white mt-0">
                <div className="card-padding-request">
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <div className="row justify-content-center">
                        {!showOverview && (
                          <div className="col-10">
                            <div className="page-request-title">
                              What do you need
                            </div>
                            <div className="page-request-data">
                              <Form className="request-data-form form-width">
                                <Form.Group
                                  className="mb-4 row"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <div className="col-4">
                                    <Form.Label>
                                      Title of your request
                                    </Form.Label>
                                  </div>
                                  <div className="col-8">
                                    <Form.Control
                                      type="text"
                                      placeholder=""
                                      value={yourRequest}
                                      onChange={(e) =>
                                        setYourRequest(e.target.value)
                                      }
                                    />
                                  </div>
                                </Form.Group>
                                <Form.Group
                                  className="mb-4 row"
                                  controlId="exampleForm.ControlInput2"
                                >
                                  <div className="col-4">
                                    <Form.Label>
                                      Material description
                                    </Form.Label>
                                  </div>
                                  <div className="col-8">
                                    <Form.Control
                                      as="textarea"
                                      placeholder=""
                                      className="height-96"
                                      value={discription}
                                      onChange={handleTextChange}
                                    />
                                    <div className="count-text">
                                      {
                                        discription
                                          .trim()
                                          .split(/\s+/)
                                          .filter(Boolean).length
                                      }
                                      /{maxWords} words
                                    </div>
                                  </div>
                                </Form.Group>
                                <Form.Group
                                  className="mb-4 row"
                                  controlId="exampleForm.ControlInput3"
                                >
                                  <div className="col-4">
                                    <Form.Label>
                                      What should be avoided?
                                    </Form.Label>
                                  </div>
                                  <div className="col-8">
                                    <Form.Control
                                      as="textarea"
                                      placeholder=""
                                      className="height-96"
                                      value={avoided}
                                      onChange={handleTextAvoid}
                                    />
                                    <div className="count-text">
                                      {
                                        avoided
                                          .trim()
                                          .split(/\s+/)
                                          .filter(Boolean).length
                                      }
                                      /{maxWords} words
                                    </div>
                                  </div>
                                </Form.Group>
                                <Form.Group
                                  className="row"
                                  controlId="exampleForm.ControlInput4"
                                >
                                  <div className="col-4">
                                    <Form.Label>Additional details</Form.Label>
                                  </div>
                                  <div className="col-8">
                                    <Form.Control
                                      as="textarea"
                                      placeholder=""
                                      className="height-96"
                                      value={details}
                                      onChange={handleTextDetails}
                                    />
                                    <div className="count-text">
                                      {
                                        details
                                          .trim()
                                          .split(/\s+/)
                                          .filter(Boolean).length
                                      }
                                      /{maxWords} words
                                    </div>
                                  </div>
                                </Form.Group>
                              </Form>
                              <div className="btn-container d-flex justify-content-center">
                                <button
                                  className="btn btn-form-orange"
                                  onClick={() => setShowOverview(true)}
                                  disabled={
                                    !yourRequest.length ||
                                    !discription.length ||
                                    !avoided.length ||
                                    !details.length
                                  }
                                >
                                  Review Request
                                </button>
                              </div>
                            </div>
                          </div>
                        )}

                        {showOverview && (
                          <div className="col-10">
                            <div className="page-request-title">
                              Request overview
                            </div>
                            <div className="page-request-data">
                              <Form className="request-data-form-overview form-width">
                                <Form.Group
                                  className="mb-4 row"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <div className="col-4">
                                    <Form.Label>
                                      Title of your request
                                    </Form.Label>
                                  </div>
                                  <div className="col-8">
                                    <Form.Control
                                      type="text"
                                      placeholder=""
                                      value={yourRequest}
                                      readOnly
                                    />
                                  </div>
                                </Form.Group>
                                <Form.Group
                                  className="mb-4 row"
                                  controlId="exampleForm.ControlInput2"
                                >
                                  <div className="col-4">
                                    <Form.Label>
                                      Material description
                                    </Form.Label>
                                  </div>
                                  <div className="col-8">
                                    <Form.Control
                                      as="textarea"
                                      placeholder=""
                                      className="height-96"
                                      value={discription}
                                      readOnly
                                    />
                                    {/* <div className="count-text">0/60</div> */}
                                  </div>
                                </Form.Group>
                                <Form.Group
                                  className="mb-4 row"
                                  controlId="exampleForm.ControlInput3"
                                >
                                  <div className="col-4">
                                    <Form.Label>
                                      What should be avoided?
                                    </Form.Label>
                                  </div>
                                  <div className="col-8">
                                    <Form.Control
                                      as="textarea"
                                      placeholder=""
                                      className="height-96"
                                      value={avoided}
                                      readOnly
                                    />
                                    {/* <div className="count-text">0/60</div> */}
                                  </div>
                                </Form.Group>
                                <Form.Group
                                  className="row"
                                  controlId="exampleForm.ControlInput4"
                                >
                                  <div className="col-4">
                                    <Form.Label>Additional details</Form.Label>
                                  </div>
                                  <div className="col-8">
                                    <Form.Control
                                      as="textarea"
                                      placeholder=""
                                      className="height-96"
                                      value={details}
                                      readOnly
                                    />
                                    {/* <div className="count-text">0/60</div> */}
                                  </div>
                                </Form.Group>
                              </Form>
                              <div className="btn-container d-flex justify-content-center gap-4">
                                <button
                                  className="btn btn-form-orange-transparent"
                                  onClick={() => setShowOverview(false)}
                                >
                                  Edit Request
                                </button>
                                <button
                                  className="btn btn-form-orange"
                                  onClick={() => {
                                    setShowOverview(false);
                                    handleShow();
                                    handleCreateRequest(
                                      yourRequest,
                                      discription,
                                      avoided,
                                      details
                                    );
                                    setYourRequest("");
                                    setDiscription("");
                                    setavoided("");
                                    setDetails("");
                                  }}
                                >
                                  Send Request
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </Tab.Pane>

                    {requestListData &&
                      Array.isArray(requestListData) &&
                      requestListData?.map((request, index) => (
                        <Tab.Pane eventKey={`request-${index}`}>
                          <div className="row justify-content-center">
                            <div className="col-11">
                              <div className="page-request-title">
                                {request?.title}
                              </div>
                              <div className="page-request-data">
                                {!request?.isNotified ? (
                                  <div className="request-data-load">
                                    <div className="request-item">
                                      <div className="request-loader-container">
                                        <Image
                                          src={loaderImage}
                                          style={{ objectFit: "contain" }}
                                          alt="loader"
                                        />
                                        <p>
                                          Stay tuned! We are working on finding
                                          you the best fitting materials.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="bg-green-light">
                                    <div className="bg-green-inner">
                                      {currentStep === 1 && (
                                        <div
                                          className="content-box-inner"
                                          id="step-1"
                                        >
                                          <div className="top-text">
                                            Which of these videos best fits your
                                            needs?
                                          </div>

                                          <div className="select-video-container">
                                            <div className="row">
                                              {Array.isArray(
                                                getVideoRequestData
                                              ) &&
                                                getVideoRequestData.map(
                                                  (video) => (
                                                    <div
                                                      className="col-4"
                                                      key={video._id}
                                                    >
                                                      <div
                                                        className={`select-video-item ${
                                                          activeItem.includes(
                                                            video._id
                                                          )
                                                            ? "active"
                                                            : ""
                                                        }`}
                                                      >
                                                        <div className="btn-listing">
                                                          <div className="button-left-side">
                                                            <button
                                                              className="btn btn-icon eye-icon"
                                                              onClick={
                                                                handleShow4
                                                              }
                                                            >
                                                              <svg
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                              >
                                                                <path
                                                                  d="M12 16C13.25 16 14.3125 15.5625 15.1875 14.6875C16.0625 13.8125 16.5 12.75 16.5 11.5C16.5 10.25 16.0625 9.1875 15.1875 8.3125C14.3125 7.4375 13.25 7 12 7C10.75 7 9.6875 7.4375 8.8125 8.3125C7.9375 9.1875 7.5 10.25 7.5 11.5C7.5 12.75 7.9375 13.8125 8.8125 14.6875C9.6875 15.5625 10.75 16 12 16ZM12 14.2C11.25 14.2 10.6125 13.9375 10.0875 13.4125C9.5625 12.8875 9.3 12.25 9.3 11.5C9.3 10.75 9.5625 10.1125 10.0875 9.5875C10.6125 9.0625 11.25 8.8 12 8.8C12.75 8.8 13.3875 9.0625 13.9125 9.5875C14.4375 10.1125 14.7 10.75 14.7 11.5C14.7 12.25 14.4375 12.8875 13.9125 13.4125C13.3875 13.9375 12.75 14.2 12 14.2ZM12 19C9.56667 19 7.35 18.3208 5.35 16.9625C3.35 15.6042 1.9 13.7833 1 11.5C1.9 9.21667 3.35 7.39583 5.35 6.0375C7.35 4.67917 9.56667 4 12 4C14.4333 4 16.65 4.67917 18.65 6.0375C20.65 7.39583 22.1 9.21667 23 11.5C22.1 13.7833 20.65 15.6042 18.65 16.9625C16.65 18.3208 14.4333 19 12 19ZM12 17C13.8833 17 15.6125 16.5042 17.1875 15.5125C18.7625 14.5208 19.9667 13.1833 20.8 11.5C19.9667 9.81667 18.7625 8.47917 17.1875 7.4875C15.6125 6.49583 13.8833 6 12 6C10.1167 6 8.3875 6.49583 6.8125 7.4875C5.2375 8.47917 4.03333 9.81667 3.2 11.5C4.03333 13.1833 5.2375 14.5208 6.8125 15.5125C8.3875 16.5042 10.1167 17 12 17Z"
                                                                  fill="#104E5B"
                                                                />
                                                              </svg>
                                                            </button>
                                                            <button
                                                              className="btn btn-icon save-icon"
                                                              onClick={
                                                                handleShow1
                                                              }
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
                                                                  fill="#242424"
                                                                />
                                                              </svg>
                                                            </button>
                                                            <button
                                                              className="btn btn-icon share-icon"
                                                              onClick={() =>
                                                                handleShow5()
                                                              }
                                                            >
                                                              <svg
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                              >
                                                                <path
                                                                  d="M6 23C5.45 23 4.97917 22.8042 4.5875 22.4125C4.19583 22.0208 4 21.55 4 21V10C4 9.45 4.19583 8.97917 4.5875 8.5875C4.97917 8.19583 5.45 8 6 8H9V10H6V21H18V10H15V8H18C18.55 8 19.0208 8.19583 19.4125 8.5875C19.8042 8.97917 20 9.45 20 10V21C20 21.55 19.8042 22.0208 19.4125 22.4125C19.0208 22.8042 18.55 23 18 23H6ZM11 16V4.825L9.4 6.425L8 5L12 1L16 5L14.6 6.425L13 4.825V16H11Z"
                                                                  fill="#242424"
                                                                />
                                                              </svg>
                                                            </button>
                                                          </div>

                                                          <div className="button-right-side">
                                                            <div className="check-button">
                                                              <Form.Check
                                                                type="checkbox"
                                                                className="check-icon"
                                                                id={`check-icon-${video._id}`}
                                                                name="video-selection"
                                                                checked={activeItem.includes(
                                                                  video._id
                                                                )}
                                                                onChange={() =>
                                                                  handleActiveChange(
                                                                    video?._id
                                                                  )
                                                                }
                                                              />
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="video-card-image request-thumbnail">
                                                          <Image
                                                            src={
                                                              video.thumbnailUrl
                                                            }
                                                            alt="video card"
                                                            width={300}
                                                            height={200}
                                                            layout="intrinsic"
                                                          />
                                                          <div className="video-duration">
                                                            {formatDuration(
                                                              video?.duration
                                                            )}
                                                          </div>
                                                        </div>
                                                        <div className="de-title">
                                                          <Link href="/videodetails2">
                                                            {video.title}
                                                          </Link>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  )
                                                )}
                                            </div>
                                          </div>

                                          <div className="footer-btn-container">
                                            <div className="btn-right">
                                              <button className="btn btn-trans">
                                                None of these
                                              </button>
                                              <button
                                                className="btn btn-orange-request"
                                                onClick={handleConfirm}
                                                disabled={!activeItem}
                                              >
                                                Confirm
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      )}

                                      {currentStep === 2 && (
                                        <div
                                          className="request-data-overview-container"
                                          id="step-2"
                                        >
                                          {getVideoRequestData
                                            .filter((video) =>
                                              activeItem.includes(video._id)
                                            )
                                            .map((video) => (
                                              <div className="bg-white">
                                                <div className="row align-items-center">
                                                  <div className="col-6">
                                                    <div className="video-card-image">
                                                      <Image
                                                        src={video.thumbnailUrl}
                                                        alt="video card"
                                                        width={300}
                                                        height={200}
                                                        layout="intrinsic"
                                                      />
                                                      <div className="video-duration">
                                                        {formatDuration(
                                                          video?.duration
                                                        )}
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-6 ps-0">
                                                    <div className="video-details">
                                                      <div className="de-title mb-3">
                                                        <Link href="/videodetails2">
                                                          {video?.title}
                                                        </Link>
                                                      </div>
                                                      <div className="summary">
                                                        <div className="summary-title">
                                                          Short Summary
                                                        </div>
                                                        <div className="summary-content">
                                                          <p>
                                                            {video?.description}
                                                          </p>
                                                        </div>
                                                      </div>
                                                      <div className="video-btn">
                                                        <button
                                                          className="btn btn-bg-light"
                                                          onClick={() => {
                                                            copyUrl(idvideo);
                                                            handleClose5();
                                                          }}
                                                        >
                                                          <svg
                                                            width="20"
                                                            height="20"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="M6 23C5.45 23 4.97917 22.8042 4.5875 22.4125C4.19583 22.0208 4 21.55 4 21V10C4 9.45 4.19583 8.97917 4.5875 8.5875C4.97917 8.19583 5.45 8 6 8H9V10H6V21H18V10H15V8H18C18.55 8 19.0208 8.19583 19.4125 8.5875C19.8042 8.97917 20 9.45 20 10V21C20 21.55 19.8042 22.0208 19.4125 22.4125C19.0208 22.8042 18.55 23 18 23H6ZM11 16V4.825L9.4 6.425L8 5L12 1L16 5L14.6 6.425L13 4.825V16H11Z"
                                                              fill="#104e5b"
                                                            />
                                                          </svg>
                                                          Share
                                                        </button>
                                                        <button
                                                          className="btn btn-bg-light"
                                                          onClick={() =>
                                                            handleRequestSaveVideo(
                                                              activeItem
                                                            )
                                                          }
                                                        >
                                                          <svg
                                                            width="21"
                                                            height="21"
                                                            viewBox="0 0 21 21"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="M4.29102 17.791V4.45768C4.29102 3.99935 4.45421 3.60699 4.7806 3.2806C5.10699 2.95421 5.49935 2.79102 5.95768 2.79102H14.291C14.7493 2.79102 15.1417 2.95421 15.4681 3.2806C15.7945 3.60699 15.9577 3.99935 15.9577 4.45768V17.791L10.1243 15.291L4.29102 17.791Z"
                                                              fill="#104E5B"
                                                            />
                                                          </svg>
                                                          Save
                                                        </button>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            ))}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                )}
                                <Form className="request-data-form-overview">
                                  <Form.Group
                                    className="mb-4 row"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <div className="col-3">
                                      <Form.Label>Date posted</Form.Label>
                                    </div>
                                    <div className="col-9">
                                      <Form.Control
                                        type="text"
                                        placeholder=""
                                        value={
                                          request?.createdAt
                                            ? new Date(request.createdAt)
                                                .toLocaleDateString("en-US", {
                                                  month: "2-digit",
                                                  day: "2-digit",
                                                  year: "numeric",
                                                })
                                                .replace(/\//g, ".")
                                            : ""
                                        }
                                      />
                                    </div>
                                  </Form.Group>
                                  <Form.Group
                                    className="mb-4 row"
                                    controlId="exampleForm.ControlInput2"
                                  >
                                    <div className="col-3">
                                      <Form.Label>
                                        Material description
                                      </Form.Label>
                                    </div>
                                    <div className="col-9">
                                      <Form.Control
                                        as="textarea"
                                        placeholder=""
                                        className="height-96"
                                        value={request?.description}
                                      />
                                    </div>
                                  </Form.Group>
                                  <Form.Group
                                    className="mb-4 row"
                                    controlId="exampleForm.ControlInput3"
                                  >
                                    <div className="col-3">
                                      <Form.Label>
                                        What should be avoided?
                                      </Form.Label>
                                    </div>
                                    <div className="col-9">
                                      <Form.Control
                                        as="textarea"
                                        placeholder=""
                                        className="height-96"
                                        value={request?.avoidedDetails}
                                      />
                                    </div>
                                  </Form.Group>
                                  <Form.Group
                                    className="row"
                                    controlId="exampleForm.ControlInput4"
                                  >
                                    <div className="col-3">
                                      <Form.Label>
                                        Additional details
                                      </Form.Label>
                                    </div>
                                    <div className="col-9">
                                      <Form.Control
                                        as="textarea"
                                        placeholder=""
                                        className="height-96"
                                        value={request?.addDetails}
                                      />
                                    </div>
                                  </Form.Group>
                                </Form>
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                      ))}
                  </Tab.Content>
                </div>
              </div>
            </div>
          </Tab.Container>
        </div>
      </main>
    </>
  );
}

export default RequestData;
