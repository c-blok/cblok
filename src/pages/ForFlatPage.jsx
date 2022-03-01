import React from 'react'
import {Helmet} from "react-helmet"
import { useSelector } from "react-redux"
import { Header, Footer } from "../components"

import testImg from "../assets/images/team.jpg";


function ForFlatPage () {

    const language = useSelector(({ language }) => language.language)

    return (
        <div>
            <Helmet>
                <title>{text.title[language]}</title>
            </Helmet>
            <Header activeIndex={3}/>
            <div className="main_wrapper">
                <section className="information column title">
                    <h1>{text.windowBlind[language]}</h1>
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
            </div>
            <Footer/>
        </div>
    )
}

export default ForFlatPage;

const text = {
    title: {
        ru: "Для вашей квартиры | C-BLOCK",
        lv: "Jūsu dzīvoklim | C-BLOCK"
    },
    windowBlind: {
        ru: "Жалюзи",
        lv: "Žalūzijas"
    }
}
