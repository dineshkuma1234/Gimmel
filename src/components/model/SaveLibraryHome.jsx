import React, { useState } from "react";
import {
  MdAddCircleOutline,
  MdDeleteOutline,
  MdMoreVert,
} from "react-icons/md";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import { TbEdit } from "react-icons/tb";
import { formatDuration } from "@/app/utils/monthsAgo/page";
import AuthService from "@/services/AuthService";
import {calculateMonthsAgo} from "../../app/utils/monthsAgo/page";



function SaveLibraryModalHome({
  show_modal,
  close_library_modal,
  show_new_folder_popup,
  handleShow,
  setSubfolder,
  subFolderView,
  subfolderName,
  getFolder,
  setColor,
  handleNavigatename,
  dropdownRefnwe,
  toggleDropdownnwe,
  setRenameModel,
  isDropdownOpenid,
  handle_show_delete,
  getSubFolder,
  active,
  handleNavigateSave,
  getSaveVideo,
  color,
  handleSaveVideo,
  handleSaveVideonext,
  handleSaveSubFolderVideo,
  setSelectFolder,
  selectFolder
}) {
  const [selectSubFolder, setSelectSubFolder] = useState(null);
  const [selectSubFolderId, setSelectSubFolderId] = useState(null);
  const [subFolderVideos, setSubFolderVideos] = useState(false);
  const [getSubFolderVideo,setGetSubFolderVideo]=useState("")

  const handleGetSubFolderVideo = async (id) => {

    try {
      const result = await AuthService.getSubFolderVideos(selectFolder,id);
      if (result?.success) {
        setGetSubFolderVideo(result?.videos);
      } else {
      }
    } catch (error) {}
  };

  return (
    <>
      <Modal
        show={show_modal}
        onHide={() => { close_library_modal(); setSubFolderVideos(false); }}
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
                <select name="" id="" className="short-by-select ">
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

              {Array.isArray(getFolder) && !subFolderView && !subFolderVideos ? (
                getFolder.map((item, index) => (
                  <div key={index} className="folder-view">
                    <div
                      className="folder-inner"
                      onClick={() => {
                        setSelectFolder(item?._id)
                        (item),
                          handleSaveVideonext(item?._id)
                          
                      }}
                      onDoubleClick={() => {
                        setSubFolderVideos(true);
                        // handleGetSubFolderVideo();
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
                              onClick={(event) => {
                                setColor(true);
                                event.stopPropagation();
                                handleNavigatename(item);
                                // setRenameModel(true);
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
                                // onClick={() => toggleDropdownnwe(item)} // Use item.id here
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleDropdownnwe(item);
                                  // setRenameModel(true);
                                }}
                              >
                                <MdMoreVert />
                              </button>

                              {/* Show the dropdown only if it matches the current item's ID */}
                              {isDropdownOpenid?._id === item._id && (
                                <div className="dropdown-menu-card">
                                  <ul>
                                    <li>
                                      <button
                                        variant="primary"
                                        onClick={(event) => {
                                          event.stopPropagation();
                                          handleShow();
                                        }}
                                      >
                                        <TbEdit />
                                        Rename
                                      </button>
                                    </li>
                                    <li className="hide_mobile">
                                      <button
                                        variant="primary"
                                        onClick={handle_show_delete}
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
                ))
              ) : subFolderView && !subFolderVideos ? (
                <>
                  {Array.isArray(getSubFolder) &&
                    getSubFolder?.map((item, index) => (
                     <div key={index} className="folder-view">
                    <div
                      className="folder-inner"
                      onClick={() => {
                        handleNavigateSave(item),
                          handleSaveVideonext(item?._id),
                          setSelectSubFolderId(item?._id),
                          setSelectSubFolder(item?._id)
                      }}
                      onDoubleClick={() => {
                        setSubFolderVideos(true); handleGetSubFolderVideo(item?._id)
                      } }
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
                              onClick={(event) => {
                                setColor(true);
                                event.stopPropagation();
                                handleNavigatename(item);
                                setRenameModel(true);
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
                                // onClick={() => toggleDropdownnwe(item)} // Use item.id here
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleDropdownnwe(item);
                                  setRenameModel(true);
                                }}
                              >
                                <MdMoreVert />
                              </button>

                              {/* Show the dropdown only if it matches the current item's ID */}
                              {isDropdownOpenid?._id === item._id && (
                                <div className="dropdown-menu-card">
                                  <ul>
                                    <li>
                                      <button
                                        variant="primary"
                                        onClick={(event) => {
                                          event.stopPropagation();
                                          handleShow();
                                        }}
                                      >
                                        <TbEdit />
                                        Rename
                                      </button>
                                    </li>
                                    <li className="hide_mobile">
                                      <button
                                        variant="primary"
                                        onClick={handle_show_delete}
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
                    ))}
                  {Array.isArray(getSaveVideo) &&
                    getSaveVideo.map((item, index) => (
                      <div className="video-card-container" key={index}>
                        <div className="video-card-content">
                          {/* <Link href={`/mainHome/${item?._id}/videodetails2`}> */}
                          <div className="video-card-image">
                            <Image
                              src={item?.thumbnailUrl}
                              alt="video card"
                              width={150}
                              height={200}
                            />
                            <div className="video-duration">
                              {formatDuration(item?.duration)}

                            </div>
                          </div>
                          {/* </Link> */}
                          <div className="inline-gap-8">
                            <div className="video-title">
                              <h2>{item?.title}</h2>
                            </div>
                          </div>
                          <div className="bold-text">{item?.channelName}</div>
                          <div className="accout-rating">
                            <div className="rating-icon align-items-center gap-2 ">
                              <Image
                                src={require("../../assets/images/time.svg")}
                                alt="Rating"
                              />{" "}
                              <span>{calculateMonthsAgo(item?.createdAt)}</span>
                            </div>
                            {/* <span>month</span> */}
                          </div>
                          <div className="video-card-detail">
                            <div className="video-de-title">
                              <div className="de-title">
                                {/* <Link href={`/mainHome/${item?._id}/videodetails2`}>{item?.title}</Link> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </>
              ) : (
                <>
                {Array.isArray(getSubFolderVideo) &&
                    getSubFolderVideo.map((item, index) => (
                      <div className="video-card-container" key={index}>
                        <div className="video-card-content">
                          {/* <Link href={`/mainHome/${item?._id}/videodetails2`}> */}
                          <div className="video-card-image">
                            <Image
                              src={item?.thumbnailUrl}
                              alt="video card"
                              width={150}
                              height={200}
                            />
                            <div className="video-duration">
                              {formatDuration(item?.duration)}

                            </div>
                          </div>
                          {/* </Link> */}
                          <div className="inline-gap-8">
                            <div className="video-title">
                              <h2>{item?.title}</h2>
                            </div>
                          </div>
                          <div className="bold-text">{item?.channelName}</div>
                          <div className="accout-rating">
                            <div className="rating-icon align-items-center gap-2 ">
                              <Image
                                src={require("../../assets/images/time.svg")}
                                alt="Rating"
                              />{" "}
                              <span>{calculateMonthsAgo(item?.createdAt)}</span>
                            </div>
                            {/* <span>month</span> */}
                          </div>
                          <div className="video-card-detail">
                            <div className="video-de-title">
                              <div className="de-title">
                                {/* <Link href={`/mainHome/${item?._id}/videodetails2`}>{item?.title}</Link> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    </>
              )}
            </div>

               { !subFolderVideos && (
                <div className="add-new-folder">
              <button
                type="button"
                className="btn btn-new-folder"
                onClick={show_new_folder_popup}
              >
                <MdAddCircleOutline /> New Folder
              </button>
            </div>
               )}
            
          </div>

          { !subFolderVideos &&  <div className="body-footer">
            <button
              type="button"
              value={color}
              className="btn-color-orange"
              onClick={() => {
                close_library_modal();
                if (subFolderView) {
                  handleSaveSubFolderVideo(selectSubFolder,selectFolder);
                } else {
                  handleSaveVideo();
                }
              }}
            >
              Save here
            </button>
          </div>}
          
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SaveLibraryModalHome;
