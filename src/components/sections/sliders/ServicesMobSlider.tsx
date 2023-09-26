'use client';

import style from '../sections.module.scss';
import Slider from "react-slick";
import { ArrowIcon } from "../../../assets/icons/ArrowIcon";
import { useRef, useState } from "react";
import { Service } from "../services/Service";
import firstService from "../../../assets/images/services/remontDarbi.png";
import secondService from "../../../assets/images/services/nojaukDarbi.png";
import thirdService from "../../../assets/images/services/celtDarbi.png";
import { useTranslations } from "next-intl";

const settings = {
    infinite: true,
    autoPlay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
};

export const ServicesMobSlider = () => {

    const t = useTranslations('services');

    const sliderRef = useRef<Slider>(null);
    const [activeSlide, setActiveSlide] = useState<number>(0);

    const beforeChangeHandler = (cur: number, next: number) => {
        setActiveSlide(next);
    };

    const handleSliderButtonClick = (index: number) => {
        if (sliderRef.current)
            sliderRef.current.slickGoTo(index);
    };

    return (
        <div className={style.slider}>
            <Slider
                beforeChange={beforeChangeHandler}
                {...settings}
                ref={sliderRef}
            >
                <Service title={t("construction.title")} text={t("construction.text")} image={firstService}/>
                <Service title={t("repair.title")} text={t("repair.text")} image={secondService}/>
                <Service title={t("other.title")} text={t("other.text")} image={thirdService}/>
            </Slider>
            <div className={style.dots}>
                <div className={activeSlide === 0 ? style.active : ""} onClick={() => handleSliderButtonClick(0)}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6" cy="6" r="6" fill="#6B6B6B"/>
                    </svg>
                </div>
                <div className={activeSlide === 1 ? style.active : ""} onClick={() => handleSliderButtonClick(1)}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6" cy="6" r="6" fill="#6B6B6B"/>
                    </svg>
                </div>
                <div className={activeSlide === 2 ? style.active : ""} onClick={() => handleSliderButtonClick(2)}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6" cy="6" r="6" fill="#6B6B6B"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}
