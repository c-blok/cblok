import React from 'react'
import { Helmet } from "react-helmet"
import { useSelector } from "react-redux"

import logo from "../assets/svg/logo.svg"

function NotWorkingPage () {

    const language = useSelector(({ language }) => language.language)

    return (
        <div>
            <Helmet>
                <title>{text.title[language]}</title>
            </Helmet>
            <div className="error">
                <img src={logo} alt="error"/>
                <h1>{text.h1[language]}</h1>
            </div>
        </div>
    )
}

export default NotWorkingPage;

const text = {
    title: {
        ru: "Временно недоступен | C-BLOCK",
        lv: "Īslaicīgi nav pieejams | C-BLOCK"
    },
    h1: {
        ru: "Временно недоступен",
        lv: "Īslaicīgi nav pieejams"
    }
}
