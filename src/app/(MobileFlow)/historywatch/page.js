'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdMoreVert } from "react-icons/md";

const videoData = [
    {
        id: 1,
        title: "The Bystander Effect | The Science of Empathy",
        category: "Participant",
        uploadInfo: "4 months ago",
        thumbnail: require("../../../assets/images/image.svg"),
    },
    {
        id: 2,
        title: "Understanding Quantum Physics",
        category: "Science",
        uploadInfo: "2 weeks ago",
        thumbnail: require("../../../assets/images/quantum.svg"),
    },
    {
        id: 3,
        title: "The Art of Minimalism",
        category: "Lifestyle",
        uploadInfo: "1 month ago",
        thumbnail: require("../../../assets/images/minimalism.svg"),
    },
];

function HistoryWatch() {
    return (
        <>
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
                        <div className="page-title">
                            <h5>Watch history</h5>
                        </div>
                    </div>
                    <div className="page-section-right">
                        <div className="add-folder-button">
                            <button className="btn">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.1333 28L17.7333 19.6C17.0667 20.1333 16.3 20.5556 15.4333 20.8667C14.5667 21.1778 13.6444 21.3333 12.6667 21.3333C10.2444 21.3333 8.19444 20.4944 6.51667 18.8167C4.83889 17.1389 4 15.0889 4 12.6667C4 10.2444 4.83889 8.19444 6.51667 6.51667C8.19444 4.83889 10.2444 4 12.6667 4C15.0889 4 17.1389 4.83889 18.8167 6.51667C20.4944 8.19444 21.3333 10.2444 21.3333 12.6667C21.3333 13.6444 21.1778 14.5667 20.8667 15.4333C20.5556 16.3 20.1333 17.0667 19.6 17.7333L28 26.1333L26.1333 28ZM12.6667 18.6667C14.3333 18.6667 15.75 18.0833 16.9167 16.9167C18.0833 15.75 18.6667 14.3333 18.6667 12.6667C18.6667 11 18.0833 9.58333 16.9167 8.41667C15.75 7.25 14.3333 6.66667 12.6667 6.66667C11 6.66667 9.58333 7.25 8.41667 8.41667C7.25 9.58333 6.66667 11 6.66667 12.6667C6.66667 14.3333 7.25 15.75 8.41667 16.9167C9.58333 18.0833 11 18.6667 12.6667 18.6667Z" fill="#104E5B" />
                                    <path d="M26.1333 28L17.7333 19.6C17.0667 20.1333 16.3 20.5556 15.4333 20.8667C14.5667 21.1778 13.6444 21.3333 12.6667 21.3333C10.2444 21.3333 8.19444 20.4944 6.51667 18.8167C4.83889 17.1389 4 15.0889 4 12.6667C4 10.2444 4.83889 8.19444 6.51667 6.51667C8.19444 4.83889 10.2444 4 12.6667 4C15.0889 4 17.1389 4.83889 18.8167 6.51667C20.4944 8.19444 21.3333 10.2444 21.3333 12.6667C21.3333 13.6444 21.1778 14.5667 20.8667 15.4333C20.5556 16.3 20.1333 17.0667 19.6 17.7333L28 26.1333L26.1333 28ZM12.6667 18.6667C14.3333 18.6667 15.75 18.0833 16.9167 16.9167C18.0833 15.75 18.6667 14.3333 18.6667 12.6667C18.6667 11 18.0833 9.58333 16.9167 8.41667C15.75 7.25 14.3333 6.66667 12.6667 6.66667C11 6.66667 9.58333 7.25 8.41667 8.41667C7.25 9.58333 6.66667 11 6.66667 12.6667C6.66667 14.3333 7.25 15.75 8.41667 16.9167C9.58333 18.0833 11 18.6667 12.6667 18.6667Z" fill="url(#paint0_linear_4601_14162)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_4601_14162" x1="4" y1="4" x2="28.5757" y2="4.60471" gradientUnits="userSpaceOnUse">
                                            <stop stopOpacity="0" />
                                            <stop offset="1" stopOpacity="0.25" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </button>
                            <button className="btn">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.6665 22.666H17.3332V17.3327H22.6665V14.666H17.3332V9.33268H14.6665V14.666H9.33317V17.3327H14.6665V22.666ZM15.9998 29.3327C14.1554 29.3327 12.4221 28.9827 10.7998 28.2827C9.17762 27.5827 7.7665 26.6327 6.5665 25.4327C5.3665 24.2327 4.4165 22.8216 3.7165 21.1993C3.0165 19.5771 2.6665 17.8438 2.6665 15.9993C2.6665 14.1549 3.0165 12.4216 3.7165 10.7993C4.4165 9.17713 5.3665 7.76602 6.5665 6.56602C7.7665 5.36602 9.17762 4.41602 10.7998 3.71602C12.4221 3.01602 14.1554 2.66602 15.9998 2.66602C17.8443 2.66602 19.5776 3.01602 21.1998 3.71602C22.8221 4.41602 24.2332 5.36602 25.4332 6.56602C26.6332 7.76602 27.5832 9.17713 28.2832 10.7993C28.9832 12.4216 29.3332 14.1549 29.3332 15.9993C29.3332 17.8438 28.9832 19.5771 28.2832 21.1993C27.5832 22.8216 26.6332 24.2327 25.4332 25.4327C24.2332 26.6327 22.8221 27.5827 21.1998 28.2827C19.5776 28.9827 17.8443 29.3327 15.9998 29.3327ZM15.9998 26.666C18.9776 26.666 21.4998 25.6327 23.5665 23.566C25.6332 21.4993 26.6665 18.9771 26.6665 15.9993C26.6665 13.0216 25.6332 10.4993 23.5665 8.43268C21.4998 6.36602 18.9776 5.33268 15.9998 5.33268C13.0221 5.33268 10.4998 6.36602 8.43317 8.43268C6.3665 10.4993 5.33317 13.0216 5.33317 15.9993C5.33317 18.9771 6.3665 21.4993 8.43317 23.566C10.4998 25.6327 13.0221 26.666 15.9998 26.666Z" fill="#104E5B" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-main-section top-space">
                <div className="custom-container">
                    <div className="save-video-list-container">
                        <div className="video-list-container">
                            {videoData.map((video) => (
                                <div className="video-item" key={video.id}>
                                    <Link href={"/watch"}>
                                        <div className="video-item-inline">
                                            <div className="video-item-left">
                                                <div className="video-item-thumbnail">
                                                    <Image src={video.thumbnail} alt="thumbnail" />
                                                </div>
                                            </div>
                                            <div className="video-item-right">
                                                <div className="video-item-inline">
                                                    <div className="video-item-info">
                                                        <div className="video-item-title">
                                                            <p>{video.title}</p>
                                                        </div>
                                                        <div className="video-item-category">{video.category}</div>
                                                        <div className="upload-info">{video.uploadInfo}</div>
                                                    </div>
                                                    <div className="video-item-actions">
                                                        <div className="video-item-icon">
                                                            <MdMoreVert />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HistoryWatch;