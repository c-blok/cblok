import style from '../sections.module.scss';
import { useTranslations } from "next-intl";
import { DownloadIcon, PDFIcon, PhoneIcon } from "../../../assets/icons/index";

export const DownloadBlock = ({ h4, text, locale } : {h4: string, text: string, locale: string}) => {

    const t = useTranslations('about');

    return (
        <div className={style.downloadBlock}>
            <div className={style.box}>
                <div className={style.pdf}>
                    <PDFIcon />
                </div>
                <div className={style.text}>
                    <h4>{h4}</h4>
                    <p>{text}</p>
                </div>
                <button className={style.button}>
                    <DownloadIcon />
                    {t("downloadButton")}
                </button>
            </div>
        </div>
    )
}
