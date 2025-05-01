import React, { useState, useEffect, useRef, useContext } from "react";
import { FaEllipsisV, FaCaretDown } from "react-icons/fa";
import SliderThumbnil from "../../../assets/images/video-thumbnil.svg";
import defoultImages from "../../../assets/images/defoultmage.jpg";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import Link from "next/link";
import { Form, ListGroup } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

import { useRouter } from "next/navigation";
import { calculateMonthsAgo, formatDuration } from "@/app/utils/monthsAgo/page";
import RenameModel from "../../../components/Models/Rename";
import NewfolderAdd from "@/components/Models/NewfolderAdd";
import DeleteModel from "@/components/Models/Delete";
import SaveLibraryModal from "@/components/Models/SaveLibrary";
import { useModal } from "@/components/registerpop/page";
import { useHeader } from "@/app/Context/headerContext/HeaderContext";
import { VideoDetailsContext } from "@/app/Context/VideoDetails/videoDetailsContext";

const VideoCard = ({
  video,
  index,
  substance,
  mentalHealth,
  neuroScience,
  socialIssues,
  handleInterestFilter,
  interest,
  setInterest,
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
  handleGetFolder,
  handleDeleteSubFolder,
  handleGetFolderSub,
  selectedFolderId,
  handleSaveVideonext, handleSaveSubFolderVideo,
  setPostId
  
}) => {

  const [VideoDetailsState, updateVideoDetailsState] =useContext(VideoDetailsContext);
  const router = useRouter();

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
  const dropdownRefnwe = useRef(null);
  const dropdownRef = useRef()
  const [isExpanded, setIsExpanded] = useState(false);

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

const [show3, setShow3] = useState(false);
const handleClose3 = () => setShow3(false);
const handleShow3 = () => setShow3(true);

const [show7, setShow7] = useState(false);
const handleClose7 = () => setShow7(false);
const handleShow7 = () => setShow7(true);
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
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };




const toggleDropdown = (video) => {
  setIsDropdownOpen(!isDropdownOpen);
  setPostId(video?._id);
  

};



useEffect(() => {
  window.addEventListener("click", handleClickOutside);
  return () => {
    window.removeEventListener("click", handleClickOutside);
  };
}, []);



  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

;

  // Function to add a new folder
  const addNewFolder = () => {
    const newFolder = {
      id: folders.length + 1,
      name: `New Folder ${folders.length + 1}`,
    };
    setFolders([...folders, newFolder]);
  };

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

  // (video,"video")
  const handleNavigate = (video) => {
    updateVideoDetailsState(video);
    router.push(`/mainHome/${video?._id}/videodetails2`);
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
        isDropdownOpenid={isDropdownOpenid}
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
        show_modal={show}
        close_library_modal={handleClose}
        handleShow={handleShow7}
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

      

     

      {/* Full summary Modal start */}
      <Modal show={show1} onHide={handleClose1} centered className="custom-modal">
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

    
     
      {index === 5 && showContent && interest === "0" && (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-3">
          <div className="my-interests-card">
            <div className="video-card-1">
              <div className="video-card-content position-relative">  
              <button className="close-button" onClick={()=>{setShowContent(false)}}>&times;</button>    
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
                      // setShowContent(false);
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
                  <button className="btn btn-more" onClick={()=>{toggleDropdown(video)}}>
                    <FaEllipsisV />
                  </button>
                  {isDropdownOpen && (
                    <div className="dropdown-menu-card">
                      <ul>
                        <li>
                          <button variant="primary" onClick={handleShow1}>
                             <Image
                                src={require("../../../assets/images/summary.svg")}
                                alt="summary"
                              />
                            See full summary
                          </button>
                        </li>
                        <li className="hide_mobile">
                          <button variant="primary"
                           onClick={(e) => {
                            const token = localStorage.getItem("token");
                            if (!token) {
                            e.preventDefault(); // Prevents navigation
                            } else {
                              setShow(false)
                              handleShow();                           }
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
                        </li>
                        <li className="show_mobile">
                          {/* <Link href="/savelibrary"> */}
                          <button
                            variant="primary"
                            onClick={() => {
                              setShow(true);
                              setShow1(false);
                              handleShow();
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
