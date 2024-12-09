"use client"

import React, { useState } from 'react';
import { MdAddCircleOutline } from "react-icons/md";
import Form from 'react-bootstrap/Form';
import { Modal } from 'react-bootstrap';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

function Sidebar() {

    const [selectedAge, setSelectedAge] = useState("18+");

    const handleClick = (age) => {
        setSelectedAge(age);
    };

    const [selectedEngagement, setSelectedEngagement] = useState("");

    const handleClick1 = (engagement) => {
        setSelectedEngagement(engagement);
    };

    const [selectedDate, setSelectedDate] = useState("");

    const handleClick2 = (date) => {
        setSelectedDate(date);
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            {/* New folder Modal start */}
            <Modal show={show} onHide={handleClose} centered className='custom-modal'>
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
                        <button className="btn btn-color-orange" onClick={handleClose}>Create folder</button>
                    </div>
                </Modal.Body>
            </Modal>

            <div className="search-bar-">
                <input
                    type="text"
                    placeholder="Search in library"
                    className="search-input-bar"
                />
            </div>
            <div className='add-folder'>
                <button
                    type="button"
                    className="btn btn-new-folder"
                    onClick={handleShow}
                >
                    <MdAddCircleOutline /> New Folder
                </button>
            </div>
            <div className="dropdown-divider"></div>
            <div className="middle-sidebar">
                <div className="switch-container">
                    <span className="switch-label-text">
                        Show only verified creators/channels
                    </span>
                    <Form>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                        />
                    </Form>
                </div>
                <div className="select-container">
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Select a topic</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                </div>
                <div className="select-container">
                    <Form.Group controlId="exampleForm.ControlInput2">
                        <Form.Label>Minimum Age Requirement</Form.Label>
                    </Form.Group>
                    <div className="tab-select">
                        <div className="list-group" id="list-tab" role="tablist">
                            <button
                                className={`list-group-item list-group-item-action ${selectedAge === "18+" ? "active" : ""}`}
                                id="list-home-list"
                                onClick={() => handleClick("18+")}
                            >
                                18+
                            </button>
                            <button
                                className={`list-group-item list-group-item-action ${selectedAge === "21+" ? "active" : ""}`}
                                id="list-profile-list"
                                onClick={() => handleClick("21+")}
                            >
                                21+
                            </button>
                            <button
                                className={`list-group-item list-group-item-action ${selectedAge === "25+" ? "active" : ""}`}
                                id="list-messages-list"
                                onClick={() => handleClick("25+")}
                            >
                                25+
                            </button>
                            <button
                                className={`list-group-item list-group-item-action ${selectedAge === "30+" ? "active" : ""}`}
                                id="list-settings-list"
                                onClick={() => handleClick("30+")}
                            >
                                30+
                            </button>
                        </div>
                    </div>
                </div>

                <div className="select-container">
                    <Form.Group controlId="exampleForm.ControlInput3">
                        <Form.Label>Minimum Engagement Rating</Form.Label>
                    </Form.Group>
                    <div className="tab-select">
                        <div className="list-group" id="list-tab" role="tablist">
                            <button
                                className={`list-group-item list-group-item-action ${selectedEngagement === "10" ? "active" : ""}`}
                                id="list-home-list"
                                onClick={() => handleClick1("10")}
                            >
                                10
                            </button>
                            <button
                                className={`list-group-item list-group-item-action ${selectedEngagement === "9" ? "active" : ""}`}
                                id="list-profile-list"
                                onClick={() => handleClick1("9")}
                            >
                                9
                            </button>
                            <button
                                className={`list-group-item list-group-item-action ${selectedEngagement === "8" ? "active" : ""}`}
                                id="list-messages-list"
                                onClick={() => handleClick1("8")}
                            >
                                8
                            </button>
                            <button
                                className={`list-group-item list-group-item-action ${selectedEngagement === "7" ? "active" : ""}`}
                                id="list-settings-list"
                                onClick={() => handleClick1("7")}
                            >
                                7
                            </button>
                        </div>
                    </div>
                </div>
                <div className="select-container">
                    <Form.Group controlId="exampleForm.ControlInput4">
                        <Form.Label>Date Published</Form.Label>
                    </Form.Group>
                    <div className="tab-select">
                        <div className="list-group" id="list-tab" role="tablist">
                            <button
                                className={`list-group-item list-group-item-action ${selectedDate === "Today" ? "active" : ""}`}
                                id="list-home-list"
                                onClick={() => handleClick2("Today")}
                            >
                                Today
                            </button>
                            <button
                                className={`list-group-item list-group-item-action ${selectedDate === "This week" ? "active" : ""}`}
                                id="list-profile-list"
                                onClick={() => handleClick2("This week")}
                            >
                                This week
                            </button>
                            <button
                                className={`list-group-item list-group-item-action ${selectedDate === "This month" ? "active" : ""}`}
                                id="list-messages-list"
                                onClick={() => handleClick2("This month")}
                            >
                                This month
                            </button>
                            <button
                                className={`list-group-item list-group-item-action ${selectedDate === "This year" ? "active" : ""}`}
                                id="list-settings-list"
                                onClick={() => handleClick2("This year")}
                            >
                                This year
                            </button>
                        </div>
                    </div>
                </div>
                <div className="select-container">
                    <Form.Group controlId="exampleForm.ControlInput5">
                        <Form.Label>Difficulty Level</Form.Label>
                        <Form.Control type="text" placeholder="Set difficulty" />
                    </Form.Group>
                </div>
                <div className="select-container">
                    <RangeSlider
                        className="single-thumb"
                        defaultValue={[0, 50]}
                        thumbsDisabled={[true, false]}
                        rangeSlideDisabled={true}
                    />
                </div>
                <div className="select-container">
                    <Form.Group controlId="exampleForm.ControlInput6">
                        <Form.Label>Duration</Form.Label>
                        <Form.Check type="radio" aria-label="radio 1" label="Less than 4 minutes " />
                        <Form.Check type="radio" aria-label="radio 2" label="4-8 minutes" />
                        <Form.Check type="radio" aria-label="radio 3" label="8-12 minutes" />
                        <Form.Check type="radio" aria-label="radio 4" label="More than 12 minutes" />
                    </Form.Group>
                </div>
            </div>
        </>
    );
}

export default Sidebar;