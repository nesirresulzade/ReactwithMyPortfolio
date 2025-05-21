import React from 'react'
import Project1 from '../image/projects-1.png'
import Project2 from '../image/projects-2.png'
import Project3 from '../image/projects-3.png'
import '../style/recent.css'
function RecentPro() {
  return (
    <>
      <section id="projects" className="projects">
        <h2 className="section-title">Recent Projects</h2>

        <div className="projects-grid">
          <div className="project-card">
            <img src={Project1} alt="Project X" />
            <h3>Projects X</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, odio!</p>
            <div className="btn-group">
              <div className="btn">
                <a href="https://nesirresulzade.github.io/WeatherApp/" target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
              <div className="btn">
                <a href="https://github.com/nesirresulzade/WeatherApp" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src={Project2} alt="Project Y" />
            <h3>Projects Y</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, odio!</p>
            <div className="btn-group">
              <div className="btn">
                <a href="https://nesirresulzade.github.io/HangMan/" target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
              <div className="btn">
                <a href="https://github.com/nesirresulzade/HangMan" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src={Project3} alt="Project Z" />
            <h3>Projects Z</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, odio!</p>
            <div className="btn-group">
              <div className="btn">
                <a href="https://nesirresulzade.github.io/BonusCard/" target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
              <div className="btn">
                <a href="https://github.com/nesirresulzade/BonusCard" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default RecentPro
