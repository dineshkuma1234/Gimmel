import React, { useState } from "react";
import Header from "../../../components/header/header";
import Sidebar from "../../componentsIn/sidebar/sidebar";
import "../../CommenStyle/filter.css";
import Link from "next/link";
import CategoriesCard from "../../componentsIn/categoriescard/CategoriesCard";

function WatchHistoryData({watchHistoryData}) {


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
                            <h3>Watch history</h3>
                        </div>
                        <div className='body-top'>
                            <div className='body-top-left mt-3'>
                                <div className='short-by'>
                                    <p>Today</p>
                                </div>
                            </div>
                        </div>

                        <div className="video-list-container">
                            <CategoriesCard watchHistoryData={watchHistoryData} />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default WatchHistoryData;