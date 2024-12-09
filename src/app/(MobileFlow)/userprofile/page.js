'use client'

import React from 'react';
import SliderThumbnil from '../../../assets/images/video-thumbnil.svg';
import "../../entities/account-details/account.css";
import Image from "next/image";
import BottomBar from "../../../components/BottomBar/BottomBar";
import { FaRegCheckCircle } from "react-icons/fa";
import Link from 'next/link';
import { MdLogout } from "react-icons/md";
import { Form, Modal } from 'react-bootstrap';
import '../../CommenStyle/details.css';


const videoData = [
    {
        title: "Healthy Habits: Preventing Addiction Through Lifestyle Choices",
        duration: "2:30",
        image: "https://via.placeholder.com/150",
    },
    {
        title: "Recognizing the Signs: How to Prevent Substance Abuse",
        duration: "3:45",
        image: "https://via.placeholder.com/150",
    },
    {
        title: "Understanding the Risks: A Guide to Addiction Prevention",
        duration: "1:15",
        image: "https://via.placeholder.com/150",
    },
    {
        title: "Healthy Habits: Preventing Addiction Through Lifestyle Choices",
        duration: "4:20",
        image: "https://via.placeholder.com/150",
    },
    {
        title: "Healthy Habits: Preventing Addiction Through Lifestyle Choices",
        duration: "2:30",
        image: "https://via.placeholder.com/150",
    },
]


