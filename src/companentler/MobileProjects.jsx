import React, { useState, useEffect, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../style/mobileProjects.css';
import { LanguageContext } from '../App';
// Import images instead of using absolute '/src/...' paths so they work in production builds
import img1 from '../image/scrollimg1.jpg';
import img2 from '../image/scrollimg2.jpg';
import img3 from '../image/scrollimg3.jpg';
import img4 from '../image/scrollimg4.jpg';
import img5 from '../image/scrollimg5.jpg';
import img6 from '../image/scrollimg6.jpg';

const MobileProjects = () => {
    const { translations, currentLanguage } = useContext(LanguageContext);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

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

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Auto-slide functionality
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

    return (
        <div className="mobile-projects-page">
            {/* Header Section */}
            <header className="mobile-projects-header">
                <div className="header-content">
                    <RouterLink to="/" className="back-btn">
                        <FaArrowLeft />
                        <span>{translations.backToHome}</span>
                    </RouterLink>
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

            {/* Main Content */}
            <main className="mobile-projects-main">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="hero-content">
                        <h2 className="hero-title">
                            <span className="gradient-text">{translations.mobileProjectsSubtitle}</span> {translations.mobileProjectsTitle}
                        </h2>
                        <p className="hero-description">
                            {translations.mobileProjectsDescription}
                        </p>
                    </div>
                </section>

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
