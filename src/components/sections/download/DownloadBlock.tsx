import style from '../sections.module.scss';
import { useLocale, useTranslations } from "next-intl";
import { DownloadIcon, PDFIcon, PhoneIcon } from "../../../assets/icons/index";
import Link from "next/link";

export const DownloadBlock = ({ h4, text, locale, h5 } : {h4: string, text: string, locale: string, h5?: string}) => {

    const t = useTranslations('about');
    const lang = useLocale();

    return (
        <div className={style.downloadBlock}>
            <div className={style.box}>
                <div className={style.pdf}>
                    <PDFIcon />
                </div>
                <div className={style.text}>
                    <h4>{h4}</h4>
                    <p>{text}</p>
                    {h5 &&
                        <h5>{h5}</h5>
                    }
                </div>
                <Link href={`/C-BLOK-${lang}.pdf`} target={"_blank"} className={style.button}>
                    <DownloadIcon />
                    {t("downloadButton")}
                </Link>
            </div>
        </div>
    )
}
