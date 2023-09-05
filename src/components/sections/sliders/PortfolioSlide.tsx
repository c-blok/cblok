'use client';

import style from '../sections.module.scss';
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export const PortfolioSlide = ({ src, text, title }: { src: string | StaticImport, title: string, text: string }) => {

    return (
        <div className={style.slide}>
            <Image src={src} alt={"project image"}/>
            <div className={style.textBg}>
                <div className={style.text}>
                    <h3>{title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: text }} />
                </div>
            </div>
        </div>
    )
}
