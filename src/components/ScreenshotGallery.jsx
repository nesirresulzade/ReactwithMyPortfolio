import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScreenshotGallery = ({ images, autoAdvanceInterval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    if (!isPaused && images && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, autoAdvanceInterval);

      return () => clearInterval(interval);
    }
  }, [isPaused, images, autoAdvanceInterval]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrevious();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!images || images.length === 0) return null;

  return (
    <div 
      className="screenshot-gallery"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={images[currentIndex].id || images[currentIndex].image || currentIndex}
          src={images[currentIndex].image}
          alt={images[currentIndex].title || `Screenshot ${currentIndex + 1}`}
          className="screenshot-image"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={prefersReducedMotion ? false : { opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          loading="lazy"
        />
      </AnimatePresence>

      {images.length > 1 && (
        <div className="screenshot-dots" aria-label="Screenshot navigation">
          {images.map((image, index) => (
            <button
              key={image.id || image.image || index}
              className={`screenshot-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to screenshot ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default React.memo(ScreenshotGallery);

