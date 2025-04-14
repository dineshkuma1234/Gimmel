import React, { useState } from "react";
import Header from "../../../components/header/header";
import Sidebar from "../../componentsIn/sidebar/sidebar";
import "../../CommenStyle/filter.css";
import Link from "next/link";
import CategoriesCard from "../../componentsIn/categoriescard/CategoriesCard";

function WatchHistoryData({watchHistoryData,title,
    getFolder,
    handleCreateFolder,
    handleDeleteFolder,
    handleSaveVideo,
    handleRename,
    rename,
    setRename,
    getSubFolder,
    handleGetFolder,
    getSaveVideo,
    selectedFolderId,
    handleDeleteSubFolder,
    handleSaveVideonext,
    handleSaveSubFolderVideo,
    handleCreateFolderSub,
    calculateMonthsAgo,
    handleGetFolderSub,
    setSelectedFolderId,
    setValue

}) {


    return (
        <>
            <Header />

            <main id="main" className="top-space-filter">
                <div className="category-filter-container">
                    {/* <div className="sidebar">
                        <div className="sidebar-inner">
                            <Sidebar />
                        </div>
                    </div> */}
                    <div className='main-container-save'>
                        <div className="page-main-title-mylibrary">
                            <h3>{title ? "Save Material" : "Watch history"}</h3>
                        </div>
                        <div className='body-top'>
                            <div className='body-top-left mt-3'>
                                <div className='short-by'>
                                    <p>Today</p>
                                </div>
                            </div>
                        </div>

                        <div className="video-list-container">
                            <CategoriesCard watchHistoryData={watchHistoryData}
                              getFolder={getFolder} rename={rename} setValue={setValue} handleCreateFolder={handleCreateFolder} handleDeleteFolder={handleDeleteFolder} handleRename={handleRename} handleSaveVideo={handleSaveVideo} setSelectedFolderId={setSelectedFolderId} setRename={setRename} 
                              getSaveVideo={getSaveVideo} getSubFolder={getSubFolder} handleCreateFolderSub={handleCreateFolderSub} handleGetFolderSub={handleGetFolderSub} handleGetFolder={handleGetFolder}
                              handleSaveVideonext={handleSaveVideonext}
                              handleSaveSubFolderVideo={handleSaveSubFolderVideo}
                              handleDeleteSubFolder={handleDeleteSubFolder}

                            />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default WatchHistoryData;