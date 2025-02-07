"use client"

import React, { useState } from "react";
import Header from "../../../components/header/header";
import { MdMoreVert, MdAddCircleOutline } from "react-icons/md";
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import './request.css';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Image from "next/image";
import Link from "next/link";
import VideoDetails from "../details/page";

function RequestData() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    const [show6, setShow6] = useState(false);

    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);

    const [fullscreen, setFullscreen] = useState(true);

    const [showOverview, setShowOverview] = useState(false);

    const videoData = [
        {
            id: 1,
            title: "Healthy Habits: Preventing Addiction Through Lifestyle Choices",
            duration: "10:00",
            thumbnail: require("../../../assets/images/video-thumbnil.svg"),
        },
        {
            id: 2,
            title: "Mindful Meditation: A Path to Inner Peace",
            duration: "12:30",
            thumbnail: require("../../../assets/images/video-thumbnil.svg"),
        },
        {
            id: 3,
            title: "Exercise for Beginners: Start Your Fitness Journey",
            duration: "08:45",
            thumbnail: require("../../../assets/images/video-thumbnil.svg"),
        },
    ];

    const [activeItem, setActiveItem] = useState(null);
    const handleActiveChange = (id) => {
        setActiveItem((prev) => (prev === id ? null : id));
    };

    const [currentStep, setCurrentStep] = useState(1); // Step 1 is active by default

    const handleConfirm = () => {
        if (activeItem) {
            setCurrentStep(2); // Move to Step 2
        } else {
            alert("Please select a video before proceeding."); // Optional validation
        }
    };

    const [folders, setFolders] = useState([
        { id: 1, name: 'My Library' },
        { id: 2, name: 'Work Documents' },
        { id: 3, name: 'Personal Files' },
    ]);

    // Function to add a new folder
    const addNewFolder = () => {
        const newFolder = {
            id: folders.length + 1,
            name: `New Folder ${folders.length + 1}`,
        };
        setFolders([...folders, newFolder]);
    };


    return (
        <>
            {/* Request sent sucesfully Modal */}
            <Modal show={show} onHide={handleClose} centered className='custom-modal success-modal'>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body-container">
                        <div className="success-icon">
                            <Image src={require("../../../assets/images/Untitled_Artwork.svg")} alt="Success" />
                        </div>
                        <div className="modal-text">Request sent sucesfully!</div>
                        <div className="btn-container">
                            <button className="btn btn-color-orange" onClick={handleClose}>Okay</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={show2} onHide={handleClose2} centered className='custom-modal success-modal'>
                <Modal.Header closeButton>
                    <h4>Request sent sucesfully!</h4>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body-container">
                        <div className="text-small">
                            Thank you for your request. We are extending our library every day. Stay tuned as a material fitting to your request might appear in any day.  If you wish a personalised video offer for your request consider subscribing to our XY plan.
                        </div>
                        <div className="btn-container d-block">
                            <button className="btn-color-orange" onClick={handleClose2}>Upgrade my Plan</button>
                            <button className="btn-color-orange-transprent mt-4" onClick={handleShow3}>Okay</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Feedback Modal */}
            <Modal show={show3} onHide={handleClose3} centered className='custom-modal'>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body-container">
                        <div className="success-icon report-modal">
                            <Image src={require("../../../assets/images/feedback.svg")} alt="Success" />
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
                            <button className="btn btn-color-orange" onClick={handleClose3}>Send Report</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={show4} onHide={handleClose4} centered className='custom-modal modal-full'>
                <Modal.Body>
                    <div className="modal-body-container">
                        <VideoDetails />
                    </div>
                </Modal.Body>
            </Modal>

            {/* Share Modal */}
            <Modal show={show5} onHide={handleClose5} centered className='custom-modal'>
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
                            <button className="btn btn-color-orange">Copy Link</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Save to My Library Modal start */}
            <Modal show={show1} onHide={handleClose1} centered className='custom-modal'>
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
                            {folders.map((folder) => (
                                <div key={folder.id} className='folder-view'>
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
                                                <div className='folder-name'>
                                                    <p>{folder.name}</p>
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
                                onClick={handleShow6}
                            >
                                <MdAddCircleOutline /> New Folder
                            </button>
                        </div>
                    </div>
                    <div className="body-footer">
                        <button type="button" className="btn-color-orange" onClick={handleClose1}>Save here</button>
                    </div>
                </Modal.Body>
            </Modal>

            {/* New folder Modal start */}
            <Modal show={show6} onHide={handleClose6} centered className='custom-modal new-folder-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>New folder</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body-container">
                        <div className="input-container modal-input">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Folder name</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="btn-container">
                        <button className="btn btn-color-orange" onClick={
                            () => {
                                handleClose6();
                                addNewFolder();
                            }

                        }>Create folder</button>
                    </div>
                </Modal.Body>
            </Modal>

            <Header />

            <main id="main" className="top-space-filter">
                <div className="category-filter-container">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <div className="sidebar">
                            <div className="sidebar-inner">
                                <Nav variant="pills" className="flex-column request-data">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">
                                            <MdAddCircleOutline className="me-2 d-block" />New Request
                                        </Nav.Link>
                                    </Nav.Item>
                                    <div className="dropdown-divider"></div>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">
                                            Understanding and Managing Anxiety in Teenagers <MdMoreVert />
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </div>
                        <div className='main-container pt-4'>
                            <div className="card-white mt-0">
                                <div className="card-padding-request">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <div className="row justify-content-center">

                                                {!showOverview && (
                                                    <div className="col-10">
                                                        <div className="page-request-title">What do you need</div>
                                                        <div className="page-request-data">
                                                            <Form className="request-data-form form-width">
                                                                <Form.Group className="mb-4 row" controlId="exampleForm.ControlInput1">
                                                                    <div className="col-4">
                                                                        <Form.Label>Title of your request</Form.Label>
                                                                    </div>
                                                                    <div className="col-8">
                                                                        <Form.Control type="text" placeholder="" />
                                                                    </div>
                                                                </Form.Group>
                                                                <Form.Group className="mb-4 row" controlId="exampleForm.ControlInput2">
                                                                    <div className="col-4">
                                                                        <Form.Label>Material description</Form.Label>
                                                                    </div>
                                                                    <div className="col-8">
                                                                        <Form.Control as="textarea" placeholder="" className="height-96" />
                                                                        <div className="count-text">0/60</div>
                                                                    </div>
                                                                </Form.Group>
                                                                <Form.Group className="mb-4 row" controlId="exampleForm.ControlInput3">
                                                                    <div className="col-4">
                                                                        <Form.Label>What should be avoided?</Form.Label>
                                                                    </div>
                                                                    <div className="col-8">
                                                                        <Form.Control as="textarea" placeholder="" className="height-96" />
                                                                        <div className="count-text">0/60</div>
                                                                    </div>
                                                                </Form.Group>
                                                                <Form.Group className="row" controlId="exampleForm.ControlInput4">
                                                                    <div className="col-4">
                                                                        <Form.Label>Additional details</Form.Label>
                                                                    </div>
                                                                    <div className="col-8">
                                                                        <Form.Control as="textarea" placeholder="" className="height-96" />
                                                                        <div className="count-text">0/60</div>
                                                                    </div>
                                                                </Form.Group>
                                                            </Form>
                                                            <div className="btn-container d-flex justify-content-center">
                                                                <button
                                                                    className="btn btn-form-orange"
                                                                    onClick={() => setShowOverview(true)}
                                                                >
                                                                    Review Request
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}


                                                {showOverview && (
                                                    <div className="col-10">
                                                        <div className="page-request-title">Request overview</div>
                                                        <div className="page-request-data">
                                                            <Form className="request-data-form-overview form-width">
                                                                <Form.Group className="mb-4 row" controlId="exampleForm.ControlInput1">
                                                                    <div className="col-4">
                                                                        <Form.Label>Title of your request</Form.Label>
                                                                    </div>
                                                                    <div className="col-8">
                                                                        <Form.Control type="text" placeholder="" />
                                                                    </div>
                                                                </Form.Group>
                                                                <Form.Group className="mb-4 row" controlId="exampleForm.ControlInput2">
                                                                    <div className="col-4">
                                                                        <Form.Label>Material description</Form.Label>
                                                                    </div>
                                                                    <div className="col-8">
                                                                        <Form.Control as="textarea" placeholder="" className="height-96" />
                                                                        <div className="count-text">0/60</div>
                                                                    </div>
                                                                </Form.Group>
                                                                <Form.Group className="mb-4 row" controlId="exampleForm.ControlInput3">
                                                                    <div className="col-4">
                                                                        <Form.Label>What should be avoided?</Form.Label>
                                                                    </div>
                                                                    <div className="col-8">
                                                                        <Form.Control as="textarea" placeholder="" className="height-96" />
                                                                        <div className="count-text">0/60</div>
                                                                    </div>
                                                                </Form.Group>
                                                                <Form.Group className="row" controlId="exampleForm.ControlInput4">
                                                                    <div className="col-4">
                                                                        <Form.Label>Additional details</Form.Label>
                                                                    </div>
                                                                    <div className="col-8">
                                                                        <Form.Control as="textarea" placeholder="" className="height-96" />
                                                                        <div className="count-text">0/60</div>
                                                                    </div>
                                                                </Form.Group>
                                                            </Form>
                                                            <div className="btn-container d-flex justify-content-center gap-4">
                                                                <button
                                                                    className="btn btn-form-orange-transparent"
                                                                    onClick={() => setShowOverview(false)}
                                                                >
                                                                    Edit Request
                                                                </button>
                                                                <button className="btn btn-form-orange" onClick={
                                                                    () => {
                                                                        setShowOverview(false);
                                                                        handleShow();
                                                                    }
                                                                }>Send Request</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <div className="row justify-content-center">
                                                <div className="col-11">
                                                    <div className="page-request-title">Understanding and Managing Anxiety in Teenagers</div>
                                                    <div className="page-request-data">
                                                        <div className="bg-green-light">
                                                            <div className="bg-green-inner">

                                                                {currentStep === 1 && (
                                                                    <div className="content-box-inner" id="step-1">
                                                                        <div className="top-text">
                                                                            Which of these videos best fits your needs?
                                                                        </div>

                                                                        <div className="select-video-container">
                                                                            <div className="row">
                                                                                {videoData.map((video) => (
                                                                                    <div className="col-4" key={video.id}>
                                                                                        <div
                                                                                            className={`select-video-item ${activeItem === video.id ? "active" : ""}`}
                                                                                        >
                                                                                            <div className="btn-listing">
                                                                                                <div className="button-left-side">
                                                                                                    <button className="btn btn-icon eye-icon" onClick={handleShow4}>
                                                                                                        <svg
                                                                                                            width="24"
                                                                                                            height="24"
                                                                                                            viewBox="0 0 24 24"
                                                                                                            fill="none"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                        >
                                                                                                            <path
                                                                                                                d="M12 16C13.25 16 14.3125 15.5625 15.1875 14.6875C16.0625 13.8125 16.5 12.75 16.5 11.5C16.5 10.25 16.0625 9.1875 15.1875 8.3125C14.3125 7.4375 13.25 7 12 7C10.75 7 9.6875 7.4375 8.8125 8.3125C7.9375 9.1875 7.5 10.25 7.5 11.5C7.5 12.75 7.9375 13.8125 8.8125 14.6875C9.6875 15.5625 10.75 16 12 16ZM12 14.2C11.25 14.2 10.6125 13.9375 10.0875 13.4125C9.5625 12.8875 9.3 12.25 9.3 11.5C9.3 10.75 9.5625 10.1125 10.0875 9.5875C10.6125 9.0625 11.25 8.8 12 8.8C12.75 8.8 13.3875 9.0625 13.9125 9.5875C14.4375 10.1125 14.7 10.75 14.7 11.5C14.7 12.25 14.4375 12.8875 13.9125 13.4125C13.3875 13.9375 12.75 14.2 12 14.2ZM12 19C9.56667 19 7.35 18.3208 5.35 16.9625C3.35 15.6042 1.9 13.7833 1 11.5C1.9 9.21667 3.35 7.39583 5.35 6.0375C7.35 4.67917 9.56667 4 12 4C14.4333 4 16.65 4.67917 18.65 6.0375C20.65 7.39583 22.1 9.21667 23 11.5C22.1 13.7833 20.65 15.6042 18.65 16.9625C16.65 18.3208 14.4333 19 12 19ZM12 17C13.8833 17 15.6125 16.5042 17.1875 15.5125C18.7625 14.5208 19.9667 13.1833 20.8 11.5C19.9667 9.81667 18.7625 8.47917 17.1875 7.4875C15.6125 6.49583 13.8833 6 12 6C10.1167 6 8.3875 6.49583 6.8125 7.4875C5.2375 8.47917 4.03333 9.81667 3.2 11.5C4.03333 13.1833 5.2375 14.5208 6.8125 15.5125C8.3875 16.5042 10.1167 17 12 17Z"
                                                                                                                fill="#104E5B"
                                                                                                            />
                                                                                                        </svg>
                                                                                                    </button>
                                                                                                    <button className="btn btn-icon save-icon" onClick={handleShow1}>
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
                                                                                                    </button>
                                                                                                    <button className="btn btn-icon share-icon" onClick={handleShow5}>
                                                                                                        <svg
                                                                                                            width="24"
                                                                                                            height="24"
                                                                                                            viewBox="0 0 24 24"
                                                                                                            fill="none"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                        >
                                                                                                            <path
                                                                                                                d="M6 23C5.45 23 4.97917 22.8042 4.5875 22.4125C4.19583 22.0208 4 21.55 4 21V10C4 9.45 4.19583 8.97917 4.5875 8.5875C4.97917 8.19583 5.45 8 6 8H9V10H6V21H18V10H15V8H18C18.55 8 19.0208 8.19583 19.4125 8.5875C19.8042 8.97917 20 9.45 20 10V21C20 21.55 19.8042 22.0208 19.4125 22.4125C19.0208 22.8042 18.55 23 18 23H6ZM11 16V4.825L9.4 6.425L8 5L12 1L16 5L14.6 6.425L13 4.825V16H11Z"
                                                                                                                fill="#242424"
                                                                                                            />
                                                                                                        </svg>
                                                                                                    </button>
                                                                                                </div>
                                                                                                <div className="button-right-side">
                                                                                                    <div className="check-button">
                                                                                                        <Form.Check
                                                                                                            type="radio"
                                                                                                            className="check-icon"
                                                                                                            id={`check-icon-${video.id}`}
                                                                                                            name="video-selection"
                                                                                                            checked={activeItem === video.id}
                                                                                                            onChange={() => handleActiveChange(video.id)}
                                                                                                        />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="video-card-image">
                                                                                                <Image src={video.thumbnail} alt="video card" />
                                                                                                <div className="video-duration">{video.duration}</div>
                                                                                            </div>
                                                                                            <div className="de-title">
                                                                                                <Link href="/videodetails">{video.title}</Link>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        </div>

                                                                        <div className="footer-btn-container">
                                                                            <div className="btn-right">
                                                                                <button className="btn btn-orange-outline">None of these</button>
                                                                                <button className="btn btn-orange-request" onClick={handleConfirm} disabled={!activeItem}>
                                                                                    Confirm
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}

                                                                {currentStep === 2 && (
                                                                    <div className="request-data-overview-container" id="step-2">
                                                                        <div className="bg-white">
                                                                            <div className="row align-items-center">
                                                                                <div className="col-6">
                                                                                    <div className="video-card-image">
                                                                                        <Image
                                                                                            src={require("../../../assets/images/video-thumbnil.svg")}
                                                                                            alt="video card"
                                                                                        />
                                                                                        <div className="video-duration">10:00</div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-6 ps-0">
                                                                                    <div className="video-details">
                                                                                        <div className="de-title mb-3">
                                                                                            <Link href="/videodetails">Healthy Habits: Preventing Addiction Through Lifestyle Choices</Link>
                                                                                        </div>
                                                                                        <div className="summary">
                                                                                            <div className="summary-title">Short Summary</div>
                                                                                            <div className="summary-content">
                                                                                                <p>
                                                                                                    Explain the dangers of smoking in detail based on the
                                                                                                    biological and scientific aspects of the consequences
                                                                                                    of nicotine in chain smokers.
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="video-btn">
                                                                                            <button className="btn btn-bg-light">
                                                                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                                    <path d="M6 23C5.45 23 4.97917 22.8042 4.5875 22.4125C4.19583 22.0208 4 21.55 4 21V10C4 9.45 4.19583 8.97917 4.5875 8.5875C4.97917 8.19583 5.45 8 6 8H9V10H6V21H18V10H15V8H18C18.55 8 19.0208 8.19583 19.4125 8.5875C19.8042 8.97917 20 9.45 20 10V21C20 21.55 19.8042 22.0208 19.4125 22.4125C19.0208 22.8042 18.55 23 18 23H6ZM11 16V4.825L9.4 6.425L8 5L12 1L16 5L14.6 6.425L13 4.825V16H11Z" fill="#104e5b" />
                                                                                                </svg>
                                                                                                Share
                                                                                            </button>
                                                                                            <button className="btn btn-bg-light">
                                                                                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                                    <path d="M4.29102 17.791V4.45768C4.29102 3.99935 4.45421 3.60699 4.7806 3.2806C5.10699 2.95421 5.49935 2.79102 5.95768 2.79102H14.291C14.7493 2.79102 15.1417 2.95421 15.4681 3.2806C15.7945 3.60699 15.9577 3.99935 15.9577 4.45768V17.791L10.1243 15.291L4.29102 17.791Z" fill="#104E5B" />
                                                                                                </svg>
                                                                                                Save
                                                                                            </button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <Form className="request-data-form-overview">
                                                            <Form.Group className="mb-4 row" controlId="exampleForm.ControlInput1">
                                                                <div className="col-3">
                                                                    <Form.Label>Date posted</Form.Label>
                                                                </div>
                                                                <div className="col-9">
                                                                    <Form.Control type="text" placeholder="" />
                                                                </div>
                                                            </Form.Group>
                                                            <Form.Group className="mb-4 row" controlId="exampleForm.ControlInput2">
                                                                <div className="col-3">
                                                                    <Form.Label>Material description</Form.Label>
                                                                </div>
                                                                <div className="col-9">
                                                                    <Form.Control as="textarea" placeholder="" className="height-96" />
                                                                </div>
                                                            </Form.Group>
                                                            <Form.Group className="mb-4 row" controlId="exampleForm.ControlInput3">
                                                                <div className="col-3">
                                                                    <Form.Label>What should be avoided?</Form.Label>
                                                                </div>
                                                                <div className="col-9">
                                                                    <Form.Control as="textarea" placeholder="" className="height-96" />
                                                                </div>
                                                            </Form.Group>
                                                            <Form.Group className="row" controlId="exampleForm.ControlInput4">
                                                                <div className="col-3">
                                                                    <Form.Label>Additional details</Form.Label>
                                                                </div>
                                                                <div className="col-9">
                                                                    <Form.Control as="textarea" placeholder="" className="height-96" />
                                                                </div>
                                                            </Form.Group>
                                                        </Form>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </div>
                            </div>
                        </div>
                    </Tab.Container>
                </div>
            </main>

            {/* <main id="main" className="top-space">
                <div className="request-container">
                    <div className="registration-alert">
                        <div className="registration-alert-content">
                            <div className="alert-inline">
                                <div className="alert-icon">
                                    <Image src={require('../../../assets/images/info.svg')} alt="info" />
                                </div>
                                <div className="alert-message">
                                    If you wish a personalised video offer for your request consider subscribing to our XY plan and we will send you three suggested material presonalised for your needs.
                                </div>
                                <div className="alert-link-url">
                                    <Link href=''>
                                        Start registration
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="send-request-content">
                        <div className="bg-white">
                            <div className="bg-content">
                                <div className="bg-content-inner">
                                    <div className="page-request-title">What do you need</div>
                                    <div className="page-request-data">
                                        <Form className="request-data-form">
                                            <Form.Group className="mb-4 row" controlId="exampleForm.ControlInput1">
                                                <div className="col-4">
                                                    <Form.Label>Title of your request</Form.Label>
                                                </div>
                                                <div className="col-8">
                                                    <Form.Control type="text" placeholder="" />
                                                </div>
                                            </Form.Group>
                                            <Form.Group className="mb-4 row" controlId="exampleForm.ControlInput2">
                                                <div className="col-4">
                                                    <Form.Label>Material description</Form.Label>
                                                </div>
                                                <div className="col-8">
                                                    <Form.Control as="textarea" placeholder="" className="height-96" />
                                                    <div className="count-text">0/60</div>
                                                </div>
                                            </Form.Group>
                                        </Form>
                                        <div className="btn-container d-flex justify-content-end">
                                            <button
                                                className="btn btn-form-orange"
                                                onClick={handleShow2}
                                            >
                                                Review Request
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main> */}
        </>
    );
}

export default RequestData;