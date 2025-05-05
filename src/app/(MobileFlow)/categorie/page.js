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
      <div className="page mt-4">
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
                        width={100}
                        height={100}
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
