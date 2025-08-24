import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../style/mobileProjects.css';

const MobileProjects = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    // Mobile layihələr məlumatları
    const mobileProjects = [
        {
            id: 1,
            title: "Weather App",
            description: "React Native ilə hazırlanmış hava proqnozu tətbiqi. Real-time məlumatlar və gözəl UI.",
            image: "/src/image/musicMobilApp.png",
            technologies: ["React Native", "API", "UI/UX"],
            github: "#",
            live: "#"
        },
        {
            id: 2,
            title: "Music Player",
            description: "Mobil musiqi pleyer tətbiqi. Playlist idarəetməsi və audio kontrolları.",
            image: "/src/image/musicMobilApp.png",
            technologies: ["React Native", "Audio", "State Management"],
            github: "#",
            live: "#"
        },
        {
            id: 3,
            title: "Task Manager",
            description: "Gündəlik tapşırıqları idarə etmək üçün mobil tətbiq. Notification və reminder sistemi.",
            image: "/src/image/musicMobilApp.png",
            technologies: ["React Native", "Local Storage", "Notifications"],
            github: "#",
            live: "#"
        }
    ];

    useEffect(() => {
        setIsVisible(true);
    }, []);

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

    return (
        <div className="mobile-projects-page">
            {/* Header Section */}
            <header className="mobile-projects-header">
                <div className="header-content">
                    <RouterLink to="/" className="back-btn">
                        <FaArrowLeft />
                        <span>Ana Səhifə</span>
                    </RouterLink>
                    <h1 className="page-title">Mobil Layihələr</h1>
                    <div className="header-description">
                        <p>React Native və mobil texnologiyalar ilə hazırlanmış layihələr</p>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="mobile-projects-main">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="hero-content">
                        <h2 className="hero-title">
                            <span className="gradient-text">Mobil</span> Təcrübə
                        </h2>
                        <p className="hero-description">
                            Modern mobil tətbiqlər yaradırıq. Hər layihə öz hekayəsini danışır və 
                            istifadəçi təcrübəsini mərkəzə qoyur.
                        </p>
                    </div>
                </section>

                {/* Projects Slider Section */}
                <section className="projects-slider-section">
                    <div className="slider-container">
                        <div className="slider-header">
                            <h3 className="slider-title">Layihələr</h3>
                            <div className="slider-controls">
                                <button onClick={prevSlide} className="control-btn">
                                    <FaArrowLeft />
                                </button>
                                <button onClick={nextSlide} className="control-btn">
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>

                        <div className="slider-wrapper">
                            <div 
                                className="slider-track"
                                style={{
                                    transform: `translateX(-${currentSlide * 100}%)`
                                }}
                            >
                                {mobileProjects.map((project, index) => (
                                    <div key={project.id} className="slide">
                                        <div className="project-card">
                                            <div className="project-image-container">
                                                <img 
                                                    src={project.image} 
                                                    alt={project.title}
                                                    className="project-image"
                                                />
                                                <div className="project-overlay">
                                                    <div className="project-links">
                                                        <a href={project.github} className="project-link">
                                                            <FaGithub />
                                                        </a>
                                                        <a href={project.live} className="project-link">
                                                            <FaExternalLinkAlt />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="project-content">
                                                <h4 className="project-title">{project.title}</h4>
                                                <p className="project-description">{project.description}</p>
                                                <div className="project-technologies">
                                                    {project.technologies.map((tech, techIndex) => (
                                                        <span key={techIndex} className="tech-tag">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Slider Indicators */}
                        <div className="slider-indicators">
                            {mobileProjects.map((_, index) => (
                                <button
                                    key={index}
                                    className={`indicator ${index === currentSlide ? 'active' : ''}`}
                                    onClick={() => goToSlide(index)}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="features-section">
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">📱</div>
                            <h4>Responsive Design</h4>
                            <p>Bütün cihazlarda mükəmməl görünüş</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">⚡</div>
                            <h4>Performance</h4>
                            <p>Yüksək sürət və optimizasiya</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🎨</div>
                            <h4>Modern UI/UX</h4>
                            <p>Göz oxşayan və istifadəçi dostu</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default MobileProjects;
