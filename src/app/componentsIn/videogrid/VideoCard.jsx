import React, { useState, useEffect, useRef, useContext } from "react";
import { FaEllipsisV, FaCaretDown } from "react-icons/fa";
import SliderThumbnil from "../../../assets/images/video-thumbnil.svg";
import defoultImages from "../../../assets/images/defoultmage.jpg";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import {
  MdMoreVert,
  MdAddCircleOutline,
  MdDeleteOutline,
} from "react-icons/md";
import Link from "next/link";
import { Form, ListGroup } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

import { VideoDetailsContext } from "../../Context/VideoDetails/videoDetailsContext";
import { useRouter } from "next/navigation";
import { FiAlertOctagon } from "react-icons/fi";
import { TbEdit } from "react-icons/tb";
import calculateMonthsAgo, { formatDuration } from "@/app/utils/monthsAgo/page";
import RenameModel from "../../../components/Models/Rename";
import NewfolderAdd from "@/components/Models/NewfolderAdd";
import DeleteModel from "@/components/Models/Delete";
import SaveLibraryModal from "@/components/Models/SaveLibrary";
import { useModal } from "@/components/registerpop/page";

const VideoCard = ({
  video,
  index,
  substance,
  mentalHealth,
  neuroScience,
  socialIssues,
  handleInterestFilter,
  interest,
  data,
  getFolder,
  rename,
  setValue,
  handleCreateFolder,
  handleDeleteFolder,
  handleRename,
  handleSaveVideo,
  setSelectedFolderId,
  setRename,
  handleNotIntrested,
  getSubFolder,
  getSaveVideo,
  handleCreateFolderSub,
}) => {
      const { openModal,setIsOpen } = useModal(); 
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [VideoDetailsState, updateVideoDetailsState] =
    useContext(VideoDetailsContext);
  const [subFolderView, setSubfolderView] = useState(false);
  const [subfolderName, setSubfolderName] = useState("");
  const dropdownRef = useRef(null);
  const router = useRouter();
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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

  const [folders, setFolders] = useState([
    { id: 1, name: "My Library" },
    { id: 2, name: "Work Documents" },
    { id: 3, name: "Personal Files" },
  ]);

  // Function to add a new folder
  const addNewFolder = () => {
    const newFolder = {
      id: folders.length + 1,
      name: `New Folder ${folders.length + 1}`,
    };
    setFolders([...folders, newFolder]);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [checkedItems, setCheckedItems] = useState({});
  const [checkedItems1, setCheckedItems1] = useState({});
  const [checkedItems2, setCheckedItems2] = useState({});
  const [checkedItems3, setCheckedItems3] = useState({});
  const [selectedSubstance, setselectedSubstance] = useState([]);
  const [selectedHealth, setselectedHealth] = useState([]);
  const [selectedneuroscience, setselectedNeuroscience] = useState([]);
  const [selectSocialIssue, setselectSocialIssue] = useState([]);
  const [interestsDescription, setInterestsDescription] = useState("");
  const [showContent, setShowContent] = useState(true);
  const [Subfolder, setSubfolder] = useState();
  const [addnewFolder, setAddNewFolder] = useState("");

  const [saveVideoScreen, setSaveVideoScreen] = useState(false);
  const [renameModel, setRenameModel] = useState(false);
  const [deleteModel, setDeleteModel] = useState(false);

  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  const [show1, setShow1] = useState(false);
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

  // const [show2, setShow2] = useState(false);

  // const handleClose2 = () => setShow2(false);
  // const handleShow2 = () => setShow2(true);

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const selectedCount = Object.values(checkedItems).filter(Boolean).length;
  const selectedCount1 = Object.values(checkedItems1).filter(Boolean).length;
  const selectedCount2 = Object.values(checkedItems2).filter(Boolean).length;
  const selectedCount3 = Object.values(checkedItems3).filter(Boolean).length;

  const handleSubstances = (e) => {
    const { id, checked } = e.target;
    setCheckedItems({
      ...checkedItems,
      [id]: checked,
    });
    setselectedSubstance((prevCheckedItems) => {
      if (checked) {
        return [...prevCheckedItems, id];
      } else {
        return prevCheckedItems.filter((item) => item !== id);
      }
    });
  };

  const handleMental = (e) => {
    const { id, checked } = e.target;
    setCheckedItems1({
      ...checkedItems1,
      [id]: checked,
    });
    setselectedHealth((prevCheckedItems) => {
      if (checked) {
        return [...prevCheckedItems, id];
      } else {
        return prevCheckedItems.filter((item) => item !== id);
      }
    });
  };

  const handleNeuroscience = (e) => {
    const { id, checked } = e.target;
    setCheckedItems2({
      ...checkedItems2,
      [id]: checked,
    });
    setselectedNeuroscience((prevCheckedItems) => {
      if (checked) {
        return [...prevCheckedItems, id];
      } else {
        return prevCheckedItems.filter((item) => item !== id);
      }
    });
  };

  const handlesocialIssues = (e) => {
    const { id, checked } = e.target;
    setCheckedItems3({
      ...checkedItems3,
      [id]: checked,
    });
    setselectSocialIssue((prevCheckedItems) => {
      if (checked) {
        return [...prevCheckedItems, id];
      } else {
        return prevCheckedItems.filter((item) => item !== id);
      }
    });
  };

  const handlediscription = (event) => {
    const words = event.target.value.split(/\s+/).filter(Boolean); // Split into words
    if (words.length <= 60) {
        setInterestsDescription(event.target.value);
    }
};

  console.log(selectSocialIssue,"selectSocialIssue");
  // (video,"video")
  const handleNavigate = (video) => {
    updateVideoDetailsState(video);
    router.push(`/mainHome/${video?._id}/videodetails2`);
  };

  const [show6, setShow6] = useState(false);

  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);
  const [show7, setShow7] = useState(false);

  const handleClose7 = () => setShow7(false);
  const handleShow7 = () => setShow7(true);

  const dropdownRefnwe = useRef(null);

  const [isDropdownOpenid, setisDropdownOpenid] = useState(null);
  const [threeDotItem, setThreeDotItem] = useState(null);

  const toggleDropdownnwe = (item) => {
    //    (item,"if")
    setisDropdownOpenid((prev) => (prev === item ? null : item));
    setThreeDotItem(item);
  };

  const handleChange = (e) => {
    if (subFolderView) {
      setAddNewFolder(e.target.value);
    } else {
      setFolders(e.target.value);
    }
  };
  // (video?._id,"videoid------");
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
  const [show5, setShow5] = useState(false);

  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  const [active, setActive] = useState(null);

  const handleNavigateSave = (item) => {
    // ('_id', _id)
    setSelectedFolderId(item?._id);
    setSubfolderName(item?.name);
    setSubfolderView(true);
    setActive(item?._id);
    // handleCreateFolderSub(addnewFolder);
    // handleGetFolderSub(item?._id)
  };

  const [color, setColor] = useState(false);
  const handleNavigatename = (item) => {
    // ('_id', _id)
    setSelectedFolderId(item?._id);
    setColor(true);
    setActive(item?._id);
    // handleCreateFolderSub(addnewFolder);
    // handleGetFolderSub(item?._id)
  };
  return (
    <>
      {/* Rename folder modal start */}
      <RenameModel
        renameModel={renameModel}
        show7={show7}
        handleClose7={handleClose7}
        setSubfolder={setSubfolder}
        rename={rename}
        setRename={setRename}
        handleRename={handleRename}
        setRenameModel={setRenameModel}
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

      {/* New folder Modal start */}
      <Modal
        show={show3}
        onHide={handleClose3}
        centered
        className="custom-modal filter-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Select some categories</Modal.Title>
        </Modal.Header>

        <div className="dropdown-divider mb-0"></div>
        <Modal.Body className="">
          <div className="custom-modal-body">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0" className="modal-select-item">
                <Accordion.Header>
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <span className="accordion-title">Substance Use</span>
                    <div className="select-count">{selectedCount}</div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="checkbox-group">
                    <Form>
                      <ListGroup>
                        {substance.map((topic, index) => (
                          <ListGroup.Item key={index}>
                            <Form.Check
                              type="checkbox"
                              id={topic.name}
                              label={topic.name}
                              checked={!!checkedItems[topic.name]} // Default to false if undefined
                              onChange={handleSubstances}
                            />
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Form>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="modal-select-item">
                <Accordion.Header>
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <span className="accordion-title">Mental Health</span>
                    <div className="select-count">{selectedCount1}</div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="checkbox-group">
                    <Form>
                      <ListGroup>
                        {mentalHealth.map((topic, index) => (
                          <ListGroup.Item key={index}>
                            <Form.Check
                              type="checkbox"
                              id={topic.name}
                              label={topic.name}
                              checked={!!checkedItems1[topic.name]} // Default to false if undefined
                              onChange={handleMental}
                            />
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Form>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="modal-select-item">
                <Accordion.Header>
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <span className="accordion-title">Neuroscience</span>
                    <div className="select-count">{selectedCount2}</div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="checkbox-group">
                    <Form>
                      <ListGroup>
                        {neuroScience.map((topic, index) => (
                          <ListGroup.Item key={index}>
                            <Form.Check
                              type="checkbox"
                              id={topic.name}
                              label={topic.name}
                              checked={!!checkedItems2[topic.name]} // Default to false if undefined
                              onChange={handleNeuroscience}
                            />
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Form>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="modal-select-item">
                <Accordion.Header>
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <span className="accordion-title">Social Issues</span>
                    <div className="select-count">{selectedCount3}</div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="checkbox-group">
                    <Form>
                      <ListGroup>
                        {socialIssues.map((topic, index) => (
                          <ListGroup.Item key={index}>
                            <Form.Check
                              type="checkbox"
                              id={topic.name}
                              label={topic.name}
                              checked={!!checkedItems3[topic.name]} // Default to false if undefined
                              onChange={handlesocialIssues}
                            />
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Form>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="text-area mt-4">
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Give us a description of your interests</Form.Label>
              <Form.Control
                as="textarea"
                className="height-96 form-control"
                rows={3}
                value={interestsDescription}
                onChange={handlediscription}
              />
              <p className="mt-2">{interestsDescription.length}/60 words</p>
            </Form.Group>
          </div>

          <div className="body-footer">
            <button
              type="button"
              className={`btn-color-orange ${
                selectedSubstance.length <= 0 &&
                selectedHealth.length <= 0 &&
                selectedneuroscience.length <= 0 &&
                selectSocialIssue.length <= 0 &&
                !interestsDescription
                  ? "disabled-btn"
                  : "active-btn"
              }`}
              onClick={() => {
                handleClose3();
                handleInterestFilter(
                  selectedSubstance,
                  selectedHealth,
                  selectedneuroscience,
                  selectSocialIssue,
                  interestsDescription
                );
              }}
              disabled={
                selectedSubstance.length <= 0 &&
                selectedHealth.length <= 0 &&
                selectedneuroscience.length <= 0 &&
                selectSocialIssue.length <= 0 &&
                !interestsDescription
              }
            >
              Send
            </button>
          </div>
        </Modal.Body>
      </Modal>

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
      />

      {/* Full summary Modal start */}
      <Modal show={show} onHide={handleClose} centered className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Full Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body className="overflow-hidden">
          <div className="modal-bar show_mobile">
            <div className="bar-line"></div>
          </div>
          <p>{video.description}</p>
        </Modal.Body>
      </Modal>

      {/* Save to My Library Modal start */}
      {/* <Modal
        show={show1}
        onHide={handleClose1}
        onClick={() => setSubfolder("Subfolder")}
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
      {/* {getSaveVideo === "getFolder"} */}

      {/* {Array.isArray(getFolder) && !subFolderView ? (
                getFolder.map((item, index) => (
                  <div key={index} className="folder-view">
                    <div
                      className="folder-inner"
                      onClick={() => {
                        handleNavigateSave(item);
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
                            style={{ cursor: "pointer" }}
                            onClick={(event) => {
                              setColor(true);
                              event.stopPropagation();
                              handleNavigatename(item);
                            }}
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
                                // onClick={() => toggleDropdownnwe(item)} // Use item.id here
                                onClick={(e)=>{ e.stopPropagation(); toggleDropdownnwe(item); setRenameModel(true);  }}
                              >
                                <MdMoreVert />
                              </button>

                              {/* Show the dropdown only if it matches the current item's ID */}

      {/* {Array.isArray(getSubFolder) &&
                    getSubFolder?.map((item, index) => (
                      <div key={index} className="folder-view">
                        <div
                          className="folder-inner"
                          onClick={() => {
                            handleNavigateSave(item);
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
                                  style={{ cursor: "pointer" }}
                                  onClick={(event) => {
                                    setColor(true);
                                    event.stopPropagation();
                                    handleNavigatename(item);
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
                                            onClick={handleShow7}
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
                          </div> */}
      {/* </div>
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
                              width={300}
                              height={150}
                            />
                            <div className="video-duration">
                              {item?.duration}
                            </div>
                          </div>
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
          </div>
          <div className="body-footer">
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
          </div>
        </Modal.Body>
      </Modal> */}
      <SaveLibraryModal
        show={show}
        handleClose={handleClose}
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
        handleShow={handleShow}
        getSubFolder={getSubFolder}
        active={active}
        getSaveVideo={getSaveVideo}
        calculateMonthsAgo={calculateMonthsAgo}
        color={color}
        handleSaveVideo={handleSaveVideo}
      />

      {index === 5 && showContent && interest === "0" && (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-3">
          <div className="my-interests-card">
            <div className="video-card-1">
              <div className="video-card-content">
                <div className="video-card-image">
                  <Image
                    src={require("../../../assets/images/bg-in.png")}
                    alt="video card"
                  />
                </div>
              </div>
              <div className="video-card-detail p-0">
                <div className="dark-text">
                  What are you interested about so we can suggest you better
                  content
                </div>
                <div className="btn-color-orange-design">
                  <button
                    type="button"
                    className="btn-color-orange-outline"
                    onClick={() => {
                      handleShow3();
                      setShowContent(false);
                    }}
                  >
                    My interests
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-3">
        <div className="video-card">
          <div className="video-card-content">
            <div
              onClick={() => {
                handleNavigate(video);
              }}
            >
              <div className="video-card-image ">
                <Link href={`/mainHome/${video?._id}/videodetails2`}>
                  <Image
                    src={video?.thumbnail ? video?.thumbnail : defoultImages}
                    alt="video card"
                    width={300}
                    height={150}
                  />
                </Link>
                <div className="video-duration">
                {formatDuration(video?.duration)}
                </div>
              </div>
            </div>
            <div className="video-card-detail">
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
                  <span>{video.engagement}/10</span>
                </div>
                <div className="eng-name">{"Engagement Rating"}</div>
              </div>

              <div className="video-de-title">
                <div className="de-title">
                  <Link href={`/mainHome/${video?._id}/videodetails2`}>
                    {video.title}
                  </Link>
                </div>
                <div className="more-btn" ref={dropdownRef}>
                  <button className="btn btn-more" onClick={toggleDropdown}>
                    <FaEllipsisV />
                  </button>
                  {isDropdownOpen && (
                    <div className="dropdown-menu-card">
                      <ul>
                        <li>
                          <button variant="primary" onClick={handleShow}>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4 19V17H14V19H4ZM4 15V13H20V15H4ZM4 11V9H20V11H4ZM4 7V5H20V7H4Z"
                                fill="#242424"
                              />
                            </svg>
                            See full summary
                          </button>
                        </li>
                        <li className="hide_mobile">
                          <button variant="primary"
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
                                fill="#242424"
                              />
                            </svg>
                            Save
                          </button>
                        </li>
                        <li className="show_mobile">
                          {/* <Link href="/savelibrary"> */}
                          <button
                            variant="primary"
                            onClick={() => {
                              setSaveVideoScreen(true);
                              setShow1(false);
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
                                fill="#242424"
                              />
                            </svg>
                            Save
                          </button>
                          {/* </Link> */}
                        </li>
                        <div className="dropdown-divider"></div>
                        <li>
                          <button
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
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C12.9 20 13.7667 19.8542 14.6 19.5625C15.0781 19.3952 15.5342 19.1853 15.9684 18.933C16.4868 18.6317 16.5269 17.9269 16.103 17.503L6.49703 7.89703C6.07311 7.47311 5.36828 7.51324 5.06703 8.03157C4.81467 8.46577 4.60483 8.92192 4.4375 9.4C4.14583 10.2333 4 11.1 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20ZM17.503 16.103C17.9269 16.5269 18.6317 16.4868 18.933 15.9684C19.1853 15.5342 19.3952 15.0781 19.5625 14.6C19.8542 13.7667 20 12.9 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C11.1 4 10.2333 4.14583 9.4 4.4375C8.92192 4.60483 8.46577 4.81467 8.03157 5.06703C7.51324 5.36828 7.47311 6.07311 7.89703 6.49703L17.503 16.103Z"
                                fill="#3D3D3D"
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

              <div className="video-de-info d-flex">
                <div className="de-info">
                  <p className={isExpanded ? "expanded" : ""}>
                    {video?.description.slice(0, 100)}...
                  </p>
                </div>
                <div className="more-btn">
                  <button className="btn btn-more" onClick={handleToggle}>
                    <FaCaretDown />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
