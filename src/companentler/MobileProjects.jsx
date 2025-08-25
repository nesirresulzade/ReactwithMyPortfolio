import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../style/mobileProjects.css';

const MobileProjects = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    // Mobile layihələr məlumatları
    const mobileProjects = [
        {
            id: 1,
            title: "Qeydlerim / Qeydiyyat",
            description: "Mobil qeyd tətbiqi. Gündəlik qeydləri idarə etmək üçün sadə və funksional tətbiq.",
            image: "/src/image/scrollimg1.jpg",
            technologies: ["React Native", "Local Storage", "UI/UX"]
        },
        {
            id: 2,
            title: "Qeydlerim / Giriş",
            description: "Mobil qeyd tətbiqi. Gündəlik qeydləri idarə etmək üçün sadə və funksional tətbiq.",
            image: "/src/image/scrollimg2.jpg",
            technologies: ["React Native", "Local Storage", "UI/UX"]
        },
        {
            id: 3,
            title: "Qeydlerim / Qaydalar",
            description: "Mobil qeyd tətbiqi. Gündəlik qeydləri idarə etmək üçün sadə və funksional tətbiq.",
            image: "/src/image/scrollimg3.jpg",
            technologies: ["React Native", "Local Storage", "UI/UX"]
        },
        {
            id: 4,
            title: "Qeydlerim / Əsas Səhifə",
            description: "Mobil qeyd tətbiqi. Gündəlik qeydləri idarə etmək üçün sadə və funksional tətbiq.",
            image: "/src/image/scrollimg4.jpg",
            technologies: ["React Native", "Local Storage", "UI/UX"]
        },
        {
            id: 5,
            title: "Qeydlerim / Kart Detallar",
            description: "Mobil qeyd tətbiqi. Gündəlik qeydləri idarə etmək üçün sadə və funksional tətbiq.",
            image: "/src/image/scrollimg5.jpg",
            technologies: ["React Native", "Local Storage", "UI/UX"]
        },
        {
            id: 6,
            title: "Qeydlerim / Profile",
            description: "Mobil qeyd tətbiqi. Gündəlik qeydləri idarə etmək üçün sadə və funksional tətbiq.",
            image: "/src/image/scrollimg6.jpg",
            technologies: ["React Native", "Local Storage", "UI/UX"]
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
                        <span>Ana Səhifə</span>
                    </RouterLink>
                    <h1 className="page-title">Mobil Layihələr</h1>
                    <div className="header-description">
                        <p>React Native və mobil texnologiyalar ilə hazırlanmış layihələr</p>
                    </div>
                </div>
            </header>

            {/* Projects Slider Section - Moved to top */}
            <section className="projects-slider-section">
                <div className="slider-container">
                    <div className="slider-header">
                        <h3 className="slider-title">Qeydlerim App</h3>
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
                        <a href="https://github.com" className="action-btn github-btn" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                            <span>GitHub</span>
                        </a>
                        <a href="https://example.com" className="action-btn demo-btn" target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt />
                            <span>Demo</span>
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
                            <span className="gradient-text">Mobil</span> Təcrübə
                        </h2>
                        <p className="hero-description">
                            Modern mobil tətbiqlər yaradırıq. Hər layihə öz hekayəsini danışır və 
                            istifadəçi təcrübəsini mərkəzə qoyur.
                        </p>
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
