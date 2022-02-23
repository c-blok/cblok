import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setLanguage } from '../redux/actions/language';

import logo from "../assets/svg/logo.svg"
import phone from "../assets/images/phone.png"
//TODO сделать нормальнные ссылки в навигации
export const Header = ({ activeIndex }) => {

    const dispatch = useDispatch()
    const language = useSelector(({ language }) => language.language)

    const [activeItem, setActiveItem] = useState(activeIndex)

    const onSelectedItem = (index) => {
        setActiveItem(index);
    }

    const changeLanguage = (language) => {
        dispatch(setLanguage(language))
    }

    useEffect(() => {
        console.log(language)
    })

    return (
        <header>
            <div className="header_wrapper">
                <div className="info">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} width="150" height="150" alt="error"/>
                        </Link>
                        <div className="name">
                            <h1>{text.logoH1[language]}</h1>
                            <p>{text.logoP[language]}</p>
                        </div>
                    </div>
                    <div className="info_block">
                        <div className="contacts">
                            <div className="telephone">
                                <p>{text.telephone[language]}</p>
                                <a href="tel:25644344">+371 25644344</a>
                            </div>
                            <div className="email">
                                <p>{text.email[language]}</p>
                                <a href="mailto:cblok@inbox.lv">cblok@inbox.lv</a>
                            </div>
                        </div>
                        <img src={phone} alt="error"/>
                    </div>
                    <div className="burger">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="nav">
                    <ul>
                        <li className={activeItem === 0 ? 'active' : ''} onClick={() => onSelectedItem(0)}>
                            <Link to="/">{text.home[language]}</Link>
                        </li>
                        <li className={activeItem === 1 ? 'active' : ''} onClick={() => onSelectedItem(1)}>
                            <Link to="/services">{text.services[language]}</Link>
                        </li>
                        <li className={activeItem === 2 ? 'active' : ''} onClick={() => onSelectedItem(2)}>
                            <Link to="/forhome">{text.forHome[language]}</Link>
                        </li>
                        <li className={activeItem === 3 ? 'active' : ''} onClick={() => onSelectedItem(3)}>
                            <Link to="/forflat">{text.forFlat[language]}</Link>
                        </li>
                        <li className={activeItem === 4 ? 'active' : ''} onClick={() => onSelectedItem(4)}>
                            <Link to="/projects">{text.projects[language]}</Link>
                        </li>
                        <li className={activeItem === 5 ? 'active' : ''} onClick={() => onSelectedItem(5)}>
                            <Link to="/contacts">{text.contacts[language]}</Link>
                        </li>
                        <div className="language">
                            {language === "ru" ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" onClick={() => changeLanguage("lv")}>
                                    <path fill="#9E3039" d="m0,0h40v10H0"/>
                                    <path fill="#FFF" d="m0,10h40v10H0"/>
                                    <path fill="#9E3039" d="m0,20h40v10H0"/>
                                </svg>
                             :
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" onClick={() => changeLanguage("ru")}>
                                    <path fill="#FFFFFF" d="m0,0h40v10H0"/>
                                    <path fill="#018DE9" d="m0,10h40v10H0"/>
                                    <path fill="#DB0D20" d="m0,20h40v10H0"/>
                                </svg>
                            }
                        </div>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;


const text = {
    logoH1: {
        ru: "СТРОИТЕЛЬНЫЙ БЛОК",
        lv: "BŪVBLOKS"
    },
    logoP: {
        ru: "СТРОИТЕЛЬНЫЕ И РЕМОНТНЫЕ РАБОТЫ",
        lv: "BŪVDARBI UN REMONTDARBI"
    },
    telephone: {
        ru: "Наш телефон:",
        lv: "Mūsu tālrunis:"
    },
    email: {
        ru: "Наша почта:",
        lv: "Mūsu epasts:"
    },
    home: {
        ru: "Главная",
        lv: "Sākums"
    },
    services: {
        ru: "Услуги",
        lv: "Pakalpojumi"
    },
    forHome: {
        ru: "Для вашего дома",
        lv: "Jūsu mājām"
    },
    forFlat: {
        ru: "Для вашей квартиры",
        lv: "Jūsu dzīvoklim"
    },
    projects: {
        ru: "Проекты",
        lv: "Projekti"
    },
    contacts: {
        ru: "Контакты",
        lv: "Kontakti"
    }
}
