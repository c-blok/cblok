import style from './sections.module.scss';

export const ContactsSection = ({ locale } : {locale: string}) => {
    return (
        <section id={"contacts"} className={style.section + " " + style.contacts}>
            <div className={style.title}>
                <h2>Mūsu Kontakti</h2>
            </div>
            <div className={style.block}>

            </div>
        </section>
    )
}
