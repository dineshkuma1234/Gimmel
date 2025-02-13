'use client'

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import FilterData from "../../../components/header/filterdata";
import '../../CommenStyle/filter.css';


function Search({historyList=[], headerSearch ,setHeaderSearch ,handleHistoryList}) {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleHistoryItemClick =(item)=>{
        setHeaderSearch(item.title);
     }
console.log(headerSearch,"headerSearch====")
    return (
        <>
            <Modal show={show} onHide={handleClose} centered className='custom-modal filter-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>Full Summary</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='modal-bar'>
                        <div className='bar-line'></div>
                    </div>
                    <div className="model-custom-header">
                        <div className="model-custom-header-left">
                            <div className="model-head-title">
                                <Image src={require("../../../assets/images/filter.svg")} alt="" />
                                <h3 className="model-title">Filters</h3>
                            </div>
                        </div>
                        <div className="model-custom-header-right">
                            <button className="btn" onClick={handleClose}><IoCloseSharp /></button>
                        </div>
                    </div>
                    <div className="dropdown-divider"></div>
                    <div className="model-custom-body">
                        <div className="filter-history" id="searchHistory">
                            <div className='filter-content'>
                                <FilterData />
                            </div>
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
                            <input type="text" placeholder="Search" value={headerSearch} onChange={(e)=>setHeaderSearch(e.target.value)} onClick={()=>handleHistoryList()}/>
                        </div>
                    </div>
                    <div className="page-section-right">
                        <div className="add-folder-button">
                            <button className="btn" onClick={handleShow}>
                                <Image src={require("../../../assets/images/filter.svg")} alt="add folder" />
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
                                <li key={index} onClick={()=>handleHistoryItemClick(item)}>
                                    <Link href="/search/searchlist">
                                        <div className='search-history-left'>
                                            <Image src={require("../../../assets/images/history.svg")} alt="slider thumbnil" />
                                            {item.title}
                                        </div>
                                        <div className="inline-search">
                                            {/* <div className='search-history-img'>
                                                <Image src={item.thumbnail} alt="slider thumbnil" />
                                            </div> */}
                                            <div className='search-history-icon'>
                                                <Image src={require("../../../assets/images/north_east.svg")} alt="slider thumbnil" />
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