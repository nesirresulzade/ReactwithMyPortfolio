import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import PhoneMockup from './PhoneMockup';
import ScreenshotGallery from './ScreenshotGallery';

const ProjectSection = ({ 
  title, 
  description, 
  images, 
  githubUrl, 
  demoUrl, 
  technologies = [],
  translations,
  index 
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '0px 0px -50px 0px'
  });

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);

      const handleChange = (e) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  const isReverse = index % 2 === 1;

  const sectionVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.15
      } 
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : (isReverse ? 40 : -40), y: prefersReducedMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } 
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : (isReverse ? -40 : 40), y: prefersReducedMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } 
    }
  };

  return (
    <motion.section 
      ref={ref}
      className={`project-section ${isReverse ? 'reverse' : ''}`}
      role="region"
      aria-labelledby={`project-title-${index}`}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <div className="project-container">
        <motion.div 
          className="project-content"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInLeft}
        >
          <h2 
            id={`project-title-${index}`}
            className="project-title"
          >
            {title}
          </h2>
          
          <p className="project-description">
            {description}
          </p>

          {technologies && technologies.length > 0 && (
            <motion.div 
              className="project-technologies"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2
                  }
                }
              }}
            >
              {technologies.map((tech, techIndex) => (
                <motion.span 
                  key={techIndex} 
                  className="tech-tag"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, y: 10 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      transition: {
                        duration: 0.4,
                        ease: [0.4, 0, 0.2, 1]
                      }
                    }
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          )}

          <motion.div 
            className="project-actions"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3
                }
              }
            }}
          >
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn project-btn-secondary"
                aria-label={`View ${title} on GitHub`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1]
                    }
                  }
                }}
              >
                <FaGithub />
                <span>{translations?.viewOnGitHub || 'View on GitHub'}</span>
              </motion.a>
            )}
            {demoUrl && (
              <motion.a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn project-btn-primary"
                aria-label={`View ${title} demo`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1]
                    }
                  }
                }}
              >
                <FaExternalLinkAlt />
                <span>{translations?.viewLiveDemo || 'View Live Demo'}</span>
              </motion.a>
            )}
          </motion.div>
        </motion.div>

        <motion.div 
          className="project-visual"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInRight}
        >
          <PhoneMockup index={index}>
            <ScreenshotGallery images={images} />
          </PhoneMockup>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default React.memo(ProjectSection);

