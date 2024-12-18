"use client"


import React, { useState, useRef, useEffect } from "react";
import Header from "../../../components/header/header";
import ReactPlayer from "react-player";
import "../../CommenStyle/details.css";
import { MdMoreVert } from "react-icons/md";
import Image from "next/image";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Stap1 from "../../usecases/details-step/step1";
import SuggestedCardGrid from "../../usecases/Suggested/Suggested";
import Reviews from "../../usecases/reviews/reviews";
import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap";
import Link from "next/link";
function VideoDetails() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const [show4, setShow4] = useState(false);

    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
    
        useEffect(() => {
            window.addEventListener('click', handleClickOutside);
            return () => {
                window.removeEventListener('click', handleClickOutside);
            };
        }, []);

    return (
        <>
            {/* Download Successful Modal */}
            <Modal show={show} onHide={handleClose} centered className='custom-modal success-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>Download was successful!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body-container">
                        <div className="success-icon">
                            <Image src={require("../../../assets/images/Untitled_Artwork.svg")} alt="Success" />
                        </div>
                        <div className="btn-container">
                            <button className="btn btn-color-orange" onClick={handleClose}>Okay</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Share Modal */}
            <Modal show={show2} onHide={handleClose2} centered className='custom-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>Share</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body-container">
                        <div className="share-comtent">
                            <div className="share-alart">
                                Do you want to attach the generated materials to the shared link?
                            </div>
                            <div className="checkbox-container">
                                <Form className="question-select">
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3 d-flex flex-column">
                                            <Form.Check
                                                inline
                                                label="Deselect all"
                                                name="group2"
                                                type={type}
                                                id={`inline-${type}-4`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Discussion points"
                                                name="group2"
                                                type={type}
                                                id={`inline-${type}-5`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Quizzes"
                                                name="group2"
                                                type={type}
                                                id={`inline-${type}-6`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Tests"
                                                name="group2"
                                                type={type}
                                                id={`inline-${type}-7`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Exercises"
                                                name="group2"
                                                type={type}
                                                id={`inline-${type}-8`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Homework assignments"
                                                name="group2"
                                                type={type}
                                                id={`inline-${type}-9`}
                                            />
                                        </div>
                                    ))}
                                </Form>
                            </div>
                        </div>
                        <div className="btn-container">
                            <button className="btn btn-color-orange" onClick={handleClose2}>Copy Link</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Report Modal */}
            <Modal show={show3} onHide={handleClose3} centered className='custom-modal'>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body-container">
                        <div className="success-icon report-modal">
                            <Image src={require("../../../assets/images/report-modal.svg")} alt="Success" />
                        </div>

                        <div className="report-modal-text">
                            <div className="report-modal-title">
                                Report material
                            </div>
                            <div className="share-alart">
                                Provide us more detail about the reason you reporting this material.
                            </div>
                            <div className="checkbox-container">
                                <Form className="question-select">
                                    {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="d-flex flex-column">
                                            <Form.Check
                                                inline
                                                label="Bug Report"
                                                name="group2"
                                                type={type}
                                                id={`inline-${type}-4`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Violent content"
                                                name="group2"
                                                type={type}
                                                id={`inline-${type}-5`}
                                            />
                                        </div>
                                    ))}
                                </Form>
                            </div>
                            <div className="textarea-container mb-4">
                                <Form.Control as="textarea" rows={3} placeholder="" />
                            </div>
                        </div>
                        <div className="btn-container">
                            <button className="btn btn-color-orange" onClick={handleClose3}>Send Report</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Full summary Modal start */}
            <Modal show={show4} onHide={handleClose4} centered className='custom-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>Full Summary</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='modal-bar show_mobile'>
                        <div className='bar-line'></div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in ultricies ipsum, eu imperdiet sem. Aenean dignissim ut arcu a dapibus. Fusce euismod, velit eu mattis rhoncus, ex elit efficitur ante, at viverra eros purus at tortor. Etiam finibus ipsum sit amet laoreet aliquam. Sed condimentum bibendum ex, quis tristique purus. In dictum commodo neque imperdiet pulvinar. Maecenas euismod tellus ut tincidunt tincidunt.</p>
                    <p>Nulla in libero eget ex tristique pellentesque. Sed ex massa, cursus sagittis interdum ac, iaculis eget est. Vestibulum leo neque, eleifend et pretium vehicula, finibus sit amet dui. Phasellus nec eros a orci ultrices sagittis sit amet in lacus. Morbi nec commodo justo. Cras at varius risus. Cras nec libero consequat, vulputate felis ut, pharetra libero. Fusce ornare arcu ultrices lectus vulputate ultrices. Aenean purus nisl, bibendum vel massa eget, porttitor gravida ligula. Sed ut ante convallis, pretium quam pretium, eleifend ante. </p>
                    <p>Donec tempus mollis quam, quis molestie neque pretium ut. In eu venenatis nisi. Nam tristique sed nisi a aliquet. Praesent mauris neque, ornare nec commodo sed, aliquam at mi. Vivamus sit amet libero et felis pretium tempor tincidunt vel dui. Suspendisse tincidunt pharetra bibendum.</p>
                </Modal.Body>
            </Modal>

            <Header />

            <main id="main" className="top-space-filter">
                <div className="video-show-container">
                    <ReactPlayer
                        className="react-player"
                        playing
                        controls
                        url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                    />
                </div>

                <div className="custom-container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card-white">
                                <div className="card-inner">
                                    <div className="video-title">
                                        <h1>Teen Substance Use & Abuse (Alcohol, Tobacco, Vaping, Marijuana, and More)</h1>
                                    </div>
                                    <div className="sec-inline-row">
                                        <div className="user-info-container">
                                            <div className="user-avatar">
                                                <Image src={require("../../../assets/images/user.svg")} alt="User Avatar" />
                                            </div>
                                            <div className="user-name">
                                                <h4>Content creator</h4>
                                            </div>
                                        </div>
                                        <div className="btn-list-container gap-8-flex">
                                            <button className="btn btn-light-bg" onClick={handleShow2}>
                                                <Image src={require("../../../assets/images/share.svg")} alt="Share" />
                                                Share
                                            </button>
                                            <button className="btn btn-light-bg" onClick={handleShow}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 21V5C5 4.45 5.19583 3.97917 5.5875 3.5875C5.97917 3.19583 6.45 3 7 3H17C17.55 3 18.0208 3.19583 18.4125 3.5875C18.8042 3.97917 19 4.45 19 5V21L12 18L5 21ZM7 17.95L12 15.8L17 17.95V5H7V17.95Z" fill="#242424" />
                                                </svg>
                                                Save
                                            </button>
                                            <button className="btn btn-light-bg" onClick={handleShow3}>
                                                <Image src={require("../../../assets/images/summary.svg")} alt="Share" />
                                                Summary
                                            </button>
                                            <div className="more-btn" ref={dropdownRef}>
                                                <button className="btn btn-light-bg w-40" onClick={toggleDropdown}><MdMoreVert /></button>
                                                {isDropdownOpen && (
                                                    <div className="dropdown-menu-card">
                                                        <ul>
                                                            <li>
                                                                <button variant="primary" onClick={handleShow4}>
                                                                    <Image src={require("../../../assets/images/summary.svg")} alt="summary" />
                                                                    See full summary
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button variant="primary" onClick={handleShow}>
                                                                    <Image src={require("../../../assets/images/save.svg")} alt="save" />
                                                                    Save
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button variant="primary" onClick={handleShow2}>
                                                                    <Image src={require("../../../assets/images/share.svg")} alt="share" />
                                                                    Share
                                                                </button>
                                                            </li>
                                                            <div className="dropdown-divider"></div>
                                                            <li>
                                                                <button href="#" onClick={handleShow3}>
                                                                    <Image src={require("../../../assets/images/report-icon.svg")} alt="report" />
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
                                                    <div className="rating-icon"><Image src={require("../../../assets/images/rating-light.svg")} alt="Rating" /></div>
                                                    <span>9/10</span>
                                                    <span>Rating</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="accout-rating">
                                                    <div className="rating-icon"><Image src={require("../../../assets/images/view.svg")} alt="Rating" /></div>
                                                    <span>15k</span>
                                                    <span>Views</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="accout-rating">
                                                    <div className="rating-icon"><Image src={require("../../../assets/images/time.svg")} alt="Rating" /></div>
                                                    <span>1</span>
                                                    <span>month</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="video-description">
                                        <p>
                                            Explain the dangers of smoking in detail based on the biological and scientific aspects of the consequences of nicotine in chain smokers. Explain the dangers of smoking in detail based on the biological and scientific aspects of the consequences of nicotine in chain smokers. Explain the dangers of smoking in detail based on the biological and scientific aspects of the consequences of nicotine in chain smokers.
                                            <span className="view-more">
                                                <button className="btn btn-view" onClick={() => {
                                                    document.querySelector(".view-more").style.display = "none";
                                                    document.querySelector(".view-less").style.display = "block";
                                                }}>...more</button>
                                            </span>
                                        </p>

                                        <div className="view-less" style={{ display: "none" }}>
                                            <div className="account-info-container">
                                                <ul className="account-list">
                                                    <li>
                                                        <div className="accout-list-inner">
                                                            <div className="topic-title">Source</div>
                                                            <div className="topic-value">YouTube</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="accout-list-inner">
                                                            <div className="topic-title">Verified</div>
                                                            <div className="topic-value">Yes</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="accout-list-inner">
                                                            <div className="topic-title">Targeted audience</div>
                                                            <div className="topic-value">1st - 4th grade</div>
                                                            <div className="topic-value">5th - 8th grade</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="accout-list-inner">
                                                            <div className="topic-title">Age group</div>
                                                            <div className="topic-value">14 - 21 years</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="accout-list-inner">
                                                            <div className="topic-title">Creator</div>
                                                            <div className="topic-value">Ask, Listen, Learn</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="accout-list-inner">
                                                            <div className="topic-title">Published/Uploaded</div>
                                                            <div className="topic-value">11/16/2016</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="accout-list-inner">
                                                            <div className="topic-title">Subject area</div>
                                                            <div className="topic-value">Substance Use</div>
                                                            <div className="topic-value">Neuroscience</div>
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
                                            <button className="btn btn-view" onClick={() => {
                                                document.querySelector(".view-more").style.display = "block";
                                                document.querySelector(".view-less").style.display = "none";
                                            }}>Show less</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-white">
                                <div className="card-inner">
                                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                        <Col sm={12}>
                                            <Nav variant="pills" className="flex-row details-tabs">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="first">Quiz</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="second">Discussion</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="third">Homework</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="fourth">Test</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="fifth">Exercises</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </Col>
                                        <Col sm={12}>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="first">
                                                    <Stap1 />
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Col>
                                    </Tab.Container>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-white">
                                <div className="card-inner">
                                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
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
                                                        <SuggestedCardGrid />
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