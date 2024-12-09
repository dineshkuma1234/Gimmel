'use client'

import React, { useState } from "react";
import BottomBar from "../../../../components/BottomBar/BottomBar";
import { Form } from "react-bootstrap";
import '../../../entities/request-data/request.css';
import Image from "next/image";
import VideoCardGrid from "../../../usecases/videogrid/VideoCardGridMobile";
import Modal from 'react-bootstrap/Modal';
import '../../../CommenStyle/details.css';

function RequestPreview() {

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleRadioChange = (index) => {
        setSelectedIndex(index);
    };

    const videoItems = [
        {
            id: 1,
            src: require("../../../../assets/images/quantum.svg"),
            title: "Why Kidpower? Because Everybody Deserves to Be Safe!",
            subtitle: "Kidpower International Videos",
        },
        {
            id: 2,
            src: require("../../../../assets/images/image.svg"),
            title: "Why Kidpower? Because Everybody Deserves to Be Safe!",
            subtitle: "Kidpower International Videos",
        },
        {
            id: 3,
            src: require("../../../../assets/images/minimalism.svg"),
            title: "Why Kidpower? Because Everybody Deserves to Be Safe!",
            subtitle: "Kidpower International Videos",
        },
    ];

    return (
        <>

            <Modal show={show} onHide={handleClose} centered className='details-modal'>
                <div className='modal-bar'>
                    <div className='bar-line'></div>
                </div>
                <div className="dropdown-divider"></div>
                <Modal.Body>
                    <div className="modal-body-container">
                        <div className="video-list-container">
                            {videoItems.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`video-item-request ${selectedIndex === index ? "active" : ""}`}
                                >
                                    <div className="video-item-request-left">
                                        <Image src={item.src} alt="video thumbnail" />
                                    </div>
                                    <div className="video-item-request-right">
                                        <div className="inline-gap-8">
                                            <div>
                                                <div className="video-item-request-right-title">
                                                    <h5>{item.title}</h5>
                                                </div>
                                                <div className="video-item-request-right-subtitle">
                                                    <h6>{item.subtitle}</h6>
                                                </div>
                                            </div>
                                            <div className="check-button">
                                                <Form.Check
                                                    type="radio"
                                                    className="check-icon"
                                                    id={`check-icon-${index}`}
                                                    name="video-selection"
                                                    checked={selectedIndex === index}
                                                    onChange={() => handleRadioChange(index)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bottom-baar-modal">
                            <button type="button" className="btn-color-orange" data-bs-dismiss="modal" onClick={handleClose}>Send Selected</button>
                            <button type="button" className="btn-outline" data-bs-dismiss="modal" onClick={handleClose}>None of these</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>


            <div className="page-container-mobile" style={{ height: "100%", background: "#fff" }}>
                <div className="page-top-bar">
                    <div className="page-inner">
                        <div className="page-section-left">
                            <div className="back-button">
                                <button
                                    className="btn"
                                    onClick={() => window.history.back()}
                                >
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
                                <h5>Understanding and Managing Anxiety in Teenagers</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page-main-section top-space-request">
                    <div className="custom-container">
                        <div className="request-data">
                            {/* First Section Load */}
                            <div className="request-data-load">
                                <div className="request-item">
                                    <div className="request-loader-container">
                                        <Image src={require("../../../../assets/images/request-loader.svg")} alt="loader" />
                                        <p>Stay tuned! We are working on finding you the best fitting materials.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Second Section Overview */}
                            <div className="request-data-overview">
                                <div className="request-data-overview-container">
                                    <div className="video-list">
                                        <VideoCardGrid />
                                    </div>
                                    <button type="button" className="btn-bottom bg-color mt-3 mb-4" onClick={handleShow}>Send Confirmed Material</button>
                                </div>
                                <div className="dropdown-divider"></div>
                            </div>
                        </div>
                        <Form className="request-data-form-overview">
                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                <Form.Label>Date posted</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput2">
                                <Form.Label>Material description</Form.Label>
                                <Form.Control as="textarea" placeholder="" className="height-96" />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput3">
                                <Form.Label>What should be avoided?</Form.Label>
                                <Form.Control as="textarea" placeholder="" className="height-96" />
                            </Form.Group>
                            <Form.Group className="" controlId="exampleForm.ControlInput4">
                                <Form.Label>Additional details</Form.Label>
                                <Form.Control as="textarea" placeholder="" className="height-96" />
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