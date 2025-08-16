import React from 'react';
import '../style/experience.css';
import Mypp2 from '../image/mypp2.jpeg'
function Experience() {
    return (
        <>
            <section id="experience" className="experience">
                <h2 className="section-title" data-aos="fade-down">Experience</h2>

                <div className="experience-info">
                    <div className="grid">
                        <div className="grid-card" data-aos="zoom-in" data-aos-delay="200">
                            <i className="bi bi-code-slash"></i>
                            <span>Frontend Development</span>
                            <h3>5 years</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, pariatur!</p>
                        </div>

                        <div className="grid-card" data-aos="zoom-in" data-aos-delay="400">
                            <i className="bi bi-file-code"></i>
                            <span>Graphic Design</span>
                            <h3>3 years</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, pariatur!</p>
                        </div>

                        <div className="grid-card" data-aos="zoom-in" data-aos-delay="600">
                            <i className="bi bi-file-code"></i>
                            <span>System Design</span>
                            <h3>2 years</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, pariatur!</p>
                        </div>

                        <div className="grid-card" data-aos="zoom-in" data-aos-delay="800">
                            <i className="bi bi-list-ul"></i>
                            <span>Content Manager</span>
                            <h3>1 years</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, pariatur!</p>
                        </div>
                    </div>

                    <img 
                        src={Mypp2} 
                        alt="experience visual" 
                        data-aos="fade-left"
                        data-aos-delay="1000"
                    />
                </div>
            </section>
        </>
    );
}

export default Experience;
