'use client';

import style from '../sections.module.scss';
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useState } from "react";
import { ArrowIcon } from "../../../assets/icons/index";

interface ServiceProps {
    image: string | StaticImport,
    title: string,
    text: string,
}

export const Service = ({ image, title, text }: ServiceProps) => {

    const [opened, setOpened] = useState<boolean>(false);

    return (
        <div className={style.service + " " + (opened ? style.opened : "")} onClick={() => setOpened(!opened)}>
            <div className={style.bg}>
                <Image src={image} alt={"service image"} />
                <div className={style.dark}/>
            </div>
            {!opened ?
                <h3 className={style.upperCase}>{title}</h3>
                :
                <div className={style.text} dangerouslySetInnerHTML={{__html: text}}/>
            }
            <ArrowIcon rotate={!opened ? "0deg" : "180deg"} />
        </div>
    )
}
