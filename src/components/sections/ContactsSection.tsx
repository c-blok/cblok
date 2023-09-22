import style from './sections.module.scss';
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ContactForm } from "./form/ContactForm";
import { EmailIcon, InfoIcon, PhoneIcon } from "../../assets/icons/index";

export const ContactsSection = ({ locale } : {locale: string}) => {

    const t = useTranslations('contacts');

    return (
        <>
            <section className={style.section}>
                <div className={style.title}/>
            </section>
            <section id={"contacts"} className={style.section + " " + style.contacts}>
                <div className={style.block}>
                    <div className={style.box}>
                        <div className={style.info}>
                            <div className={style.infoBox}>
                                <h2>{t("title")}</h2>
                                <h3>{t("h3")}</h3>
                                <p className={style.field}>
                                    <InfoIcon />
                                    {t("pCom")}
                                </p>
                                <p className={style.field}>
                                    <PhoneIcon />
                                    <span className={style.f}>
                                        <Link href={"tel:+37120004922"}>{t("phone")}</Link>
                                        <Link href={"tel:+37120004922"}>+371 20 004 922</Link>
                                    </span>
                                </p>
                                <p className={style.field}>
                                    <EmailIcon />
                                    <span className={style.f}>
                                        <Link href={"mailto:cblok@inbox.lv"}>{t("email")}</Link>
                                        <Link href={"mailto:cblok@inbox.lv"}>cblok@inbox.lv</Link>
                                    </span>
                                </p>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d139177.94111927054!2d23.964270853565075!3d56.971836327880276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfb0e5073ded%3A0x400cfcd68f2fe30!2zUsSrZ2E!5e0!3m2!1slv!2slv!4v1693988545244!5m2!1slv!2slv"
                                    width="97%" height="400" style={{border:0}} allowFullScreen={false} loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                        <div className={style.formBLock}>
                            <div className={style.formBLockBox}>
                                <h4>{t("form.h4")}</h4>
                                <p>{t("form.p")}</p>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
