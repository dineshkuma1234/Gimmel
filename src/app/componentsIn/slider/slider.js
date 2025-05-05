"use client";

import React, { useRef, useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SliderThumbnil from "../../../assets/images/video-thumbnil.svg";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { useHeader } from "@/app/Context/headerContext/HeaderContext";
import { useRouter } from "next/navigation";
import { SearchListContext } from "@/app/Context/searchlist/searchListContext";
import { categorylistcontext } from "@/app/Context/categorylistcontext/categorylistcontext";

const SliderSection = ({ categoryVideo,categoryimg }) => {
  
  const { setHeaderSearch, setSelectedCategory,getCategoryData, setGetCategoryData,handleGetCategories } = useHeader();
  const router = useRouter();
  const swiperRef = useRef(null);

  const [deviceWidth, setDeviceWidth] = useState(0);
//  const [getCategoryData, setGetCategoryData]=useContext(categorylistcontext)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateWidth = () => {
      setDeviceWidth(window.innerWidth);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleCategoryClick = (category) => {
    console.log(category, "category");
    handleGetCategories(category);
    setSelectedCategory(category);
    setHeaderSearch("");

  };
  return (
    <>
      {deviceWidth > 991 ? (
        <div className="slider-section">
          <div className="swiper-navigation">
            <button
              id="prevButton"
              className="swiper-button-custom-prev"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <FaArrowLeft />
            </button>
            <button
              id="nextButton"
              className="swiper-button-custom-next"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <FaArrowRight />
            </button>
          </div>

          <Swiper
            spaceBetween={24}
            slidesPerView={4}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="mySwiper category-swiper"
            breakpoints={{
              0: {
                slidesPerView: 2.5,
                spaceBetween: 12,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {categoryimg?.map((categories, index) => (
              <SwiperSlide key={index}>
                <div className="col-md-12">
                  <div className="category-card">
                    <div className="category-card-content">
                      {/* <Link href={`/categories?category=${categories?.category}`}> */}
                      <div className="category-card-image">
                        <div className="category-card-image-icon">
                          {/* <Image src={SliderThumbnil} alt="video card image" /> */}
                        </div>
                        <div className="category-card-image-icon">
                          {/* <Image src={SliderThumbnil} alt="video card image" /> */}
                        </div>
                        <div
                          className="category-card-image-icon"
                          onClick={() =>
                            handleCategoryClick(categories?.category)
                          }
                        >
                          <Image src={categories?.thumbnail} alt="video card image" height={30} width={30}/>
                          <div className="category-card-title">
                            {categories?.category}
                          </div>
                        </div>
                      </div>
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="slider-section">
          <div className="swiper-navigation">
            <button
              id="prevButton"
              className="swiper-button-custom-prev"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <FaArrowLeft />
            </button>
            <button
              id="nextButton"
              className="swiper-button-custom-next"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <FaArrowRight />
            </button>
          </div>

          <Swiper
            spaceBetween={24}
            slidesPerView={4}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="mySwiper category-swiper"
            breakpoints={{
              0: {
                slidesPerView: 2.5,
                spaceBetween: 12,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {categoryimg?.map((categories, index) => (
              <SwiperSlide key={index}>
                <div className="col-md-12">
                  <div className="category-card">
                    <div className="category-card-content">
                      {/* <Link href="/categorie"> */}
                      <div className="category-card-image">
                        <div className="category-card-image-icon">
                          {/* <Image
                            src={SliderThumbnil}
                            alt={categories?.category}
                          /> */}
                        </div>
                        <div className="category-card-image-icon">
                          {/* <Image src={SliderThumbnil} alt="video card image" /> */}
                        </div>
                        <div
                          className="category-card-image-icon"
                          onClick={() =>
                            handleCategoryClick(categories?.category)
                          }
                        >
                           <Image src={categories?.thumbnail} alt="video card image" height={30} width={30}/>

                          <div className="category-card-title">
                            {categories?.category}
                          </div>
                        </div>
                      </div>
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default SliderSection;
