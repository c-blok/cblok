import React from 'react'
import {Helmet} from "react-helmet"
import { Header } from "../components"


function ForFlatPage () {

    return (
        <div>
            <Helmet>
                <title>Для вашей квартиры | C-BLOCK</title>
            </Helmet>
            <Header activeIndex={3}/>
        </div>
    )
}

export default ForFlatPage;
