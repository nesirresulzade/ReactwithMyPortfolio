import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../style/mobileProjects.css';

const Carousel = ({ 
    title, 
    images, 
    githubUrl, 
    demoUrl,
    autoSlideInterval = 3000,
    translations = {}
}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-slide functionality
    useEffect(() => {
        if (!isPaused && images && images.length > 0) {
            const interval = setInterval(() => {
                setCurrentSlide((prev) =>
                    prev === images.length - 1 ? 0 : prev + 1
                );
            }, autoSlideInterval);

            return () => clearInterval(interval);
        }
    }, [isPaused, images, autoSlideInterval]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const handleSliderHover = () => {
        setIsPaused(true);
    };

    const handleSliderLeave = () => {
        setIsPaused(false);
    };

    if (!images || images.length === 0) {
        return null;
    }

    return (
        <section className="projects-slider-section">
            <div 
                className="slider-container"
                onMouseEnter={handleSliderHover}
                onMouseLeave={handleSliderLeave}
            >
                <div className="slider-header">
                    <h3 className="slider-title slider-title-desktop">{title}</h3>
                </div>

                <div className="floating-images-container">
                    {images.map((project, index) => {
                        // Use project.id if available, otherwise use image src + index for unique key
                        const uniqueKey = project.id || `${project.image || project}-${index}`;
                        return (
                        <div
                            key={uniqueKey}
                            className={`floating-image ${index === currentSlide ? 'active' : ''}`}
                            style={{
                                transform: `translateX(${(index - currentSlide) * 100}%) scale(${index === currentSlide ? 1 : 0.8})`,
                                opacity: index === currentSlide ? 1 : 0.6,
                                zIndex: index === currentSlide ? 10 : 1
                            }}
                        >
                            <img
                                src={project.image}
                                alt={project.title || `Slide ${index + 1}`}
                                className="project-image"
                            />
                            {project.title && (
                                <div className="image-title">{project.title}</div>
                            )}
                        </div>
                        );
                    })}
                </div>

                {/* Navigation Dots */}
                <div className="navigation-dots">
                    {images.map((project, index) => {
                        // Use project.id or image src for stable keys
                        const uniqueKey = project.id || `${project.image || project}-dot-${index}`;
                        return (
                        <button
                            key={uniqueKey}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                        );
                    })}
                </div>

                {/* GitHub and Demo Buttons */}
                {(githubUrl || demoUrl) && (
                    <div className="action-buttons">
                        {githubUrl && (
                            <a 
                                href={githubUrl} 
                                className="action-btn github-btn" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <FaGithub />
                                <span>{translations.viewOnGitHub || 'View on GitHub'}</span>
                            </a>
                        )}
                        {demoUrl && (
                            <a 
                                href={demoUrl} 
                                className="action-btn demo-btn" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <FaExternalLinkAlt />
                                <span>{translations.viewLiveDemo || 'View Live Demo'}</span>
                            </a>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Carousel;

