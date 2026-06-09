import React, { useState, useEffect, useRef, useCallback, useContext } from 'react';
import { FaExternalLinkAlt, FaGithub, FaArrowLeft } from 'react-icons/fa';
import { BsMouse } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import styles from '../style/reelsProjects.module.css';

// Hra Images
import img1 from '../RealProjAllimgs/hraHome.png';
import img2 from '../RealProjAllimgs/ServicesPage.png';
import img3 from '../RealProjAllimgs/blogpage.png';
import img4 from '../RealProjAllimgs/aboutpage.png';

// Khazarsoft Images
import img5 from '../RealProjAllimgs/khaHome.png';
import img6 from '../RealProjAllimgs/khaPortfolio.png';
import img7 from '../RealProjAllimgs/khaServices.png';
import img8 from '../RealProjAllimgs/khaBlog.png';
import img9 from '../RealProjAllimgs/khazarsoftAbout.png';

// HRA Admin Panel Images
import img10 from "../RealProjAllimgs/hraAdminImages/Contry.png"
import img11 from "../RealProjAllimgs/hraAdminImages/univercity.png"
import img12 from "../RealProjAllimgs/hraAdminImages/contact.png"
import img13 from "../RealProjAllimgs/hraAdminImages/comment.png"

// Khazarsoft Admin Panel Images
import img14 from "../RealProjAllimgs/KhazAdminImages/portfolio.png"
import img15 from "../RealProjAllimgs/KhazAdminImages/Contact.png"
import img16 from "../RealProjAllimgs/KhazAdminImages/blog.png"
import img17 from "../RealProjAllimgs/KhazAdminImages/services.png"

const projectsList = [
    {
        id: 'hra',
        images: [img1, img2, img3, img4],
        logo: "https://api.hra.edu.az/uploads/settings/newlogo.png",
        techStack: ["React", "CSS", "Vite", "JavaScript", "Rest API"],
        liveLink: "https://hra.edu.az/",
        githubLink: "#",
        titleKey: "project1Title",
        subtitleKey: "project1Subtitle",
        descKey: "project1Desc",
        themeColor: "#0088ff", // Soft Blue
        shadowColor: "rgba(0, 136, 255, 0.4)"
    },
    {
        id: 'khazarsoft',
        images: [img5, img6, img7, img8, img9],
        logo: "https://r2.khazarsoft.az/uploads/settings/khazarsoft.png",
        techStack: ["React.js", "Tailwind CSS", "Redux Toolkit", "Framer Motion"],
        liveLink: "https://khazarsoft.az/",
        githubLink: "#",
        titleKey: "project2Title",
        subtitleKey: "project2Subtitle",
        descKey: "project2Desc",
        themeColor: "#8a2be2", // Purple-ish matching Khazarsoft vibes
        shadowColor: "rgba(138, 43, 226, 0.4)"
    },
    {
        id: 'hra-admin',
        images: [img10, img11, img12, img13],
        logo: "https://api.hra.edu.az/uploads/settings/newlogo.png",
        techStack: ["React", "Context API", "Axios", "Bootstrap"],
        liveLink: "https://admin.hra.edu.az/",
        githubLink: "#",
        titleKey: "project3Title",
        subtitleKey: "project3Subtitle",
        descKey: "project3Desc",
        themeColor: "#1e3a8a", // Darker blue
        shadowColor: "rgba(30, 58, 138, 0.4)"
    },
    {
        id: 'khazarsoft-admin',
        images: [img14, img15, img16, img17],
        logo: "https://r2.khazarsoft.az/uploads/settings/khazarsoft.png",
        techStack: ["React", "CSS Modules", "Chart.js", "Express integration"],
        liveLink: "#",
        githubLink: "#",
        titleKey: "project4Title",
        subtitleKey: "project4Subtitle",
        descKey: "project4Desc",
        themeColor: "#10b981", // Emerald
        shadowColor: "rgba(16, 185, 129, 0.4)"
    }
];

