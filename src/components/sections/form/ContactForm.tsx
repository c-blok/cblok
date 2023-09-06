'use client';

import style from '../sections.module.scss';
import Link from "next/link";
import { useTranslations } from "next-intl";
import { FormEvent, useState } from "react";
import { SendIcon } from "../../../assets/icons/index";

export const ContactForm = () => {

    const t = useTranslations('contacts');

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        time: ""
    })
    const [status, setStatus] = useState<number>(0);

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (status) return;
        setStatus(-1);
        try {
            const res = await fetch("/api/email", {
                method: "POST",
                body: JSON.stringify(form)
            })
            if (!res.ok) {
                throw 'error';
            } else {
                setStatus(2);
            }
        } catch {
            setStatus(1);
        }
    }

    return (
        <form onSubmit={onSubmit} className={style.form}>
            <div className={style.input}>
                <label htmlFor="name">{t("form.name")}</label>
                <input type="text" id={"name"} name={"name"} required={true} onChange={e => setForm({...form, name: e.target.value})}/>
            </div>
            <div className={style.input}>
                <label htmlFor="email">{t("form.email")}</label>
                <input type="email" id={"email"} name={"email"} required={true} onChange={e => setForm({...form, email: e.target.value})}/>
            </div>
            <div className={style.input}>
                <label htmlFor="phone">{t("form.phone")}</label>
                <input type="tel" id={"phone"} name={"phone"} required={true} onChange={e => setForm({...form, phone: e.target.value})}/>
            </div>
            <div className={style.input}>
                <label htmlFor="time">{t("form.time")}</label>
                <input type="text" id={"time"} name={"time"} onChange={e => setForm({...form, time: e.target.value})}/>
            </div>
            <button
                type={"submit"}
                className={style.button + " " + (status === 2 ? style.success : "") + " " + (status === -1 ? style.loading : "")}
                disabled={status === 1 || status === -1}
            >
                {status === 1 ? t("form.error") : status === 2 ? t("form.success") : t("form.send") }
                <SendIcon />
            </button>
        </form>
    )
}
