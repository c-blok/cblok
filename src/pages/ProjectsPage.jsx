import React from 'react'
import {Helmet} from "react-helmet"
import { useSelector } from "react-redux"
import { Header } from "../components"


function ProjectsPage () {

    const language = useSelector(({ language }) => language.language)

    return (
        <div>
            <Helmet>
                <title>{text.title[language]}</title>
            </Helmet>
            <Header activeIndex={4}/>
        </div>
    )
}

export default ProjectsPage;

const text = {
    title: {
        ru: "Проекты | C-BLOCK",
        lv: "Projekti | C-BLOCK"
    }
}
