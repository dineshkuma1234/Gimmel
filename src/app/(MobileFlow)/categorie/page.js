"use client";

import Image from "next/image";
import React from "react";

function Categories({
  handleNotIntrested,
  categoryVideo,
  categoryVideoname,
  img,
  handleGetCategories,
}) {
  return (
    <>
      <div className="page-top-bar">
        <div className="page-inner">
          <div className="page-section-left">
            <div className="back-button">
              <button className="btn" onClick={() => window.history.back()}>
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
              <h5>Categories</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="page-main-section top-space">
        <div className="custom-container">
          <div className="page-main-title">
            <h3>{categoryVideoname}</h3>
          </div>

          <div className="video-list-container">
            <div className="video-list-view">
              <div className="video-list-item-multi">
                <div
                  className="categories-bg"
                  onClick={() => handleGetCategories(categoryVideoname)}
                >
                  <Image src={img} alt="categories" />
                </div>
              </div>
              {Array.isArray(categoryVideo) && categoryVideo.length > 0 && 
                 categoryVideo.map((video, index) => (
                  <div className="video-list-item" key={index}>
                    <div className="categories-bg">
                      <Image
                        src={video?.thumbnail}
                        alt="video card"
                        width={300}
                        height={200}
                        objectFit="cover"
                      />
                    </div>
                    <div className="video-title">
                      <h5>{video.title}</h5>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
