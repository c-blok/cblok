import React from 'react'
import {Helmet} from "react-helmet"
import { Header } from "../components"


function ForHomePage () {

    return (
        <div>
            <Helmet>
                <title>Для вашего дома | C-BLOCK</title>
            </Helmet>
            <Header activeIndex={2}/>
        </div>
    )
}

export default ForHomePage;
