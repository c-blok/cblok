import style from './sections.module.scss';
import Link from "next-intl/link";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "../../assets/icons/index";
import Image from "next/image";
import AboutImage from "../../assets/images/about.png";

export const ServicesSection = ({ locale } : {locale: string}) => {
    return (
        <section id={"services"} className={style.section + " " + style.services}>
            <div className={style.title}>
                <h2>Mūsu Pakalpojumi</h2>
            </div>
        </section>
    )
}
