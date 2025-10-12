// src/data/projects/projects.js
import generateId from 'utils/helpers';
import { projectDescriptions } from './descriptions';
import { projectLinks } from './links';
import {
    portfolioImage,
    mealRecipeAppImage,
    qrCodeGeneratorImage,
    githubProfileFinderImage,
    movieSearchAppImage,
    legacyPortfolioImage,
    dashboardImage,
    contactManagerImage,
} from './images';


const projects = [
    {
        id: generateId(),
        title: 'Personal Portfolio WebApp',
        description: projectDescriptions.portfolio,
        image: portfolioImage,
        links: projectLinks.portfolio,
        technologies: ['React.js', 'React Context API', 'React Router', 'JavaScript', 'SCSS', 'CSS Modules', 'Node.js'],
        isRecent: true,
        isFeatured: true,
        isTutorialBased: false,
    },
    {
        id: generateId(),
        title: 'Yummy Recipes Hub',
        description: projectDescriptions.yummyRecipes,
        image: mealRecipeAppImage,
        links: projectLinks.yummyRecipes,
        technologies: ['React.js', 'REST API', 'React Context API', 'React Router', 'JavaScript', 'SCSS'],
        isRecent: false,
        isFeatured: true,
        isTutorialBased: false,
    },
    {
        id: generateId(),
        title: 'QR Code Generator',
        description: projectDescriptions.qrCode,
        image: qrCodeGeneratorImage,
        links: projectLinks.qrCode,
        technologies: ['React.js', 'API Integration', 'JavaScript', 'HTML5', 'SCSS'],
        isRecent: false,
        isFeatured: true,
        isTutorialBased: false,
    },
    {
        id: generateId(),
        title: 'GitHub Profile Viewer',
        description: projectDescriptions.githubProfile,
        image: githubProfileFinderImage,
        links: projectLinks.githubProfile,
        technologies: ['React.js', 'JavaScript', 'REST API', 'SCSS', 'HTML5', 'CSS3', 'React Icons'],
        isRecent: false,
        isFeatured: true,
        isTutorialBased: false,
    },
    {
        id: generateId(),
        title: 'Movie Search App',
        description: projectDescriptions.movieSearch,
        image: movieSearchAppImage,
        links: projectLinks.movieSearch,
        technologies: ['React.js', 'JavaScript', 'API Integration', 'HTML5', 'SCSS'],
        isRecent: false,
        isFeatured: false,
        isTutorialBased: false,
    }, {
        id: generateId(),
        title: 'Original Portfolio Project',
        description: projectDescriptions.legacyPortfolio,
        image: legacyPortfolioImage,
        links: projectLinks.legacyPortfolio,
        technologies: ['React.js', 'React Context API', 'React Router', 'JavaScript', 'SCSS', 'Bootstrap', 'React Icons'],
        isRecent: false,
        isFeatured: false,
        isTutorialBased: false,
    },
    {
        id: generateId(),
        title: 'Next.js Dashboard',
        description: projectDescriptions.nextjsDashboard,
        image: dashboardImage,
        links: projectLinks.nextjsDashboard,
        technologies: ['Next.js', 'TypeScript', 'React.js', 'Tailwind CSS'],
        isRecent: false,
        isFeatured: false,
        isTutorialBased: true,
    }, {
        id: generateId(),
        title: 'Contact Manager',
        description: projectDescriptions.contactManager,
        image: contactManagerImage,
        links: projectLinks.contactManager,
        technologies: ['React.js', 'JavaScript', 'React Router', 'HTML5', 'CSS3'],
        isRecent: false,
        isFeatured: false,
        isTutorialBased: true,
    }
];

export default projects;
