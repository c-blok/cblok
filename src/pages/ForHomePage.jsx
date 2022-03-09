import React from 'react'
import {Helmet} from "react-helmet"
import { useSelector } from "react-redux"
import { Footer, Header } from "../components"

import roofing1 from "../assets/images/forHome/roofing/6bc95d1a-6c1a-4735-af5e-2a7874328df7.jpg"
import roofing2 from "../assets/images/forHome/roofing/d32d6355-21b8-45a9-8b56-8ab0209dea4e.jpg"

import facade1 from "../assets/images/forHome/facade/1aa133ff-5911-487a-9eb3-62092a2bf6f6.jpg"
import facade2 from "../assets/images/forHome/facade/a89c6d76-9179-4f56-8aca-a15637b4e499.jpg"

import windows1 from "../assets/images/forHome/windows/4f54deee-327e-47cf-8ba8-a1a4e3826645.jpg"
import windows2 from "../assets/images/forHome/windows/8796313d-da5d-4fef-8295-dd0dc348fcca.jpg"

import entranceDoors1 from "../assets/images/forHome/entranceDoors/81fe3782-7f90-4799-8f3c-7f4d8e90f3fc.jpg"
import entranceDoors2 from "../assets/images/forHome/entranceDoors/e85fb370-1351-4350-b087-2f78de4ea93f.jpg"

import safetyBlinds1 from "../assets/images/forHome/safetyBlinds/a278d6f8-700b-4675-9886-c3e980dd7599.jpg"
import safetyBlinds2 from "../assets/images/forHome/safetyBlinds/fe61a801-728d-4d45-be61-49afe92b14c2.jpg"

import frenchBalconies1 from "../assets/images/forHome/frenchBalconies/1c10ff59-84e2-445b-9f93-6f7e116d3b56.jpg"
import frenchBalconies2 from "../assets/images/forHome/frenchBalconies/01cd3b16-ab31-4746-839f-a218bfc516dc.jpg"
import frenchBalconies3 from "../assets/images/forHome/frenchBalconies/2caeb707-a868-4bb7-a4e0-e4eedf62218b.jpg"

import terraces1 from "../assets/images/forHome/terraces/78e01fdb-9514-46fa-b02b-dcba10300040.jpg"
import terraces2 from "../assets/images/forHome/terraces/ea9779c4-df1d-4336-803d-590fd9fe0f9a.jpg"

import fences1 from "../assets/images/forHome/fences/ca11ed44-ce8f-46e6-a410-b6d411fb14bb.jpg"
import fences2 from "../assets/images/forHome/fences/82e42b79-649a-46f2-9a24-28c32afdc0a7.jpg"
import fences3 from "../assets/images/forHome/fences/442b8486-43a2-4253-bda7-edd262eb2c28.jpg"

import stones1 from "../assets/images/forHome/stones/32d24f5f-6667-4cde-991b-32c809deaac3.jpg"
import stones2 from "../assets/images/forHome/stones/dbc0a507-aa12-4b52-baa3-ec1c10c66d87.jpg"

import streetStairs1 from "../assets/images/forHome/streetStairs/47fdb8e9-a31b-4bd1-ae70-a07db2bef3a8.jpg"



