import React from 'react'
import {Helmet} from "react-helmet"
import { useSelector } from "react-redux"
import { Header } from "../components"


function HomePage () {

    const language = useSelector(({ language }) => language.language)

    return (
        <div>
            <Helmet>
                <title>{text.title[language]}</title>
            </Helmet>
            <Header activeIndex={0}/>
        </div>
    )
}

export default HomePage;

const text = {
    title: {
        ru: "Главная | C-BLOCK",
        lv: "Sākums | C-BLOCK"
    }
}
