"use client";

import React, { useState,useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdMoreVert ,MdDeleteOutline} from "react-icons/md";
import { Modal } from "react-bootstrap";
import { TbEdit } from "react-icons/tb";
import { IoCloseSharp } from "react-icons/io5";
import { FiAlertOctagon } from "react-icons/fi";
import { Form } from "react-bootstrap";
import "../../../../CommenStyle/details.css";
import { useSave } from "@/app/Context/saveContext/SaveContext";
import { calculateMonthsAgo } from "@/app/utils/monthsAgo/page";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
function SaveVideo() {
  const {
    handleCreateSubFolder,
    getSubFolder,
    handleGetFolderSub,
    selectedFolderId,
    handleRenameFolder,
    handleDeleteSubFolder,
    getSaveVideo,
    value,setValue,selectedSubFolder,setSelectedSubFolder
  } = useSave();

  const router= useRouter();
  const SearchParams=useSearchParams();
  const folderName=SearchParams.get('folderName');
  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [newFolder, setNewFolder] = useState("");
  const [renameFolder, setRenameFolder] = useState("");


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (folderId) => {
    setShow(true);
    setIsDropdownOpen(null);
    setSelectedSubFolder(folderId);
    setRenameFolder("");
  };

  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = (folderId) => {
    setShow3(true);
    setSelectedSubFolder(folderId);
  };

  useEffect(() => {
    handleGetFolderSub(selectedFolderId);
  }, []);

   const [isDropdownOpen, setIsDropdownOpen] = useState(null);
   const toggleDropdown = (folderId) => {
      setIsDropdownOpen((prev) => (prev === folderId ? null : folderId));
    };
    
  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setValue(selectedValue);
  };

  return (
    <>
      {/* Rename folder modal start */}
      <Modal show={show} onHide={handleClose} centered className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Rename folder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body-container">
            <div className="input-container modal-input">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Folder Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={renameFolder}
                  onChange={(e) => setRenameFolder(e.target.value)}
                />
              </Form.Group>
            </div>
          </div>
          <div className="btn-container">
            <button
              className="btn btn-color-orange"
              onClick={() => {
                handleClose();
                handleRenameFolder(renameFolder, selectedSubFolder);
              }}
              disabled={!renameFolder.trim()}
            >
              Save
            </button>
          </div>
        </Modal.Body>
      </Modal>

      {/* Delete folder modal start */}
      <Modal
        show={show3}
        onHide={handleClose3}
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
                handleClose3();
                handleDeleteSubFolder(selectedSubFolder);
              }}
            >
              Delete
            </button>
            <button
              className="btn btn-color-orange-outline"
              onClick={handleClose3}
            >
              Cancel
            </button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={show2} onHide={handleClose2} centered className="modal-dots">
        <div className="modal-bar">
          <div className="bar-line"></div>
        </div>
        <div className="modal-icon-header d-flex justify-content-between align-items-center">
          <div className="inline-gap-8">
            <h3 className="modal-icon-title">New Folder</h3>
          </div>
          <div className="close-modal-icon" onClick={handleClose2}>
            <IoCloseSharp />
          </div>
        </div>
        <div className="dropdown-divider"></div>
        <Modal.Body className="custom-modal-body">
          <div className="form-group">
            <div className="input-container modal-input">
              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Folder name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  onChange={(e) => {
                    setNewFolder(e.target.value);
                  }}
                />
              </Form.Group>
            </div>
          </div>
          <button
            type="button"
            className="btn-color-orange mb-5"
            onClick={() => {
              handleClose2();
              handleCreateSubFolder(newFolder);
            }}
          >
            Create folder
          </button>
        </Modal.Body>
      </Modal>

      <div className="page-top-bar">
        <div className="page-inner">
          <div className="page-section-left">
            <div className="back-button">
              <button className="btn" onClick={() => window.history.back()}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.434 17.334L17.9007 24.8006L16.0007 26.6673L5.33398 16.0007L16.0007 5.33398L17.9007 7.20065L10.434 14.6673H26.6673V17.334H10.434Z"
                    fill="#104E5B"
                  />
                </svg>
              </button>
            </div>
            <div className="page-title">
              <h5>{folderName}</h5>
            </div>
          </div>
          <div className="page-section-right">
            <div className="add-folder-button">
              <button className="btn" onClick={handleShow2}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6665 22.666H17.3332V17.3327H22.6665V14.666H17.3332V9.33268H14.6665V14.666H9.33317V17.3327H14.6665V22.666ZM15.9998 29.3327C14.1554 29.3327 12.4221 28.9827 10.7998 28.2827C9.17762 27.5827 7.7665 26.6327 6.5665 25.4327C5.3665 24.2327 4.4165 22.8216 3.7165 21.1993C3.0165 19.5771 2.6665 17.8438 2.6665 15.9993C2.6665 14.1549 3.0165 12.4216 3.7165 10.7993C4.4165 9.17713 5.3665 7.76602 6.5665 6.56602C7.7665 5.36602 9.17762 4.41602 10.7998 3.71602C12.4221 3.01602 14.1554 2.66602 15.9998 2.66602C17.8443 2.66602 19.5776 3.01602 21.1998 3.71602C22.8221 4.41602 24.2332 5.36602 25.4332 6.56602C26.6332 7.76602 27.5832 9.17713 28.2832 10.7993C28.9832 12.4216 29.3332 14.1549 29.3332 15.9993C29.3332 17.8438 28.9832 19.5771 28.2832 21.1993C27.5832 22.8216 26.6332 24.2327 25.4332 25.4327C24.2332 26.6327 22.8221 27.5827 21.1998 28.2827C19.5776 28.9827 17.8443 29.3327 15.9998 29.3327ZM15.9998 26.666C18.9776 26.666 21.4998 25.6327 23.5665 23.566C25.6332 21.4993 26.6665 18.9771 26.6665 15.9993C26.6665 13.0216 25.6332 10.4993 23.5665 8.43268C21.4998 6.36602 18.9776 5.33268 15.9998 5.33268C13.0221 5.33268 10.4998 6.36602 8.43317 8.43268C6.3665 10.4993 5.33317 13.0216 5.33317 15.9993C5.33317 18.9771 6.3665 21.4993 8.43317 23.566C10.4998 25.6327 13.0221 26.666 15.9998 26.666Z"
                    fill="#104E5B"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="page-main-section top-space">
        <div className="custom-container">
          <div className="body-top">
            <div className="body-top-left">
              <div className="short-by">
                <p>Sort by</p>
                <select name="" id="" className="short-by-select" value={value} onChange={handleChange}>
                   <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                  <option value="name">Name</option>
                </select>
              </div>
            </div>
          </div>
          <div className="body-middle">
            <div className="folder-lists">
              {Array.isArray(getSubFolder) &&
                getSubFolder.map((folder) => (
                  <div key={folder._id} className="folder-view">
                    <div className="folder-inner">
                      <div className="folder-content-inline">
                        {/* <Link href="/mylibrary/folder_id/subFolder"> */}
                          <div className="folder-content-left" onClick={()=>{  setSelectedSubFolder(folder._id);  router.push(`/mylibrary/${folder._id}/subFolder?folderName=${encodeURIComponent(folder?.name)}`);}} >
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
                            <div className="folder-name">
                              <p>{folder.name}</p>
                            </div>
                          </div>
                        {/* </Link> */}
                        <div className="folder-content-right">
                          <button
                            className="folder-icon"
                            onClick={() => toggleDropdown(folder._id)}
                          >
                            <MdMoreVert />
                          </button>
                          {isDropdownOpen === folder._id && (
                            <div className="dropdown-menu-card">
                              <ul>
                                <li>
                                  <button
                                    variant="primary"
                                    onClick={() => handleShow(folder?._id)}
                                  >
                                    <TbEdit />
                                    Rename
                                  </button>
                                </li>
                                <li>
                                  <button
                                    variant="primary"
                                    onClick={() => handleShow3(folder?._id)}
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
                ))}
            </div>

            <div className="save-video-list-container">
              <div className="video-list-container">
                {Array.isArray(getSaveVideo) &&
                  getSaveVideo.map((video) => (
                    <div className="video-item" key={video._id}>
                      <Link href={`/mainHome/${video?._id}/videodetails2`}>
                        <div className="video-item-inline">
                          <div className="video-item-left">
                            <div className="video-item-thumbnail">
                              <Image
                                src={video.thumbnailUrl}
                                alt="thumbnail"
                                width={100}
                                height={100}
                              />
                            </div>
                          </div>
                          <div className="video-item-right">
                            <div className="video-item-inline">
                              <div className="video-item-info">
                                <div className="video-item-title">
                                  <p>{video.title}</p>
                                </div>
                                <div className="video-item-category">
                                  {video.channelName}
                                </div>
                                <div className="upload-info">
                                  {calculateMonthsAgo(video.createdAt)}
                                </div>
                              </div>
                              {/* <div className="video-item-actions">
                                                            <div className="video-item-icon">
                                                                <MdMoreVert />
                                                            </div>
                                                        </div> */}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bottom-btn-bar">
        <div className="bottom-btn-bar-inner">
          <button
            type="button"
            className="btn-color-orange"
            data-bs-dismiss="modal"
          >
            Save here
          </button>
        </div>
      </div> */}
    </>
  );
}

export default SaveVideo;
