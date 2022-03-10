import React from 'react'
import {Helmet} from "react-helmet"
import { useSelector } from "react-redux"
import { Header, Footer, Disclaimer } from "../components"

import testImg from "../assets/images/company.jpeg";


function ProjectsPage () {

    const language = useSelector(({ language }) => language.language)

    return (
        <div>
            <Helmet>
                <title>{text.title[language]}</title>
            </Helmet>
            <Header activeIndex={4}/>
            <div className="main_wrapper">
                <Disclaimer/>
                <section className="information column title marginTop10">
                    <h1>{text.object1[language]}</h1>
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
                    <h1>{text.object2[language]}</h1>
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
                    <h1>{text.object3[language]}</h1>
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

export default ProjectsPage;

const text = {
    title: {
        ru: "Проекты | C-BLOCK",
        lv: "Projekti | C-BLOCK"
    },
    object1: {
        ru: "Обьект 1",
        lv: "1. Objekts"
    },
    object2: {
        ru: "Обьект 2",
        lv: "2. Objekts"
    },
    object3: {
        ru: "Обьект 3",
        lv: "3. Objekts"
    }
}
