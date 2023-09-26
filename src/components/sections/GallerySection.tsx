import style from './sections.module.scss';
import { useTranslations } from "next-intl";
import { GallerySlider } from "./sliders/GallerySlider";

export const GallerySection = ({ locale } : {locale: string}) => {

    const t = useTranslations('gallery');

    return (
        <section id={"gallery"} className={style.section + " " + style.gallery}>
            <div className={style.title}>
                <h2>{t("title")}</h2>
            </div>
            <GallerySlider />
        </section>
    )
}
