import style from './sections.module.scss';
import DillusoImg from '../../assets/images/partners/dilluso.png';
import VzjumtiImg from '../../assets/images/partners/vzjumtiLogo.png';
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const PartnersSection = ({ locale } : {locale: string}) => {

    const t = useTranslations('partners');

    return (
        <section id={"partners"} className={style.section + " " + style.partners}>
            <div className={style.title}>
                <h2>{t("title")}</h2>
            </div>
            <div className={style.box}>
                <div className={style.partner}>
                    <Link href={"/"}>
                        <Image src={DillusoImg} alt={"dilluso"}/>
                    </Link>
                </div>
                <div className={style.partner}>
                    <Link href={"/"}>
                        <Image src={VzjumtiImg} alt={"vzjumti"}/>
                    </Link>
                </div>
            </div>
        </section>
    )
}
