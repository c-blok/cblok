'use client';

import style from '../sections.module.scss';
import { useTranslations } from "next-intl";
import Slider from "react-slick";
import img2 from "../../../assets/images/services/nojaukDarbi.png";
import img3 from "../../../assets/images/services/remontDarbi.png";
import { ArrowIcon } from "../../../assets/icons/ArrowIcon";
import { useRef, useState } from "react";
import { PortfolioSlide } from "./PortfolioSlide";


const settings = {
    infinite: true,
    autoPlay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
};

export const PortfolioSlider = () => {

    const t = useTranslations('portfolio');

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
                <PortfolioSlide src={img2} title={"HARMONISKI APARTAMENTI RĪGĀ"} text={"Carlson Design Home studijai tika veikts pasūtījums interjera dizaina projekta izstrādei dzīvoklim, kas atrodas vienā no Mežaparka namiem ar lielisku skatu uz Ķīšezeru. Apartamenti tika veidoti atbilstoši klienta vēlmēm, nosvērtajam raksturam, bet pretstatā dinamiskajam dzīvesveidam, tā lai telpa būtu haramoniska un sniegtu, gan estētisku, gan tektonisku gandarījumu.<br/><br/>Studija: C-Blok<br/><br/>Interjera arhitekti: Ēriks Karlsons, Zanda Dzuranoviča<br/><br/>Sintezējot profesionālu plānojumu ar kvalitatīvu aprīkojumu un detalizētiem interjera mezgliem, izveidojām atvērtu, gaišu, tomēr intīmu, pilsētas rezidenci- vietu, kurā nav lieku elementu un pārspīlētu kontrastu. Šāda vide ir ideāls fons meditatīvai atpūtai, kā arī nosvērtam darbam.<br/><br/>Platība: 140 m²"} />
                <PortfolioSlide src={img2} title={"HARMONISKI APARTAMENTI RĪGĀ"} text={"Carlson Design Home studijai tika veikts pasūtījums interjera dizaina projekta izstrādei dzīvoklim, kas atrodas vienā no Mežaparka namiem ar lielisku skatu uz Ķīšezeru. Apartamenti tika veidoti atbilstoši klienta vēlmēm, nosvērtajam raksturam, bet pretstatā dinamiskajam dzīvesveidam, tā lai telpa būtu haramoniska un sniegtu, gan estētisku, gan tektonisku gandarījumu.<br/><br/>Studija: C-Blok<br/><br/>Interjera arhitekti: Ēriks Karlsons, Zanda Dzuranoviča<br/><br/>Sintezējot profesionālu plānojumu ar kvalitatīvu aprīkojumu un detalizētiem interjera mezgliem, izveidojām atvērtu, gaišu, tomēr intīmu, pilsētas rezidenci- vietu, kurā nav lieku elementu un pārspīlētu kontrastu. Šāda vide ir ideāls fons meditatīvai atpūtai, kā arī nosvērtam darbam.<br/><br/>Platība: 140 m²"} />
                <PortfolioSlide src={img3} title={"HARMONISKI APARTAMENTI RĪGĀ"} text={"Carlson Design Home studijai tika veikts pasūtījums interjera dizaina projekta izstrādei dzīvoklim, kas atrodas vienā no Mežaparka namiem ar lielisku skatu uz Ķīšezeru. Apartamenti tika veidoti atbilstoši klienta vēlmēm, nosvērtajam raksturam, bet pretstatā dinamiskajam dzīvesveidam, tā lai telpa būtu haramoniska un sniegtu, gan estētisku, gan tektonisku gandarījumu.<br/><br/>Studija: C-Blok<br/><br/>Interjera arhitekti: Ēriks Karlsons, Zanda Dzuranoviča<br/><br/>Sintezējot profesionālu plānojumu ar kvalitatīvu aprīkojumu un detalizētiem interjera mezgliem, izveidojām atvērtu, gaišu, tomēr intīmu, pilsētas rezidenci- vietu, kurā nav lieku elementu un pārspīlētu kontrastu. Šāda vide ir ideāls fons meditatīvai atpūtai, kā arī nosvērtam darbam.<br/><br/>Platība: 140 m²"} />
            </Slider>
        </div>
    )
}
