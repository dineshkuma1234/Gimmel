"use client";

import React, { useEffect, useRef, useState } from "react";
import BottomBar from "../../../../components/BottomBar/BottomBar";
import { Button, Form } from "react-bootstrap";
import "../../../entities/request-data/request.css";
import Image from "next/image";
import VideoCardGrid from "../../../componentsIn/videogrid/VideoCardGridMobile";
import Modal from "react-bootstrap/Modal";
import "../../../CommenStyle/details.css";
import { useRequestContext } from "@/app/Context/request/page";
import { FaCaretDown } from "react-icons/fa6";
import { FaEllipsisV } from "react-icons/fa";
import Link from "next/link";
import { formatDuration } from "@/app/utils/monthsAgo/page";

function RequestPreview() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedIndex, setSelectedIndex] = useState([]);
console.log(selectedIndex,"selectedIndex------twst")
  const handleRadioChange = (index,item) => {
    setSelectedIndex((prevSelected) =>
      prevSelected.includes(item._id)
        ? prevSelected.filter((item) => item !== item._id) // Agar pehle se hai, hatao
        : [...prevSelected, item?._id] // Nahi hai toh add karo
    );
    setSelectedItems(getVideoRequestData[index]._id);
  };

  const {
    description,
    avoidedDetails,
    addDetails,
    getVideoRequestData,
    handlegetVideoRequest,
    selectedItems,
    yourRequest,
    setSelectedItems,
    handleRequestList,
    requestListData,
    handleRequestSaveVideo,
  } = useRequestContext();
