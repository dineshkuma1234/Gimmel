'use client'

import React from "react";
import Image from "next/image";
import VideoCardGrid from "../../../usecases/videogrid/VideoCardGrid";
import BottomBar from "../../../../components/BottomBar/BottomBar";

function SearchList() {
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
                        <div className="search-bar-header">
                            <input type="text" placeholder="Search" />
                        </div>
                    </div>
                    <div className="page-section-right">
                        <div className="add-folder-button">
                            <button className="btn">
                                <Image src={require("../../../../assets/images/filter.svg")} alt="add folder" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <main id="main" className="top-space">
                <div className="custom-container">
                    <div className="history-list-container">
                        <VideoCardGrid />
                    </div>
                </div>
            </main>

            <BottomBar />
        </>
    );
}

export default SearchList;