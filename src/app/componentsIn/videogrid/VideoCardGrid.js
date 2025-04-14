"use client";

// VideoCardGrid.js
import React, { useState, useEffect, useRef, useContext } from "react";
import { FaEllipsisV, FaCaretDown } from "react-icons/fa";
import SliderThumbnil from "../../../assets/images/video-thumbnil.svg";
import defoultImages from "../../../assets/images/defoultmage.jpg";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import Link from "next/link";
import { Form, ListGroup } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import VideoCard from './VideoCard';

const VideoCardGrid = ({
  getPost,
  substance,
  mentalHealth,
  neuroScience,
  socialIssues,
  handleInterestFilter,
  interest,
  data,
  getFolder,
  rename,
  setValue,
  handleCreateFolder,
  handleDeleteFolder,
  handleRename,
  handleSaveVideo,
  setSelectedFolderId,
  setRename,
  handleNotIntrested,
  getSaveVideo,
  getSubFolder,
  handleCreateFolderSub,
  setSaveVideoScreen,
  handleGetFolder,
  handleDeleteSubFolder,
  handleGetFolderSub,handleSaveSubFolderVideo,
  selectedFolderId,
  handleSaveVideonext,
  setPostId
}) => (
  
  <div className="row">
    {getPost &&
      Array.isArray(getPost) &&
      getPost?.map((video, index) => (
        <VideoCard
        handleSaveSubFolderVideo={handleSaveSubFolderVideo}
          key={`video-${index}`}
          video={video}
          index={index}
          substance={substance}
          mentalHealth={mentalHealth}
          neuroScience={neuroScience}
          socialIssues={socialIssues}
          handleInterestFilter={handleInterestFilter}
          interest={interest}
          data={data}
          getFolder={getFolder}
          rename={rename}
          setValue={setValue}
          handleCreateFolder={handleCreateFolder}
          handleDeleteFolder={handleDeleteFolder}
          handleRename={handleRename}
          handleSaveVideo={handleSaveVideo}
          setSelectedFolderId={setSelectedFolderId}
          setRename={setRename}
          handleNotIntrested={handleNotIntrested}
          getSaveVideo={getSaveVideo}
          getSubFolder={getSubFolder}
          handleCreateFolderSub={handleCreateFolderSub}
          setSaveVideoScreen={setSaveVideoScreen}
          saveVideoScreen={setSaveVideoScreen}
          handleGetFolder ={handleGetFolder}
          handleDeleteSubFolder={handleDeleteSubFolder}
          handleGetFolderSub={handleGetFolderSub}
          selectedFolderId={selectedFolderId}
          handleSaveVideonext={handleSaveVideo}
          setPostId={setPostId}
        />
      ))}
  </div>
);

export default VideoCardGrid;
