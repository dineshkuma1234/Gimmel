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
import requestloader from "../../../../assets/images/request-loader.svg";
import rating from "../../../../assets/images/rating.svg"
import feedback from "../../../../assets/images/feedback.svg"
function RequestPreview() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedIndex, setSelectedIndex] = useState([]);
// console.log(selectedIndex,"selectedIndex------twst")


  const handleRadioChange = (index, item) => {
    setSelectedIndex((prevSelected) =>
      prevSelected.includes(item._id)
        ? prevSelected.filter((id) => id !== item._id) // ✅ Filter using ID
        : [...prevSelected, item._id] // ✅ Add new ID
    );
  
    setSelectedItems(getVideoRequestData[index]._id); // Ye alag cheez hai, optional
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
// console.log('getVideoRequestData":OP:O', yourRequest)
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

 const [expandedCards, setExpandedCards] = useState({}); // Object to track expanded state for each card

const handleToggle = (videoId) => {
  setExpandedCards((prevState) => ({
    ...prevState,
    [videoId]: !prevState[videoId], // Toggle the state for the specific video ID
  }));
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
                          <h5
                           style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                             color: selectedIndex?.includes(item._id) ? "#ec8548" : "#354e6a"
                          }}
                          >{item.title}</h5>
                        </div>
                        <div className="video-item-request-right-subtitle">
                          <h6>{item.channelName}</h6>
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
                disabled={selectedIndex?.length === 0}
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

       {/* Feedback Modal */}
            <Modal show={show7} onHide={handleClose7} centered className='custom-modal'>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body-container">
                        <div className="success-icon report-modal">
                            <Image src={feedback} alt="Success" />
                        </div>
 
                        <div className="report-modal-text">
                            <div className="report-modal-title">
                                How&apos;s your experience so far?
                            </div>
                            <div className="share-alart">
                                We&apos&apos;d love to hear your thoughts! What&apos;s working well, and what would you improve?
                            </div>
                            <div className="textarea-container mb-4">
                                <Form.Control as="textarea" rows={3} placeholder="" />
                            </div>
                        </div>
                        <div className="btn-container">
                            <button className="btn btn-color-orange" onClick={handleClose7}>Send Report</button>
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
              {getVideoRequestData.length <1? (
                <>
                <div className="request-data-load">
                  <div className="request-item">
                    <div className="request-loader-container">
                      <Image
                        src={requestloader}
                        alt="loader"
                      />
                      <p>
                        Stay tuned! We are working on finding you the best
                        fitting materials.
                      </p>
                    </div>
                  </div>
                </div>
                </>
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
                             {/* <Link href={`/mainHome/${video._id}/videodetails2`}> */}

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
                                <Image src={rating} alt="Engagement Rating"/>
                              </div>
                              <div className="rating">
                                <span> {video.engagement}/10</span>
                              </div>
                              <div className="eng-name">Engagement Rating</div>
                            </div>
                            <div className="video-de-title">
                              <div className="de-title">
                                <Link href={`/mainHome/${video._id}/videodetails2`}>
                                {video.title}
                                </Link>
                              </div>
                              <div className="more-btn" ref={dropdownRef}>
                                <button
                                  className="btn btn-more"
                                  onClick={() => {
                                    // toggleDropdown();
                                    handleShow7();
                                  }}
                                >
                                  <FaEllipsisV/>
                                </button>
                                
                              </div>
                            </div>
                            <div className="video-de-info d-flex">
                              <div className="de-info">
                                <p className={expandedCards[video._id]  ? "expanded" : ""}>
                                  {video?.description}
                                </p>
                              </div>
                              <div className="more-btn">
                                <button
                                  className="btn btn-more"
                                  onClick={()=>handleToggle(video._id)}
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
                  {getVideoRequestData.length >= 1 && (

                  <button
                    type="button"
                    className="btn-bottom bg-color mt-3 mb-4"
                    onClick={handleShow}
                  >
                    Send Confirmed Material
                  </button>
                  )}

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
                      ? new Date(yourRequest.createdAt)
                          .toLocaleDateString("en-US", {
                            month: "2-digit",
                            day: "2-digit",
                            year: "numeric",
                          })
                          .replace(/\//g, ".")
                      : ""
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
