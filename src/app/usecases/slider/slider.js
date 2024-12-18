"use client"

import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import SliderThumbnil from '../../../assets/images/video-thumbnil.svg';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Link from 'next/link';

const SliderSection = () => {

    const swiperRef = useRef(null);

    const [deviceWidth, setDeviceWidth] = useState(0);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const updateWidth = () => {
            setDeviceWidth(window.innerWidth);
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);

        return () => window.removeEventListener('resize', updateWidth);
    }, []);

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
                        {[
                            { title: "13+ Years", imgSrc: { SliderThumbnil } },
                            { title: "Alcohol issues", imgSrc: { SliderThumbnil } },
                            { title: "18+ Years", imgSrc: { SliderThumbnil } },
                            { title: "Mental health", imgSrc: { SliderThumbnil } },
                            { title: "13+ Years", imgSrc: { SliderThumbnil } },
                        ].map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="col-md-12">
                                    <div className="category-card">
                                        <div className="category-card-content">
                                            <Link href="/categories">
                                                <div className="category-card-image">
                                                    <div className="category-card-image-icon">
                                                        <Image src={SliderThumbnil} alt="video card image" />
                                                    </div>
                                                    <div className="category-card-image-icon">
                                                        <Image src={SliderThumbnil} alt="video card image" />
                                                    </div>
                                                    <div className="category-card-image-icon">
                                                        <Image src={SliderThumbnil} alt="video card image" />
                                                        <div className="category-card-title">{item.title}</div>
                                                    </div>
                                                </div>
                                            </Link>
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
                        {[
                            { title: "13+ Years", imgSrc: { SliderThumbnil } },
                            { title: "Alcohol issues", imgSrc: { SliderThumbnil } },
                            { title: "18+ Years", imgSrc: { SliderThumbnil } },
                            { title: "Mental health", imgSrc: { SliderThumbnil } },
                            { title: "13+ Years", imgSrc: { SliderThumbnil } },
                        ].map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="col-md-12">
                                    <div className="category-card">
                                        <div className="category-card-content">
                                            <Link href="/categorie">
                                                <div className="category-card-image">
                                                    <div className="category-card-image-icon">
                                                        <Image src={SliderThumbnil} alt="video card image" />
                                                    </div>
                                                    <div className="category-card-image-icon">
                                                        <Image src={SliderThumbnil} alt="video card image" />
                                                    </div>
                                                    <div className="category-card-image-icon">
                                                        <Image src={SliderThumbnil} alt="video card image" />
                                                        <div className="category-card-title">{item.title}</div>
                                                    </div>
                                                </div>
                                            </Link>
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
