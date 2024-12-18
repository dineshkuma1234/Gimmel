'use client'

import React, { useState } from "react";
import Image from "next/image";
import { MdMoreVert, MdAddCircleOutline , MdDeleteOutline} from "react-icons/md";
import Link from "next/link";
import { TbEdit } from "react-icons/tb";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import '../../CommenStyle/details.css';

function SaveLibrary() {

    const [show, setShow] = useState(false);
    
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    
        const [show3, setShow3] = useState(false);
    
        const handleClose3 = () => setShow3(false);
        const handleShow3 = () => setShow3(true);

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

    const dropdownRef = useRef(null);

    const [isDropdownOpen, setIsDropdownOpen] = useState(null);

    const toggleDropdown = (folderId) => {
        setIsDropdownOpen((prev) => (prev === folderId ? null : folderId));
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(null);
        }
    };

    useEffect(() => {
        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);


    return (
        <>

            {/* Rename folder modal start */}
            <Modal show={show} onHide={handleClose} centered className='custom-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>Rename folder</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body-container">
                        <div className="input-container modal-input">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Folder name</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="btn-container">
                        <button className="btn btn-color-orange" onClick={handleClose}>Save</button>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Delete folder modal start */}
            <Modal show={show3} onHide={handleClose3} centered className='custom-modal'>
                <Modal.Body>
                    <div className="modal-body-container">
                        <div className="icon-container d-flex justify-content-center">
                            <FiAlertOctagon />
                        </div>
                        <div className="title-container d-flex justify-content-center align-items-center">
                            <p className='modal-title'>Are you sure?</p>
                        </div>
                        <div className="input-container modal-input">
                            <p className='modal-text text-center'>Do you want to delete this folder? This action cannot be undone.</p>
                        </div>
                    </div>
                    <div className="btn-container d-flex gap-3">
                        <button className="btn btn-color-orange" onClick={handleClose3}>Delete</button>
                        <button className="btn btn-color-orange-outline" onClick={handleClose3}>Cancel</button>
                    </div>
                </Modal.Body>
            </Modal>

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
                        <div className="page-title">
                            <h5>Save to My Library</h5>
                        </div>
                    </div>
                    <div className="page-section-right">
                        <div className="add-folder-button">
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
                                            <Link href="/savelibrary/folder_id/folder">
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
                                            <div className="folder-content-right" ref={dropdownRef}>
                                                <button
                                                    className="folder-icon"
                                                    onClick={() => toggleDropdown(folder.id)}
                                                >
                                                    <MdMoreVert />
                                                </button>
                                                {isDropdownOpen === folder.id && (
                                                    <div className="dropdown-menu-card">
                                                        <ul>
                                                            <li>
                                                                <button variant="primary" onClick={handleShow}>
                                                                    <TbEdit />
                                                                    Rename
                                                                </button>
                                                            </li>
                                                            <li className="hide_mobile">
                                                                <button variant="primary" onClick={handleShow2}>
                                                                    <MdDeleteOutline />
                                                                    Delete
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )}
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
                                <MdAddCircleOutline /> New Folder
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottom-btn-bar">
                <div className="bottom-btn-bar-inner">
                    <button type="button" className="btn-color-orange">Save here</button>
                </div>
            </div>
        </>
    );

}

export default SaveLibrary;