import React, { useState, useRef } from 'react'
import { Helmet } from "react-helmet"
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
        emailjs.send(`service_ucwuxph`, TEMPLATE_ID, {
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
                    <h1 className="center">{text.contact[language]}</h1>
                    <div className="contact_">
                        <div className="contact_info">
                            <p className="urgent padBot15">
                                SIA “C-BLOK”
                            </p>
                            <div className="mob_contact_info padBot15">
                                <p className="urgent">
                                    <a href="tel:+37125644344">+371 25644344</a>
                                </p>
                                <p className="urgent">
                                    <a href="mailto:cblok@inbox.lv">cblok@inbox.lv</a>
                                </p>
                            </div>
                            <p>
                                {text.pvn[language]}
                            </p>
                            <p>
                                {text.legAddress[language]}
                            </p>
                            <p>
                                {text.bank[language]}
                            </p>
                            <p>
                                {text.bankAddr[language]}
                            </p>
                        </div>
                        <div className="socials">
                            <div className="links">
                                <a href="https://www.instagram.com/cblok.lv/" target="_blank" rel="noreferrer">
                                    <img src={inst} alt="error"/>
                                </a>
                                <a href="https://www.facebook.com/cblok.lv" target="_blank" rel="noreferrer">
                                    <img src={fb} alt="error"/>
                                </a>
                                <a href="https://www.tiktok.com/@cblok.lv" target="_blank" rel="noreferrer">
                                    <img src={tt} alt="error"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    { mapLoading &&
                        <div className="loadingMap"/>
                    }
                    <iframe
                        onLoad={() => setMapLoading(false)}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.65579001957!2d24.06199081633209!3d56.95469838089185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecffd3bae190f%3A0xd648f49bd5c6e774!2sSlokas%20iela%2052%2C%20Kurzemes%20rajons%2C%20R%C4%ABga%2C%20LV-1007!5e0!3m2!1slv!2slv!4v1646861501542!5m2!1slv!2slv"
                        width="600"
                        height="450"
                        style={{ borderRadius: `10px`, width: `100%`, height: `400px`, marginBottom: `30px`, border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="map"
                    />
                </section>
                <section className="column title marginTop10">
                    <h1 className="center">{text.sendMessage[language]}</h1>
                    <p className="padBot15 center">{text.dearGuest[language]}</p>
                    <p className="padBot30 center">{text.contactUs[language]}</p>
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
        ru: "СВЯЗАТЬСЯ С НАМИ",
        lv: "SAZINĀTIES AR MUMS"
    },
    pvn: {
        ru: "LV40203207255",
        lv: "LV40203207255"
    },
    legAddress: {
        ru: "Slokas iela 52, Rīgā, LV - 1007",
        lv: "Slokas iela 52, Rīgā, LV - 1007"
    },
    bank: {
        ru: "A/S Swedbank: HABALV22",
        lv: "A/S Swedbank: HABALV22"
    },
    bankAddr: {
        ru: "LV17HABA0551046589005",
        lv: "LV17HABA0551046589005"
    },
    sendMessage: {
        ru: "Вызвать специалиста и получить консультацию",
        lv: "Izsaukt speciālistu un saņemt konsultāciju"
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
    },
    dearGuest: {
        ru: "Уважаемый гость!",
        lv: "Cienījamais viesis!"
    },
    contactUs: {
        ru: "Пожалуйста заполните контактную форму ниже, и Наш специалист свяжется с Вами, чтобы назначить визит в удобное для Вас время.",
        lv: "Lūdzu, aizpildiet zemāk norādīto kontaktformu, un mūsu speciālists sazināsies ar jums, lai nozīmētu vizīti Jums ērtā laikā."
    }
}
