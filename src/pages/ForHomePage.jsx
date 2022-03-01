import React from 'react'
import {Helmet} from "react-helmet"
import { useSelector } from "react-redux"
import { Footer, Header } from "../components"

import testImg from "../assets/images/team.jpg";


function ForHomePage () {

    const language = useSelector(({ language }) => language.language)

    return (
        <div>
            <Helmet>
                <title>{text.title[language]}</title>
            </Helmet>
            <Header activeIndex={2}/>
            <div className="main_wrapper">
                <section className="information column title">
                    <h1>{text.roofing[language]}</h1>
                    <div className="photos">
                        <div className="photo">
                            <img src={testImg} alt="error"/>
                        </div>
                        <div className="photo">
                            <img src={testImg} alt="error"/>
                        </div>
                        <div className="photo">
                            <img src={testImg} alt="error"/>
                        </div>
                        <div className="photo">
                            <img src={testImg} alt="error"/>
                        </div>
                        <div className="photo">
                            <img src={testImg} alt="error"/>
                        </div>
                        <div className="photo">
                            <img src={testImg} alt="error"/>
                        </div>
                        <div className="photo">
                            <img src={testImg} alt="error"/>
                        </div>
                    </div>
                </section>
                <section className="information column title">
                    <h1>{text.facade[language]}</h1>
                    <div className="photos">
                        <div className="photo">
                            <img src={testImg} alt="error"/>
                        </div>
                        <div className="photo">
                            <img src={testImg} alt="error"/>
                        </div>
                        <div className="photo">
                            <img src={testImg} alt="error"/>
                        </div>
                        <div className="photo">
                            <img src={testImg} alt="error"/>
                        </div>
                    </div>
                </section>
                <section className="information column title">
                    <h1>{text.windows[language]}</h1>
                    <div className="photos">
                        <div className="photo">
                            <img src={testImg} alt="error"/>
                        </div>
                        <div className="photo">
                            <img src={testImg} alt="error"/>
                        </div>
                        <div className="photo">
                            <img src={testImg} alt="error"/>
                        </div>
                        <div className="photo">
                            <img src={testImg} alt="error"/>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    )
}

export default ForHomePage;

const text = {
    title: {
        ru: "Для вашего дома | C-BLOCK",
        lv: "Jūsu mājām | C-BLOCK"
    },
    roofing: {
        ru: "Кровельные работы",
        lv: "Jumta darbi"
    },
    facade: {
        ru: "Фасадные работы",
        lv: "Fasādes darbi"
    },
    windows: {
        ru: "Окна",
        lv: "Logi"
    }
}
