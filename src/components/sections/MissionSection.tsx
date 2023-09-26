import style from './sections.module.scss';
import { useTranslations } from "next-intl";
import Image from "next/image";
import MissionImg from "../../assets/images/mission.png";

export const MissionSection = ({ locale } : {locale: string}) => {

    const t = useTranslations('mission');

    return (
        <section id={"mission"} className={style.section + " " + style.about + " " + style.mission}>
            <div className={style.block}>
                <div className={style.text}>
                    <h2>{t("title")}</h2>
                    <p dangerouslySetInnerHTML={{ __html: t("text") }}/>
                </div>
                <div className={style.image}>
                    <Image src={MissionImg} alt={"mission"} />
                </div>
            </div>
        </section>
    )
}
