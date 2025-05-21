import React from 'react';
import '../style/experience.css';
import Mypp2 from '../image/mypp2.jpeg'
function Experience() {
    return (
        <>
            <section id="experience" className="experience">

                <h2 className="section-title">Experience</h2>

                <div className="experience-info">

                    <div className="grid">
                        <div className="grid-card">
                            <i className="bi bi-code-slash"></i>
                            <span>Frontend Development</span>
                            <h3>5 years</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, pariatur!</p>
                        </div>

                        <div className="grid-card">
                            <i className="bi bi-file-code"></i>
                            <span>Graphic Design</span>
                            <h3>3 years</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, pariatur!</p>
                        </div>

                        <div className="grid-card">
                            <i className="bi bi-file-code"></i>
                            <span>System Design</span>
                            <h3>2 years</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, pariatur!</p>
                        </div>

                        <div className="grid-card">
                            <i className="bi bi-list-ul"></i>
                            <span>Content Manager</span>
                            <h3>1 years</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, pariatur!</p>
                        </div>
                    </div>

                    <img src={Mypp2} alt="experience visual" />

                </div>
            </section>
        </>
    );
}

export default Experience;
