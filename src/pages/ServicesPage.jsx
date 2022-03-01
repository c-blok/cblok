import React from 'react'
import {Helmet} from "react-helmet"
import { useSelector } from "react-redux"
import { Header, Footer } from "../components"

import testImg from "../assets/images/team.jpg"

function ServicesPage () {

    const language = useSelector(({ language }) => language.language)

    return (
        <div>
            <Helmet>
                <title>{text.title[language]}</title>
            </Helmet>
            <Header activeIndex={1}/>
            <div className="main_wrapper">
                <section className="information column title">
                    <h1>{text.repair[language]}</h1>
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
                    <h1>{text.construction[language]}</h1>
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
                    <h1>{text.dismantling[language]}</h1>
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

export default ServicesPage;

const text = {
    title: {
        ru: "Услуги | C-BLOCK",
        lv: "Pakalpojumi | C-BLOCK"
    },
    repair: {
        ru: "Ремонтные работы",
        lv: "Remontdarbi"
    },
    construction: {
        ru: "Строительные работы",
        lv: "Būvdarbi"
    },
    dismantling: {
        ru: "Демонтажные работы",
        lv: "Demontāžas darbi"
    }
}
