import React from 'react'
import {Helmet} from "react-helmet"
import { useSelector } from "react-redux"
import { Footer, Header } from "../components"


function ForHomePage () {

    const language = useSelector(({ language }) => language.language)

    return (
        <div>
            <Helmet>
                <title>{text.title[language]}</title>
            </Helmet>
            <Header activeIndex={2}/>
            <Footer/>
        </div>
    )
}

export default ForHomePage;

const text = {
    title: {
        ru: "Для вашего дома | C-BLOCK",
        lv: "Jūsu mājām | C-BLOCK"
    }
}
