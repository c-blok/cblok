import React from 'react'
import {Helmet} from "react-helmet"
import { useSelector } from "react-redux"
import { Header, Footer } from "../components"


function ContactsPage () {

    const language = useSelector(({ language }) => language.language)

    return (
        <div>
            <Helmet>
                <title>{text.title[language]}</title>
            </Helmet>
            <Header activeIndex={5}/>
            <Footer/>
        </div>
    )
}

export default ContactsPage;

const text = {
    title: {
        ru: "Контакты | C-BLOCK",
        lv: "Kontakti | C-BLOCK"
    }
}
