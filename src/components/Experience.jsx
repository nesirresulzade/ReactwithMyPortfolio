import React, { useContext } from 'react';
import '../style/experience.css';
import MyPicture from "../image/nasirPP.jpg"
import { LanguageContext } from '../context/LanguageContext';
function Experience() {
    const { translations } = useContext(LanguageContext);

    return (
        <>
            <section id="experience" className="experience" aria-labelledby="experience-title">
                <h2 id="experience-title" className="section-title">{translations.experienceTitle}</h2>

                <div className="experience-info">
                    <div className="grid">
                        <article className="grid-card">
                            <i className="bi bi-code-slash" aria-hidden="true"></i>
                            <span>{translations.frontendDev}</span>
                            <h3>{translations.frontendYears}</h3>
                            <p>{translations.frontendDesc}</p>
                        </article>

                        <article className="grid-card">
                            <i className="bi bi-file-code" aria-hidden="true"></i>
                            <span>{translations.graphicDesign}</span>
                            <h3>{translations.graphicYears}</h3>
                            <p>{translations.graphicDesc}</p>
                        </article>

                        <article className="grid-card">
                            <i className="bi bi-file-code" aria-hidden="true"></i>
                            <span>{translations.systemDesign}</span>
                            <h3>{translations.systemYears}</h3>
                            <p>{translations.systemDesc}</p>
                        </article>

                        <article className="grid-card">
                            <i className="bi bi-list-ul" aria-hidden="true"></i>
                            <span>{translations.contentManager}</span>
                            <h3>{translations.contentYears}</h3>
                            <p>{translations.contentDesc}</p>
                        </article>
                    </div>

                    <div>
                        <div className="experience-photo-card">
                            <img 
                                src={MyPicture} 
                                alt="experience visual" 
                                className="experience-photo-img floating-image-effect"
                                loading="lazy"
                                width="300"
                                height="400"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default React.memo(Experience);
