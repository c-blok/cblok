import style from './footer.module.scss';
import { FacebookIcon } from "../../assets/icons/FacebookIcon";
import { InstagramIcon } from "../../assets/icons/InstagramIcon";
import { TikTokIcon } from "../../assets/icons/TikTokIcon";
import { useTranslations } from "next-intl";

export const Footer = () => {

    const t = useTranslations('footer');

    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <div className={style.logo}>
                    <svg width="180" height="146" viewBox="0 0 180 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_7000_836)">
                            <path d="M88.6705 1.67254C87.9955 2.33081 85.4182 4.79931 82.9432 7.18553C72.9818 16.7921 66.6614 22.8194 66.4773 22.8811C66.3955 22.9223 63.6545 20.248 60.4227 16.9567C57.1909 13.6654 54.4705 11.0117 54.3886 11.0323C54.225 11.094 37.1864 27.7153 30.8864 33.9482C28.8 36.0259 26.8568 37.8979 26.55 38.1447L25.9773 38.5767V99.0345L13.05 99.0756L0.102273 99.1374L0.0409091 103.19L0 107.263H32.7273V41.5389L42.1568 32.6934C47.3523 27.8181 52.2 23.272 52.9568 22.5726C53.4188 22.1161 53.9035 21.6835 54.4091 21.2766C54.5114 21.2766 59.6045 26.6044 60.4636 27.633L60.9955 28.2707L58.05 31.1095C56.4545 32.6729 53.775 35.2442 52.1182 36.8076L49.1114 39.6875L49.0909 73.4649V107.263H57.2727V41.5389L61.4659 37.3219L65.6795 33.1048L67.2545 34.7505C70.1591 37.795 76.4182 44.4188 77.0523 45.1182L77.6659 45.8382L78.2182 45.3857C78.525 45.1594 79.8545 43.9251 81.1432 42.6703L83.5159 40.3664L77.3591 34.1745C73.9636 30.7598 71.1818 27.8593 71.1818 27.7564C71.1818 27.6536 75.4159 23.2925 80.5704 18.1087C87.9955 10.6414 90.0205 8.70778 90.2455 8.89292C91.35 9.81861 109.002 27.7358 108.9 27.8387C107.673 29.0318 96.8318 40.2841 96.7909 40.3869C96.7295 40.5515 102.109 45.7559 102.314 45.7559C102.375 45.7559 104.155 43.9251 106.261 41.6829C114.28 33.2283 114.361 33.1666 114.709 33.4545C114.893 33.5985 116.755 35.4705 118.882 37.6304L122.727 41.5389V107.263H130.909V39.6464L126.982 35.8613C124.814 33.7837 122.175 31.2535 121.132 30.2455C120.089 29.2375 119.27 28.2913 119.291 28.1473C119.311 28.0033 120.764 26.3987 122.482 24.5885L125.632 21.2766L126.164 21.7086C126.47 21.9349 127.309 22.696 128.045 23.416C128.782 24.1359 131.4 26.5839 133.875 28.8878C136.35 31.1917 140.38 34.9768 142.834 37.2807L147.273 41.4772V107.263H180V99.0345H154.023V38.6178L147.743 32.4877C144.266 29.1141 139.705 24.6296 137.557 22.5314C135.409 20.4332 131.891 16.9567 129.702 14.8379L125.734 10.9706L119.782 16.9361C116.509 20.2275 113.748 22.9223 113.666 22.9223C113.584 22.9223 108.266 17.8824 101.864 11.7111C95.4614 5.53987 90.1432 0.5 90.0614 0.5C89.9795 0.5 89.3455 1.03484 88.6705 1.67254Z" fill="white"/>
                            <path d="M73.7794 58.0366C73.6976 58.0983 73.6362 69.2066 73.6362 82.7216V107.263H81.818L81.859 86.733L81.9203 66.2238L90.0612 66.1621L98.1817 66.1209V107.263H106.364V57.8926H90.1431C81.2044 57.8926 73.8408 57.9543 73.7794 58.0366Z" fill="white"/>
                            <path d="M12.0685 125.509C7.8549 125.962 4.86854 127.587 3.53899 130.179C2.49581 132.236 2.16854 135.527 2.76172 138.325C3.51854 141.925 5.72763 144.044 9.73672 145.052C11.8026 145.566 17.3254 145.545 19.5344 145.031C22.5004 144.352 24.7504 142.81 25.7526 140.814C26.264 139.847 26.7958 137.873 26.7958 137.05V136.474H19.4731L19.3504 136.967C19.1254 137.914 18.2254 138.716 17.039 139.066C15.5049 139.518 12.7026 139.395 11.5572 138.839C9.02081 137.585 9.00035 133.409 11.4958 132.092C12.4776 131.598 15.0754 131.393 16.5481 131.722C17.8981 132.01 18.7163 132.565 19.2276 133.573L19.6163 134.355L23.1549 134.334L26.6935 134.314L26.6526 133.265C26.5299 130.076 24.0958 127.217 20.7004 126.209C18.2663 125.489 14.8504 125.201 12.0685 125.509Z" fill="white"/>
                            <path d="M133.671 125.653C129.764 126.291 127.534 127.608 126.266 130.035C124.303 133.799 124.773 139.58 127.309 142.377C128.884 144.147 132.034 145.257 136.023 145.463C141.362 145.731 145.412 144.517 147.518 142.048C149.543 139.662 150.096 134.581 148.705 130.878C147.805 128.451 145.309 126.579 142.057 125.88C140.012 125.427 135.655 125.324 133.671 125.653ZM140.421 132.154C141.791 132.853 142.241 133.676 142.241 135.445C142.241 137.132 141.771 138.016 140.503 138.736C139.684 139.21 139.378 139.251 137.25 139.251C135.123 139.251 134.816 139.21 133.998 138.736C132.791 138.058 132.341 137.152 132.341 135.486C132.341 132.565 133.814 131.475 137.557 131.598C139.03 131.639 139.603 131.763 140.421 132.154Z" fill="white"/>
                            <path d="M77.7685 135.486L77.8298 145.216H87.4434C97.9162 145.216 97.998 145.216 99.7366 144.023C101.209 143.035 101.762 141.801 101.762 139.559C101.762 137.543 101.393 136.679 100.023 135.198L99.1844 134.334L99.8389 133.059C100.432 131.886 100.473 131.639 100.412 130.158C100.309 128.122 99.7366 127.114 98.2434 126.373L97.2616 125.879L87.4844 125.818L77.7275 125.756L77.7685 135.486ZM93.0275 130.755C93.4162 131.145 93.3344 132.112 92.8844 132.359C92.6389 132.483 90.9412 132.565 88.7935 132.565H85.0912V130.508H88.9366C91.6571 130.508 92.8639 130.59 93.0275 130.755ZM94.4594 138.16C94.848 138.551 94.7457 139.291 94.2548 139.641C93.8662 139.909 93.048 139.97 89.448 139.97H85.0912V137.913H89.6525C92.9253 137.913 94.2753 137.975 94.4594 138.16Z" fill="white"/>
                            <path d="M103.705 135.548V145.319L113.645 145.278L123.586 145.216V142.234L123.566 139.251L117.205 139.189L110.864 139.148V125.777H103.705V135.548Z" fill="white"/>
                            <path d="M151.2 135.486L151.261 145.216H154.841C157.868 145.216 158.421 145.175 158.441 144.908C158.461 144.743 158.482 143.879 158.502 143.015L158.523 141.452L159.893 140.3C160.65 139.662 161.346 139.169 161.407 139.189C161.468 139.21 162.941 140.608 164.659 142.275L167.768 145.319H172.657C175.336 145.319 177.546 145.278 177.546 145.237C177.546 145.196 175.357 143.139 172.698 140.691C170.039 138.243 167.523 135.898 167.155 135.548L166.459 134.89L171.9 130.405C174.886 127.937 177.341 125.9 177.341 125.859C177.341 125.818 175.071 125.777 172.289 125.777L167.216 125.797L162.921 129.48C160.568 131.496 158.605 133.121 158.564 133.08C158.523 133.038 158.502 131.372 158.523 129.397L158.543 125.777H151.159L151.2 135.486Z" fill="white"/>
                            <path d="M41.1133 135.754V138.531H63.2042V132.977H41.1133V135.754Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_7000_836">
                                <rect width="180" height="145" fill="white" transform="translate(0 0.5)"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <div className={style.socials}>
                        <a href={"https://www.facebook.com/cblok.lv"} target={"_blank"}>
                            <FacebookIcon />
                        </a>
                        <a href={"https://www.instagram.com/cblok.lv/"} target={"_blank"}>
                            <InstagramIcon />
                        </a>
                        <a href={"https://www.tiktok.com/@cblok.lv"} target={"_blank"}>
                            <TikTokIcon />
                        </a>
                    </div>
                </div>
                <div className={style.text}>
                    <p>{t("b1.f")}</p>
                    <p>{t("b1.s")}</p>
                    <p>{t("b1.t")}</p>
                </div>
                <div className={style.text}>
                    <p><span>{t("b2.f")}</span></p>
                    <p>{t("b2.s")}</p>
                    <p>{t("b2.t")}</p>
                </div>
                <div className={style.text}>
                    <p><span>{t("b3.f")}</span></p>
                    <a href={"tel:+37120004922"}>+371 20004922</a>
                    <a href={"mailto:cblok@cblok.lv"}>cblok@cblok.lv</a>
                </div>
            </div>
            <div className={style.centered}>
                <p>© {new Date().getFullYear()} C-Blok. All rights reserved</p>
                <a href={"https://commission.europa.eu/law/law-topic/data-protection/reform/rules-business-and-organisations_en"} target={"_blank"}>
                    Cookie Policy
                </a>
                <a href="https://vebi.lv/" target={"_blank"}>{t("vebi")}</a>
            </div>
        </footer>
    )
}
