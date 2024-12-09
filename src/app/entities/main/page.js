import React from "react";
import Header from "../../../components/header/header";
import BottomBar from "../../../components/BottomBar/BottomBar";
import SliderSection from "../../usecases/slider/slider";
import VideoCardGrid from "../../usecases/videogrid/VideoCardGrid";
import Link from "next/link";

function Main() {
    return (
        <>
            <Header />

            <main id="main" className="top-space">
                <div className="custom-container">
                    <div className="page-main-title">
                        <h3>Categories</h3>
                        <Link href="/categories" className="see-all">See more categories</Link>
                    </div>

                    <SliderSection />

                    <div className="page-main-title">
                        <h3>Recommended for you</h3>
                    </div>

                    <VideoCardGrid />

                    <div className="page-main-title">
                        <h3>Recommended for you</h3>
                    </div>

                    <VideoCardGrid />
                </div>
            </main>

            <BottomBar />
        </>
    );
}

export default Main;