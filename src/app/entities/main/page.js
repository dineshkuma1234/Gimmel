import React from "react";
import Header from "../../../components/header/header";
import BottomBar from "../../../components/BottomBar/BottomBar";
import SliderSection from "../../componentsIn/slider/slider";
import VideoCardGrid from "../../componentsIn/videogrid/VideoCardGrid";
import LoderHelper from "../../../app/LoderHelper/page";
import Link from "next/link";

function Main({
  getPost,
  substance,
  mentalHealth,
  handleGetCategories,
  neuroScience,
  socialIssues,
  handleInterestFilter,
  interest,
  data,
  getFolder,
  rename,
  setValue,
  handleCreateFolder,
  handleDeleteFolder,
  handleRename,
  handleSaveVideo,
  setSelectedFolderId,
  setRename,
  handleNotIntrested,
  getSaveVideo,
  getSubFolder,
  handleCreateFolderSub,
  categoryVideo,
  setSaveVideoScreen,
  saveVideoScreen,
  handleSaveSubFolderVideo,
  handleDeleteSubFolder,
  handleGetFolder,
  handleGetFolderSub,
  selectedFolderId,
  handleSaveVideonext,
  setPostId,
}) {
  return (
    <>
      <LoderHelper />
      <Header />

      <main id="main" className="top-space">
        <div className="custom-container">
          <div className="page-main-title mb-3">
            <h3>Categories</h3>
            <Link href="/categories" className="see-all">
              See more categories
            </Link>
          </div>
        </div>

        <div className="swiper-container">
          <SliderSection
            categoryVideo={categoryVideo}
            handleGetCategories={handleGetCategories}
          />
        </div>

        <div className="custom-container">
          <div className="page-main-title">
            <h3>Recommended for you</h3>
          </div>

          <VideoCardGrid
            getPost={getPost}
            substance={substance}
            mentalHealth={mentalHealth}
            neuroScience={neuroScience}
            socialIssues={socialIssues}
            handleInterestFilter={handleInterestFilter}
            interest={interest}
            data={data}
            getFolder={getFolder}
            rename={rename}
            setValue={setValue}
            handleCreateFolder={handleCreateFolder}
            handleDeleteFolder={handleDeleteFolder}
            handleRename={handleRename}
            handleSaveVideo={handleSaveVideo}
            setSelectedFolderId={setSelectedFolderId}
            setRename={setRename}
            handleNotIntrested={handleNotIntrested}
            getSaveVideo={getSaveVideo}
            getSubFolder={getSubFolder}
            handleCreateFolderSub={handleCreateFolderSub}
            setSaveVideoScreen={setSaveVideoScreen}
            saveVideoScreen={setSaveVideoScreen}
            handleSaveSubFolderVideo={handleSaveSubFolderVideo}
            handleDeleteSubFolder={handleDeleteSubFolder}
            handleGetFolder={handleGetFolder}
            handleGetFolderSub={handleGetFolderSub}
            selectedFolderId={selectedFolderId}
            handleSaveVideonext={handleSaveVideonext}
            setPostId={setPostId}
          />
        </div>
      </main>

      <BottomBar />
    </>
  );
}

export default Main;
