import React from 'react';

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
    <article className="recent-project-card">
      <img 
        src={image} 
        alt={title} 
        loading="lazy" 
        width="300"
        height="180"
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="btn-group">
        {liveDemo && (
          <div className="btn">
            <a href={liveDemo} target="_blank" rel="noopener noreferrer" aria-label={`${liveLabel} for ${title}`}>
              {liveLabel}
            </a>
          </div>
        )}
        {github && (
          <div className="btn">
            <a href={github} target="_blank" rel="noopener noreferrer" aria-label={`${githubLabel} for ${title}`}>
              {githubLabel}
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

export default React.memo(ProjectCard);


