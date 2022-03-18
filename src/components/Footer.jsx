import React from 'react'
import { useSelector } from "react-redux"

import logoWhite from "../assets/svg/logoWhite.svg"
import dilluso from "../assets/svg/dilluso.svg"
import vzjumti from "../assets/svg/vzjumtiLogo.svg"
import fb from "../assets/images/fb.png"
import inst from "../assets/images/inst.png"
import tt from "../assets/images/tiktok.png"


export const Footer = () => {

    const language = useSelector(({ language }) => language.language)

    return (
        <footer>
            <div className="footer_wrapper">
                <div className="foot_logo">
                    <img src={logoWhite} width="150" height="150" alt="error"/>
                </div>
                <div className="partner">
                    <div className="text">
                        <h1>{text.partnerH1[language]}</h1>
                        <p className="marginBot5">{text.partnerP[language]}</p>
                        <a href="https://www.dilluso.lv" target="_blank" rel="noreferrer">www.dilluso.lv</a>
                        <p className="marginTop10 marginBot5">{text.partner2P[language]}</p>
                        <a href="https://www.vzjumti.lv" target="_blank" rel="noreferrer">www.vzjumti.lv</a>
                    </div>
                    <div className="partnerLogo">
                        <img src={dilluso} alt="error"/>
                        <img src={vzjumti} alt="error"/>
                    </div>
                </div>
                <div className="links">
                    <a href="https://www.instagram.com/cblok.lv/" target="_blank" rel="noreferrer">
                        <img src={inst} alt="error"/>
                    </a>
                    <a href="https://www.facebook.com/cblok.lv" target="_blank" rel="noreferrer">
                        <img src={fb} alt="error"/>
                    </a>
                    <a href="https://www.tiktok.com/@cblok.lv" target="_blank" rel="noreferrer">
                        <img src={tt} alt="error"/>
                    </a>
                </div>
                <div className="partner_mob">
                    <h1>{text.partnerH1[language]}</h1>
                    <p>{text.partnerP[language]}</p>
                    <a href="https://www.dilluso.lv" target="_blank" rel="noreferrer">www.dilluso.lv</a>
                    <div className="partnerLogo marginBot20">
                        <img src={dilluso} className="marginTop10" alt="error"/>
                    </div>
                    <p className="marginTop10 marginBot5">{text.partner2P[language]}</p>
                    <a href="https://www.vzjumti.lv" target="_blank" rel="noreferrer">www.vzjumti.lv</a>
                    <div className="partnerLogo">
                        <img src={vzjumti} className="marginTop10" alt="error"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;


const text = {
    partnerH1: {
        ru: "Наши партнёры:",
        lv: "Mūsu partneri:"
    },
    partnerP: {
        ru: "Изготовление корпусной мебели по индивидуальному заказу",
        lv: "Korpusa mēbeļu izgatavošana pēc individuāla pasūtījuma"
    },
    partner2P: {
        ru: "Кровельные работы",
        lv: "Jumta darbi"
    }
}