console.log('getVideoRequestData":OP:O', yourRequest)
// console.log('avoidedDetails', avoidedDetails)
// console.log('addDetails', addDetails)

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  //   const [saveVideoScreen, setSaveVideoScreen] = useState(false);
  const [feedbackDescription, setFeedbackDescription] = useState("");
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside the dropdown
    window.addEventListener("click", handleClickOutside);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const [show7, setShow7] = React.useState(false);

  const handleClose7 = () => setShow7(false);
  const handleShow7 = () => setShow7(true);

 




  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        className="details-modal"
      >
        <div className="modal-bar">
          <div className="bar-line"></div>
        </div>
        <div className="dropdown-divider"></div>
        <Modal.Body>
          <div className="modal-body-container">
            <div className="video-list-container">
              {getVideoRequestData.map((item, index) => (
                <div
                  key={item._id}

                  className={`video-item-request ${
                    selectedIndex?.includes (index) ? "active" : ""
                  }`}
                >
                  <div className="video-item-request-left">
                    <Image
                      src={item.thumbnailUrl}
                      alt="video thumbnail"
                      width={120}
                      height={80}
                    />
                  </div>

                  <div className="video-item-request-right">
                    <div className="inline-gap-8">
                      <div className="model-item-w">
                        <div className="video-item-request-right-title">
                          <h5>{item.title}</h5>
                        </div>
                        <div className="video-item-request-right-subtitle">
                          <h6>{item.description}</h6>
                        </div>
                      </div>
                      <div className="check-button">
                        <Form.Check
                          type="checkbox"
                          className="check-icon"
                          id={`check-icon-${index}`}
                          name="video-selection"
                          checked={selectedIndex?.includes(item._id)}
                          onChange={() => handleRadioChange(index, item)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bottom-baar-modal">
              <button
                type="button"
                className="btn-color-orange"
                data-bs-dismiss="modal"
                onClick={() => {
                  handleClose();
                  handleRequestSaveVideo(selectedIndex);
                }}
              >
                Send Selected
              </button>
              <button
                type="button"
                className="btn-outline"
                data-bs-dismiss="modal"
                onClick={handleClose}
              >
                None of these
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <div
        className="page-container-mobile"
        style={{ height: "100%", background: "#fff" }}
      >
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
              <div className="page-title w-90">
                <h5>{yourRequest?.title}</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="page-main-section top-space-request">
          <div className="custom-container">
            <div className="request-data">
              {/* First Section Load */}
              {requestListData?.isNotified ? (
                <div className="request-data-load">
                  <div className="request-item">
                    <div className="request-loader-container">
                      <Image
                        src={require("../../../../assets/images/request-loader.svg")}
                        alt="loader"
                      />
                      <p>
                        Stay tuned! We are working on finding you the best
                        fitting materials.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* <VideoCardGrid  getVideoRequestData={getVideoRequestData} /> */}
                  {getVideoRequestData.map((video) => (
                    <div
                      key={video._id}
                      className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
                    >
                      <div className="video-card card-height">
                        <div className="video-card-content">
                          <Link href={`/mainHome/${video._id}/videodetails2`}>
                            <div className="video-card-image">
                              <Image
                                src={video.thumbnailUrl}
                                alt="video card"
                                width={300}
                                height={150}
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
                                      d="M8.00013 12.2465L8.98346 11.2632H10.3335V9.91315L11.3168 8.92982L10.3335 7.94648V6.59648H8.98346L8.00013 5.61315L7.0168 6.59648H5.6668V7.94648L4.68346 8.92982L5.6668 9.91315V11.2632H7.0168L8.00013 12.2465Z"
                                      fill="#F18D51"
                                    />
                                  </g>
                                </svg>
                              </div>
                              <div className="rating">
                                <span>{video.engagement}/10</span>
                              </div>
                              <div className="eng-name">Engagement Rating</div>
                            </div>
                            <div className="video-de-title">
                              <div className="de-title">
                                {/* <Link href={`/mainHome/${video._id}/videodetails2`}> */}
                                {video.title}
                                {/* </Link> */}
                              </div>
                              <div className="more-btn" ref={dropdownRef}>
                                <button
                                  className="btn btn-more"
                                  onClick={() => {
                                    toggleDropdown();
                                    handleShow7();
                                  }}
                                >
                                  {/* <FaEllipsisV/> */}
                                </button>
                                {isDropdownOpen && (
                                  <>
                                    {/* <Modal open={show7} onOpenChange={handleClose7}>
                                <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto"> */}
                                    {/* Close Button */}
                                    {/* <div className="flex justify-between items-center">
                                    <h2 className="text-lg font-semibold">How's your experience so far?</h2>
                                    <button onClick={handleClose7} className="text-gray-500 hover:text-gray-700"> */}
                                    {/* <X size={24} /> */}
                                    {/* </button>
                                    </div> */}

                                    {/* Feedback Form */}
                                    {/* <div>
                                    <p className="text-gray-600 mb-4">We’d love to hear your thoughts! What’s working well, and what would you improve?</p>
                                    <Form.Control
                                        className="w-full p-2 border border-gray-300 rounded-md" 
                                        value={feedbackDescription}
                                        onChange={(e) => setFeedbackDescription(e.target.value)}
                                        placeholder="Write your feedback here..."
                                    />
                                    </div> */}

                                    {/* Submit Button */}
                                    {/* <div className="flex justify-end">
                                    <Button className="bg-orange-500 text-white" onClick={() => { 
                                        handleClose7(); 
                                        }}>
                                        Send Feedback
                                    </Button>
                                    </div>
                                </div>
                                </Modal> */}
                                  </>
                                )}
                              </div>
                            </div>
                            <div className="video-de-info d-flex">
                              <div className="de-info">
                                <p className={isExpanded ? "expanded" : ""}>
                                  {video?.description}
                                </p>
                              </div>
                              <div className="more-btn">
                                <button
                                  className="btn btn-more"
                                  onClick={handleToggle}
                                >
                                  <FaCaretDown />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
              {/* Second Section Overview */}
              <div className="request-data-overview">
                <div className="request-data-overview-container">
                  <div className="video-list"></div>
                  <button
                    type="button"
                    className="btn-bottom bg-color mt-3 mb-4"
                    onClick={handleShow}
                  >
                    Send Confirmed Material
                  </button>
                </div>
                <div className="dropdown-divider"></div>
              </div>
            </div>
            <Form className="request-data-form-overview">
              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Date posted</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={
                    yourRequest?.createdAt
                  }
                  readOnly
                />
              </Form.Group>
              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Material description</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder=""
                  className="height-96"
                  value={yourRequest?.description}
                />
              </Form.Group>
              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlInput3"
              >
                <Form.Label>What should be avoided?</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder=""
                  className="height-96"
                  value={yourRequest?.avoidedDetails}
                />
              </Form.Group>
              <Form.Group className="" controlId="exampleForm.ControlInput4">
                <Form.Label>Additional details</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder=""
                  className="height-96"
                  value={yourRequest?.addDetails}
                />
              </Form.Group>
            </Form>
          </div>
        </div>

        <BottomBar />
      </div>
    </>
  );
}

export default RequestPreview;
