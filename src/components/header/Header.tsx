'use client'

import style from './header.module.scss';
import Link from 'next-intl/link';
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

export const Header = ({locale} : {locale: string}) => {

    const headerRef = useRef<HTMLHeadElement>(null);
    const [activeSection, setActiveSection] = useState('');
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const t = useTranslations('header');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top - 100 <= 0 && rect.bottom >= 0) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {

        const headerBg = "#43484B";

        const scrollCheck = () => {
            const y = window.scrollY

            if (headerRef.current) {
                if (y > 0) {
                    headerRef.current.style.backgroundColor = headerBg
                } else {
                    headerRef.current.style.backgroundColor = ""
                }
            }
        }

        window.addEventListener("scroll", scrollCheck);

        if (window.scrollY > 0 && headerRef.current) {
            headerRef.current.style.backgroundColor = headerBg
        }

        return () => window.removeEventListener("scroll", scrollCheck)

    }, [])

    return (
        <header ref={headerRef} className={style.header}>
            <div className={style.container}>
                <Link href={"/"}>
                    <svg width="124" height="74" viewBox="0 0 140 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_6728_2265)">
                            <path d="M68.9659 1.41324C68.4409 1.92594 66.4364 3.84855 64.5114 5.70708C56.7636 13.1893 51.8477 17.8836 51.7045 17.9317C51.6409 17.9638 49.5091 15.8809 46.9955 13.3174C44.4818 10.7539 42.3659 8.68714 42.3023 8.70316C42.175 8.75122 28.9227 21.6968 24.0227 26.5514C22.4 28.1696 20.8886 29.6276 20.65 29.8199L20.2045 30.1563V77.2444L10.15 77.2764L0.0795455 77.3245L0.0318182 80.4808L0 83.6531H25.4545V32.4635L32.7886 25.5741C36.8295 21.7769 40.6 18.2361 41.1886 17.6914C41.5479 17.3359 41.9249 16.999 42.3182 16.682C42.3977 16.682 46.3591 20.8317 47.0273 21.6327L47.4409 22.1294L45.15 24.3404C43.9091 25.5581 41.825 27.5608 40.5364 28.7785L38.1977 31.0215L38.1818 57.3293V83.6531H44.5455V32.4635L47.8068 29.179L51.0841 25.8945L52.3091 27.1763C54.5682 29.5475 59.4364 34.7065 59.9295 35.2513L60.4068 35.812L60.8364 35.4596C61.075 35.2833 62.1091 34.322 63.1114 33.3447L64.9568 31.5502L60.1682 26.7277C57.5273 24.0681 55.3636 21.809 55.3636 21.7289C55.3636 21.6488 58.6568 18.2521 62.6659 14.2147C68.4409 8.39874 70.0159 6.8927 70.1909 7.03689C71.05 7.75787 84.7795 21.7129 84.7 21.793C83.7455 22.7222 75.3136 31.4861 75.2818 31.5663C75.2341 31.6944 79.4182 35.7479 79.5773 35.7479C79.625 35.7479 81.0091 34.322 82.6477 32.5756C88.8841 25.9907 88.9477 25.9426 89.2182 26.1669C89.3614 26.2791 90.8091 27.737 92.4636 29.4193L95.4545 32.4635V83.6531H101.818V30.9895L98.7636 28.0415C97.0773 26.4233 95.025 24.4526 94.2136 23.6675C93.4023 22.8824 92.7659 22.1454 92.7818 22.0333C92.7977 21.9211 93.9273 20.6714 95.2636 19.2615L97.7136 16.682L98.1273 17.0185C98.3659 17.1947 99.0182 17.7875 99.5909 18.3483C100.164 18.909 102.2 20.8156 104.125 22.6101C106.05 24.4045 109.184 27.3525 111.093 29.147L114.545 32.4154V83.6531H140V77.2444H119.795V30.1884L114.911 25.4139C112.207 22.7863 108.659 19.2936 106.989 17.6593C105.318 16.0251 102.582 13.3174 100.88 11.6672L97.7932 8.65509L93.1636 13.3014C90.6182 15.8649 88.4705 17.9638 88.4068 17.9638C88.3432 17.9638 84.2068 14.0384 79.2273 9.23188C74.2477 4.42534 70.1114 0.5 70.0477 0.5C69.9841 0.5 69.4909 0.916567 68.9659 1.41324Z" fill="white"/>
                            <path d="M57.3843 45.313C57.3207 45.361 57.2729 54.0128 57.2729 64.5391V83.6531H63.6366L63.6684 67.6634L63.7161 51.6896L70.0479 51.6416L76.3639 51.6095V83.6531H82.7275V45.2008H70.1116C63.1593 45.2008 57.432 45.2489 57.3843 45.313Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_6728_2265">
                                <rect width="140" height="83" fill="white" transform="translate(0 0.5)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </Link>
                <nav className={style.navigation}>
                    <ul className={style.links}>
                        <li><Link className={activeSection === "home" ? style.active : ""} title={t("home")} href={"/#home"}>{t("home")}</Link></li>
                        <li><Link className={activeSection === "about" ? style.active : ""} title={t("about")} href={"/#about"}>{t("about")}</Link></li>
                        <li><Link className={activeSection === "services" ? style.active : ""} title={t("services")} href={"/#services"}>{t("services")}</Link></li>
                        <li><Link className={activeSection === "portfolio" ? style.active : ""} title={t("portfolio")} href={"/#portfolio"}>{t("portfolio")}</Link></li>
                        <li><Link className={activeSection === "contacts" ? style.active : ""} title={t("contacts")} href={"/#contacts"}>{t("contacts")}</Link></li>
                    </ul>
                    <ul className={style.lang}>
                        <li><Link title="LV" className={locale === "lv" ? style.active : ""} href={"/"} locale={"lv"}>LV</Link></li>
                        <li><Link title="RU" className={locale === "ru" ? style.active : ""} href={"/"} locale={"ru"}>RU</Link></li>
                    </ul>
                </nav>
                <nav className={style.navigationMob}>
                    {!isOpened &&
                        <div className={style.burger} onClick={() => setIsOpened(true)}>
                            <svg width="35" height="25" viewBox="0 0 35 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="35" height="5.60349" rx="1" fill="white"/>
                                <rect y="9.69873" width="35" height="5.60349" rx="1" fill="white"/>
                                <rect y="19.3965" width="35" height="5.60349" rx="1" fill="white"/>
                            </svg>
                        </div>
                    }
                </nav>
            </div>
            {isOpened &&
                <div className={style.mobNav}>
                    <div className={style.mobContainer}>
                        <div className={style.close}>
                            <svg onClick={() => setIsOpened(false)} width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.578571 26.8934C0.964286 27.2791 1.35 27.4719 1.92857 27.4719C2.50714 27.4719 2.89286 27.2791 3.27857 26.8934L13.5 16.6719L23.7214 26.8934C24.1071 27.2791 24.6857 27.4719 25.0714 27.4719C25.4571 27.4719 26.0357 27.2791 26.4214 26.8934C27.1929 26.1219 27.1929 24.9648 26.4214 24.1933L16.2 13.9719L26.4214 3.75049C27.1929 2.97907 27.1929 1.82192 26.4214 1.0505C25.65 0.279067 24.4929 0.279067 23.7214 1.0505L13.5 11.2719L3.27857 1.0505C2.50714 0.279067 1.35 0.279067 0.578571 1.0505C-0.192857 1.82192 -0.192857 2.97907 0.578571 3.75049L10.8 13.9719L0.578571 24.1933C-0.192857 24.9648 -0.192857 26.1219 0.578571 26.8934Z" fill="white"/>
                            </svg>
                        </div>
                        <ul className={style.lang}>
                            <li><Link onClick={() => setIsOpened(false)} title="LV" className={locale === "lv" ? style.active : ""} href={"/"} locale={"lv"}>LV</Link></li>
                            <li><Link onClick={() => setIsOpened(false)} title="RU" className={locale === "ru" ? style.active : ""} href={"/"} locale={"ru"}>RU</Link></li>
                        </ul>
                        <ul className={style.links}>
                            <li><Link onClick={() => setIsOpened(false)} className={activeSection === "home" ? style.active : ""} title={t("home")} href={"/#home"}>{t("home")}</Link></li>
                            <li><Link onClick={() => setIsOpened(false)} className={activeSection === "about" ? style.active : ""} title={t("about")} href={"/#about"}>{t("about")}</Link></li>
                            <li><Link onClick={() => setIsOpened(false)} className={activeSection === "services" ? style.active : ""} title={t("services")} href={"/#services"}>{t("services")}</Link></li>
                            <li><Link onClick={() => setIsOpened(false)} className={activeSection === "portfolio" ? style.active : ""} title={t("portfolio")} href={"/#portfolio"}>{t("portfolio")}</Link></li>
                            <li><Link onClick={() => setIsOpened(false)} className={activeSection === "contacts" ? style.active : ""} title={t("contacts")} href={"/#contacts"}>{t("contacts")}</Link></li>
                        </ul>
                    </div>
                </div>
            }
        </header>
    )
}
