'use client'

import React,{useState} from "react";
import Image from "next/image";
import VideoCardGridMobile from "../../../componentsIn/videogrid/VideoCardGridMobile";
import BottomBar from "../../../../components/BottomBar/BottomBar";
import { useHeader } from "@/app/Context/headerContext/HeaderContext";
import { useRouter } from 'next/navigation';
import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import FilterData from "@/components/header/filterdata";

function SearchList({searchListState,}) {
  console.log("this is conole on searchlist")
    const {headerSearch,setHeaderSearch,handleSearchCont,handleNotIntrested} = useHeader();
    const router = useRouter();


        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

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
                  src={require("../../../../assets/images/filter.svg")}
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
                            <input type="text" placeholder="Search" value={headerSearch} onChange={(e) =>{setHeaderSearch(e.target.value);router.push("/search")}} />
                        </div>
                    </div>
                    <div className="page-section-right">
                        <div className="add-folder-button" onClick={()=>{console.log("hey "); handleShow()}}>
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
                        <VideoCardGridMobile getPost={searchListState} handleNotIntrested={handleNotIntrested}/>
                    </div>
                </div>
            </main>

            <BottomBar />
        </>
    );
}

export default SearchList;