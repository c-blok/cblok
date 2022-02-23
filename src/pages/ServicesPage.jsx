import React from 'react'
import {Helmet} from "react-helmet"
import { useSelector } from "react-redux"
import { Header } from "../components"


function ServicesPage () {

    const language = useSelector(({ language }) => language.language)

    return (
        <div>
            <Helmet>
                <title>{text.title[language]}</title>
            </Helmet>
            <Header activeIndex={1}/>
        </div>
    )
}

export default ServicesPage;

const text = {
    title: {
        ru: "Услуги | C-BLOCK",
        lv: "Pakalpojumi | C-BLOCK"
    }
}
