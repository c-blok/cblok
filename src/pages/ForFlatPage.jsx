import React from 'react'
import {Helmet} from "react-helmet"
import { useSelector } from "react-redux"
import { Header, Footer, Disclaimer } from "../components"

import windowBlind1 from "../assets/images/forFlat/windowBlind/8cf27fee-0148-414b-8cc4-60a49abff50a.jpg"
import windowBlind2 from "../assets/images/forFlat/windowBlind/367bb5bb-480d-4a25-b251-7e7857e54d55.jpg"

import interiorDoors1 from "../assets/images/forFlat/interiorDoors/3f9d0fb6-ef25-456c-b056-4a032cf55b48.jpg"
import interiorDoors2 from "../assets/images/forFlat/interiorDoors/a5282474-15db-42e7-88e7-b0302375e332.jpg"

import internalStairs1 from "../assets/images/forFlat/internalStairs/9f3b2266-8f66-4925-92ad-e332737024b5.jpg"
import internalStairs2 from "../assets/images/forFlat/internalStairs/c51d91f5-0562-497f-9546-57f9d4cbcc10.jpg"


function ForFlatPage () {

    const language = useSelector(({ language }) => language.language)

    return (
        <div>
            <Helmet>
                <title>{text.title[language]}</title>
            </Helmet>
            <Header activeIndex={3}/>
            <div className="main_wrapper">
                <Disclaimer/>
                <section className="information column title marginTop10">
                    <h1>{text.windowBlind[language]}</h1>
                    <div className="photos">
                        <div className="photo">
                            <img src={windowBlind1} alt="error"/>
                        </div>
                        <div className="photo">
                            <img src={windowBlind2} alt="error"/>
                        </div>
                    </div>
                </section>
                <section className="information column title">
                    <h1>{text.interiorDoors[language]}</h1>
                    <div className="photos">
                        <div className="photo">
                            <img src={interiorDoors1} alt="error"/>
                        </div>
                        <div className="photo">
                            <img src={interiorDoors2} alt="error"/>
                        </div>
                    </div>
                </section>
                <section className="information column title">
                    <h1>{text.internalStairs[language]}</h1>
                    <div className="photos">
                        <div className="photo">
                            <img src={internalStairs1} alt="error"/>
                        </div>
                        <div className="photo">
                            <img src={internalStairs2} alt="error"/>
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
    },
    interiorDoors: {
        ru: "Межкомнатные двери",
        lv: "Starpistabu durvis"
    },
    internalStairs: {
        ru: "Внутренние лестницы",
        lv: "Iekšējās kāpnes"
    }
}
