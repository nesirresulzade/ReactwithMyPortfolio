import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../style/SliderComponent.css';

const SliderComponent = ({ images, titles }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);

    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const handleSlideChange = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="coverflow-carousel-container">
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                interval={3000}
                onChange={handleSlideChange}
                selectedItem={currentIndex}
                transitionTime={800}
                swipeable={true}
                emulateTouch={true}
                className="coverflow-carousel"
                centerMode={false}
                centerSlidePercentage={100}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`coverflow-slide ${index === currentIndex ? "active" : ""}`}
                    >
                        <img 
                            src={image} 
                            alt={titles?.[index] || `Image ${index + 1}`} 
                            className="coverflow-image"
                        />
                    </div>
                ))}
            </Carousel>

            {/* Navigation dots */}
            <div className="coverflow-navigation">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`coverflow-dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default SliderComponent;