function UserProfile() {

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            {/* Details Modal  */}
            <Modal show={show} onHide={handleClose} centered className='details-modal'>
                <div className='modal-bar'>
                    <div className='bar-line'></div>
                </div>
                <div className="dropdown-divider"></div>
                <Modal.Body>
                    <div className="modal-body-container">
                        <Form className='question-select mb-105'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Label>Phone number</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="+1 713 892 5638"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                <Form.Label>School Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                                <Form.Label>Age range of your students</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="12-18"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                                <Form.Label>State</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Alabama</option>
                                    <option>Alaska</option>
                                    <option>Arizona</option>
                                    <option>Arkansas</option>
                                    <option>California</option>
                                    <option>Colorado</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                                <Form.Label>Teaching interests</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Neurobiology</option>
                                    <option>Alcohol</option>
                                    <option>Anger</option>
                                    <option>Body</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                                <Form.Label>Content Maturity Restrictions</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Abuse</option>
                                    <option>Gore</option>
                                    <option>Violence</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                                <Form.Label>Educational Objectives</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Student Academic Success</option>
                                    <option>Student Well-Being</option>
                                    <option>Student Engagement</option>
                                    <option>Student Learning</option>
                                </Form.Select>
                            </Form.Group>
                        </Form>
                        <div className="bottom-baar-modal">
                            <div className="bottom-btn-bar-inner">
                                <button type="button" className="btn-color-orange" data-bs-dismiss="modal" onClick={handleClose}>Save Changes</button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <div className="page-top-bar">
                <div className="page-inner">
                    <div className="page-section-left">
                        <div className="page-title">
                            <h5>Account</h5>
                        </div>
                    </div>
                </div>
            </div>

            <main id="main" className="top-space account-details">
                <div className="custom-container">
                    <div className="account-details-inner">
                        <div className="account-user-info">
                            <div className="account-user-avatar">
                                <Image src={require("../../../assets/images/user.svg")} alt="User Avatar" />
                            </div>
                            <div>
                                <div className="account-name">
                                    <h3>Examy Pella</h3>
                                </div>
                                <div className="account-user-name">
                                    <p>@exam_pel</p>
                                </div>
                            </div>
                        </div>
                        <div className="user-edit-container">
                            <div className="user-edit">
                                <button className="user-edit-btn" onClick={handleShow}>Edit data</button>
                            </div>
                        </div>
                    </div>

                    <div className="account-full-info">
                        <div className="account-full-info-inner">
                            <div className="account-full-info-item">
                                <div className="account-full-info-item-title w-50">
                                    <p>Email Address</p>
                                </div>
                                <div className="account-full-info-item-value w-50">
                                    <p>exam.p@gmail.com</p>
                                </div>
                            </div>
                            <div className="account-full-info-item">
                                <div className="account-full-info-item-title w-50">
                                    <p>Phone Number</p>
                                </div>
                                <div className="account-full-info-item-value w-50">
                                    <p>+1 (713) 892-5638</p>
                                </div>
                            </div>
                            <div className="account-full-info-item">
                                <div className="account-full-info-item-title w-50">
                                    <p>School Name</p>
                                </div>
                                <div className="account-full-info-item-value w-50">
                                    <p></p>
                                </div>
                            </div>
                            <div className="account-full-info-item">
                                <div className="account-full-info-item-title w-50">
                                    <p>Students age</p>
                                </div>
                                <div className="account-full-info-item-value w-50">
                                    <p>12-18</p>
                                </div>
                            </div>
                            <div className="account-full-info-item">
                                <div className="account-full-info-item-title w-50">
                                    <p>Teaching interests</p>
                                </div>
                                <div className="account-full-info-item-value w-50">
                                    <p>Neurobiology, Alcohol, Anger, Body Image</p>
                                </div>
                            </div>
                            <div className="account-full-info-item">
                                <div className="account-full-info-item-title w-50">
                                    <p>Maturity restrictions</p>
                                </div>
                                <div className="account-full-info-item-value w-50">
                                    <p>Abuse, Gore</p>
                                </div>
                            </div>
                            <div className="account-full-info-item">
                                <div className="account-full-info-item-title w-50">
                                    <p>Educational objectives</p>
                                </div>
                                <div className="account-full-info-item-value w-50">
                                    <p>Student Academic Success</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown-divider"></div>

                    <div className="account-plan-container">
                        <div className="account-plan">
                            <div className="plan-header">
                                <div className="plan-header-title">
                                    <Image src={require("../../../assets/images/currency_exchange.svg")} alt="User Avatar" />
                                    <h3>Subscription Plan</h3>
                                </div>
                                <div className="plan-header-edit">
                                    <button className="user-edit-btn">View all</button>
                                </div>
                            </div>
                            <div className="plan-body">
                                <div className="plan-btn">
                                    <button className="plan-select-btn active">Yearly</button>
                                    <button className="plan-select-btn">Monthly</button>
                                </div>

                                <div className="row mx-n3">

                                    {/* Pro Plan Pricing Card */}
                                    <div className="col-sm-12 col-xl-12 mb-3">
                                        <div className="card card-frame active">
                                            <div className="row align-items-center">
                                                <div className="col-6">
                                                    <div className="card-header bg-transparent">
                                                        <div className="price-card--title">
                                                            <h4>Pro Plan</h4>
                                                        </div>
                                                    </div>
                                                    <div className="card-body">
                                                        <ul className="list-unstyled list-md-space mb-0">
                                                            <li className="d-flex ">
                                                                <FaRegCheckCircle /> Feature 1
                                                            </li>
                                                            <li className="d-flex ">
                                                                <FaRegCheckCircle /> Feature 2
                                                            </li>
                                                            <li className="d-flex ">
                                                                <FaRegCheckCircle /> Feature 3
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-6">
                                                    <div className="price">
                                                        <div className="price-number">$10/ month</div>
                                                        <del className="small-text">$12/month</del>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="button" className="btn-color-orange mt-2">Upgrade</button>
                                        </div>
                                    </div>
                                    {/* Free Plan Pricing Card */}
                                    <div className="col-sm-12 col-xl-12 mb-3">
                                        <div className="card card-frame">
                                            <div className="row align-items-center">
                                                <div className="col-6">
                                                    <div className="card-header bg-transparent">
                                                        <div className="price-card--title">
                                                            <h4>Free Plan</h4>
                                                        </div>
                                                    </div>
                                                    <div className="card-body">
                                                        <ul className="list-unstyled list-md-space mb-0">
                                                            <li className="d-flex ">
                                                                <FaRegCheckCircle /> Feature 1
                                                            </li>
                                                            <li className="d-flex ">
                                                                <FaRegCheckCircle /> Feature 2
                                                            </li>
                                                            <li className="d-flex ">
                                                                <FaRegCheckCircle /> Feature 3
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-6">
                                                    <div className="price">
                                                        <div className="price-number">Free</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="active-plan-info">Currently you have an active <b className="active-plan-name">Free Plan </b></div>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown-divider"></div>

                    <div className="sec-account">
                        <div className='inline- d-flex align-items-center justify-content-between'>
                            <div className="card-white-title">
                                <Image src={require("../../../assets/images/save.svg")} alt="User Avatar" />
                                <h3>My Library</h3>
                            </div>
                            <Link href="/mylibrary" className='view-all-btn'>View all</Link>
                        </div>

                        <div className='library-list mt-4'>
                            <div className='list-item'>
                                {videoData.map((videoData, index) => (
                                    <div className="video-card-container" key={index}>
                                        <div className="video-card-content">
                                            <Link href="/videodetails">
                                                <div className="video-card-image">
                                                    <Image src={SliderThumbnil} alt="video card" />
                                                    <div className="video-duration">{videoData.duration}</div>
                                                </div>
                                            </Link>
                                            <div className="video-card-detail">
                                                <div className="video-de-title">
                                                    <div className="de-title">
                                                        <Link href="/videodetails">{videoData.title}</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="dropdown-divider"></div>

                    <div className="sec-account">
                        <div className='inline- d-flex align-items-center justify-content-between'>
                            <div className="card-white-title">
                                <Image src={require("../../../assets/images/history.svg")} alt="User Avatar" />
                                <h3>Watch history</h3>
                            </div>
                            <Link href="/historywatch" className='view-all-btn'>View all</Link>
                        </div>

                        <div className='library-list mt-4'>
                            <div className='list-item'>
                                {videoData.map((videoData, index) => (
                                    <div className="video-card-container" key={index}>
                                        <div className="video-card-content">
                                            <Link href="/videodetails">
                                                <div className="video-card-image">
                                                    <Image src={SliderThumbnil} alt="video card" />
                                                    <div className="video-duration">{videoData.duration}</div>
                                                </div>
                                            </Link>
                                            <div className="video-card-detail">
                                                <div className="video-de-title">
                                                    <div className="de-title">
                                                        <Link href="/videodetails">{videoData.title}</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="dropdown-divider"></div>

                    <div className='logout-btn pb-3'>
                        <Link href="/logoutconfirmation" className="btn-logout "><MdLogout />Logout</Link>
                    </div>
                </div>
            </main>

            <BottomBar />
        </>
    );
}

export default UserProfile;