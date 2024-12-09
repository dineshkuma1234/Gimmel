"use client"

import React, { useState } from "react";
import Header from "../../../components/header/header";
import Sidebar from "../../usecases/sidebar/sidebar";
import "../../CommenStyle/filter.css";
import { MdMoreVert, MdAddCircleOutline } from "react-icons/md";
import Link from "next/link";

function MyLibrary() {

    const [folders] = useState([
        { id: 1, name: 'My Library' },
        { id: 2, name: 'Work Documents' },
        { id: 3, name: 'Personal Files' },
    ]);


    return (
        <>
            <Header />

            <main id="main" className="top-space-filter">
                <div className="category-filter-container">
                    <div className="sidebar">
                        <div className="sidebar-inner">
                            <Sidebar />
                        </div>
                    </div>
                    <div className='main-container'>
                        <div className="page-main-title-mylibrary">
                            <h3>My Library</h3>
                        </div>
                        <div className='body-top'>
                            <div className='body-top-left mt-3'>
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

                        <div className='folder-lists mt-3'>
                            {folders.map((folder) => (
                                <div key={folder.id} className='folder-view'>
                                    <div className='folder-inner'>
                                        <div className='folder-content-inline'>
                                            <Link href="/materials">
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
                    </div>
                </div>
            </main>
        </>
    );
}

export default MyLibrary;