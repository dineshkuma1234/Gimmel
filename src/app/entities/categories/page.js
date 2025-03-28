import React from "react";
import Header from "../../../components/header/header";
import SliderSection from "../../componentsIn/slidercategories/slider";

function Categories({
  handleNotIntrested,
  categoryVideo,
  categoryVideoname,
  img,
  handleGetCategories,
}) {
  return (
    <>
      <Header />

      <main id="main" className="top-space">
        <div className="custom-container">
          <div className="page-main-title">
            <h3>{categoryVideoname}</h3>
          </div>
        </div>

        <div className="swiper-container">
          <SliderSection
            categoryVideo={categoryVideo}
            categoryVideoname={categoryVideoname}
            handleNotIntrested={handleNotIntrested}
            img={img}
            handleGetCategories={handleGetCategories}
          />
        </div>
      </main>
    </>
  );
}

export default Categories;
