import React from 'react'
import { useSelector } from "react-redux"

export const Disclaimer = () => {

    const language = useSelector(({ language }) => language.language)

    return (
        <div className="disclaimer">
            <p>{text.disclaimer[language]}</p>
        </div>
    )
}

export default Disclaimer;


const text = {
    disclaimer: {
        ru: "На сайте размещены фотографии наших завершенных проектов",
        lv: "Mājas lapā ievietotas fotogrāfijas no mūsu pabeigtajiem projektiem"
    }
}
