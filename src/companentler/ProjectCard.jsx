import React from 'react';

function ProjectCard({
  image,
  title,
  description,
  liveDemo,
  github,
  liveLabel = 'Live Demo',
  githubLabel = 'GitHub',
  delay = 0,
}) {
  return (
    <div
      className="recent-project-card"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <img src={image} alt={title} loading="lazy" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="btn-group">
        {liveDemo && (
          <div className="btn">
            <a href={liveDemo} target="_blank" rel="noopener noreferrer">
              {liveLabel}
            </a>
          </div>
        )}
        {github && (
          <div className="btn">
            <a href={github} target="_blank" rel="noopener noreferrer">
              {githubLabel}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default React.memo(ProjectCard);


