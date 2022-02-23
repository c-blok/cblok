import React from 'react'
import {Helmet} from "react-helmet"
import { Header } from "../components"


function ContactsPage () {

    return (
        <div>
            <Helmet>
                <title>Контакты | C-BLOCK</title>
            </Helmet>
            <Header activeIndex={5}/>
        </div>
    )
}

export default ContactsPage;
