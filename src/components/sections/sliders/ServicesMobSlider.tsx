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
            sliderRef.current.slickGoTo(activeSlide + index);
    };

    return (
        <div className={style.slider}>
            <div className={style.left} onClick={() => handleSliderButtonClick(-1)}>
                <ArrowIcon rotate={"90deg"} />
            </div>
            <div className={style.right} onClick={() => handleSliderButtonClick(1)}>
                <ArrowIcon rotate={"-90deg"} />
            </div>
            <Slider
                beforeChange={beforeChangeHandler}
                {...settings}
                ref={sliderRef}
            >
                <Service title={t("construction.title")} text={t("construction.text")} image={thirdService}/>
                <Service title={t("repair.title")} text={t("repair.text")} image={firstService}/>
                <Service title={t("other.title")} text={t("other.text")} image={secondService}/>
            </Slider>
        </div>
    )
}
