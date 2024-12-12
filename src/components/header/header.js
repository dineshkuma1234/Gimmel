"use client"

import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import Logo from "../../assets/images/logo.svg";
import FilterIcon from "../../assets/images/filter.svg";
import './header.css';
import '../../app/CommenStyle/filter.css';
import FilterData from "./filterdata";
import Link from 'next/link';
import { usePathname } from 'next/navigation'


const historyItems = [
    "The Impact of Alcohol on Mental Health",
    "Alcohol's Impact on Physical Health",
    "Recognizing Alcohol Abuse and Dependence",
    "Strategies for Reducing Alcohol Consumption",
    "Alcohol and Youth: Risks and Prevention",
    "Cognitive Behavioral Therapy for Depression",
    "Exploring Dopamine's Role in Motivation",
    "Risks of E-cigarettes and Vaping",
];

function Header() {

    const pathname = usePathname()



    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 991 && menuOpen) {
                setMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [menuOpen]);

    const [showHistory, setShowHistory] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
    const containerRef = useRef(null);

    const handleShowHistory = () => {
        setShowHistory(true);
    };

    const handleShowFilter = () => {
        setShowFilter(true);
    };

    const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setShowHistory(false);
            setShowFilter(false);
        }
    };

    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="header" id="header">
            <nav className="navbar container-fluid">
                <div className="menu-left">
                    <Link href="/" className="brand">
                        <Image src={Logo} alt="logo" width="100" height="100" />
                    </Link>

                    <div className="search-container" ref={containerRef}>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search"
                            onClick={handleShowHistory}
                        />
                        <button className="search-button" onClick={handleShowFilter}>
                            <Image src={FilterIcon} alt="filter icon" width="20" height="20" />
                        </button>
                        {showHistory && (
                            <div className="search-history" id="searchHistory">
                                <ul>
                                    {historyItems.map((item, index) => (
                                        <li key={index}>
                                            <Link href="#">
                                                <div className='search-history-left'>
                                                    <Image src={require("../../assets/images/history.svg")} alt="slider thumbnil" />
                                                    {item}
                                                </div>
                                                <div className='search-history-icon'>
                                                    <Image src={require("../../assets/images/north_east.svg")} alt="slider thumbnil" />
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {showFilter && (
                            <div className="filter-history" id="searchHistory">
                                <div className='filter-content'>
                                    <FilterData />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className='search-icon'>
                        <Image src={require("../../assets/images/search-icon.svg")} alt="search icon" />
                    </div>

                    <div className={`menu ${menuOpen ? "is-active" : ""}`} id="menu">
                        <ul className="menu-inner">
                            <li className="menu-item" onClick={handleLinkClick}>
                                <Link
                                    href="/categories"
                                    className={`menu-link ${pathname === "/categories" ? "active" : ""}`}
                                >
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4.33333 7.33398L8 1.33398L11.6667 7.33398H4.33333ZM11.6667 14.6673C10.8333 14.6673 10.125 14.3757 9.54167 13.7923C8.95833 13.209 8.66667 12.5007 8.66667 11.6673C8.66667 10.834 8.95833 10.1257 9.54167 9.54232C10.125 8.95898 10.8333 8.66732 11.6667 8.66732C12.5 8.66732 13.2083 8.95898 13.7917 9.54232C14.375 10.1257 14.6667 10.834 14.6667 11.6673C14.6667 12.5007 14.375 13.209 13.7917 13.7923C13.2083 14.3757 12.5 14.6673 11.6667 14.6673ZM2 14.334V9.00065H7.33333V14.334H2ZM11.6667 13.334C12.1333 13.334 12.5278 13.1729 12.85 12.8507C13.1722 12.5284 13.3333 12.134 13.3333 11.6673C13.3333 11.2007 13.1722 10.8062 12.85 10.484C12.5278 10.1618 12.1333 10.0007 11.6667 10.0007C11.2 10.0007 10.8056 10.1618 10.4833 10.484C10.1611 10.8062 10 11.2007 10 11.6673C10 12.134 10.1611 12.5284 10.4833 12.8507C10.8056 13.1729 11.2 13.334 11.6667 13.334ZM3.33333 13.0007H6V10.334H3.33333V13.0007ZM6.7 6.00065H9.3L8 3.90065L6.7 6.00065Z"
                                            fill="#87A7AD"
                                        />
                                    </svg>
                                    Categories
                                </Link>
                            </li>
                            <li className="menu-item" onClick={handleLinkClick}>
                                <Link
                                    href="/library"
                                    className={`menu-link ${pathname === "/library" ? "active" : ""}`}
                                >
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.33301 14V3.33333C3.33301 2.96667 3.46356 2.65278 3.72467 2.39167C3.98579 2.13056 4.29967 2 4.66634 2H11.333C11.6997 2 12.0136 2.13056 12.2747 2.39167C12.5358 2.65278 12.6663 2.96667 12.6663 3.33333V14L7.99967 12L3.33301 14ZM4.66634 11.9667L7.99967 10.5333L11.333 11.9667V3.33333H4.66634V11.9667Z"
                                            fill="#87A7AD"
                                        />
                                    </svg>
                                    My Library
                                </Link>
                            </li>
                            <li className="menu-item" onClick={handleLinkClick}>
                                <Link
                                    href="/request"
                                    className={`menu-link ${pathname === "/request" ? "active" : ""}`}
                                >
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2 11.9993V3.99935C2 3.63268 2.13056 3.31879 2.39167 3.05768C2.65278 2.79657 2.96667 2.66602 3.33333 2.66602H11.3333C11.7 2.66602 12.0139 2.79657 12.275 3.05768C12.5361 3.31879 12.6667 3.63268 12.6667 3.99935V7.38268C12.5556 7.36046 12.4444 7.34657 12.3333 7.34102C12.2222 7.33546 12.1111 7.33268 12 7.33268C11.8889 7.33268 11.7778 7.33546 11.6667 7.34102C11.5556 7.34657 11.4444 7.36046 11.3333 7.38268V3.99935H3.33333V10.666H8.05C8.02778 10.7771 8.01389 10.8882 8.00833 10.9993C8.00278 11.1105 8 11.2216 8 11.3327C8 11.4438 8.00278 11.5549 8.00833 11.666C8.01389 11.7771 8.02778 11.8882 8.05 11.9993H4H2ZM4.66667 6.66602H10V5.33268H4.66667V6.66602ZM4.66667 9.33268H8V7.99935H4.66667V9.33268Z"
                                            fill="#87A7AD"
                                        />
                                        <rect x="9.25" y="10.75" width="5.75" height="1.25" fill="#87A7AD" />
                                        <rect x="12.75" y="8.5" width="5.5" height="1.25" transform="rotate(90 12.75 8.5)" fill="#87A7AD" />
                                    </svg>
                                    Request
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <div className="burger" id="burger" onClick={toggleMenu}>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                </div> */}
                <div className="sec-center">
                    <Link href="/account" className="logo">
                        <div className={`for-dropdown profile-btn-view ${pathname === "/account" ? "active" : ""}`} htmlFor="dropdown">
                            <div className="user-image">
                                <Image
                                    width={50}
                                    height={50}
                                    src={require("../../assets/images/user.png")}
                                    className="img-responsive modal_profile_img2"
                                    alt="User Profile"
                                />
                            </div>
                            <span className="user-name"> Account Name </span>
                        </div>
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
