import React, { useState, useEffect, useContext } from 'react';
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../style/mobileProjects.css';
import { LanguageContext } from '../App';
// Import images instead of using absolute '/src/...' paths so they work in production builds
import img1 from '../image/scrollimg1.jpg';
import img2 from '../image/scrollimg2.jpg';
import img3 from '../image/scrollimg3.jpg';
import img4 from '../image/scrollimg4.jpg';
import img5 from '../image/scrollimg5.jpg';
import img6 from '../image/scrollimg6.jpg';

// Tap Game Imgs
import img7 from "../image/TapGameimgs/tapgame1.jpg"; // Login page
import img8 from "../image/TapGameimgs/tapgame2.jpg"; // sigin in page
import img9 from "../image/TapGameimgs/tapgame3.jpg"; // home page
import img10 from "../image/TapGameimgs/tapgame4.jpg"; // Profile page
import img11 from "../image/TapGameimgs/tapgame5.jpg"; // Rules page
import img12 from "../image/TapGameimgs/tapgame6.jpg"; // Leaderboard page
import img13 from "../image/TapGameimgs/tapgame7.jpg"; // player search page

// Fitness App Imgs
import img14 from "../image/FitnessImg/login.jpg"; // Fitness App Login
import img15 from "../image/FitnessImg/sign.jpg"; // Fitness App Signup
import img16 from "../image/FitnessImg/home.jpg"; // Fitness App Home
import img17 from "../image/FitnessImg/traning.jpg"; // Fitness App Workout
import img18 from "../image/FitnessImg/detailing-info.jpg"; // Fitness App Progress
import img19 from "../image/FitnessImg/profile.jpg"; // Fitness App Profile
import img20 from "../image/FitnessImg/detail.jpg"; // Fitness App Settings


