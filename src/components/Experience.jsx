import React, { useContext } from 'react';
import '../style/experience.css';
import MyPicture from "../image/nasirPP.jpg"
import { LanguageContext } from '../context/LanguageContext';
import AnimatedBorder from './AnimatedBorder';

function Experience() {
    const { translations } = useContext(LanguageContext);

    return (
        <>
            <section id="experience" className="experience">
                <h2 className="section-title">{translations.experienceTitle}</h2>

                <div className="experience-info">
                    <div className="grid">
                        <div className="grid-card">
                            <i className="bi bi-code-slash"></i>
                            <span>{translations.frontendDev}</span>
                            <h3>{translations.frontendYears}</h3>
                            <p>{translations.frontendDesc}</p>
                        </div>

                        <div className="grid-card">
                            <i className="bi bi-file-code"></i>
                            <span>{translations.graphicDesign}</span>
                            <h3>{translations.graphicYears}</h3>
                            <p>{translations.graphicDesc}</p>
                        </div>

                        <div className="grid-card">
                            <i className="bi bi-file-code"></i>
                            <span>{translations.systemDesign}</span>
                            <h3>{translations.systemYears}</h3>
                            <p>{translations.systemDesc}</p>
                        </div>

                        <div className="grid-card">
                            <i className="bi bi-list-ul"></i>
                            <span>{translations.contentManager}</span>
                            <h3>{translations.contentYears}</h3>
                            <p>{translations.contentDesc}</p>
                        </div>
                    </div>

                    <div>
                        <AnimatedBorder
                            color1="#5227FF"
                            color2="#FF00FF"
                            borderRadius="3rem"
                            thickness="2px"
                            className="experience-photo-card"
                        >
                            <img 
                                src={MyPicture} 
                                alt="experience visual" 
                                className="experience-photo-img"
                                loading="lazy"
                                width="300"
                                height="400"
                            />
                        </AnimatedBorder>
                    </div>
                </div>
            </section>
        </>
    );
}

export default React.memo(Experience);
