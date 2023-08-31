import style from './sections.module.scss';

export const PortfolioSection = ({ locale } : {locale: string}) => {
    return (
        <section id={"portfolio"} className={style.section + " " + style.portfolio}>
            <div className={style.title}>
                <h2>Mūsu Portfolio</h2>
            </div>
            <div className={style.block}></div>
        </section>
    )
}