const MobileProjects = () => {
    const { translations, currentLanguage } = useContext(LanguageContext);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentTapGameSlide, setCurrentTapGameSlide] = useState(0);
    const [currentFitnessSlide, setCurrentFitnessSlide] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isTapGamePaused, setIsTapGamePaused] = useState(false);
    const [isFitnessPaused, setIsFitnessPaused] = useState(false);

    // Mobile layihələr məlumatları
    const mobileProjects = [
        {
            id: 1,
            title: translations.notesApp,
            description: translations.notesAppDescription,
            image: img1,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            id: 2,
            title: translations.notesAppLogin,
            description: translations.notesAppDescription,
            image: img2,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            id: 3,
            title: translations.notesAppRules,
            description: translations.notesAppDescription,
            image: img3,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            id: 4,
            title: translations.notesAppHome,
            description: translations.notesAppDescription,
            image: img4,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            id: 5,
            title: translations.notesAppCardDetails,
            description: translations.notesAppDescription,
            image: img5,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            id: 6,
            title: translations.notesAppProfile,
            description: translations.notesAppDescription,
            image: img6,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        }
    ];

    // Tap Game layihəsi məlumatları
    const tapGameProjects = [
        {
            id: 1,
            title: translations.tapGameLogin,
            description: translations.tapGameDescription,
            image: img7,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            id: 2,
            title: translations.tapGameSignup,
            description: translations.tapGameDescription,
            image: img8,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            id: 3,
            title: translations.tapGameHome,
            description: translations.tapGameDescription,
            image: img9,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            id: 4,
            title: translations.tapGameProfile,
            description: translations.tapGameDescription,
            image: img10,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            id: 5,
            title: translations.tapGameRules,
            description: translations.tapGameDescription,
            image: img11,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            id: 6,
            title: translations.tapGameLeaderboard,
            description: translations.tapGameDescription,
            image: img12,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            id: 7,
            title: translations.tapGameSearch,
            description: translations.tapGameDescription,
            image: img13,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        }
    ];

    // Fitness App layihəsi məlumatları
    const fitnessAppProjects = [
        {
            id: 1,
            title: translations.fitnessAppLogin,
            description: translations.fitnessAppDescription,
            image: img14,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            id: 2,
            title: translations.fitnessAppSignup,
            description: translations.fitnessAppDescription,
            image: img15,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            id: 3,
            title: translations.fitnessAppHome,
            description: translations.fitnessAppDescription,
            image: img16,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            id: 4,
            title: translations.fitnessAppWorkout,
            description: translations.fitnessAppDescription,
            image: img17,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            id: 5,
            title: translations.fitnessAppProgress,
            description: translations.fitnessAppDescription,
            image: img18,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            id: 6,
            title: translations.fitnessAppProfile,
            description: translations.fitnessAppDescription,
            image: img19,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            id: 7,
            title: translations.fitnessAppSettings,
            description: translations.fitnessAppDescription,
            image: img20,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        }
    ];

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Auto-slide functionality for Notes App
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentSlide((prev) =>
                    prev === mobileProjects.length - 1 ? 0 : prev + 1
                );
            }, 3000); // Change slide every 3 seconds

            return () => clearInterval(interval);
        }
    }, [isPaused, mobileProjects.length]);

    // Auto-slide functionality for Tap Game
    useEffect(() => {
        if (!isTapGamePaused) {
            const interval = setInterval(() => {
                setCurrentTapGameSlide((prev) =>
                    prev === tapGameProjects.length - 1 ? 0 : prev + 1
                );
            }, 3000); // Change slide every 3 seconds

            return () => clearInterval(interval);
        }
    }, [isTapGamePaused, tapGameProjects.length]);

    // Auto-slide functionality for Fitness App
    useEffect(() => {
        if (!isFitnessPaused) {
            const interval = setInterval(() => {
                setCurrentFitnessSlide((prev) =>
                    prev === fitnessAppProjects.length - 1 ? 0 : prev + 1
                );
            }, 3000); // Change slide every 3 seconds

            return () => clearInterval(interval);
        }
    }, [isFitnessPaused, fitnessAppProjects.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev === mobileProjects.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? mobileProjects.length - 1 : prev - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const handleSliderHover = () => {
        setIsPaused(true);
    };

    const handleSliderLeave = () => {
        setIsPaused(false);
    };

    // Tap Game slider functions
    const nextTapGameSlide = () => {
        setCurrentTapGameSlide((prev) =>
            prev === tapGameProjects.length - 1 ? 0 : prev + 1
        );
    };

    const prevTapGameSlide = () => {
        setCurrentTapGameSlide((prev) =>
            prev === 0 ? tapGameProjects.length - 1 : prev - 1
        );
    };

    const goToTapGameSlide = (index) => {
        setCurrentTapGameSlide(index);
    };

    const handleTapGameSliderHover = () => {
        setIsTapGamePaused(true);
    };

    const handleTapGameSliderLeave = () => {
        setIsTapGamePaused(false);
    };

    // Fitness App slider functions
    const nextFitnessSlide = () => {
        setCurrentFitnessSlide((prev) =>
            prev === fitnessAppProjects.length - 1 ? 0 : prev + 1
        );
    };

    const prevFitnessSlide = () => {
        setCurrentFitnessSlide((prev) =>
            prev === 0 ? fitnessAppProjects.length - 1 : prev - 1
        );
    };

    const goToFitnessSlide = (index) => {
        setCurrentFitnessSlide(index);
    };

    const handleFitnessSliderHover = () => {
        setIsFitnessPaused(true);
    };

    const handleFitnessSliderLeave = () => {
        setIsFitnessPaused(false);
    };

    return (
        <div className="mobile-projects-page">
            {/* Header Section */}
            <header className="mobile-projects-header">
                <div className="header-content">
                    <h1 className="page-title">{translations.mobileProjectsTitle}</h1>
                    <div className="header-description">
                        <p>{translations.mobileProjectsDescription}</p>
                    </div>
                </div>
            </header>

            {/* Projects Slider Section - Moved to top */}
            <section className="projects-slider-section">
                <div className="slider-container">
                    <div className="slider-header">
                        <h3 className="slider-title slider-title-desktop">{translations.notesAppTitle}</h3>
                    </div>

                    <div className="floating-images-container">
                        {mobileProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`floating-image ${index === currentSlide ? 'active' : ''}`}
                                style={{
                                    transform: `translateX(${(index - currentSlide) * 100}%) scale(${index === currentSlide ? 1 : 0.8})`,
                                    opacity: index === currentSlide ? 1 : 0.6,
                                    zIndex: index === currentSlide ? 10 : 1
                                }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                />
                                <div className="image-title">{project.title}</div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Dots */}
                    <div className="navigation-dots">
                        {mobileProjects.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                            />
                        ))}
                    </div>

                    {/* GitHub and Demo Buttons */}
                    <div className="action-buttons">
                        <a href="https://github.com/nesirresulzade/ReactNativeWithMobileApp" className="action-btn github-btn" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                            <span>{translations.viewOnGitHub}</span>
                        </a>
                        <a href="https://expo.dev/artifacts/eas/bMgTJHVW2beFf3eLjmzcPe.apk" className="action-btn demo-btn" target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt />
                            <span>{translations.viewLiveDemo}</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Tap Game Slider Section */}
            <section className="projects-slider-section">
                <div className="slider-container">
                    <div className="slider-header">
                        <h3 className="slider-title slider-title-desktop">{translations.tapGameTitle}</h3>
                    </div>

                    <div className="floating-images-container">
                        {tapGameProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`floating-image ${index === currentTapGameSlide ? 'active' : ''}`}
                                style={{
                                    transform: `translateX(${(index - currentTapGameSlide) * 100}%) scale(${index === currentTapGameSlide ? 1 : 0.8})`,
                                    opacity: index === currentTapGameSlide ? 1 : 0.6,
                                    zIndex: index === currentTapGameSlide ? 10 : 1
                                }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                />
                                <div className="image-title">{project.title}</div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Dots */}
                    <div className="navigation-dots">
                        {tapGameProjects.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentTapGameSlide ? 'active' : ''}`}
                                onClick={() => goToTapGameSlide(index)}
                            />
                        ))}
                    </div>

                    {/* GitHub and Demo Buttons */}
                    <div className="action-buttons">
                        <a href="https://github.com/nesirresulzade/TapGameMobileApp" className="action-btn github-btn" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                            <span>{translations.viewOnGitHub}</span>
                        </a>
                        <a href="https://expo.dev/artifacts/eas/wp8zHKU2fPpbaMiAmgv8uk.apk" className="action-btn demo-btn" target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt />
                            <span>{translations.viewLiveDemo}</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Fitness App Slider Section */}
            <section className="projects-slider-section">
                <div className="slider-container">
                    <div className="slider-header">
                        <h3 className="slider-title slider-title-desktop">{translations.fitnessAppTitle}</h3>
                    </div>

                    <div className="floating-images-container">
                        {fitnessAppProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`floating-image ${index === currentFitnessSlide ? 'active' : ''}`}
                                style={{
                                    transform: `translateX(${(index - currentFitnessSlide) * 100}%) scale(${index === currentFitnessSlide ? 1 : 0.8})`,
                                    opacity: index === currentFitnessSlide ? 1 : 0.6,
                                    zIndex: index === currentFitnessSlide ? 10 : 1
                                }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                />
                                <div className="image-title">{project.title}</div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Dots */}
                    <div className="navigation-dots">
                        {fitnessAppProjects.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentFitnessSlide ? 'active' : ''}`}
                                onClick={() => goToFitnessSlide(index)}
                            />
                        ))}
                    </div>

                    {/* GitHub and Demo Buttons */}
                    <div className="action-buttons">
                        <a href="https://github.com/nesirresulzade/FitnessAppMobile" className="action-btn github-btn" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                            <span>{translations.viewOnGitHub}</span>
                        </a>
                        <a href="https://expo.dev/artifacts/eas/wcvkRxttBA2kuLohw43G4D.apk" className="action-btn demo-btn" target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt />
                            <span>{translations.viewLiveDemo}</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="mobile-projects-main">
                {/* Features Section */}
                <section className="features-section">
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">📱</div>
                            <h4>{translations.responsiveDesign}</h4>
                            <p>{translations.responsiveDesignDesc}</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">⚡</div>
                            <h4>{translations.performance}</h4>
                            <p>{translations.performanceDesc}</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🎨</div>
                            <h4>{translations.modernUI}</h4>
                            <p>{translations.modernUIDesc}</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default MobileProjects;
