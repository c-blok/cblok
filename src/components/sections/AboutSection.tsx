import style from './sections.module.scss';
import Image from "next/image";
import AboutImage from "../../assets/images/about.png";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { DownloadBlock } from "./download/DownloadBlock";
import { PhoneIcon } from "../../assets/icons/PhoneIcon";

export const AboutSection = ({ locale } : {locale: string}) => {

    const t = useTranslations('about');

    return (
        <section id={"about"} className={style.section + " " + style.about}>
            <div className={style.block}>
                <div className={style.text}>
                    <h2>{t("h2")}</h2>
                    <p dangerouslySetInnerHTML={{ __html: t("text") || "" }}/>
                    <h3>{t("h3")}</h3>
                    <Link href={"tel:+37120004922"} className={style.button}>
                        <PhoneIcon />
                        {t("contactUs")}
                    </Link>
                </div>
                <div className={style.image}>
                    <Image src={AboutImage} alt={"image"} />
                </div>
            </div>
            <DownloadBlock locale={locale} h4={t("downloadTitle")} text={t("downloadText")} />
        </section>
    )
}
