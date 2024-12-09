'use client'

import React, { useState } from "react";
import Image from "next/image";
import { MdMoreVert, MdAddCircleOutline } from "react-icons/md";
import Link from "next/link";
import BottomBar from "../../../components/BottomBar/BottomBar";
import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap";
import '../../CommenStyle/details.css';
import { IoCloseSharp } from "react-icons/io5";

function MyLibrary() {

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [folders, setFolders] = useState([
        { id: 1, name: 'My Library' },
        { id: 2, name: 'Work Documents' },
        { id: 3, name: 'Personal Files' },
    ]);

    // Function to add a new folder
    const addNewFolder = () => {
        const newFolder = {
            id: folders.length + 1,
            name: `New Folder ${folders.length + 1}`,
        };
        setFolders([...folders, newFolder]);
    };


    return (
        <>

            <Modal show={show2} onHide={handleClose2} centered className='modal-dots'>
                <div className='modal-bar'>
                    <div className='bar-line'></div>
                </div>
                <div className="modal-icon-header d-flex justify-content-between align-items-center">
                    <div className="inline-gap-8">
                        <h3 className="modal-icon-title">New Folder</h3>
                    </div>
                    <div className="close-modal-icon" onClick={handleClose2}>
                        <IoCloseSharp />
                    </div>
                </div>
                <div className="dropdown-divider"></div>
                <Modal.Body className='custom-modal-body'>
                    <div className="form-group">
                        <div className="input-container modal-input">
                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                <Form.Label>Folder name</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </div>
                    </div>
                    <button type="button" className="btn-color-orange mb-5" onClick={
                        () => {
                            addNewFolder();
                            handleClose2();
                        }
                    }>Create folder</button>
                </Modal.Body>
            </Modal>

            <div className="page-top-bar">
                <div className="page-inner">
                    <div className="page-section-left">
                        <div className="page-title">
                            <h5>My Library</h5>
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
                            <button className="btn" onClick={handleShow2}>
                                <Image src={require("../../../assets/images/add-folder.svg")} alt="add folder" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-main-section top-space">
                <div className="custom-container">
                    <div className='body-top'>
                        <div className='body-top-left'>
                            <div className='short-by'>
                                <p>Sort by</p>
                                <select name="" id="" className='short-by-select'>
                                    <option>Most recent</option>
                                    <option>Most popular</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='body-middle'>
                        <div className='folder-lists'>
                            {folders.map((folder) => (
                                <div key={folder.id} className='folder-view'>
                                    <div className='folder-inner'>
                                        <div className='folder-content-inline'>
                                            <Link href="/mylibrary/folder_id/folder">
                                                <div className='folder-content-left'>
                                                    <div className='folder-icon'>
                                                        <svg
                                                            width="32"
                                                            height="32"
                                                            viewBox="0 0 32 32"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M5.33366 26.6673C4.60033 26.6673 3.97255 26.4062 3.45033 25.884C2.9281 25.3618 2.66699 24.734 2.66699 24.0007V8.00065C2.66699 7.26732 2.9281 6.63954 3.45033 6.11732C3.97255 5.5951 4.60033 5.33398 5.33366 5.33398H13.3337L16.0003 8.00065H26.667C27.4003 8.00065 28.0281 8.26176 28.5503 8.78398C29.0725 9.30621 29.3337 9.93398 29.3337 10.6673V24.0007C29.3337 24.734 29.0725 25.3618 28.5503 25.884C28.0281 26.4062 27.4003 26.6673 26.667 26.6673H5.33366ZM5.33366 24.0007H26.667V10.6673H14.9003L12.2337 8.00065H5.33366V24.0007Z"
                                                                fill="#104E5B"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div className='folder-name'>
                                                        <p>{folder.name}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className='folder-content-right'>
                                                <div className='folder-icon'>
                                                    <MdMoreVert />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='add-new-folder'>
                            <button
                                type="button"
                                className="btn btn-new-folder"
                                onClick={handleShow2}
                            >
                                <MdAddCircleOutline /> Add New Folder
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <BottomBar />
        </>
    );

}

export default MyLibrary;