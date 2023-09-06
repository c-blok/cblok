import style from './sections.module.scss';
import { useTranslations } from "next-intl";
import { PortfolioSlider } from "./sliders/PortfolioSlider";

export const PortfolioSection = ({ locale } : {locale: string}) => {

    const t = useTranslations('portfolio');

    return (
        <section id={"portfolio"} className={style.section + " " + style.portfolio}>
            <div className={style.block}>
                <div className={style.text}>
                    <h2>{t("title")}</h2>
                    <p>Laipni lūdzam C-Block Portfolio! Mēs esam jūsu uzticamais partneris pārvērst parastās dzīvokļu telpas par iedvesmojošiem un moderniem dzīves vietām. Mūsu uzņēmums ir specializējies dzīvokļu renovācijā un mēs lepojamies ar mūsu paveikto darbu daudzveidību un kvalitāti.</p>
                    <p>Mūsu mērķis ir ne tikai atjaunot dzīvokļus, bet arī radīt telpas, kas atspoguļo mūsu klientu vēlmes un personību. Mēs apvienojam inovatīvas idejas ar praktiskām risinājumiem, lai radītu funkcionālas, estētiskas un dzīvotspējīgas dzīves vides.</p>
                    <p>Šajā portfeli mēs lepojamies dalīties ar dažādiem projektiem, ko esam veikuši. Katrs no tiem ir stāsts par iesaistīšanos, radošumu un rūpību pret detaljām. No mazajiem dzīvokļiem līdz lielām dzīvojamo platību pārveidošanām, mēs esam palīdzējuši mūsu klientiem sasniegt viņu sapņu mājas.</p>
                </div>
                <PortfolioSlider />
            </div>
        </section>
    )
}
