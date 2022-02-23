import React from 'react'
import {Helmet} from "react-helmet"
import { Header } from "../components"


function HomePage () {

    return (
        <div>
            <Helmet>
                <title>Главная | C-BLOCK</title>
            </Helmet>
            <Header activeIndex={0}/>
        </div>
    )
}

export default HomePage;
