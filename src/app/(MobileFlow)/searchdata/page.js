"use client";

import React, { useState,  } from "react";
import Image from "next/image";
import Link from "next/link";
import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import FilterData from "../../../components/header/filterdata";
import "../../CommenStyle/filter.css";
import { useHeader } from "@/app/Context/headerContext/HeaderContext";
import historyIcon from "../../../assets/images/history.svg";
import vectorIcon from "../../../assets/images/Vector.svg";
import filter from "../../../assets/images/filter.svg";
import northEast from "../../../assets/images/north_east.svg"
import { useRouter,  } from "next/navigation";

function Search() {
  const {
    historyList = [],
    setHeaderSearch,
    headerSearch,
    handleHistoryList,
    handleSearchCont
   
  } = useHeader();
  const router = useRouter();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const handleHistoryItemClick = (item) => {
    setHeaderSearch(item.title);
    handleSearchCont(item.title);
    console.log( "item in search page")
  };
  const handleBackClick=()=>{
    setHeaderSearch("");
    router.push("/");
  }
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        className="custom-modal filter-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Full Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-bar">
            <div className="bar-line"></div>
          </div>
          <div className="model-custom-header">
            <div className="model-custom-header-left">
              <div className="model-head-title">
                <Image
                  src={filter}
                  alt=""
                />
                <h3 className="model-title">Filters</h3>
              </div>
            </div>
            <div className="model-custom-header-right">
              <button className="btn" onClick={handleClose}>
                <IoCloseSharp />
              </button>
            </div>
          </div>
          <div className="dropdown-divider"></div>
          <div className="model-custom-body">
          <div className="filter-content">
                <FilterData  handleSearchCont={handleSearchCont} headerSearch={headerSearch} setShow={setShow}/>
              </div>
          </div>
        </Modal.Body>
      </Modal>

      <div className="page-top-bar">
        <div className="page-inner">
          <div className="page-section-left">
            <div className="back-button">
              <button className="btn"  onClick={handleBackClick} >
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
              <input
                type="text"
                placeholder="Search"
                value={headerSearch}
                autoFocus={true}
                onChange={(e) => setHeaderSearch(e.target.value)}
                onClick={(e) => handleHistoryList(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSearchCont(headerSearch);
                    }}
                }    
              />
            </div>
          </div>
          <div className="page-section-right">
            <div className="add-folder-button">
              <button className="btn" onClick={handleShow}>
                <Image
                  src={filter}
                  alt="add folder"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <main id="main" className="top-space">
        <div className="custom-container">
          <div className="search-history-container" id="searchHistory">
            <ul>
              {historyList.map((item, index) => (
                <li key={index} onClick={() => handleHistoryItemClick(item)}>
                  <Link href="">

                    <div className="search-history-left">
                      <Image
                        src={
                          item.type === "suggestion" ? vectorIcon : historyIcon
                        }
                        alt="history icon"
                      />
                      {item.title}
                    </div>
                    <div className="inline-search">
                      {item?.thumbnail && (
                        <div className="search-history-img">
                          <Image src={item?.thumbnail} alt="slider thumbnail"  width={20} height={20}/>
                        </div>
                      )}
                      <div className="search-history-icon">
                        <Image
                          src={northEast}
                          alt="slider thumbnil"
                        />
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default Search;