function ForHomePage () {

    const language = useSelector(({ language }) => language.language)

    return (
        <div>
            <Helmet>
                <title>{text.title[language]}</title>
            </Helmet>
            <Header activeIndex={2}/>
            <div className="main_wrapper">
                <section className="information column title">
                    <h1>{text.roofing[language]}</h1>
                    <div className="photos">
                        <div className="photo">
                            <img src={roofing1} alt="error"/>
                        </div>
                        <div className="photo">
                            <img src={roofing2} alt="error"/>
                        </div>
                    </div>
                </section>
                <section className="information column title">
                    <h1>{text.facade[language]}</h1>
                    <div className="photos">
                        <div className="photo">
                            <img src={facade1} alt="error"/>
                        </div>
                        <div className="photo">
                            <img src={facade2} alt="error"/>
                        </div>
                    </div>
                </section>
                <section className="information column title">
                    <h1>{text.windows[language]}</h1>
                    <div className="photos">
                        <div className="photo">
                            <img src={windows1} alt="error"/>
                        </div>
                        <div className="photo">
                            <img src={windows2} alt="error"/>
                        </div>
                    </div>
                </section>
                <section className="information column title">
                    <h1>{text.entranceDoors[language]}</h1>
                    <div className="photos">
                        <div className="photo">
                            <img src={entranceDoors1} alt="error"/>
                        </div>
                        <div className="photo">
                            <img src={entranceDoors2} alt="error"/>
                        </div>
                    </div>
                </section>
                <section className="information column title">
                    <h1>{text.safetyBlinds[language]}</h1>
                    <div className="photos">
                        <div className="photo">
                            <img src={safetyBlinds1} alt="error"/>
                        </div>
                        <div className="photo">
                            <img src={safetyBlinds2} alt="error"/>
                        </div>
                    </div>
                </section>
                <section className="information column title">
                    <h1>{text.frenchBalconies[language]}</h1>
                    <div className="photos">
                        <div className="photo">
                            <img src={frenchBalconies1} alt="error"/>
                        </div>
                        <div className="photo">
                            <img src={frenchBalconies2} alt="error"/>
                        </div>
                        <div className="photo">
                            <img src={frenchBalconies3} alt="error"/>
                        </div>
                    </div>
                </section>
                <section className="information column title">
                    <h1>{text.terraces[language]}</h1>
                    <div className="photos">
                        <div className="photo">
                            <img src={terraces1} alt="error"/>
                        </div>
                        <div className="photo">
                            <img src={terraces2} alt="error"/>
                        </div>
                    </div>
                </section>
                <section className="information column title">
                    <h1>{text.fences[language]}</h1>
                    <div className="photos">
                        <div className="photo">
                            <img src={fences1} alt="error"/>
                        </div>
                        <div className="photo">
                            <img src={fences2} alt="error"/>
                        </div>
                        <div className="photo">
                            <img src={fences3} alt="error"/>
                        </div>
                    </div>
                </section>
                <section className="information column title">
                    <h1>{text.stones[language]}</h1>
                    <div className="photos">
                        <div className="photo">
                            <img src={stones1} alt="error"/>
                        </div>
                        <div className="photo">
                            <img src={stones2} alt="error"/>
                        </div>
                    </div>
                </section>
                <section className="information column title">
                    <h1>{text.streetStairs[language]}</h1>
                    <div className="photos">
                        <div className="photo">
                            <img src={streetStairs1} alt="error"/>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    )
}

export default ForHomePage;

const text = {
    title: {
        ru: "Для вашего дома | C-BLOCK",
        lv: "Jūsu mājām | C-BLOCK"
    },
    roofing: {
        ru: "Кровельные работы",
        lv: "Jumta darbi"
    },
    facade: {
        ru: "Фасадные работы",
        lv: "Fasādes darbi"
    },
    windows: {
        ru: "Окна",
        lv: "Logi"
    },
    entranceDoors: {
        ru: "Входные двери",
        lv: "Ārdurvis"
    },
    safetyBlinds: {
        ru: "Защитные жалюзи",
        lv: "Aizsargžalūzijas"
    },
    frenchBalconies: {
        ru: "Французские балконы, ограждения, перила",
        lv: "Franču balkoni, nožogojumi, margas"
    },
    terraces: {
        ru: "Террасы, навесы",
        lv: "Terases, nojumes"
    },
    fences: {
        ru: "Заборы, ворота, калитки",
        lv: "Žogi, vārti"
    },
    stones: {
        ru: "Брусчатка",
        lv: "Bruģis"
    },
    streetStairs: {
        ru: "Уличные лестницы",
        lv: "Āra kāpnes"
    },
}
