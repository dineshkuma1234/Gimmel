'use client'

import React from "react";
import { Form } from "react-bootstrap";
import '../../../entities/request-data/request.css';
import Link from "next/link";

function AddRequest() {
    return (
        <>
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
                                <h5>What do you need</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page-main-section top-space-request">
                    <div className="custom-container">
                        <div className="page-request-data">
                            <Form className="request-data-form">
                                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Title of your request</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="exampleForm.ControlInput2">
                                    <Form.Label>Material description</Form.Label>
                                    <Form.Control as="textarea" placeholder="" className="height-96" />
                                    <div className="count-text">0/60</div>
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="exampleForm.ControlInput3">
                                    <Form.Label>What should be avoided?</Form.Label>
                                    <Form.Control as="textarea" placeholder="" className="height-96" />
                                    <div className="count-text">0/60</div>
                                </Form.Group>
                                <Form.Group className="" controlId="exampleForm.ControlInput4">
                                    <Form.Label>Additional details</Form.Label>
                                    <Form.Control as="textarea" placeholder="" className="height-96" />
                                    <div className="count-text">0/60</div>
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                </div>

                <div className="bottom-btn-bar">
                    <div className="bottom-btn-bar-inner">
                        <Link href={"/requestmobile/requestoverview"} className="btn-color-orange">Review Request</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddRequest;