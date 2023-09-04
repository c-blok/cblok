import style from './sections.module.scss';
import Link from "next-intl/link";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "../../assets/icons/index";
import { useTranslations } from "next-intl";

export const HomeSection = ({ locale } : {locale: string}) => {

    const t = useTranslations('home');

    return (
        <section id={"home"} className={style.section + " " + style.home}>
            <div className={style.container}>
                <div className={style.logo}>
                    <svg width="180" height="145" viewBox="0 0 180 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_6705_2051)">
                            <path d="M88.6705 1.17254C87.9955 1.83081 85.4182 4.29931 82.9432 6.68553C72.9818 16.2921 66.6614 22.3194 66.4773 22.3811C66.3955 22.4223 63.6545 19.748 60.4227 16.4567C57.1909 13.1654 54.4705 10.5117 54.3886 10.5323C54.225 10.594 37.1864 27.2153 30.8864 33.4482C28.8 35.5259 26.8568 37.3979 26.55 37.6447L25.9773 38.0767V98.5345L13.05 98.5756L0.102273 98.6374L0.0409091 102.69L0 106.763H32.7273V41.0389L42.1568 32.1934C47.3523 27.3181 52.2 22.772 52.9568 22.0726C53.4188 21.6161 53.9035 21.1835 54.4091 20.7766C54.5114 20.7766 59.6045 26.1044 60.4636 27.133L60.9955 27.7707L58.05 30.6095C56.4545 32.1729 53.775 34.7442 52.1182 36.3076L49.1114 39.1875L49.0909 72.9649V106.763H57.2727V41.0389L61.4659 36.8219L65.6795 32.6048L67.2545 34.2505C70.1591 37.295 76.4182 43.9188 77.0523 44.6182L77.6659 45.3382L78.2182 44.8857C78.525 44.6594 79.8545 43.4251 81.1432 42.1703L83.5159 39.8664L77.3591 33.6745C73.9636 30.2598 71.1818 27.3593 71.1818 27.2564C71.1818 27.1536 75.4159 22.7925 80.5704 17.6087C87.9955 10.1414 90.0205 8.20778 90.2455 8.39292C91.35 9.31861 109.002 27.2358 108.9 27.3387C107.673 28.5318 96.8318 39.7841 96.7909 39.8869C96.7295 40.0515 102.109 45.2559 102.314 45.2559C102.375 45.2559 104.155 43.4251 106.261 41.1829C114.28 32.7283 114.361 32.6666 114.709 32.9545C114.893 33.0985 116.755 34.9705 118.882 37.1304L122.727 41.0389V106.763H130.909V39.1464L126.982 35.3613C124.814 33.2837 122.175 30.7535 121.132 29.7455C120.089 28.7375 119.27 27.7913 119.291 27.6473C119.311 27.5033 120.764 25.8987 122.482 24.0885L125.632 20.7766L126.164 21.2086C126.47 21.4349 127.309 22.196 128.045 22.916C128.782 23.6359 131.4 26.0839 133.875 28.3878C136.35 30.6917 140.38 34.4768 142.834 36.7807L147.273 40.9772V106.763H180V98.5345H154.023V38.1178L147.743 31.9877C144.266 28.6141 139.705 24.1296 137.557 22.0314C135.409 19.9332 131.891 16.4567 129.702 14.3379L125.734 10.4706L119.782 16.4361C116.509 19.7275 113.748 22.4223 113.666 22.4223C113.584 22.4223 108.266 17.3824 101.864 11.2111C95.4614 5.03987 90.1432 0 90.0614 0C89.9795 0 89.3455 0.534843 88.6705 1.17254Z" fill="white"/>
                            <path d="M73.7794 57.5367C73.6976 57.5985 73.6362 68.7067 73.6362 82.2218V106.763H81.818L81.859 86.2331L81.9203 65.724L90.0612 65.6622L98.1817 65.6211V106.763H106.364V57.3927H90.1431C81.2044 57.3927 73.8408 57.4545 73.7794 57.5367Z" fill="white"/>
                            <path d="M12.0683 125.009C7.85466 125.462 4.86829 127.087 3.53875 129.679C2.49556 131.736 2.16829 135.027 2.76147 137.825C3.51829 141.425 5.72738 143.544 9.73647 144.552C11.8024 145.066 17.3251 145.045 19.5342 144.531C22.5001 143.852 24.7501 142.309 25.7524 140.314C26.2637 139.347 26.7956 137.372 26.7956 136.549V135.973H19.4728L19.3501 136.467C19.1251 137.413 18.2251 138.216 17.0387 138.565C15.5047 139.018 12.7024 138.895 11.5569 138.339C9.02057 137.084 9.00011 132.908 11.4956 131.592C12.4774 131.098 15.0751 130.892 16.5478 131.222C17.8978 131.51 18.716 132.065 19.2274 133.073L19.616 133.855L23.1547 133.834L26.6933 133.814L26.6524 132.764C26.5297 129.576 24.0956 126.717 20.7001 125.709C18.266 124.989 14.8501 124.701 12.0683 125.009Z" fill="white"/>
                            <path d="M133.67 125.153C129.764 125.791 127.534 127.107 126.266 129.535C124.302 133.299 124.773 139.08 127.309 141.877C128.884 143.646 132.034 144.757 136.023 144.963C141.361 145.23 145.411 144.017 147.518 141.548C149.543 139.162 150.095 134.081 148.705 130.378C147.805 127.951 145.309 126.079 142.057 125.38C140.011 124.927 135.655 124.824 133.67 125.153ZM140.42 131.654C141.791 132.353 142.241 133.176 142.241 134.945C142.241 136.632 141.77 137.516 140.502 138.236C139.684 138.709 139.377 138.751 137.25 138.751C135.123 138.751 134.816 138.709 133.998 138.236C132.791 137.557 132.341 136.652 132.341 134.986C132.341 132.065 133.814 130.975 137.557 131.098C139.03 131.139 139.602 131.263 140.42 131.654Z" fill="white"/>
                            <path d="M77.7682 134.986L77.8296 144.716H87.4432C97.9159 144.716 97.9978 144.716 99.7364 143.523C101.209 142.536 101.761 141.301 101.761 139.059C101.761 137.043 101.393 136.179 100.023 134.698L99.1841 133.834L99.8387 132.559C100.432 131.386 100.473 131.139 100.411 129.658C100.309 127.622 99.7364 126.614 98.2432 125.873L97.2614 125.379L87.4841 125.318L77.7273 125.256L77.7682 134.986ZM93.0273 130.255C93.4159 130.646 93.3341 131.612 92.8841 131.859C92.6387 131.983 90.9409 132.065 88.7932 132.065H85.0909V130.008H88.9364C91.6568 130.008 92.8637 130.09 93.0273 130.255ZM94.4591 137.66C94.8477 138.051 94.7455 138.792 94.2546 139.141C93.8659 139.409 93.0477 139.471 89.4477 139.471H85.0909V137.413H89.6523C92.925 137.413 94.275 137.475 94.4591 137.66Z" fill="white"/>
                            <path d="M103.705 135.048V144.819L113.645 144.778L123.586 144.716V141.733L123.566 138.751L117.205 138.689L110.864 138.648V125.277H103.705V135.048Z" fill="white"/>
                            <path d="M151.2 134.986L151.261 144.716H154.841C157.868 144.716 158.421 144.675 158.441 144.408C158.461 144.243 158.482 143.379 158.502 142.515L158.523 140.952L159.893 139.8C160.65 139.162 161.346 138.668 161.407 138.689C161.468 138.709 162.941 140.108 164.659 141.774L167.768 144.819H172.657C175.336 144.819 177.546 144.778 177.546 144.737C177.546 144.696 175.357 142.638 172.698 140.191C170.039 137.743 167.523 135.398 167.155 135.048L166.459 134.39L171.9 129.905C174.886 127.437 177.341 125.4 177.341 125.359C177.341 125.318 175.071 125.277 172.289 125.277L167.216 125.297L162.921 128.979C160.568 130.995 158.605 132.62 158.564 132.579C158.523 132.538 158.502 130.872 158.523 128.897L158.543 125.277H151.159L151.2 134.986Z" fill="white"/>
                            <path d="M41.1135 135.254V138.031H63.2044V132.476H41.1135V135.254Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_6705_2051">
                                <rect width="180" height="145" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <h1>{t("h1")}</h1>
                </div>
                <div className={style.socials}>
                    <div>{t("socials")}</div>
                    <div className={style.links}>
                        <Link href={"/"} target={"_blank"}>
                            <TikTokIcon />
                        </Link>
                        <Link href={"/"} target={"_blank"}>
                            <InstagramIcon />
                        </Link>
                        <Link href={"/"} target={"_blank"}>
                            <FacebookIcon />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
