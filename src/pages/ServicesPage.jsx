import React from 'react'
import {Helmet} from "react-helmet"
import { useSelector } from "react-redux"
import { Header, Footer, Disclaimer } from "../components"

import repair1 from "../assets/images/services/repair/b27da226-1ec9-4bce-900c-e49b81e91b77.jpg"
import repair2 from "../assets/images/services/repair/d9697c02-6f69-4c3e-a19f-a49169ccc48e.jpg"

import construction1 from "../assets/images/services/construction/a07a6a3b-7ba8-409a-b146-1271828de9e5.jpg"
import construction2 from "../assets/images/services/construction/e581e60b-3ea6-40ec-bee6-9cc094355870.jpg"

import dismantling1 from "../assets/images/services/dismantling/3e42a077-a84e-4796-8e43-25bab4e16ca3.jpg"
import dismantling2 from "../assets/images/services/dismantling/e52f747f-05ac-4218-9a9e-30598d7ba0ac.jpg"


function ServicesPage () {

    const language = useSelector(({ language }) => language.language)

    return (
        <div>
            <Helmet>
                <title>{text.title[language]}</title>
            </Helmet>
            <Header activeIndex={1}/>
            <div className="main_wrapper">
                <Disclaimer/>
                <section className="information column title marginTop10">
                    <h1>{text.repair[language]}</h1>
                    <div className="photos">
                        <div className="photo">
                            <img src={repair1} alt="error"/>
                        </div>
                        <div className="photo">
                            <img src={repair2} alt="error"/>
                        </div>
                    </div>
                </section>
                <section className="information column title">
                    <h1>{text.construction[language]}</h1>
                    <div className="photos">
                        <div className="photo">
                            <img src={construction1} alt="error"/>
                        </div>
                        <div className="photo">
                            <img src={construction2} alt="error"/>
                        </div>
                    </div>
                </section>
                <section className="information column title">
                    <h1>{text.dismantling[language]}</h1>
                    <div className="photos">
                        <div className="photo">
                            <img src={dismantling1} alt="error"/>
                        </div>
                        <div className="photo">
                            <img src={dismantling2} alt="error"/>
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