const ProjectSection = ({ project, isActive, translations }) => {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const [isDrawerOpen, setIsDrawerOpen] = useState(() => {
        if (typeof window !== 'undefined' && window.innerWidth <= 768) {
            return true; // Open by default on mobile
        }
        return false;
    });

    // Auto image carousel within each project
    useEffect(() => {
        if (!isActive) return;
        
        const interval = setInterval(() => {
            setCurrentImgIndex(prev => (prev + 1) % project.images.length);
        }, 3500);
        return () => clearInterval(interval);
    }, [isActive, project.images.length]);

    return (
        <section className={styles.projectSection}>
            {/* Full Screen Image Gallery acts as the background */}
            <motion.div 
                className={styles.imageGallery}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.8 }}
            >
                <AnimatePresence mode="wait">
                    <motion.img 
                        key={currentImgIndex}
                        src={project.images[currentImgIndex]}
                        alt={translations[project.titleKey]}
                        className={styles.carouselImage}
                        loading="lazy"
                        decoding="async"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                    />
                </AnimatePresence>
            </motion.div>

            {/* Subtle dim overlay */}
            <div className={styles.overlay}></div>

            {/* Tap-outside mobile backdrop */}
            <AnimatePresence>
                {isDrawerOpen && (
                    <motion.div 
                        className={styles.mobileBackdrop}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsDrawerOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Left Edge Drawer */}
            <div 
                className={`${styles.drawerContainer} ${isDrawerOpen ? styles.open : ''}`}
                onMouseEnter={() => setIsDrawerOpen(true)}
                onMouseLeave={() => setIsDrawerOpen(false)}
            >
                {/* Protrusion Tab */}
                <div 
                    className={styles.drawerTab} 
                    onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                >
                    <span className={styles.tabIcon}>ℹ</span>
                    <span className={styles.tabText}>{translations.realProjectsDetailsTab}</span>
                </div>

                {/* Drawer Content */}
                <div className={styles.drawerContent}>
                    <div className={styles.headerRow}>
                        {project.logo && <img src={project.logo} alt="logo" className={styles.logo} />}
                        <h2 className={styles.title}>{translations[project.titleKey]}</h2>
                    </div>
                    
                    <h3 className={styles.subtitle} style={{ color: project.themeColor }}>
                        {translations[project.subtitleKey]}
                    </h3>
                    
                    <p className={styles.description}>
                        {translations[project.descKey]}
                    </p>

                    <div className={styles.techStack}>
                        {project.techStack.map((tech, idx) => (
                            <span key={idx} className={styles.techBadge}>{tech}</span>
                        ))}
                    </div>

                    <div className={styles.actions}>
                        {project.liveLink !== "#" && (
                            <a 
                                href={project.liveLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className={`${styles.btn} ${styles.primaryBtn}`}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <FaExternalLinkAlt size={14} />
                                <span>{translations.realProjectsLiveDemo}</span>
                            </a>
                        )}
                        {project.githubLink !== "#" && (
                            <a 
                                href={project.githubLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className={`${styles.btn} ${styles.secondaryBtn}`}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <FaGithub size={18} />
                                <span>{translations.realProjectsRepository}</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
            
            {/* Scroll Indicator - Show only if not the last project */}
            <div className={styles.scrollIndicator}>
                <BsMouse className={styles.scrollIcon} />
                <span className={styles.scrollText}>{translations.realProjectsScroll}</span>
            </div>
        </section>
    );
};

const RealProjects = () => {
    const { translations } = useContext(LanguageContext);
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = useCallback(() => {
        const container = containerRef.current;
        if (!container) return;
        const index = Math.round(container.scrollTop / container.clientHeight);
        setActiveIndex(prev => prev !== index ? index : prev);
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        container.addEventListener('scroll', handleScroll, { passive: true });
        return () => container.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const scrollToProject = (index) => {
        if (!containerRef.current) return;
        containerRef.current.scrollTo({
            top: index * containerRef.current.clientHeight,
            behavior: 'smooth'
        });
    };

    return (
        <div className={styles.container} ref={containerRef}>
            {/* Premium Back Button instead of just X */}
            <button className={styles.backBtn} onClick={() => navigate('/')} aria-label={translations.realProjectsGoBack}>
                <FaArrowLeft size={16} aria-hidden="true" />
                <span>{translations.realProjectsGoBack}</span>
            </button>

            {/* Pagination Dots dynamically colored based on active project */}
            <div className={styles.progressContainer}>
                {projectsList.map((project, idx) => (
                    <button 
                        key={idx}
                        className={`${styles.progressDot} ${activeIndex === idx ? styles.active : ''}`}
                        onClick={() => scrollToProject(idx)}
                        aria-label={`Go to project ${idx + 1}`}
                        style={activeIndex === idx ? { 
                            backgroundColor: project.themeColor,
                            boxShadow: `0 0 10px ${project.shadowColor}`
                        } : {}}
                    />
                ))}
            </div>

            {/* Render Projects */}
            {projectsList.map((project, idx) => (
                <ProjectSection 
                    key={project.id} 
                    project={project} 
                    isActive={activeIndex === idx} 
                    translations={translations}
                />
            ))}
        </div>
    );
};

export default RealProjects;
