import style from './sections.module.scss';
import firstService from "../../assets/images/services/remontDarbi.png";
import secondService from "../../assets/images/services/nojaukDarbi.png";
import thirdService from "../../assets/images/services/celtDarbi.png";
import { Service } from "./services/Service";
import { useTranslations } from "next-intl";
import { DownloadBlock } from "./download/DownloadBlock";
import { ServicesMobSlider } from "./sliders/ServicesMobSlider";

export const ServicesSection = ({ locale } : {locale: string}) => {

    const t = useTranslations('services');

    return (
        <section id={"services"} className={style.section + " " + style.services}>
            <div className={style.title}>
                <h2>{t("title")}</h2>
            </div>
            <div className={style.container}>
                <Service title={t("construction.title")} text={t("construction.text")} image={firstService}/>
                <Service title={t("repair.title")} text={t("repair.text")} image={secondService}/>
                <Service title={t("other.title")} text={t("other.text")} image={thirdService}/>
            </div>
            <div className={style.mobContainer}>
                <ServicesMobSlider />
            </div>
            {/*<DownloadBlock h4={t("downloadTitle")} text={t("downloadText")} locale={locale} h5={t("h5")} />*/}
        </section>
    )
}
