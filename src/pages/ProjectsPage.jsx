import React from 'react'
import {Helmet} from "react-helmet"
import { Header } from "../components"


function ProjectsPage () {

    return (
        <div>
            <Helmet>
                <title>Проекты | C-BLOCK</title>
            </Helmet>
            <Header activeIndex={4}/>
        </div>
    )
}

export default ProjectsPage;
