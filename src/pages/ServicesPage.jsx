import React from 'react'
import {Helmet} from "react-helmet"
import { Header } from "../components"


function ServicesPage () {

    return (
        <div>
            <Helmet>
                <title>Услуги | C-BLOCK</title>
            </Helmet>
            <Header activeIndex={1}/>
        </div>
    )
}

export default ServicesPage;
