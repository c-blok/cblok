import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/svg/logo.svg"
import phone from "../assets/images/phone.png"

export const Header = ({ activeIndex }) => {

    const [activeItem, setActiveItem] = useState(activeIndex);

    const onSelectedItem = (index) => {
        setActiveItem(index);
    }

    return (
        <header>
            <div className="header_wrapper">
                <div className="info">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} width="150" height="150" alt="error"/>
                        </Link>
                        <div className="name">
                            <h1>СТРОИТЕЛЬНЫЙ БЛОК</h1>
                            <p>СТРОИТЕЛЬНЫЕ И РЕМОНТНЫЕ РАБОТЫ</p>
                        </div>
                    </div>
                    <div className="info_block">
                        <div className="contacts">
                            <div className="telephone">
                                <p>Наш телефон:</p>
                                <a href="tel:25644344">+371 25644344</a>
                            </div>
                            <div className="email">
                                <p>Наша почта:</p>
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
                            <Link to="/">Главная</Link>
                        </li>
                        <li className={activeItem === 1 ? 'active' : ''} onClick={() => onSelectedItem(1)}>
                            <Link to="/services">Услуги</Link>
                        </li>
                        <li className={activeItem === 2 ? 'active' : ''} onClick={() => onSelectedItem(2)}>
                            <Link to="/forhome">Для вашего дома</Link>
                        </li>
                        <li className={activeItem === 3 ? 'active' : ''} onClick={() => onSelectedItem(3)}>
                            <Link to="/forflat">Для вашей квартиры</Link>
                        </li>
                        <li className={activeItem === 4 ? 'active' : ''} onClick={() => onSelectedItem(4)}>
                            <Link to="/projects">Проекты</Link>
                        </li>
                        <li className={activeItem === 5 ? 'active' : ''} onClick={() => onSelectedItem(5)}>
                            <Link to="/contacts">Контакты</Link>
                        </li>
                        <div className="language">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30">
                                <path fill="#9E3039" d="m0,0h40v10H0"/>
                                <path fill="#FFF" d="m0,10h40v10H0"/>
                                <path fill="#9E3039" d="m0,20h40v10H0"/>
                            </svg>
                        </div>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;
