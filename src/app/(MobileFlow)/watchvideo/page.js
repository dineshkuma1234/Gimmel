'use client'

import React from "react";
import ReactPlayer from "react-player";
import { MdMoreVert } from "react-icons/md";
import Image from "next/image";
import '../../CommenStyle/details.css';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Step1 from "../../usecases/details-step/step1";
import Reviews from "../../usecases/reviews/reviews";
import Modal from 'react-bootstrap/Modal';
import { Form, ModalBody } from "react-bootstrap";
import { useState } from "react";
import Link from "next/link";

function WatchVideo() {

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
    return (
        <>
            <Modal show={show2} onHide={handleClose2} centered className='modal-dots'>
                <div className='modal-bar'>
                    <div className='bar-line'></div>
                </div>
                <div className="dropdown-divider"></div>
                <ModalBody className='custom-modal-body'>
                    <div className="modal-btn-list-item">
                        <ul>
                            <li>
                                <button variant="primary" onClick={
                                    () => {
                                        handleShow3();
                                        setShow2(false);
                                    }
                                }>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 19V17H14V19H4ZM4 15V13H20V15H4ZM4 11V9H20V11H4ZM4 7V5H20V7H4Z" fill="#242424" />
                                    </svg>
                                    Details
                                </button>
                            </li>
                            <li>
                                <Link href="/savelibrary">
                                    <button variant="primary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 21V5C5 4.45 5.19583 3.97917 5.5875 3.5875C5.97917 3.19583 6.45 3 7 3H17C17.55 3 18.0208 3.19583 18.4125 3.5875C18.8042 3.97917 19 4.45 19 5V21L12 18L5 21ZM7 17.95L12 15.8L17 17.95V5H7V17.95Z" fill="#242424" />
                                        </svg>
                                        Save
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <button variant="primary" onClick={
                                    () => {
                                        handleShow();
                                        setShow2(false);
                                    }
                                }>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.50065 19.1673C5.04232 19.1673 4.64996 19.0041 4.32357 18.6777C3.99718 18.3513 3.83398 17.959 3.83398 17.5006V8.33398C3.83398 7.87565 3.99718 7.48329 4.32357 7.1569C4.64996 6.83051 5.04232 6.66732 5.50065 6.66732H8.00065V8.33398H5.50065V17.5006H15.5007V8.33398H13.0007V6.66732H15.5007C15.959 6.66732 16.3513 6.83051 16.6777 7.1569C17.0041 7.48329 17.1673 7.87565 17.1673 8.33398V17.5006C17.1673 17.959 17.0041 18.3513 16.6777 18.6777C16.3513 19.0041 15.959 19.1673 15.5007 19.1673H5.50065ZM9.66732 13.334V4.02148L8.33398 5.35482L7.16732 4.16732L10.5007 0.833984L13.834 4.16732L12.6673 5.35482L11.334 4.02148V13.334H9.66732Z" fill="#242424" />
                                    </svg>
                                    Share
                                </button>
                            </li>
                            <div className="dropdown-divider"></div>
                            <li>
                                <button href="#" onClick={
                                    () => {
                                        handleShow4();
                                        setShow2(false);
                                    }
                                }>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C12.9 20 13.7667 19.8542 14.6 19.5625C15.0781 19.3952 15.5342 19.1853 15.9684 18.933C16.4868 18.6317 16.5269 17.9269 16.103 17.503L6.49703 7.89703C6.07311 7.47311 5.36828 7.51324 5.06703 8.03157C4.81467 8.46577 4.60483 8.92192 4.4375 9.4C4.14583 10.2333 4 11.1 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20ZM17.503 16.103C17.9269 16.5269 18.6317 16.4868 18.933 15.9684C19.1853 15.5342 19.3952 15.0781 19.5625 14.6C19.8542 13.7667 20 12.9 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C11.1 4 10.2333 4.14583 9.4 4.4375C8.92192 4.60483 8.46577 4.81467 8.03157 5.06703C7.51324 5.36828 7.47311 6.07311 7.89703 6.49703L17.503 16.103Z" fill="#3D3D3D" />
                                    </svg>
                                    Report
                                </button>
                            </li>
                        </ul>
                    </div>
                </ModalBody>
            </Modal>

            {/* Share Modal */}
            <Modal show={show} onHide={handleClose} centered className='modal-dots'>
                <div className='modal-bar'>
                    <div className='bar-line'></div>
                </div>
                <div className="modal-icon-header">
                    <div className="inline-gap-8">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.50065 19.1673C5.04232 19.1673 4.64996 19.0041 4.32357 18.6777C3.99718 18.3513 3.83398 17.959 3.83398 17.5006V8.33398C3.83398 7.87565 3.99718 7.48329 4.32357 7.1569C4.64996 6.83051 5.04232 6.66732 5.50065 6.66732H8.00065V8.33398H5.50065V17.5006H15.5007V8.33398H13.0007V6.66732H15.5007C15.959 6.66732 16.3513 6.83051 16.6777 7.1569C17.0041 7.48329 17.1673 7.87565 17.1673 8.33398V17.5006C17.1673 17.959 17.0041 18.3513 16.6777 18.6777C16.3513 19.0041 15.959 19.1673 15.5007 19.1673H5.50065ZM9.66732 13.334V4.02148L8.33398 5.35482L7.16732 4.16732L10.5007 0.833984L13.834 4.16732L12.6673 5.35482L11.334 4.02148V13.334H9.66732Z" fill="#242424" />
                        </svg>
                        <h3 className="modal-icon-title">Share</h3>
                    </div>
                </div>
                <div className="dropdown-divider"></div>
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
                            <div className="dropdown-divider"></div>
                            <div className="modal-btn-list-item">
                                <ul>
                                    <li>
                                        <button variant="primary">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 24.0001C11.2667 24.0001 10.6389 23.739 10.1167 23.2167C9.59444 22.6945 9.33333 22.0667 9.33333 21.3334V5.33341C9.33333 4.60008 9.59444 3.9723 10.1167 3.45008C10.6389 2.92786 11.2667 2.66675 12 2.66675H24C24.7333 2.66675 25.3611 2.92786 25.8833 3.45008C26.4056 3.9723 26.6667 4.60008 26.6667 5.33341V21.3334C26.6667 22.0667 26.4056 22.6945 25.8833 23.2167C25.3611 23.739 24.7333 24.0001 24 24.0001H12ZM12 21.3334H24V5.33341H12V21.3334ZM6.66667 29.3334C5.93333 29.3334 5.30556 29.0723 4.78333 28.5501C4.26111 28.0279 4 27.4001 4 26.6667V8.00008H6.66667V26.6667H21.3333V29.3334H6.66667Z" fill="#104E5B" />
                                            </svg>
                                            Copy link
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Details Modal  */}
            <Modal show={show3} onHide={handleClose3} centered className='details-modal'>
                <div className='modal-bar'>
                    <div className='bar-line'></div>
                </div>
                <div className="modal-icon-header">
                    <div className="inline-gap-8">
                        <h3 className="modal-icon-title">Details</h3>
                    </div>
                </div>
                <div className="dropdown-divider"></div>
                <Modal.Body>
                    <div className="modal-body-container">
                        <div className="share-comtent">
                            <div className="short-summary light-text">
                                Short Summary
                            </div>
                            <div className="short-summary description">
                                Explain the dangers of smoking in detail based on the biological and scientific aspects of the consequences of nicotine in chain smokers. Explain the dangers of smoking in detail based on the biological and scientific aspects of the consequences of nicotine in chain smokers. Explain the dangers of smoking in detail based on the biological and scientific aspects of the consequences of nicotine in chain smokers.
                            </div>
                            <div className="dropdown-divider"></div>
                            <div className="details-item">
                                <div className="light-text">
                                    Source
                                </div>
                                <div className="bold-text">
                                    YouTube
                                </div>
                                <div className="dropdown-divider"></div>
                            </div>
                            <div className="details-item">
                                <div className="light-text">
                                    Creator
                                </div>
                                <div className="bold-text">
                                    Creator Name
                                </div>
                                <div className="dropdown-divider"></div>
                            </div>
                            <div className="details-item">
                                <div className="light-text">
                                    Verified
                                </div>
                                <div className="bold-text">
                                    Yes
                                </div>
                                <div className="dropdown-divider"></div>
                            </div>
                            <div className="details-item">
                                <div className="light-text">
                                    Published/Uploaded
                                </div>
                                <div className="bold-text">
                                    11/16/2016
                                </div>
                                <div className="dropdown-divider"></div>
                            </div>
                            <div className="details-item">
                                <div className="light-text">
                                    Targeted audience
                                </div>
                                <div className="bold-text">
                                    1st - 4th grade
                                </div>
                                <div className="bold-text">
                                    5th - 8th grade
                                </div>
                                <div className="dropdown-divider"></div>
                            </div>
                            <div className="details-item">
                                <div className="light-text">
                                    Age group
                                </div>
                                <div className="bold-text">
                                    14 - 21 years
                                </div>
                                <div className="dropdown-divider"></div>
                            </div>
                            <div className="details-item">
                                <div className="light-text">
                                    Content type
                                </div>
                                <div className="bold-text">
                                    Animated video
                                </div>
                                <div className="dropdown-divider"></div>
                            </div>
                            <div className="details-item">
                                <div className="light-text">
                                    Subject area
                                </div>
                                <div className="bold-text">
                                    Substance Use
                                </div>
                                <div className="bold-text">
                                    Neuroscience
                                </div>
                                <div className="dropdown-divider"></div>
                            </div>
                            <div className="details-item">
                                <div className="light-text">
                                    Duration
                                </div>
                                <div className="bold-text">
                                    12:32
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Details Modal  */}
            <Modal show={show4} onHide={handleClose4} centered className='details-modal'>
                <div className='modal-bar'>
                    <div className='bar-line'></div>
                </div>
                <div className="modal-icon-header">
                    <div className="inline-gap-8">
                        <Image src={require("../../../assets/images/report-icon.svg")} alt="Details" />
                        <h3 className="modal-icon-title">Report material</h3>
                    </div>
                </div>
                <div className="dropdown-divider"></div>
                <Modal.Body>
                    <div className="modal-body-container">
                        <div className="report-material">
                            <Image src={require("../../../assets/images/report-material.svg")} alt="Details" />
                        </div>
                        <div className="share-comtent">
                            <div className="short-summary description">
                                Provide us more detail about the reason you reporting this material.
                            </div>
                            <div className="dropdown-divider"></div>
                            <Form className="question-select">
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="d-flex flex-column">
                                        <Form.Check
                                            inline
                                            label="Bug Report"
                                            name="group4"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check
                                            inline
                                            label="Violent content"
                                            name="group4"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                    </div>
                                ))}
                            </Form>
                            <div className="textarea-container">
                                <textarea
                                    className="form-control"
                                    placeholder=""
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="btn-container mt-4 mb-5">
                                <button className="btn btn-color-orange">
                                    Send Report
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

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
                    </div>
                    <div className="page-section-right">
                        <div className="add-folder-button">
                            <button className="btn">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.00065 30.6668C7.26732 30.6668 6.63954 30.4057 6.11732 29.8835C5.5951 29.3613 5.33398 28.7335 5.33398 28.0002V13.3335C5.33398 12.6002 5.5951 11.9724 6.11732 11.4502C6.63954 10.9279 7.26732 10.6668 8.00065 10.6668H12.0007V13.3335H8.00065V28.0002H24.0007V13.3335H20.0007V10.6668H24.0007C24.734 10.6668 25.3618 10.9279 25.884 11.4502C26.4062 11.9724 26.6673 12.6002 26.6673 13.3335V28.0002C26.6673 28.7335 26.4062 29.3613 25.884 29.8835C25.3618 30.4057 24.734 30.6668 24.0007 30.6668H8.00065ZM14.6673 21.3335V6.4335L12.534 8.56683L10.6673 6.66683L16.0007 1.3335L21.334 6.66683L19.4673 8.56683L17.334 6.4335V21.3335H14.6673Z" fill="#104E5B" />
                                </svg>
                            </button>
                            <button className="btn">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.66602 28V6.66667C6.66602 5.93333 6.92713 5.30556 7.44935 4.78333C7.97157 4.26111 8.59935 4 9.33268 4H22.666C23.3993 4 24.0271 4.26111 24.5494 4.78333C25.0716 5.30556 25.3327 5.93333 25.3327 6.66667V28L15.9993 24L6.66602 28ZM9.33268 23.9333L15.9993 21.0667L22.666 23.9333V6.66667H9.33268V23.9333Z" fill="#104E5B" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <main id="main" className="top-space-filter mobile-watch-video">
                <div className="video-show-container">
                    <ReactPlayer
                        className="react-player"
                        playing
                        controls
                        url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                    />
                </div>

                <div className="card-white">
                    <div className="card-inner">
                        <div className="inline-gap-8">
                            <div className="video-title">
                                <h2>Dangers of smoking | Health | Biology | FuseSchool</h2>
                            </div>
                            <div className="video-item-actions">
                                <div className="video-item-icon" onClick={handleShow2}>
                                    <MdMoreVert />
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
                        <div className="btn-list-container gap-8-flex">
                            <button className="btn btn-light-bg" >
                                <Image src={require("../../../assets/images/share.svg")} alt="Share" />
                                Share
                            </button>
                            <button className="btn btn-light-bg">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 21V5C5 4.45 5.19583 3.97917 5.5875 3.5875C5.97917 3.19583 6.45 3 7 3H17C17.55 3 18.0208 3.19583 18.4125 3.5875C18.8042 3.97917 19 4.45 19 5V21L12 18L5 21ZM7 17.95L12 15.8L17 17.95V5H7V17.95Z" fill="#242424" />
                                </svg>
                                Save
                            </button>
                            <button className="btn btn-light-bg">
                                <Image src={require("../../../assets/images/summary.svg")} alt="Share" />
                                Summary
                            </button>
                        </div>

                        <div className="page-tbs-container mt-3">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Col sm={12}>
                                    <Nav variant="pills" className="flex-row details-tabs-mobile">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Materials</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Reviews 96</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={12}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <div className="page-tbs-container mt-3">
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
                                                                <Step1 />
                                                            </Tab.Pane>
                                                        </Tab.Content>
                                                    </Col>
                                                </Tab.Container>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <Reviews />
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Tab.Container>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default WatchVideo;