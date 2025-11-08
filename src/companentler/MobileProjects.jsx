import React, { useContext } from 'react';
import '../style/mobileProjects.css';
import { LanguageContext } from '../App';
import Carousel from './Carousel';
// Import images instead of using absolute '/src/...' paths so they work in production builds
import img1 from '../image/scrollimg1.jpg';
import img2 from '../image/scrollimg2.jpg';
import img3 from '../image/scrollimg3.jpg';
import img4 from '../image/scrollimg4.jpg';
import img5 from '../image/scrollimg5.jpg';
import img6 from '../image/scrollimg6.jpg';

// Tap Game Imgs
import img7 from "../image/TapGameimgs/tapgame1.jpg"; // Login page
import img8 from "../image/TapGameimgs/tapgame2.jpg"; // sigin in page
import img9 from "../image/TapGameimgs/tapgame3.jpg"; // home page
import img10 from "../image/TapGameimgs/tapgame4.jpg"; // Profile page
import img11 from "../image/TapGameimgs/tapgame5.jpg"; // Rules page
import img12 from "../image/TapGameimgs/tapgame6.jpg"; // Leaderboard page
import img13 from "../image/TapGameimgs/tapgame7.jpg"; // player search page

// Fitness App Imgs
import img14 from "../image/FitnessImg/login.jpg"; // Fitness App Login
import img15 from "../image/FitnessImg/sign.jpg"; // Fitness App Signup
import img16 from "../image/FitnessImg/home.jpg"; // Fitness App Home
import img17 from "../image/FitnessImg/traning.jpg"; // Fitness App Workout
import img18 from "../image/FitnessImg/detailing-info.jpg"; // Fitness App Progress
import img19 from "../image/FitnessImg/profile.jpg"; // Fitness App Profile
import img20 from "../image/FitnessImg/detail.jpg"; // Fitness App Settings


const MobileProjects = () => {
    const { translations, currentLanguage } = useContext(LanguageContext);

    // Mobile layihələr məlumatları
    const mobileProjects = [
        {
            id: 1,
            title: translations.notesApp,
            description: translations.notesAppDescription,
            image: img1,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            id: 2,
            title: translations.notesAppLogin,
            description: translations.notesAppDescription,
            image: img2,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            id: 3,
            title: translations.notesAppRules,
            description: translations.notesAppDescription,
            image: img3,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            id: 4,
            title: translations.notesAppHome,
            description: translations.notesAppDescription,
            image: img4,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            id: 5,
            title: translations.notesAppCardDetails,
            description: translations.notesAppDescription,
            image: img5,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            id: 6,
            title: translations.notesAppProfile,
            description: translations.notesAppDescription,
            image: img6,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        }
    ];

    // Tap Game layihəsi məlumatları
    const tapGameProjects = [
        {
            id: 1,
            title: translations.tapGameLogin,
            description: translations.tapGameDescription,
            image: img7,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            id: 2,
            title: translations.tapGameSignup,
            description: translations.tapGameDescription,
            image: img8,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            id: 3,
            title: translations.tapGameHome,
            description: translations.tapGameDescription,
            image: img9,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            id: 4,
            title: translations.tapGameProfile,
            description: translations.tapGameDescription,
            image: img10,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            id: 5,
            title: translations.tapGameRules,
            description: translations.tapGameDescription,
            image: img11,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            id: 6,
            title: translations.tapGameLeaderboard,
            description: translations.tapGameDescription,
            image: img12,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            id: 7,
            title: translations.tapGameSearch,
            description: translations.tapGameDescription,
            image: img13,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        }
    ];

    // Fitness App layihəsi məlumatları
    const fitnessAppProjects = [
        {
            id: 1,
            title: translations.fitnessAppLogin,
            description: translations.fitnessAppDescription,
            image: img14,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            id: 2,
            title: translations.fitnessAppSignup,
            description: translations.fitnessAppDescription,
            image: img15,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            id: 3,
            title: translations.fitnessAppHome,
            description: translations.fitnessAppDescription,
            image: img16,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            id: 4,
            title: translations.fitnessAppWorkout,
            description: translations.fitnessAppDescription,
            image: img17,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            id: 5,
            title: translations.fitnessAppProgress,
            description: translations.fitnessAppDescription,
            image: img18,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            id: 6,
            title: translations.fitnessAppProfile,
            description: translations.fitnessAppDescription,
            image: img19,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        },
        {
            id: 7,
            title: translations.fitnessAppSettings,
            description: translations.fitnessAppDescription,
            image: img20,
            technologies: [translations.reactNative, translations.localStorage, translations.uiux]
        }
    ];


    return (
        <div className="mobile-projects-page">
            {/* Header Section */}
            <header className="mobile-projects-header">
                <div className="header-content">
                    <h1 className="page-title">{translations.mobileProjectsTitle}</h1>
                    <div className="header-description">
                        <p>{translations.mobileProjectsDescription}</p>
                    </div>
                </div>
            </header>

            {/* Notes App Carousel */}
            <Carousel
                title={translations.notesAppTitle}
                images={mobileProjects}
                githubUrl="https://github.com/nesirresulzade/ReactNativeWithMobileApp"
                demoUrl="https://expo.dev/artifacts/eas/bMgTJHVW2beFf3eLjmzcPe.apk"
                autoSlideInterval={3000}
                translations={translations}
            />

            {/* Tap Game Carousel */}
            <Carousel
                title={translations.tapGameTitle}
                images={tapGameProjects}
                githubUrl="https://github.com/nesirresulzade/TapGameMobileApp"
                demoUrl="https://expo.dev/artifacts/eas/wp8zHKU2fPpbaMiAmgv8uk.apk"
                autoSlideInterval={3000}
                translations={translations}
            />

            {/* Fitness App Carousel */}
            <Carousel
                title={translations.fitnessAppTitle}
                images={fitnessAppProjects}
                githubUrl="https://github.com/nesirresulzade/FitnessAppMobile"
                demoUrl="https://expo.dev/artifacts/eas/wcvkRxttBA2kuLohw43G4D.apk"
                autoSlideInterval={3000}
                translations={translations}
            />

            {/* Main Content */}
            <main className="mobile-projects-main">
                {/* Features Section */}
                <section className="features-section">
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">📱</div>
                            <h4>{translations.responsiveDesign}</h4>
                            <p>{translations.responsiveDesignDesc}</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">⚡</div>
                            <h4>{translations.performance}</h4>
                            <p>{translations.performanceDesc}</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🎨</div>
                            <h4>{translations.modernUI}</h4>
                            <p>{translations.modernUIDesc}</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default MobileProjects;
