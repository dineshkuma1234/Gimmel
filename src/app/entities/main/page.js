import React from "react";
import Header from "../../../components/header/header";
import BottomBar from "../../../components/BottomBar/BottomBar";
import SliderSection from "../../componentsIn/slider/slider";
import VideoCardGrid from "../../componentsIn/videogrid/VideoCardGrid";
import Link from "next/link";

<<<<<<< HEAD
function Main({getPost,historyList,setHeaderSearch ,headerSearch,handleHistoryList,handleSearchCont,substance,mentalHealth,neuroScience,socialIssues,handleInterestFilter,interest}) {
=======
function Main({getPost,historyList,setHeaderSearch ,headerSearch,handleHistoryList,handleSearchCont,getvideoid,video_id}) {
>>>>>>> 28b5e0b14a27316cd32952608a4b18f5c6832d68
    return (
        <>
            <Header historyList={historyList} setHeaderSearch={setHeaderSearch} headerSearch={headerSearch} handleHistoryList={handleHistoryList} handleSearchCont={handleSearchCont} />

            <main id="main" className="top-space">
                <div className="custom-container">
                    <div className="page-main-title mb-3">
                        <h3>Categories</h3>
                        <Link href="/categories" className="see-all">See more categories</Link>
                    </div>
                </div>  

                <div className="swiper-container">
                    <SliderSection />
                </div>

                <div className="custom-container">
                    <div className="page-main-title">
                        <h3>Recommended for you</h3>
                    </div>
<<<<<<< HEAD
                    <VideoCardGrid getPost={getPost} substance={substance} mentalHealth={mentalHealth} neuroScience={neuroScience} socialIssues={socialIssues} handleInterestFilter={handleInterestFilter} interest={interest}/>
=======
                    <VideoCardGrid getPost={getPost} getvideoid={getvideoid} id={video_id}  />
>>>>>>> 28b5e0b14a27316cd32952608a4b18f5c6832d68

                    {/* <div className="page-main-title">
                        <h3>Recommended for you</h3>
                    </div>
                    <VideoCardGrid /> */}
                </div>
            </main>

            <BottomBar />
        </>
    );
}

export default Main;