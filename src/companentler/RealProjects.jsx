import React, { useState, useEffect, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';
import styles from '../style/realProjects.module.css';
import { LanguageContext } from '../App';
import SliderComponent from './SliderComponent';

// Import images from RealProjAllimgs folder
import img1 from '../RealProjAllimgs/hraHome.png';
import img2 from '../RealProjAllimgs/ServicesPage.png';
import img3 from '../RealProjAllimgs/blogpage.png';
import img4 from '../RealProjAllimgs/aboutpage.png';
import img5 from '../RealProjAllimgs/khaHome.png';
import img6 from '../RealProjAllimgs/khaPortfolio.png';
import img7 from '../RealProjAllimgs/khaServices.png';
import img8 from '../RealProjAllimgs/khaBlog.png';
import img9 from '../RealProjAllimgs/khazarsoftAbout.png';

const RealProjects = () => {
    const { translations, currentLanguage } = useContext(LanguageContext);
    const [isVisible, setIsVisible] = useState(false);

    // First project - High Result Academy
    const project1Images = [
        {
            id: 1,
            title: translations.project1Image1 || "High Result Academy - Home Page",
            image: img1
        },
        {
            id: 2,
            title: translations.project1Image2 || "High Result Academy - Services",
            image: img2
        },
        {
            id: 3,
            title: translations.project1Image3 || "High Result Academy - Blog",
            image: img3
        },
        {
            id: 4,
            title: translations.project1Image4 || "High Result Academy - About",
            image: img4
        }
    ];

    // Second project - Khazarsoft
    const project2Images = [
        {
            id: 5,
            title: translations.project2Image1 || "Khazarsoft - Ana Səhifə",
            image: img5
        },
        {
            id: 6,
            title: translations.project2Image2 || "Khazarsoft - Portfolio",
            image: img6
        },
        {
            id: 7,
            title: translations.project2Image3 || "Khazarsoft - Xidmətlər",
            image: img7
        },
        {
            id: 8,
            title: translations.project2Image4 || "Khazarsoft - Blog",
            image: img8
        },
        {
            id: 9,
            title: translations.project2Image5 || "Khazarsoft - Haqqımızda",
            image: img9
        }
    ];

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={styles["real-projects-page"]}>
            {/* Header Section */}
            <header className={styles["real-projects-header"]}>
                <div className={styles["real-header-content"]}>
                    <RouterLink to="/" className={styles["real-back-btn"]}>
                        <FaArrowLeft />
                        <span>{translations.backToHome || "Ana Səhifəyə Qayıt"}</span>
                    </RouterLink>
                    <h1 className={styles["real-page-title"]}>{translations.realProjectsTitle || "Real Layihələr"}</h1>
                    <div className={styles["real-header-description"]}>
                        <p>{translations.realProjectsDescription || "Həqiqi layihələr və canlı tətbiqlər. Müasir texnologiyalar və professional həllər."}</p>
                    </div>
                </div>
            </header>

            {/* First Project Section - E-commerce Platform */}
            <section className={`${styles["real-project-section"]} ${styles["real-project-1"]}`}>
                <div className={styles["real-project-container"]}>
                    <div className={styles["real-project-header"]}>
                        <div className={styles["real-project-logo"]}>
                            <img 
                                src="https://hra-api.azurewebsites.net/uploads/settings/newlogo.png" 
                                alt="High Result Academy Logo" 
                                className={styles["hra-logo"]}
                            />
                        </div>
                        <h2 className={styles["real-project-title"]}>{translations.project1Title || "High Result Academy"}</h2>
                        <p className={styles["real-project-subtitle"]}>{translations.project1Subtitle || "Təhsil və təlim platforması"}</p>
                    </div>

                    <SliderComponent 
                        images={project1Images.map(item => item.image)}
                        titles={project1Images.map(item => item.title)}
                    />
                    
                    {/* Action Buttons for Project 1 */}
                    <div className={`${styles["real-action-buttons"]} action-buttons`}>
                        <a href="https://hra.edu.az/" className={`${styles["real-action-btn"]} ${styles["real-demo-btn"]} action-btn demo-btn`} target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt />
                            <span>{translations.viewLiveDemo || "Canlı Demo"}</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Second Project Section - Khazarsoft */}
            <section className={`${styles["real-project-section"]} ${styles["real-project-2"]}`}>
                <div className={styles["real-project-container"]}>
                    <div className={styles["real-project-header"]}>
                        <div className={styles["real-project-logo"]}>
                            <img 
                                src="https://khazarsoftapi-ceenb2d4fbeuacde.westeurope-01.azurewebsites.net/uploads/settings/khazarsoft.png" 
                                alt="Khazarsoft Logo" 
                                className={styles["khazarsoft-logo"]}
                            />
                        </div>
                        <h2 className={styles["real-project-title"]}>{translations.project2Title || "Khazarsoft"}</h2>
                        <p className={styles["real-project-subtitle"]}>{translations.project2Subtitle || "Professional IT xidmətləri"}</p>
                    </div>

                    <SliderComponent 
                        images={project2Images.map(item => item.image)}
                        titles={project2Images.map(item => item.title)}
                    />
                    
                    {/* Action Buttons for Project 2 */}
                    <div className={`${styles["real-action-buttons"]} action-buttons`}>
                        <a href="https://khazarsoft.az/" className={`${styles["real-action-btn"]} ${styles["real-demo-btn"]} action-btn demo-btn`} target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt />
                            <span>{translations.viewLiveDemo || "Canlı Demo"}</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RealProjects;
