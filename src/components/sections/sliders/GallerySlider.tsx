'use client';

import React, { useEffect } from 'react';
import style from '../sections.module.scss';
import Slider from "react-slick";
import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { portfolio } from "../../../assets/images/portfolio/index"
import Image, { StaticImageData } from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const settings = {
    infinite: true,
    autoPlay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
};

export const GallerySlider = () => {

    const t = useTranslations('gallery');

    const sliderRef = useRef<Slider>(null);
    const [slides, setSlides] = useState<StaticImageData[][]>(chunkArrayInGroups<StaticImageData>(portfolio, 3));
    const [activeSlide, setActiveSlide] = useState<number>(0);

    const beforeChangeHandler = (cur: number, next: number) => {
        setActiveSlide(next);
    };

    const handleSliderButtonClick = (index: number) => {
        if (sliderRef.current)
            sliderRef.current.slickGoTo(index);
    };

    useEffect(() => {
        if (window.innerWidth <= 900) {
            setSlides(chunkArrayInGroups<StaticImageData>(portfolio, 1));
        }
        const resize = () => {
            if (!sliderRef.current) return;
            if (window.innerWidth <= 900) {
                setSlides(chunkArrayInGroups<StaticImageData>(portfolio, 1));
            } else {
                sliderRef.current.slickPlay();
                setSlides(chunkArrayInGroups<StaticImageData>(portfolio, 3));
            }
        }

        window.addEventListener('resize', resize);

        return () => window.removeEventListener('resize', resize);
    }, [])

    return (
        <div className={style.slider}>
            <Slider
                beforeChange={beforeChangeHandler}
                {...settings}
                ref={sliderRef}
            >
                {slides.map((slide: StaticImageData[], i: number) => (
                    <React.Fragment key={i}>
                        <div className={style.slide}>
                        {slide.map((src: StaticImageData, k: number) => (
                            <Image src={src} alt={"img"} key={k} />
                        ))
                        }
                        </div>
                    </React.Fragment>
                ))
                }
            </Slider>
            <div className={style.dots}>
                {slides.map((sl: StaticImageData[], i: number) => (
                    <div key={i} className={activeSlide === i ? style.active : ""} onClick={() => handleSliderButtonClick(i)}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="6" fill="#6B6B6B"/>
                        </svg>
                    </div>
                ))
                }
            </div>
            <div className={style.pcDots}>
                {slides.map((sl: StaticImageData[], i: number) => (
                    <div key={i} className={style.dot + " " + (activeSlide === i ? style.active : "")} onClick={() => handleSliderButtonClick(i)}/>
                ))
                }
            </div>
        </div>
    )
}

function chunkArrayInGroups<T>(arr: T[], size: number): T[][] {
    let result: T[][] = [];
    for (let i=0; i<arr.length; i+=size)
        result.push(arr.slice(i, i+size));
    return result;
}
