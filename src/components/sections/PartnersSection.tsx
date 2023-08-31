import style from './sections.module.scss';
import DillusoImg from '../../assets/images/partners/dilluso.png';
import VzjumtiImg from '../../assets/images/partners/vzjumtiLogo.png';
import Image from "next/image";

export const PartnersSection = ({ locale } : {locale: string}) => {
    return (
        <section id={"partners"} className={style.section + " " + style.partners}>
            <div className={style.box}>
                <h3>Mūsu Partneri:</h3>
                <Image src={DillusoImg} alt={"dilluso"}/>
                <Image src={VzjumtiImg} alt={"vzjumti"}/>
            </div>
        </section>
    )
}
