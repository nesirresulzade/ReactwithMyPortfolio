import React, { useContext } from 'react';
import '../style/experience.css';
import MyPicture from "../image/myImage.jpg"
import { LanguageContext } from '../App';
import ElectricBorder from './ElectricBorder';

function Experience() {
    const { translations } = useContext(LanguageContext);

    return (
        <>
            <section id="experience" className="experience">
                <h2 className="section-title" data-aos="fade-down">{translations.experienceTitle}</h2>

                <div className="experience-info">
                    <div className="grid">
                        <div className="grid-card" data-aos="zoom-in" data-aos-delay="200">
                            <i className="bi bi-code-slash"></i>
                            <span>{translations.frontendDev}</span>
                            <h3>{translations.frontendYears}</h3>
                            <p>{translations.frontendDesc}</p>
                        </div>

                        <div className="grid-card" data-aos="zoom-in" data-aos-delay="400">
                            <i className="bi bi-file-code"></i>
                            <span>{translations.graphicDesign}</span>
                            <h3>{translations.graphicYears}</h3>
                            <p>{translations.graphicDesc}</p>
                        </div>

                        <div className="grid-card" data-aos="zoom-in" data-aos-delay="600">
                            <i className="bi bi-file-code"></i>
                            <span>{translations.systemDesign}</span>
                            <h3>{translations.systemYears}</h3>
                            <p>{translations.systemDesc}</p>
                        </div>

                        <div className="grid-card" data-aos="zoom-in" data-aos-delay="800">
                            <i className="bi bi-list-ul"></i>
                            <span>{translations.contentManager}</span>
                            <h3>{translations.contentYears}</h3>
                            <p>{translations.contentDesc}</p>
                        </div>
                    </div>

                    <div
                        data-aos="fade-left"
                        data-aos-delay="1000"
                    >
                        <ElectricBorder
                            color="#5227FF"
                            speed={1}
                            chaos={1}
                            thickness={2}
                            className="experience-photo-card"
                        >
                            <img 
                                src={MyPicture} 
                                alt="experience visual" 
                                className="experience-photo-img"
                            />
                        </ElectricBorder>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Experience;
