import style from './sections.module.scss';
import firstService from "../../assets/images/services/remontDarbi.png";
import secondService from "../../assets/images/services/nojaukDarbi.png";
import thirdService from "../../assets/images/services/celtDarbi.png";
import { Service } from "./services/Service";

export const ServicesSection = ({ locale } : {locale: string}) => {

    return (
        <section id={"services"} className={style.section + " " + style.services}>
            <div className={style.title}>
                <h2>Mūsu Pakalpojumi</h2>
            </div>
            <div className={style.container}>
                <Service title={"Remont darbi"} text={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.<br/><br/>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."} image={firstService}/>
                <Service title={"Nojaukšanas darbi"} text={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.<br/><br/>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."} image={secondService}/>
                <Service title={"Celtniecības darbi"} text={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.<br/><br/>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."} image={thirdService}/>
            </div>
        </section>
    )
}
