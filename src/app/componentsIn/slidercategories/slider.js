"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import SliderThumbnil from '../../../assets/images/video-thumbnil.svg';
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FaEllipsisV, FaCaretDown } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import { MdMoreVert, MdAddCircleOutline } from "react-icons/md";
import Link from "next/link";
import { Form } from "react-bootstrap";
import SliderThumbnil from "../../../assets/images/video-thumbnil.svg";
import { useModal } from "@/components/registerpop/page";
import { formatDuration } from "../../utils/monthsAgo/page";
import RenameModel from "@/components/Models/Rename";
import DeleteModel from "@/components/Models/Delete";
import SaveLibraryModal from "@/components/Models/SaveLibrary";
import NewfolderAdd from "@/components/Models/NewfolderAdd";
import { useHeader } from "@/app/Context/headerContext/HeaderContext";


const SliderCategories = ({
  categoryVideo,
  handleNotIntrested,
  categoryVideoname,
  img,
  handleGetCategories,
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
  setSelectedFolderId
}) => {
    const{setSelectedCategory}=useHeader()

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
  const [modalVideoId, setModalVideoId] = useState(null);
  const handleShow = (videoId) => {
    setModalVideoId(videoId); 
  };
  
  const handleClose = () => {
    setModalVideoId(null); 
  };
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show6, setShow6] = useState(false);
  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);

  const [show5, setShow5] = useState(false);
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true)

  const [renamshow, setrenameShow] = useState(false);

  const handlerenamClose = () => setShow(false);
  const handlerenamShow = () => setShow(true);
  const swiperRef = useRef(null);


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
      {modalVideoId && (
  <Modal show={true} onHide={handleClose} centered className="custom-modal">
    <Modal.Header closeButton>
      <Modal.Title>Full Summary</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
        {
          categoryVideo.find((video) => video._id === modalVideoId)
            ?.description
        }
      </p>
    </Modal.Body>
  </Modal>
)}

     
 <RenameModel
        renameModel={renameModel}
        show7={renamshow}
        handleClose7={handleClose}
        setSubfolder={setSubfolder}
        rename={rename}
        setRename={setRename}
        handleRename={handleRename}
        setRenameModel={setrenameShow}
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
      <div className="slider-section">
        <div className="swiper-navigation">
          <button
            id="prevButton"
            className="swiper-button-custom-prev"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FaArrowLeft />
          </button>
          <button
            id="nextButton"
            className="swiper-button-custom-next"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FaArrowRight />
          </button>
        </div>

        <Swiper
          spaceBetween={24}
          slidesPerView={4}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="mySwiper category-swiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <div className="multi-video-slider" style={{cursor: "pointer"}}>
              <div
                className="multi-video-slider-inner"
                onClick={() =>{ handleGetCategories(categoryVideoname); setSelectedCategory(categoryVideoname)}}
              >
                {/* <p>{categoryVideoname}</p> */}
                <Image src={img} alt="video card" />
              
              </div>
            </div>
          </SwiperSlide>
          {Array.isArray(categoryVideo) && categoryVideo.length > 0 && 
            categoryVideo.map((video) => (
              <SwiperSlide key={video.id} video={video}>
                <div className="col-md-12">
                  <div className="video-card">
                    <div className="video-card-content">
                      <Link href={`/mainHome/${video?._id}/videodetails2`}>
                        <div className="video-card-image">
                          <Image
                            src={video?.thumbnail}
                            alt="video card"
                            width={300}
                            height={200}
                            objectFit="cover"
                          />
                          <div className="video-duration">
                              {formatDuration(video?.duration)}
                            </div>
                        </div>
                      </Link>
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
                          <div className="eng-name">Engagement Rating</div>
                        </div>

                        <div className="video-de-title">
                          <div className="de-title ">
                            <Link
                              href={`/mainHome/${video?._id}/videodetails2`}
                            >
                              {video.title}
                            </Link>
                          </div>
                          <div className="more-btn">
                            <button
                              className="btn btn-more"
                              onClick={() => toggleDropdown(video._id)}
                            >
                              <FaEllipsisV />
                            </button>
                            {openDropdownId === video._id && (
                              <div className="dropdown-menu-card">
                                <ul>
                                  <li>
                                    <button
                                      variant="primary"
                                      onClick={()=>handleShow(video._id)}
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
                                          fill="#242424"
                                        />
                                      </svg>
                                      See full summary
                                    </button>
                                  </li>
                                  <li>
                                    <button
                                      variant="primary"
                                      onClick={(e) => {
                                        const token = localStorage.getItem("token");
                                        if (!token) {
                                        e.preventDefault(); // Prevents navigation
                                        setIsOpen(true);
                                        } else {
                                          handleShow1()                  }
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
                            <p
                              className={
                                expandedVideoId === video._id ? "expanded" : ""
                              }
                            >
                              {video.description}
                            </p>
                          </div>
                          <div className="more-btn">
                            <button
                              className="btn btn-more"
                              onClick={() => handleShow(video._id)}
                            >
                              <FaCaretDown />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default SliderCategories;
