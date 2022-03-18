import React from 'react'
import {Helmet} from "react-helmet"
import { useSelector } from "react-redux"
import { Header, Footer } from "../components"

import project1_1 from "../assets/images/projects/Project1_1.png";
import project1_2 from "../assets/images/projects/Project1_2.png";
import project1_3 from "../assets/images/projects/Project1_3.png";
import project1_4 from "../assets/images/projects/Project1_4.png";
import project1_5 from "../assets/images/projects/Project1_5.png";


function ProjectsPage () {

    const language = useSelector(({ language }) => language.language)

    return (
        <div>
            <Helmet>
                <title>{text.title[language]}</title>
            </Helmet>
            <Header activeIndex={4}/>
            <div className="main_wrapper">
                <section className="information column title marginTop10">
                    <h1>{text.object1[language]}</h1>
                    <div className="photos">
                        <div className="photo">
                            <img src={project1_1} alt="error"/>
                        </div>
                        <div className="photo">
                            <img src={project1_2} alt="error"/>
                        </div>
                        <div className="photo">
                            <img src={project1_5} alt="error"/>
                        </div>
                        <div className="photo">
                            <img src={project1_4} alt="error"/>
                        </div>
                        <div className="photo">
                            <img src={project1_3} alt="error"/>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    )
}

export default ProjectsPage;

const text = {
    title: {
        ru: "Проекты | C-BLOCK",
        lv: "Projekti | C-BLOCK"
    },
    object1: {
        ru: "Постройка дома в Олайне",
        lv: "Mājas uzbūve Olainē"
    }
}
