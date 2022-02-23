import React from 'react'
import {Helmet} from "react-helmet"
import { useSelector } from "react-redux"
import { Header } from "../components"


function ForFlatPage () {

    const language = useSelector(({ language }) => language.language)

    return (
        <div>
            <Helmet>
                <title>{text.title[language]}</title>
            </Helmet>
            <Header activeIndex={3}/>
        </div>
    )
}

export default ForFlatPage;

const text = {
    title: {
        ru: "Для вашей квартиры | C-BLOCK",
        lv: "Jūsu dzīvoklim | C-BLOCK"
    }
}
