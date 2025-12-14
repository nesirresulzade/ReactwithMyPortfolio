import React, { useContext } from 'react';
import '../style/mobileProjects.css';
import { LanguageContext } from '../App';
import HeroSection from './HeroSection';
import ProjectSection from './ProjectSection';

// Import images
import img1 from '../image/scrollimg1.jpg';
import img2 from '../image/scrollimg2.jpg';
import img3 from '../image/scrollimg3.jpg';
import img4 from '../image/scrollimg4.jpg';
import img5 from '../image/scrollimg5.jpg';
import img6 from '../image/scrollimg6.jpg';

import img7 from "../image/TapGameimgs/tapgame1.jpg";
import img8 from "../image/TapGameimgs/tapgame2.jpg";
import img9 from "../image/TapGameimgs/tapgame3.jpg";
import img10 from "../image/TapGameimgs/tapgame4.jpg";
import img11 from "../image/TapGameimgs/tapgame5.jpg";
import img12 from "../image/TapGameimgs/tapgame6.jpg";
import img13 from "../image/TapGameimgs/tapgame7.jpg";

import img14 from "../image/FitnessImg/login.jpg";
import img15 from "../image/FitnessImg/sign.jpg";
import img16 from "../image/FitnessImg/home.jpg";
import img17 from "../image/FitnessImg/traning.jpg";
import img18 from "../image/FitnessImg/detailing-info.jpg";
import img19 from "../image/FitnessImg/profile.jpg";
import img20 from "../image/FitnessImg/detail.jpg";

const MobileProjects = () => {
    const { translations } = useContext(LanguageContext);

    const projects = [
        {
            title: translations.notesAppTitle,
            description: translations.notesAppDescription,
            images: [
                { id: 1, title: translations.notesApp, image: img1 },
                { id: 2, title: translations.notesAppLogin, image: img2 },
                { id: 3, title: translations.notesAppRules, image: img3 },
                { id: 4, title: translations.notesAppHome, image: img4 },
                { id: 5, title: translations.notesAppCardDetails, image: img5 },
                { id: 6, title: translations.notesAppProfile, image: img6 },
            ],
            githubUrl: "https://github.com/nesirresulzade/ReactNativeWithMobileApp",
            demoUrl: "https://expo.dev/artifacts/eas/bMgTJHVW2beFf3eLjmzcPe.apk",
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            title: translations.tapGameTitle,
            description: translations.tapGameDescription,
            images: [
                { id: 1, title: translations.tapGameLogin, image: img7 },
                { id: 2, title: translations.tapGameSignup, image: img8 },
                { id: 3, title: translations.tapGameHome, image: img9 },
                { id: 4, title: translations.tapGameProfile, image: img10 },
                { id: 5, title: translations.tapGameRules, image: img11 },
                { id: 6, title: translations.tapGameLeaderboard, image: img12 },
                { id: 7, title: translations.tapGameSearch, image: img13 },
            ],
            githubUrl: "https://github.com/nesirresulzade/TapGameMobileApp",
            demoUrl: "https://expo.dev/artifacts/eas/wp8zHKU2fPpbaMiAmgv8uk.apk",
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            title: translations.fitnessAppTitle,
            description: translations.fitnessAppDescription,
            images: [
                { id: 1, title: translations.fitnessAppLogin, image: img14 },
                { id: 2, title: translations.fitnessAppSignup, image: img15 },
                { id: 3, title: translations.fitnessAppHome, image: img16 },
                { id: 4, title: translations.fitnessAppWorkout, image: img17 },
                { id: 5, title: translations.fitnessAppProgress, image: img18 },
                { id: 6, title: translations.fitnessAppProfile, image: img19 },
                { id: 7, title: translations.fitnessAppSettings, image: img20 },
            ],
            githubUrl: "https://github.com/nesirresulzade/FitnessAppMobile",
            demoUrl: "https://expo.dev/artifacts/eas/wcvkRxttBA2kuLohw43G4D.apk",
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        }
    ];

    return (
        <div className="mobile-projects-page">
            <HeroSection translations={translations} />
            
            {projects.map((project, index) => (
                <ProjectSection
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    images={project.images}
                    githubUrl={project.githubUrl}
                    demoUrl={project.demoUrl}
                    technologies={project.technologies}
                    translations={translations}
                    index={index}
                />
            ))}
        </div>
    );
};

export default MobileProjects;
