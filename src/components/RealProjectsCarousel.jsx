import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../style/realProjectsCarousel.css';

const RealProjectsCarousel = ({ 
    images = [], 
    titles = [],
    autoPlay = true,
    autoPlayInterval = 4000
}) => {
    const [currentIndex, setCurrentIndex] = useState(images.length);
    const [isPaused, setIsPaused] = useState(false);
    const [visibleCards, setVisibleCards] = useState(3);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const carouselRef = useRef(null);
    const intervalRef = useRef(null);
    const isJumpingRef = useRef(false);
    const prefersReducedMotion = useRef(
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );

    // Responsive breakpoints - Change these to adjust card visibility
    const BREAKPOINTS = {
        desktop: 1280,  // >=1280px: 3 cards
        tablet: 1024,   // 1024-1279px: 2.5 cards
        mobile: 768     // 768-1023px: 2 cards, <768px: 1 card
    };

    // Calculate visible cards based on viewport width
    useEffect(() => {
        const updateVisibleCards = () => {
            const width = window.innerWidth;
            if (width >= BREAKPOINTS.desktop) {
                setVisibleCards(3);
            } else if (width >= BREAKPOINTS.tablet) {
                setVisibleCards(2.5);
            } else if (width >= BREAKPOINTS.mobile) {
                setVisibleCards(2);
            } else {
                setVisibleCards(1);
            }
        };

        updateVisibleCards();
        window.addEventListener('resize', updateVisibleCards);
        return () => window.removeEventListener('resize', updateVisibleCards);
    }, []);

    // Infinite loop: Clone items for seamless looping
    const totalItems = images.length;
    const clonedItems = totalItems > 0 ? [...images, ...images, ...images] : [];
    const clonedTitles = titles.length > 0 ? [...titles, ...titles, ...titles] : [];
    const startIndex = totalItems; 

    // Navigation functions
    const goToNext = useCallback(() => {
        if (totalItems === 0) return;
        setCurrentIndex((prev) => prev + 1);
    }, [totalItems]);

    const goToPrevious = useCallback(() => {
        if (totalItems === 0) return;
        setCurrentIndex((prev) => prev - 1);
    }, [totalItems]);

    const goToSlide = useCallback((index) => {
        if (totalItems === 0) return;
        setCurrentIndex(startIndex + index);
    }, [totalItems, startIndex]);

    // Handle seamless jump at boundaries
    useEffect(() => {
        if (totalItems === 0) return;

        let jumpTimer;
        // If we reach the end of the cloned sets, jump back to middle set
        if (currentIndex >= startIndex + totalItems) {
            jumpTimer = setTimeout(() => {
                isJumpingRef.current = true;
                setCurrentIndex(startIndex);
            }, 600); 
        }

        // If we reach the start, jump to middle set
        if (currentIndex < startIndex - 1) {
            jumpTimer = setTimeout(() => {
                isJumpingRef.current = true;
                setCurrentIndex(startIndex + totalItems - 1);
            }, 600);
        }

        return () => {
            if (jumpTimer) clearTimeout(jumpTimer);
        };
    }, [currentIndex, totalItems, startIndex]);

    // Auto-play functionality
    useEffect(() => {
        if (!autoPlay || isPaused || prefersReducedMotion.current || totalItems === 0) {
            return;
        }

        intervalRef.current = setInterval(() => {
            goToNext();
        }, autoPlayInterval);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [autoPlay, isPaused, autoPlayInterval, totalItems, goToNext]);

    // Smooth scroll to active card
    useEffect(() => {
        if (!carouselRef.current || totalItems === 0) return;

        const containerWidth = carouselRef.current.offsetWidth;
        const cardGap = 24; 
        const cardWidth = (containerWidth / visibleCards) - (cardGap * (visibleCards - 1) / visibleCards);
        const scrollPosition = currentIndex * (cardWidth + cardGap);
        
        if (prefersReducedMotion.current || isJumpingRef.current) {
            carouselRef.current.style.scrollBehavior = 'auto';
            carouselRef.current.scrollLeft = scrollPosition;
            if (isJumpingRef.current) {
                isJumpingRef.current = false;
                // Restore smooth scroll for future interactions
                setTimeout(() => {
                    if (carouselRef.current) {
                        carouselRef.current.style.scrollBehavior = 'smooth';
                    }
                }, 50);
            }
        } else {
            carouselRef.current.style.scrollBehavior = 'smooth';
            carouselRef.current.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        }
    }, [currentIndex, visibleCards, totalItems]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (totalItems === 0) return;
            
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                goToPrevious();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                goToNext();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [goToNext, goToPrevious, totalItems]);

    // Touch swipe handlers
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            goToNext();
        } else if (isRightSwipe) {
            goToPrevious();
        }
    };

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    const handleFocus = () => {
        setIsPaused(true);
    };

    const handleBlur = () => {
        setIsPaused(false);
    };

    if (totalItems === 0) {
        return null;
    }

    // Calculate active slide index for dots (0 to totalItems - 1)
    const activeSlideIndex = ((currentIndex - startIndex) % totalItems + totalItems) % totalItems;

    return (
        <div 
            className="real-projects-carousel"
            role="region"
            aria-label="Projects carousel"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            {/* Navigation Buttons */}
            <button
                className="carousel-btn carousel-btn-prev"
                onClick={goToPrevious}
                aria-label="Previous slide"
                aria-controls="carousel-track"
                onFocus={handleFocus}
                onBlur={handleBlur}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6"/>
                </svg>
            </button>

            <button
                className="carousel-btn carousel-btn-next"
                onClick={goToNext}
                aria-label="Next slide"
                aria-controls="carousel-track"
                onFocus={handleFocus}
                onBlur={handleBlur}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6"/>
                </svg>
            </button>

            {/* Carousel Track */}
            <div 
                className="carousel-track"
                id="carousel-track"
                ref={carouselRef}
                style={{
                    '--visible-cards': visibleCards,
                    '--card-gap': '24px'
                }}
            >
                {clonedItems.map((image, index) => {
                    const title = clonedTitles[index] || `Slide ${index + 1}`;
                    const isActive = index === currentIndex;
                    // Only render images near the current index for better performance
                    const distance = Math.abs(index - currentIndex);
                    const shouldRender = distance <= Math.ceil(visibleCards) + 1;
                    // Unique key: use image src + index for stable keys in infinite loop
                    const uniqueKey = `${typeof image === 'string' ? image : image.src || image}-${index}`;
                    
                    return (
                        <div
                            key={uniqueKey}
                            className={`carousel-card ${isActive ? 'active' : ''}`}
                            role="group"
                            aria-roledescription="slide"
                            aria-label={`Slide ${(index % totalItems) + 1} of ${totalItems}`}
                        >
                            <div className="card-image-wrapper">
                                {shouldRender ? (
                                    <img
                                        src={image}
                                        alt={title}
                                        loading={distance <= 1 ? "eager" : "lazy"}
                                        className="card-image"
                                    />
                                ) : (
                                    <div className="card-image" style={{ backgroundColor: '#f0f0f0' }} />
                                )}
                            </div>
                            {title && (
                                <div className="card-title">{title}</div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Pagination Dots */}
            <div className="carousel-dots" role="tablist" aria-label="Slide indicators">
                {images.map((image, index) => {
                    // Use image src or id for stable keys
                    const uniqueKey = typeof image === 'string' ? image : (image.id || image.src || `dot-${index}`);
                    return (
                    <button
                        key={uniqueKey}
                        className={`carousel-dot ${index === activeSlideIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        aria-pressed={index === activeSlideIndex}
                        role="tab"
                        tabIndex={index === activeSlideIndex ? 0 : -1}
                    />
                    );
                })}
            </div>
        </div>
    );
};

export default RealProjectsCarousel;

