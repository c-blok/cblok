import React from 'react'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

import logoWhite from "../assets/svg/logoWhite.svg"
import dilluso from "../assets/svg/dilluso.svg"
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
                        <p>{text.partnerP[language]}</p>
                        <Link to="dilluso.lv">www.dilluso.lv</Link>
                    </div>
                    <div className="partnerLogo">
                        <img src={dilluso} alt="error"/>
                    </div>
                </div>
                <div className="links">
                    <Link to="">
                        <img src={inst} alt="error"/>
                    </Link>
                    <Link to="">
                        <img src={fb} alt="error"/>
                    </Link>
                    <Link to="">
                        <img src={tt} alt="error"/>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;


const text = {
    partnerH1: {
        ru: "Наш партнёр:",
        lv: "Mūsu partneris:"
    },
    partnerP: {
        ru: "Изготовление корпусной мебели по индивидуальному заказу",
        lv: "Korpusa mēbeļu izgatavošana pēc individuāla pasūtījuma"
    }
}
