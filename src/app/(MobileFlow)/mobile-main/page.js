'use client'

import React from "react";
import Header from "../../../components/header/header";
import BottomBar from "../../../components/BottomBar/BottomBar";
import SliderSection from "../../usecases/slider/slider";
import VideoCardGridMobile from "../../usecases/videogrid/VideoCardGridMobile";
import Link from "next/link";
import { FaEllipsisV } from 'react-icons/fa';
import Image from "next/image";
import Modal from 'react-bootstrap/Modal';
import { ModalBody, Form, ListGroup } from "react-bootstrap";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import Accordion from 'react-bootstrap/Accordion';


const videoData = [
    {
        title: "Healthy Habits: Preventing Addiction Through Lifestyle Choices",
        duration: "2:30",
        image: require("../../../assets/images/video-thumbnil.svg"),
    },
    {
        title: "Recognizing the Signs: How to Prevent Substance Abuse",
        duration: "3:45",
        image: require("../../../assets/images/image.svg"),
    },
    {
        title: "Understanding the Risks: A Guide to Addiction Prevention",
        duration: "1:15",
        image: require("../../../assets/images/quantum.svg"),
    },
    {
        title: "Healthy Habits: Preventing Addiction Through Lifestyle Choices",
        duration: "4:20",
        image: require("../../../assets/images/minimalism.svg"),
    },
    {
        title: "Healthy Habits: Preventing Addiction Through Lifestyle Choices",
        duration: "2:30",
        image: require("../../../assets/images/video-thumbnil.svg"),
    },
]

function MainMobile() {

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [checkedItems, setCheckedItems] = useState({});

    // Handle checkbox state change
    const handleChange = (e) => {
        const { id, checked } = e.target;
        setCheckedItems((prevCheckedItems) => ({
            ...prevCheckedItems,
            [id]: checked,
        }));
    };

    // Compute the count of selected checkboxes
    const selectedCount = Object.values(checkedItems).filter(Boolean).length;

    const topics = [
        { id: "addiction", label: "Addiction" },
        { id: "alcohol", label: "Alcohol" },
        { id: "cannabis", label: "Cannabis" },
        { id: "cigarettes", label: "Cigarettes" },
        { id: "e-cigarettes", label: "E-cigarettes" },
        { id: "nicotine", label: "Nicotine" },
        { id: "tobacco", label: "Tobacco" },
        { id: "vaping", label: "Vaping" },
        { id: "Illicit Drugs", label: "Illicit Drugs" },
    ];

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
                                <button variant="primary" >
                                    <Image src={require("../../../assets/images/share-round.svg")} alt="like" width={32} height={32} />
                                    I want more like this
                                </button>
                            </li>
                            <li>
                                <Link href="/savelibrary">
                                    <button variant="primary">
                                        <Image src={require("../../../assets/images/x-Icon.svg")} alt="like" width={32} height={32} />
                                        I am not interested about this topic
                                    </button>
                                </Link>
                            </li>
                            <div className="dropdown-divider"></div>
                            <li>
                                <button href="#">
                                    <Image src={require("../../../assets/images/report-icon.svg")} alt="like" width={32} height={32} />
                                    Don’t show me suggestions
                                </button>
                            </li>
                        </ul>
                    </div>
                </ModalBody>
            </Modal>


            <Modal show={show} onHide={handleClose} centered className='custom-modal filter-modal'>
                <div className='modal-bar mt-3'>
                    <div className='bar-line'></div>
                </div>
                <div className="dropdown-divider mb-0"></div>
                <Modal.Body className="model-custom-body">
                    <div className="custom-modal-title">
                        <h6>Select some categories</h6>
                    </div>
                    <div className="custom-modal-body">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0" className='modal-select-item'>
                                <Accordion.Header>
                                    <div className="d-flex justify-content-between align-items-center w-100">
                                        <span className="accordion-title">Substance Use</span>
                                        <div className="select-count">{selectedCount}</div>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul className="checkbox-group">
                                        <Form>
                                            <ListGroup>
                                                {topics.map((topic) => (
                                                    <ListGroup.Item key={topic.id}>
                                                        <Form.Check
                                                            type="checkbox"
                                                            id={topic.id}
                                                            label={topic.label}
                                                            checked={!!checkedItems[topic.id]} // Default to false if undefined
                                                            onChange={handleChange}
                                                        />
                                                    </ListGroup.Item>
                                                ))}
                                            </ListGroup>
                                        </Form>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className='modal-select-item'>
                                <Accordion.Header>
                                    <div className="d-flex justify-content-between align-items-center w-100">
                                        <span className="accordion-title">Mental Health</span>
                                        <div className="select-count">{selectedCount}</div>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul className="checkbox-group">
                                        <Form>
                                            <ListGroup>
                                                {topics.map((topic) => (
                                                    <ListGroup.Item key={topic.id}>
                                                        <Form.Check
                                                            type="checkbox"
                                                            id={topic.id}
                                                            label={topic.label}
                                                            checked={!!checkedItems[topic.id]} // Default to false if undefined
                                                            onChange={handleChange}
                                                        />
                                                    </ListGroup.Item>
                                                ))}
                                            </ListGroup>
                                        </Form>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className="text-area mt-4">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Give us a description of your interests</Form.Label>
                            <Form.Control as="textarea" className="height-96 form-control" rows={3} />
                            <p className="mt-2">0/60 words</p>
                        </Form.Group>
                    </div>
                    <div className="bottom-bar-modal">
                        <div className="bottom-btn-bar-inner">
                            <button type="button" className="btn-color-orange" onClick={handleClose}>Send</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>


            <Header />

            <main id="main" className="top-space">
                <div className="custom-container">
                    <div className="page-main-title">
                        <h3>Categories</h3>
                        <Link href="/categorie" className="see-all">See more categories</Link>
                    </div>

                    <SliderSection />

                    <div className="page-main-title">
                        <h3>Recommended for you</h3>
                    </div>

                    <VideoCardGridMobile />

                    <div className="page-main-title">
                        <h3>Recommended for you</h3>
                    </div>

                    <VideoCardGridMobile />

                    <div className="page-slider-section mb-4">
                        <div className="slider-title">
                            <div className="inline-gap-8">
                                <h3>Teachers like you share this with their class about <Link href="#">addiction prevention</Link>:</h3>
                                <div className="more-btn">
                                    <button className="btn btn-more" type="button" onClick={handleShow2}>
                                        <FaEllipsisV />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='library-list mt-4'>
                            <div className='list-item-container'>
                                {videoData.map((videoData, index) => (
                                    <div className="video-card-container" key={index}>
                                        <div className="video-card-content">
                                            <Link href="/videodetails">
                                                <div className="video-card-image">
                                                    <Image src={videoData.image} alt="video card" />
                                                    <div className="video-duration">{videoData.duration}</div>
                                                </div>
                                            </Link>
                                            <div className="video-de-title">
                                                <div className="de-title">
                                                    <Link href="/videodetails">{videoData.title}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <VideoCardGridMobile />

                    <div className="bg-orange-section">
                        <div className="bg-orange-inner">
                            <div className="bg-orange-title inline-gap-8">
                                <h6>What are you interested about so we can suggest you better content</h6>
                                <div className="remove-section">
                                    <button className="btn-orange-close"><IoCloseSharp /></button>
                                </div>
                            </div>
                            <div className="bg-orange-button">
                                <button className="btn-orange" onClick={handleShow}>My interests</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <BottomBar />
        </>
    );
}

export default MainMobile;