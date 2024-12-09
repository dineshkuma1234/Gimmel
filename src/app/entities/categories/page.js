import React from "react";
import Header from "../../../components/header/header";
import SliderSection from "../../usecases/slidercategories/slider";

function Categories() {
    return (
        <>
            <Header />

            <main id="main" className="top-space">
                <div className="custom-container">
                    <div className="page-main-title">
                        <h3>12+ years</h3>
                    </div>
                    <SliderSection />
                    <div className="page-main-title">
                        <h3>Drug prevention</h3>
                    </div>
                    <SliderSection />
                    <div className="page-main-title">
                        <h3>Mental health</h3>
                    </div>
                    <SliderSection />
                </div>
            </main>
        </>
    );
}

export default Categories;