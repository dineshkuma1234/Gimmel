"use client"


import React, { useState, useRef, useEffect } from "react";
import Header from "../../../components/header/header";
import ReactPlayer from "react-player";
import "../../CommenStyle/details.css";
import { MdMoreVert, MdAddCircleOutline } from "react-icons/md";
import Image from "next/image";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Stap1 from "../../componentsIn/details-step/step1";
import SuggestedCardGrid from "../../componentsIn/Suggested/Suggested";
import Reviews from "../../componentsIn/reviews/reviews";
import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap";
import Link from "next/link";
function VideoDetails({data,VideoDetailsState,getQuiz,getFolder,handleCreateFolder,handleDeleteFolder,handleRename,handleSaveVideo,setSelectedFolderId}) {
 console.log(data,"nwe")
 console.log(VideoDetailsState,"VideoDetailsState-----------------")


    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const [show4, setShow4] = useState(false);

    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);

    const [show5, setShow5] = useState(false);

    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);

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

     const [folders, setFolders] = useState('');
    // Function to add a new folder
    // const addNewFolder = () => {
    //     const newFolder = {
    //         id: folders.length + 1,
    //         name: `New Folder ${folders.length + 1}`,
    //     };
    //     setFolders([...folders, newFolder]);
    // };
 

    const convertToKM =(num)=> {
        if (num >= 1000000) {
            return `${(num / 1000000).toFixed(1)}M`;
        } else if (num >= 1000) {
            return `${(num / 1000).toFixed(1)}K`;
        } else {
            return `${num}`;
        }
    };
    const inputDate = data?.createdAt;
    const formatTimeAgo = (inputDate) => {
        // if (!data?.createdAt) return "Invalid date"; // Handle empty/null values
    
        const date = new Date(data?.createdAt); // Convert backend date to Date object
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
    }
    const handleChange = (e) => {
        setFolders(e.target.value);
    }

    const handleNavigateSave = (_id) => {
        setSelectedFolderId(_id);
        // console.log('Clicked Folder ID:', folderId);
    }; 
    console.log('folders====00000098888', folders)
    return (
        <>
            

            {/* Share Modal */}
            <Modal show={show2} onHide={handleClose2} centered className='custom-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>Share</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body-container share-modal">
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
                            <Image src={require("../../../assets/images/report-item.svg")} alt="Success" style={{ width: "auto", }}/>
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

            {/* Save to My Library Modal start */}
            <Modal show={show1} onHide={handleClose1} centered className='custom-modal pe-0'>
                <Modal.Header closeButton>
                    <Modal.Title>Save to My Library</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-top'>
                        <div className='body-top-left'>
                            <div className='short-by'>
                                <p>Sort by</p>
                                <select name="" id="" className='short-by-select'>
                                    <option>Most recent</option>
                                    <option>Most popular</option>
                                </select>
                            </div>
                        </div>
                        <div className='body-top-right'>
                            <div className='view-type'>
                                <div className='list-type-view'>
                                    <div className='list-icon-text'>List view</div>
                                    <div className='list-icon'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 20H20C20.55 20 21.0208 19.8042 21.4125 19.4125C21.8042 19.0208 22 18.55 22 18V16H9V20ZM2 8H7V4H4C3.45 4 2.97917 4.19583 2.5875 4.5875C2.19583 4.97917 2 5.45 2 6V8ZM2 14H7V10H2V14ZM4 20H7V16H2V18C2 18.55 2.19583 19.0208 2.5875 19.4125C2.97917 19.8042 3.45 20 4 20ZM9 14H22V10H9V14ZM9 8H22V6C22 5.45 21.8042 4.97917 21.4125 4.5875C21.0208 4.19583 20.55 4 20 4H9V8Z" fill="#104E5B" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='body-middle'>
                        <div className='folder-lists'>
                        {Array.isArray(getFolder) && getFolder.map((item,index) => (
                                <div key={index} className='folder-view'>
                                    <div className='folder-inner'>
                                        <div className='folder-content-inline'>
                                            <div className='folder-content-left'>
                                                <div className='folder-icon'>
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
                                                <div className='folder-name' onClick={()=>
                                                     handleNavigateSave(item?._id)
                                                } >
                                                    <p>{item.name}</p>
                                                </div>
                                            </div>
                                            <div className='folder-content-right'>
                                                <div className='folder-icon'>
                                                    <MdMoreVert />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='add-new-folder'>
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
                        <button type="button" className="btn-color-orange" onClick={ () =>{
                        handleClose1
                        handleSaveVideo()
                        }}>Save here</button>
                    </div>
                </Modal.Body>
            </Modal>

            {/* New folder Modal start */}
            <Modal show={show5} onHide={handleClose5} centered className='custom-modal new-folder-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>New folder</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body-container">
                        <div className="input-container modal-input">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Folder name</Form.Label>
                                <Form.Control type="text" placeholder=""  onChange={(e) => handleChange(e)}  />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="btn-container">
                        <button className="btn btn-color-orange" onClick={
                            () => {
                                handleClose5();
                                // addNewFolder();
                                handleCreateFolder(folders);

                            }

                        }>Create folder</button>
                    </div>
                </Modal.Body>
            </Modal>

            <Header />

            <main id="main" className="top-space-filter">
                <div className="video-show-container">
                    <ReactPlayer
                        className="react-player"
                        playing
                        controls
                        url={data?.URL}
                    />
                </div>

                <div className="custom-container">
                    <div className="row">
                        <div className="col-md-8 pe-0">
                            <div className="card-white">
                                <div className="card-inner">
                                    <div className="video-title">
                                        <h1>{data?.title}</h1>
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
                                            <button className="btn btn-light-bg" onClick={handleShow1}>
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
                                                                <button variant="primary" onClick={handleShow1}>
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
                                                    <span>{data?.engagement}/10</span>
                                                    <span>Rating</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="accout-rating">
                                                    <div className="rating-icon"><Image src={require("../../../assets/images/view.svg")} alt="Rating" /></div>
                                                    <span>{convertToKM(data?.viewCount)}</span>
                                                    <span>Views</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="accout-rating">
                                                    <div className="rating-icon"><Image src={require("../../../assets/images/time.svg")} alt="Rating" /></div>
                                                    <span>{formatTimeAgo(inputDate)}</span>
                                                    {/* <span>month</span> */}
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="video-description">
                                        <p>
                                            {VideoDetailsState?.description}
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
                                                            <div className="topic-value">{VideoDetailsState?.source}</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="accout-list-inner">
                                                            <div className="topic-title">Verified</div>
                                                            <div className="topic-value">{VideoDetailsState?.isVerified ? "Yes" : "No"}</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="accout-list-inner">
                                                            <div className="topic-title">Targeted audience</div>
                                                            <div className="topic-value">1th - 4th grade</div>
                                                            <div className="topic-value">5th - 8th grade</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="accout-list-inner">
                                                            <div className="topic-title">Age group</div>
                                                            <div className="topic-value">{VideoDetailsState?.ageRange}</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="accout-list-inner">
                                                            <div className="topic-title">Creator</div>
                                                            <div className="topic-value">{VideoDetailsState?.channelName}</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="accout-list-inner">
                                                            <div className="topic-title">Published/Uploaded</div>
                                                            <div className="topic-value">{new Date(VideoDetailsState?.createdAt).toLocaleDateString("en-GB")}</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="accout-list-inner">
                                                            <div className="topic-title">Subject area</div>
                                                            <div className="topic-value">
                                                            {VideoDetailsState?.topic?.length > 30
                                                                 ? VideoDetailsState.topic.slice(0, 30) + "..."
                                                                : VideoDetailsState?.topic}
                                                            </div>
                                                            {/* <div className="topic-value">Neuroscience</div> */}
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
                                                    <Stap1 getQuiz={getQuiz} />
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
                                                        <SuggestedCardGrid  />
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