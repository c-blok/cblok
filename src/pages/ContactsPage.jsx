import React, { useState, useRef } from 'react'
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { Header, Footer } from "../components"
import emailjs from "@emailjs/browser"

import inst from "../assets/images/inst.png";
import fb from "../assets/images/fb.png";
import tt from "../assets/images/tiktok.png";


const USER_ID = process.env["REACT_APP_EMAILJS_USERID"]             //userID
const TEMPLATE_ID = process.env["REACT_APP_EMAILJS_TEMPLATEID"]     //templateID

function ContactsPage () {

    const form = useRef();

    const language = useSelector(({ language }) => language.language)

    const [mapLoading, setMapLoading] = useState(true)
    const [mailLoading, setMailLoading] = useState(false)
    const [mailSendSuccess, setMailSendSuccess] = useState(false)
    const [mailSendError, setMailSendError] = useState(false)

    const [name, setName] = useState('')
    const [telephone, setTelephone] = useState('')
    const [email, setEmail] = useState('')
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')

    const onSubmit = (event) => {
        event.preventDefault()

        if (mailSendSuccess)
            return

        document.getElementById('submit_button').className = ''
        setMailSendSuccess(false)
        setMailSendError(false)
        setMailLoading(true)
        emailjs.send(`service_wyh5pj`, TEMPLATE_ID, {
            name, telephone, email, title, message
        }, USER_ID)
            .then(() => {
                    setMailSendSuccess(true)
                    setMailLoading(false)
                    document.getElementById('submit_button').classList.add('successButton')
                    document.getElementById('submit_button').classList.add('disabled')
                    Array.from(document.querySelectorAll("input")).forEach(
                        input => (input.value = "")
                    );
                    Array.from(document.querySelectorAll("textarea")).forEach(
                        textarea => (textarea.value = "")
                    );
                },
                () => {
                    setMailSendError(true)
                    setMailLoading(false)
                    document.getElementById('submit_button').classList.add('errorButton')
                });
    }

    return (
        <div>
            <Helmet>
                <title>{text.title[language]}</title>
            </Helmet>
            <Header activeIndex={5}/>
            <div className="main_wrapper">
                <section className="column title">
                    <h1>{text.contact[language]}</h1>
                    <div className="contact_">
                        <div className="contact_info">
                            <p className="urgent">
                                <a href="tel:+37125644344">+371 25644344</a>
                            </p>
                            <p className="urgent padBot15">
                                <a href="mailto:cblok@inbox.lv">cblok@inbox.lv</a>
                            </p>
                            <p>
                                {text.pvn[language]}
                            </p>
                            <p>
                                {text.legAddress[language]}
                            </p>
                            <p>
                                {text.realAddress[language]}
                            </p>
                        </div>
                        <div className="socials">
                            <div className="links">
                                <Link to="/">
                                    <img src={inst} alt="error"/>
                                </Link>
                                <Link to="/">
                                    <img src={fb} alt="error"/>
                                </Link>
                                <Link to="/">
                                    <img src={tt} alt="error"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    { mapLoading &&
                        <div className="loadingMap"/>
                    }
                    <iframe
                        onLoad={() => setMapLoading(false)}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1082.2883570110537!2d24.26678547660726!3d57.14429842225164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eeb79931b76395%3A0x82c9986cbdf5c2fe!2sGriezes%20iela%205%2C%20Carnikava%2C%20Carnikavas%20novads%2C%20LV-2163!5e0!3m2!1slv!2slv!4v1646157442096!5m2!1slv!2slv"
                        width="600"
                        height="450"
                        style={{ borderRadius: `10px`, width: `100%`, height: `400px`, marginBottom: `30px`, border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="map"
                    />
                </section>
                <section className="column title marginTop30">
                    <h1 className="center">{text.sendMessage[language]}</h1>
                    <form onSubmit={onSubmit} className="contact_form" ref={form}>
                        <div className="input">
                            <label htmlFor="name">{text.name[language]}</label>
                            <input type="text" id="name" autoComplete="off" onChange={e => setName(e.target.value)} required={true}/>
                        </div>
                        <div className="input">
                            <label htmlFor="tel">{text.tel[language]}</label>
                            <input type="tel" id="tel" autoComplete="off" onChange={e => setTelephone(e.target.value)} required={true}/>
                        </div>
                        <div className="input">
                            <label htmlFor="email">{text.email[language]}</label>
                            <input type="email" id="email" autoComplete="off" onChange={e => setEmail(e.target.value)} required={true}/>
                        </div>
                        <div className="input">
                            <label htmlFor="title">{text.subject[language]}</label>
                            <input type="text" id="title" autoComplete="off" onChange={e => setTitle(e.target.value)} required={true}/>
                        </div>
                        <div className="input fullLine bigArea">
                            <label htmlFor="text">{text.text[language]}</label>
                            <textarea id="text" autoComplete="off" onChange={e => setMessage(e.target.value)} required={true}/>
                        </div>
                        <div className="input fullLine">
                            <button id="submit_button">
                                {mailLoading ?
                                    <div className="loader"/>
                                :
                                    mailSendSuccess ?
                                        text.sendSuccess[language]
                                    :
                                        mailSendError ?
                                            text.sendError[language]
                                        :
                                            text.send[language]
                                }
                            </button>
                        </div>
                    </form>
                </section>
            </div>
            <Footer/>
        </div>
    )
}

export default ContactsPage;

const text = {
    title: {
        ru: "Контакты | C-BLOCK",
        lv: "Kontakti | C-BLOCK"
    },
    contact: {
        ru: "Связаться",
        lv: "Sazināties"
    },
    pvn: {
        ru: "Номер плательщика НДС: LV40103858458",
        lv: "PVN Reģ.nr: LV40103858458"
    },
    legAddress: {
        ru: "Юридический адрес: Ganību dambis 22d, Rīga, LV-1045",
        lv: "Juridiskā adrese: Ganību dambis 22d, Rīga, Latvija, LV-1045"
    },
    realAddress: {
        ru: "Фактический адрес: Ganību dambis 22d, Rīga, LV-1045",
        lv: "Faktiskā adrese: Ganību dambis 22d, Rīga, Latvija, LV-1045"
    },
    sendMessage: {
        ru: "Послать сообщение",
        lv: "Nosūtīt ziņu"
    },
    name: {
        ru: "Имя",
        lv: "Vārds"
    },
    tel: {
        ru: "Телефон",
        lv: "Telefons"
    },
    email: {
        ru: "Электронная почта",
        lv: "E-pasts"
    },
    subject: {
        ru: "Тема",
        lv: "Temats"
    },
    text: {
        ru: "Сообщение",
        lv: "Ziņa"
    },
    send: {
        ru: "ОТПРАВИТЬ",
        lv: "SŪTĪT"
    },
    sendSuccess: {
        ru: "ОТПРАВЛЕННО",
        lv: "NOSŪTĪTS"
    },
    sendError: {
        ru: "ОШИБКА",
        lv: "KĻŪDA"
    }
}
