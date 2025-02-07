"use client"

import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import SliderThumbnil from '../../../assets/images/video-thumbnil.svg';
import Header from "../../../components/header/header";
import "./account.css";
import { Form } from "react-bootstrap";
import Image from "next/image";
import { MdOutlineCheckCircle } from "react-icons/md";
import Link from 'next/link';
import { Modal } from 'react-bootstrap';


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

function AccountDetails() {

    const [isYearly, setIsYearly] = useState(false);

    const togglePricing = () => {
        setIsYearly(!isYearly);
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    return (
        <>
            <Modal show={show} onHide={handleClose} centered className='custom-modal' size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Subscription Plan</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body-container">
                        <div id="pricingSection" className="mt-4">
                            <div className="container">
                                {/* CHOOSE YOUR PLAN */}
                                <div id="js-pricing-switch" className="text-center my-4 py-2 relative js-pricing-switch">
                                    <span className={`switch-label ${!isYearly ? 'active' : ''}`}>Yearly</span>
                                    <label className="switch">
                                        <input type="checkbox" checked={isYearly} onChange={togglePricing} />
                                        <span className="slider-price"></span>
                                    </label>
                                    <span className={`switch-label ${isYearly ? 'active' : ''}`}>Monthly</span>
                                    <div className="save-money--mobile mt-3">Save 10% on Yearly Plans</div>
                                </div>
                                {/* CHOOSE YOU PLAN END */}

                                <div className="row mx-n3 justify-content-center">
                                    {/* PRICING CARD - Free Plan */}
                                    <div className="col-6 mb-4">
                                        <div className="card card-frame">
                                            <div className="row align-items-center">
                                                <div className="col-md-12">
                                                    <div className="card-header bg-transparent">
                                                        <div className="price-card--title">
                                                            <h4>Free Plan</h4>
                                                        </div>
                                                    </div>
                                                    <div className="card-body">
                                                        <ul className="list-unstyled list-md-space mb-0">
                                                            <li className="d-flex ">
                                                                <MdOutlineCheckCircle /> Feature 1
                                                            </li>
                                                            <li className="d-flex ">
                                                                <MdOutlineCheckCircle /> Feature 2
                                                            </li>
                                                            <li className="d-flex ">
                                                                <MdOutlineCheckCircle /> Feature 3
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className='price-btn'>
                                                        <button className='btn btn-color-orange-trans'>Current Plan</button>
                                                    </div>
                                                    <div className="price">
                                                        <div className="price-number">Free</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* END PRICING CARD - Free Plan */}

                                    {/* PRICING CARD - Pro Plan */}
                                    <div className="col-6 mb-4">
                                        <div className="card card-frame active">
                                            <div className="row align-items-center">
                                                <div className="col-md-12">
                                                    <div className="card-header bg-transparent">
                                                        <div className="price-card--title">
                                                            <h4>Pro Plan</h4>
                                                        </div>
                                                    </div>
                                                    <div className="card-body">
                                                        <ul className="list-unstyled list-md-space mb-0">
                                                            <li className="d-flex ">
                                                                <MdOutlineCheckCircle /> Feature 1
                                                            </li>
                                                            <li className="d-flex ">
                                                                <MdOutlineCheckCircle /> Feature 2
                                                            </li>
                                                            <li className="d-flex ">
                                                                <MdOutlineCheckCircle /> Feature 3
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <div className='price-btn'>
                                                        <button className='btn btn-color-orange' onClick={handleShow}>Upgrade</button>
                                                    </div>
                                                    <div className="price">
                                                        <div className="price-number">{isYearly ? '$12/month' : '$10/month'}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* END PRICING CARD - Pro Plan */}
                                </div>
                            </div>
                        </div>
                        <div className='active-plan-info'>
                            Currently you have an active <b className='active-plan-name'>Free Plan </b>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>


            <Modal show={show2} onHide={handleClose2} centered className='custom-modal success-modal'>
                <Modal.Header closeButton>
                    <h4>Are you sure you want to log out?</h4>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body-container">
                        <div className="success-icon">
                            <Image src={require("../../../assets/images/logout.svg")} alt="Success" />
                        </div>
                        <div className="btn-container">
                            <button className="btn-color-orange" onClick={handleClose2}>Yes, I want to log out</button>
                            <button className="btn-color-orange-transprent mt-4" onClick={handleClose2}>No, I want to stay logged in</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>


            <Header />
            <main id="main" className="top-space">
                <div className="custom-container">
                    <div className="card-white">
                        <div className="card-inner-padding">
                            <div className="account-details">
                                <div className="account-user-info">
                                    <div className="account-user-avatar">
                                        <Image src={require("../../../assets/images/user.svg")} alt="User Avatar" width={100} height={100} />
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

                                <div className="account-user-bio">
                                    <Form className="question-select">
                                        <Form.Group className="mb-3 row align-items-center" controlId="exampleForm.ControlInput1">
                                            <div className="col-3">
                                                <Form.Label>Email address</Form.Label>
                                            </div>
                                            <div className="col-9">
                                                <Form.Control type="email" placeholder="exam.p@gmail.com" />
                                            </div>
                                        </Form.Group>
                                        <Form.Group className="mb-3 row align-items-center" controlId="exampleForm.ControlInput2">
                                            <div className="col-3">
                                                <Form.Label>Phone number</Form.Label>
                                            </div>
                                            <div className="col-9">
                                                <Form.Control type="email" placeholder="+1 (713) 892-5638" />
                                            </div>
                                        </Form.Group>
                                        <Form.Group className="mb-3 row align-items-center" controlId="exampleForm.ControlInput3">
                                            <div className="col-3">
                                                <Form.Label>School Name</Form.Label>
                                            </div>
                                            <div className="col-9">
                                                <Form.Control type="text" placeholder="" />
                                            </div>
                                        </Form.Group>
                                        <Form.Group className="mb-3 row align-items-center" controlId="exampleForm.ControlInput4">
                                            <div className="col-3">
                                                <Form.Label>Students age</Form.Label>
                                            </div>
                                            <div className="col-9">
                                                <Form.Control type="text" placeholder="12-18" />
                                            </div>
                                        </Form.Group>
                                        <Form.Group className="mb-3 row align-items-center" controlId="exampleForm.ControlInput5">
                                            <div className="col-3">
                                                <Form.Label>State</Form.Label>
                                            </div>
                                            <div className="col-9">
                                                <Form.Control type="text" placeholder="Texas" />
                                            </div>
                                        </Form.Group>
                                        <Form.Group className="mb-3 row align-items-center" controlId="exampleForm.ControlInput6">
                                            <div className="col-3">
                                                <Form.Label>Teaching interests</Form.Label>
                                            </div>
                                            <div className="col-9">
                                                <Form.Control type="text" placeholder="Neurobiology, Alcohol, Anger, Body Image" />
                                            </div>
                                        </Form.Group>
                                        <Form.Group className="mb-3 row align-items-center" controlId="exampleForm.ControlInput7">
                                            <div className="col-3">
                                                <Form.Label>Maturity restrictions</Form.Label>
                                            </div>
                                            <div className="col-9">
                                                <Form.Control type="text" placeholder="Abuse, Gore" />
                                            </div>
                                        </Form.Group>
                                        <Form.Group className="mb-3 row align-items-center" controlId="exampleForm.ControlInput8">
                                            <div className="col-3">
                                                <Form.Label>Educational objectives</Form.Label>
                                            </div>
                                            <div className="col-9">
                                                <Form.Control type="text" placeholder="Student Academic Success" />
                                            </div>
                                        </Form.Group>

                                        <div className="text-right" style={{ textAlign: "right" }}>
                                            <button className="btn btn-form-orange">Edit data</button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-white">
                        <div className="card-inner-padding">
                            <div className="card-white-title">
                                <Image src={require("../../../assets/images/currency_exchange.svg")} alt="User Avatar" />
                                <h3>Subscription Plan</h3>
                            </div>
                            <div id="pricingSection" className="mt-4">
                                <div className="container">
                                    {/* CHOOSE YOUR PLAN */}
                                    <div id="js-pricing-switch" className="text-center my-4 py-2 relative js-pricing-switch">
                                        <span className={`switch-label ${!isYearly ? 'active' : ''}`}>Yearly</span>
                                        <label className="switch">
                                            <input type="checkbox" checked={isYearly} onChange={togglePricing} />
                                            <span className="slider-price"></span>
                                        </label>
                                        <span className={`switch-label ${isYearly ? 'active' : ''}`}>Monthly</span>
                                        <div className="save-money--mobile mt-3">Save 10% on Yearly Plans</div>
                                    </div>
                                    {/* CHOOSE YOU PLAN END */}

                                    <div className="row mx-n3 justify-content-center">
                                        {/* PRICING CARD - Free Plan */}
                                        <div className="col-4 px-2 mb-4">
                                            <div className="card card-frame">
                                                <div className="row align-items-center">
                                                    <div className="col-md-12">
                                                        <div className="card-header bg-transparent">
                                                            <div className="price-card--title">
                                                                <h4>Free Plan</h4>
                                                            </div>
                                                        </div>
                                                        <div className="card-body">
                                                            <ul className="list-unstyled list-md-space mb-0">
                                                                <li className="d-flex ">
                                                                    <MdOutlineCheckCircle /> Feature 1
                                                                </li>
                                                                <li className="d-flex ">
                                                                    <MdOutlineCheckCircle /> Feature 2
                                                                </li>
                                                                <li className="d-flex ">
                                                                    <MdOutlineCheckCircle /> Feature 3
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className='price-btn'>
                                                            <button className='btn btn-color-orange-trans'>Current Plan</button>
                                                        </div>
                                                        <div className="price">
                                                            <div className="price-number">Free</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* END PRICING CARD - Free Plan */}

                                        {/* PRICING CARD - Pro Plan */}
                                        <div className="col-4 px-2 mb-4">
                                            <div className="card card-frame active">
                                                <div className="row align-items-center">
                                                    <div className="col-md-12">
                                                        <div className="card-header bg-transparent">
                                                            <div className="price-card--title">
                                                                <h4>Pro Plan</h4>
                                                            </div>
                                                        </div>
                                                        <div className="card-body">
                                                            <ul className="list-unstyled list-md-space mb-0">
                                                                <li className="d-flex ">
                                                                    <MdOutlineCheckCircle /> Feature 1
                                                                </li>
                                                                <li className="d-flex ">
                                                                    <MdOutlineCheckCircle /> Feature 2
                                                                </li>
                                                                <li className="d-flex ">
                                                                    <MdOutlineCheckCircle /> Feature 3
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-12">
                                                        <div className='price-btn'>
                                                            <button className='btn btn-color-orange' onClick={handleShow}>Upgrade</button>
                                                        </div>
                                                        <div className="price">
                                                            <div className="price-number">{isYearly ? '$12/month' : '$10/month'}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* END PRICING CARD - Pro Plan */}
                                    </div>
                                </div>
                            </div>
                            <div className='active-plan-info'>
                                Currently you have an active <b className='active-plan-name'>Free Plan </b>
                            </div>
                        </div>
                    </div>
                    <div className="card-white overflow-hidden">
                        <div className="card-inner-padding">
                            <div className='inline- d-flex align-items-center justify-content-between'>
                                <div className="card-white-title">
                                    <Image src={require("../../../assets/images/save.svg")} alt="User Avatar" />
                                    <h3>My Library</h3>
                                </div>
                                <Link href="/library" className='view-all-btn'>View all</Link>
                            </div>

                            <div className='library-list mt-4'>
                                <Swiper
                                    spaceBetween={14}
                                    slidesPerView={4}
                                    className="mySwiper category-swiper library-swiper"
                                >
                                    {videoData.map((videoData, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="col-md-12">
                                                <div className="video-card">
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
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>

                    <div className="card-white overflow-hidden">
                        <div className="card-inner-padding">
                            <div className='inline- d-flex align-items-center justify-content-between'>
                                <div className="card-white-title">
                                    <Image src={require("../../../assets/images/history.svg")} alt="User Avatar" />
                                    <h3>Watch history</h3>
                                </div>
                                <Link href="/watchhistory" className='view-all-btn'>View all</Link>
                            </div>

                            <div className='library-list mt-4'>
                                <Swiper
                                    spaceBetween={14}
                                    slidesPerView={4}
                                    className="mySwiper category-swiper library-swiper"
                                >
                                    {videoData.map((videoData, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="col-md-12">
                                                <div className="video-card">
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
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default AccountDetails;