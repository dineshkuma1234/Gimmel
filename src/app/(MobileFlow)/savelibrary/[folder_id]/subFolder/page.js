"use client";

import React, { useState,useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "../../../../CommenStyle/details.css";
import { useSave } from "@/app/Context/saveContext/SaveContext";
import { calculateMonthsAgo } from "@/app/utils/monthsAgo/page";
import { useSearchParams } from "next/navigation";

function SaveVideo() {
  const {getSaveSubFolderVideo} = useSave();

  const SearchParams=useSearchParams();
  const folderName=SearchParams.get('folderName');
 

//   useEffect(() => {
//     handleGetFolderSub(selectedFolderId);
//   }, []);

   const [isDropdownOpen, setIsDropdownOpen] = useState(null);
   const toggleDropdown = (folderId) => {
      setIsDropdownOpen((prev) => (prev === folderId ? null : folderId));
    };
    
  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setValue(selectedValue);
  };

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
              <h5>{folderName}</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="page-main-section top-space">
        <div className="custom-container">
          
          <div className="body-middle">
     

            <div className="save-video-list-container">
              <div className="video-list-container">
                {Array.isArray(getSaveSubFolderVideo) &&  getSaveSubFolderVideo.length > 0 ? (
                  getSaveSubFolderVideo.map((video) => (
                    <div className="video-item" key={video._id}>
                      <Link href={`/mainHome/${video?._id}/videodetails2`}>
                        <div className="video-item-inline">
                          <div className="video-item-left">
                            <div className="video-item-thumbnail">
                              <Image
                                src={video.thumbnailUrl}
                                alt="thumbnail"
                                width={100}
                                height={100}
                              />
                            </div>
                          </div>
                          <div className="video-item-right">
                            <div className="video-item-inline">
                              <div className="video-item-info">
                                <div className="video-item-title">
                                  <p>{video.title}</p>
                                </div>
                                <div className="video-item-category">
                                  {video.channelName}
                                </div>
                                <div className="upload-info">
                                  {calculateMonthsAgo(video.createdAt)}
                                </div>
                              </div>
                 
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))
                ):(
                  <div className="no-data-message save-message">
                  <p>No data available .</p>
                  </div>
                )
                }
              </div>
            </div>
          </div>
        </div>
      </div>

 
    </>
  );
}

export default SaveVideo;
