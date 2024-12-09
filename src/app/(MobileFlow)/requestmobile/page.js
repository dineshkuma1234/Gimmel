'use client'

import React from "react";
import Image from "next/image";
import BottomBar from "../../../components/BottomBar/BottomBar";
import Link from "next/link";

const RequestMobile = () => {
    return (
        <div className="page-container-mobile" style={{ height: "100%", background: "#fff" }}>
            <div className="page-top-bar">
                <div className="page-inner">
                    <div className="page-section-left">
                        <div className="page-title">
                            <h5>Request</h5>
                        </div>
                    </div>
                    <div className="page-section-right">
                        <div className="add-folder-button">
                            <button className="btn">
                                <Link href="/requestmobile/addrequest">
                                    <Image src={require("../../../assets/images/add-folder.svg")} alt="add folder" />
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-main-section top-space-request">
                <div className="custom-container">
                    <div className="request-list">
                        <Link href="/requestmobile/requestpreview" className="request-link">
                            <div className="request-item active">
                                <div className="request-title">
                                    <h5>Understanding and Managing Anxiety in Teenagers</h5>
                                    <div className="action-notification">
                                        <Image src={require("../../../assets/images/notifications_active.svg")} alt="notification" />
                                    </div>
                                </div>
                                <div className="request-date">
                                    <p>A 15-minute video explaining the causes of anxiety in teenagers, signs to watch for, and practical strategies for managing it. It should include interviews with mental health professionals and real-life testimonials.</p>
                                </div>
                            </div>
                        </Link>
                        <div className="request-item">
                            <div className="request-title">
                                <h5>How Social Media Affects Mental Health and Emotional Well-being</h5>
                                <div className="action-notification">
                                    <Image src={require("../../../assets/images/notifications_active.svg")} alt="notification" />
                                </div>
                            </div>
                            <div className="request-date">
                                <p>A 15-minute video explaining the causes of anxiety in teenagers, signs to watch for, and practical strategies for managing it. It should include interviews with mental health professionals and real-life testimonials.</p>
                            </div>
                        </div>
                        <div className="request-item">
                            <div className="request-title">
                                <h5>Preventing Cyberbullying: Safety Tips for Online Behavior</h5>
                                <div className="action-notification">
                                    <Image src={require("../../../assets/images/notifications_active.svg")} alt="notification" />
                                </div>
                            </div>
                            <div className="request-date">
                                <p>A 15-minute video explaining the causes of anxiety in teenagers, signs to watch for, and practical strategies for managing it. It should include interviews with mental health professionals and real-life testimonials.</p>
                            </div>
                        </div>
                        <div className="request-item">
                            <div className="request-title">
                                <h5>The Role of Dopamine in Motivation and Decision-Making</h5>
                                <div className="action-notification">
                                    <Image src={require("../../../assets/images/notifications_active.svg")} alt="notification" />
                                </div>
                            </div>
                            <div className="request-date">
                                <p>A 15-minute video explaining the causes of anxiety in teenagers, signs to watch for, and practical strategies for managing it. It should include interviews with mental health professionals and real-life testimonials.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BottomBar />
        </div>
    );
};

export default RequestMobile;