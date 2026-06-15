import React from 'react';
import { motion } from 'framer-motion';

function ProjectCard({
  image,
  title,
  description,
  liveDemo,
  github,
  liveLabel = 'Live Demo',
  githubLabel = 'GitHub',
}) {
  return (
    <motion.article 
      className="project-card-v2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -10 }}
    >
      <div className="card-image-container">
        <img 
          src={image} 
          alt={title} 
          loading="lazy" 
        />
        <div className="card-overlay">
          <div className="overlay-links">
            {liveDemo && (
              <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="Live Demo">
                <i className="bi bi-eye"></i>
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="GitHub">
                <i className="bi bi-github"></i>
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        
        <div className="card-footer">
          {liveDemo && (
            <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="primary-link">
              {liveLabel} <i className="bi bi-arrow-up-right"></i>
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="secondary-link">
              <i className="bi bi-github"></i>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default React.memo(ProjectCard);



