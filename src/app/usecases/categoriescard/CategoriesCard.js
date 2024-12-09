"use client"

import React, { useState } from 'react';
import SliderThumbnil from '../../../assets/images/video-thumbnil.svg';
import Image from "next/image";
import Modal from 'react-bootstrap/Modal';
import { MdMoreVert, MdAddCircleOutline } from "react-icons/md";
import { FaEllipsisV, FaCaretDown } from 'react-icons/fa';
import Link from 'next/link';

const categories = [
    {
        id: 1,
        duration: '2:30',
        rating: '8/10',
        engagement: 'Engagement Rating',
        description:
            'Explain the dangers of smoking in detail based on the biological and scientific aspects of the consequences of nicotine in chain smokers.',
        imageSrc: 'assets/images/video-thumbnil.svg',
        title: 'Dangers of smoking | Health | Biology | FuseSchool',
    },
    {
        id: 2,
        duration: '2:30',
        rating: '8/10',
        engagement: 'Engagement Rating',
        description:
            'Explain the dangers of smoking in detail based on the biological and scientific aspects of the consequences of nicotine in chain smokers.',
        imageSrc: 'assets/images/video-thumbnil.svg',
        title: 'Dangers of smoking | Health | Biology | FuseSchool',
    },
    {
        id: 3,
        duration: '2:30',
        rating: '8/10',
        engagement: 'Engagement Rating',
        description:
            'Explain the dangers of smoking in detail based on the biological and scientific aspects of the consequences of nicotine in chain smokers.',
        imageSrc: 'assets/images/video-thumbnil.svg',
        title: 'Dangers of smoking | Health | Biology | FuseSchool',
    },
    {
        id: 4,
        duration: '2:30',
        rating: '8/10',
        engagement: 'Engagement Rating',
        description:
            'Explain the dangers of smoking in detail based on the biological and scientific aspects of the consequences of nicotine in chain smokers.',
        imageSrc: 'assets/images/video-thumbnil.svg',
        title: 'Dangers of smoking | Health | Biology | FuseSchool',
    },
    {
        id: 5,
        duration: '2:30',
        rating: '8/10',
        engagement: 'Engagement Rating',
        description:
            'Explain the dangers of smoking in detail based on the biological and scientific aspects of the consequences of nicotine in chain smokers.',
        imageSrc: 'assets/images/video-thumbnil.svg',
        title: 'Dangers of smoking | Health | Biology | FuseSchool',
    },
];

