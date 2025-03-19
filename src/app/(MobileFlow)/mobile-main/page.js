"use client";

import React from "react";
import Header from "../../../components/header/header";
import BottomBar from "../../../components/BottomBar/BottomBar";
import SliderSection from "../../componentsIn/slider/slider";
import VideoCardGridMobile from "../../componentsIn/videogrid/VideoCardGridMobile";
import Link from "next/link";
import { FaEllipsisV } from "react-icons/fa";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import { ModalBody, Form, ListGroup } from "react-bootstrap";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import Accordion from "react-bootstrap/Accordion";

function MainMobile({
  getPost,
  topicPost,
  getvedioid,
  substance,
  mentalHealth,
  neuroScience,
  socialIssues,
  handleInterestFilter,
  interest,
  handleMoreLike,
  handleNotInterestedTopic,
  handleRemoveSuggation,
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
  handleGetFolderSub,
  categoryVideo,
  handleGetCategories,
}) {
  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [checkedItems, setCheckedItems] = useState({});

  return (
    <>
      <Modal show={show2} onHide={handleClose2} centered className="modal-dots">
        <div className="modal-bar">
          <div className="bar-line"></div>
        </div>
        <div className="dropdown-divider"></div>
        <ModalBody className="custom-modal-body">
          <div className="modal-btn-list-item">
            <ul>
              <li>
                <button variant="primary">
                  <Image
                    src={require("../../../assets/images/share-round.svg")}
                    alt="like"
                    width={32}
                    height={32}
                  />
                  I want more like this
                </button>
              </li>
              <li>
                <Link href="/savelibrary">
                  <button variant="primary">
                    <Image
                      src={require("../../../assets/images/x-Icon.svg")}
                      alt="like"
                      width={32}
                      height={32}
                    />
                    I am not interested about this topic
                  </button>
                </Link>
              </li>
              <div className="dropdown-divider"></div>
              <li>
                <button href="#">
                  <Image
                    src={require("../../../assets/images/report-icon.svg")}
                    alt="like"
                    width={32}
                    height={32}
                  />
                  Don’t show me suggestions
                </button>
              </li>
            </ul>
          </div>
        </ModalBody>
      </Modal>

      <Header />

      <main id="main" className="top-space">
        <div className="custom-container">
          <div className="page-main-title">
            <h3>Categories</h3>
            <Link href="/categories" className="see-all">
              See more categories
            </Link>
          </div>

          <div className="swiper-container">
            <SliderSection
              categoryVideo={categoryVideo}
              handleGetCategories={handleGetCategories}
            />
          </div>
          {/* <div className="page-main-title">
                        <h3>Recommended for you</h3>
                    </div>
 
                    <VideoCardGridMobile /> */}

          <div className="page-main-title">
            <h3>Recommended for you</h3>
          </div>

          <VideoCardGridMobile
            getPost={getPost}
            topicPost={topicPost}
            getvedioid={getvedioid}
            substance={substance}
            mentalHealth={mentalHealth}
            neuroScience={neuroScience}
            socialIssues={socialIssues}
            handleInterestFilter={handleInterestFilter}
            interest={interest}
            handleMoreLike={handleMoreLike}
            handleNotInterestedTopic={handleNotInterestedTopic}
            handleRemoveSuggation={handleRemoveSuggation}
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
            handleGetFolderSub={handleGetFolderSub}
            categoryVideo={categoryVideo}
            handleGetCategories={handleGetCategories}
          />
        </div>
      </main>

      <BottomBar />
    </>
  );
}

export default MainMobile;