function CategoriesCard() {

    const [openDropdownId, setOpenDropdownId] = useState(null);

    const toggleDropdown = (id) => {
        setOpenDropdownId((prevId) => (prevId === id ? null : id));
    };

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

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);


    return (
        <>
            <Modal show={show} onHide={handleClose} centered className='custom-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in ultricies ipsum, eu imperdiet sem. Aenean dignissim ut arcu a dapibus. Fusce euismod, velit eu mattis rhoncus, ex elit efficitur ante, at viverra eros purus at tortor. Etiam finibus ipsum sit amet laoreet aliquam. Sed condimentum bibendum ex, quis tristique purus. In dictum commodo neque imperdiet pulvinar. Maecenas euismod tellus ut tincidunt tincidunt.</p>
                    <p>Nulla in libero eget ex tristique pellentesque. Sed ex massa, cursus sagittis interdum ac, iaculis eget est. Vestibulum leo neque, eleifend et pretium vehicula, finibus sit amet dui. Phasellus nec eros a orci ultrices sagittis sit amet in lacus. Morbi nec commodo justo. Cras at varius risus. Cras nec libero consequat, vulputate felis ut, pharetra libero. Fusce ornare arcu ultrices lectus vulputate ultrices. Aenean purus nisl, bibendum vel massa eget, porttitor gravida ligula. Sed ut ante convallis, pretium quam pretium, eleifend ante. </p>
                    <p>Donec tempus mollis quam, quis molestie neque pretium ut. In eu venenatis nisi. Nam tristique sed nisi a aliquet. Praesent mauris neque, ornare nec commodo sed, aliquam at mi. Vivamus sit amet libero et felis pretium tempor tincidunt vel dui. Suspendisse tincidunt pharetra bibendum.</p>
                </Modal.Body>
            </Modal>

            <Modal show={show1} onHide={handleClose1} centered className='custom-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>Save to My Library</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                        <div className='body-top-right'>
                            <div className='view-type'>
                                <div className='list-type-view'>
                                    <div className='list-icon-text'>List view</div>
                                    <div className='list-icon'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 20H20C20.55 20 21.0208 19.8042 21.4125 19.4125C21.8042 19.0208 22 18.55 22 18V16H9V20ZM2 8H7V4H4C3.45 4 2.97917 4.19583 2.5875 4.5875C2.19583 4.97917 2 5.45 2 6V8ZM2 14H7V10H2V14ZM4 20H7V16H2V18C2 18.55 2.19583 19.0208 2.5875 19.4125C2.97917 19.8042 3.45 20 4 20ZM9 14H22V10H9V14ZM9 8H22V6C22 5.45 21.8042 4.97917 21.4125 4.5875C21.0208 4.19583 20.55 4 20 4H9V8Z" fill="#104E5B" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='body-middle'>
                        <div className='folder-lists'>
                            {folders.map((folder) => (
                                <div key={folder.id} className='folder-view'>
                                    <div className='folder-inner'>
                                        <div className='folder-content-inline'>
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
                                onClick={addNewFolder}
                            >
                                <MdAddCircleOutline /> New Folder
                            </button>
                        </div>
                    </div>
                    <div className="body-footer">
                        <button type="button" className="btn-color-orange" data-bs-dismiss="modal">Save here</button>
                    </div>
                </Modal.Body>
            </Modal>

            {categories.map((category) => (
                <div className="categories-card" key={category.id}>
                    <div className="row">
                        <div className="col-md-6">
                            <Link href="/videodetails">
                                <div className="categories-card__thumbnail">
                                    <Image src={SliderThumbnil} alt="video card" />
                                    <div className="video-duration">{category.duration}</div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <div className="categories-card__details">

                                <div className="categories-card__inline">
                                    <div className="categories-card__title">
                                        <h3>{category.title}</h3>
                                    </div>
                                    <div className="more-btn">
                                        <button className="btn btn-more" onClick={() => toggleDropdown(category.id)}>
                                            <FaEllipsisV />
                                        </button>
                                        {openDropdownId === category.id && (
                                            <div className="dropdown-menu-card">
                                                <ul>
                                                    <li>
                                                        <button variant="primary" onClick={handleShow}>
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M4 19V17H14V19H4ZM4 15V13H20V15H4ZM4 11V9H20V11H4ZM4 7V5H20V7H4Z" fill="#242424" />
                                                            </svg>
                                                            See full summary
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button variant="primary" onClick={handleShow1}>
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M5 21V5C5 4.45 5.19583 3.97917 5.5875 3.5875C5.97917 3.19583 6.45 3 7 3H17C17.55 3 18.0208 3.19583 18.4125 3.5875C18.8042 3.97917 19 4.45 19 5V21L12 18L5 21ZM7 17.95L12 15.8L17 17.95V5H7V17.95Z" fill="#242424" />
                                                            </svg>
                                                            Save
                                                        </button>
                                                    </li>
                                                    <div className='dropdown-divider'></div>
                                                    <li>
                                                        <button href="#">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C12.9 20 13.7667 19.8542 14.6 19.5625C15.0781 19.3952 15.5342 19.1853 15.9684 18.933C16.4868 18.6317 16.5269 17.9269 16.103 17.503L6.49703 7.89703C6.07311 7.47311 5.36828 7.51324 5.06703 8.03157C4.81467 8.46577 4.60483 8.92192 4.4375 9.4C4.14583 10.2333 4 11.1 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20ZM17.503 16.103C17.9269 16.5269 18.6317 16.4868 18.933 15.9684C19.1853 15.5342 19.3952 15.0781 19.5625 14.6C19.8542 13.7667 20 12.9 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C11.1 4 10.2333 4.14583 9.4 4.4375C8.92192 4.60483 8.46577 4.81467 8.03157 5.06703C7.51324 5.36828 7.47311 6.07311 7.89703 6.49703L17.503 16.103Z" fill="#3D3D3D" />
                                                            </svg>
                                                            Not interested in this channel
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="eng-rating">
                                    <div className="rating-icon">
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_4081_18510)">
                                                <path d="M8.50013 11.3168L9.48346 10.3335H10.8335V8.98346L11.8168 8.00013L10.8335 7.0168V5.6668H9.48346L8.50013 4.68346L7.5168 5.6668H6.1668V7.0168L5.18346 8.00013L6.1668 8.98346V10.3335H7.5168L8.50013 11.3168ZM8.50013 15.5335L6.2668 13.3335H3.1668V10.2335L0.966797 8.00013L3.1668 5.7668V2.6668H6.2668L8.50013 0.466797L10.7335 2.6668H13.8335V5.7668L16.0335 8.00013L13.8335 10.2335V13.3335H10.7335L8.50013 15.5335ZM8.50013 13.6668L10.1668 12.0001H12.5001V9.6668L14.1668 8.00013L12.5001 6.33346V4.00013H10.1668L8.50013 2.33346L6.83346 4.00013H4.50013V6.33346L2.83346 8.00013L4.50013 9.6668V12.0001H6.83346L8.50013 13.6668Z" fill="#F18D51" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_4081_18510">
                                                    <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="rating-category">
                                        <span>{category.rating}</span>
                                    </div>
                                    <div className="eng-name-category">Engagement Rating</div>
                                </div>

                                <div className='summary'>
                                    <div className='summary-title'>Short Summary</div>
                                    <div className='summary-content'>
                                        <p>{category.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default CategoriesCard;