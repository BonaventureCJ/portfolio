// src/data/projects/projects.js

import generateId from 'utils/helpers';
import { projectDescriptions } from './descriptions';
import { projectLinks } from './links';
import {
    portfolioImage,
    bonMartImage,
    mealRecipeAppImage,
    qrCodeGeneratorImage,
    githubProfileFinderImage,
    movieSearchAppImage,
    legacyPortfolioImage,
    dashboardImage,
    contactManagerImage,
} from './images';

/**
 * @typedef {Object} LinkData
 * @property {string} label - The visible text of the link.
 * @property {string} ariaLabel - The descriptive label for screen readers.
 * @property {string} url - The URL the link points to.
 */

/**
 * @typedef {'MVP' | 'In Development' | 'Prototype'} ProjectStatus
 */

/**
 * @typedef {Object} Project
 * @property {number} id - A unique, auto-incrementing identifier for the project.
 * @property {string} title - The title of the project.
 * @property {string | string[]} description - A brief description or array of paragraphs for the project.
 * @property {object} image - The imported image asset.
 * @property {LinkData[]} links - An array of link objects for the project.
 * @property {string[]} technologies - An array of technologies used in the project.
 * @property {boolean} isRecent - Indicates if the project is considered recent.
 * @property {boolean} isFeatured - Indicates if the project is featured on the homepage.
 * @property {boolean} isTutorialBased - Indicates if the project was built by following a tutorial.
 * @property {ProjectStatus} development_status - The current development status of the project (e.g., MVP, In Development).
 */

/** @type {Project[]} */
export const projects = [
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
        development_status: 'MVP',
    },
    {
        id: generateId(),
        title: 'BonMart',
        description: projectDescriptions.bonmart,
        image: bonMartImage,
        links: projectLinks.bonmart,
        technologies: ['Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'clsx', '@svgr/webpack', 'pnpm', 'ESLint', 'Node.js'],
        isRecent: true,
        isFeatured: true,
        isTutorialBased: false,
        development_status: 'In Development',
    },
    {
        id: generateId(),
        title: 'Yummy Recipes Hub',
        description: projectDescriptions.yummyRecipes,
        image: mealRecipeAppImage,
        links: projectLinks.yummyRecipes,
        technologies: ['React.js', 'REST API', 'React Context API', 'React Router', 'JavaScript', 'SCSS'],
        isRecent: false,
        isFeatured: false,
        isTutorialBased: false,
        development_status: 'MVP',
    },
    {
        id: generateId(),
        title: 'QR Code Generator',
        description: projectDescriptions.qrCode,
        image: qrCodeGeneratorImage,
        links: projectLinks.qrCode,
        technologies: ['React.js', 'API Integration', 'JavaScript', 'HTML5', 'SCSS'],
        isRecent: false,
        isFeatured: false,
        isTutorialBased: false,
        development_status: 'MVP',
    },
    {
        id: generateId(),
        title: 'GitHub Profile Viewer',
        description: projectDescriptions.githubProfile,
        image: githubProfileFinderImage,
        links: projectLinks.githubProfile,
        technologies: ['React.js', 'JavaScript', 'REST API', 'SCSS', 'HTML5', 'CSS3', 'React Icons'],
        isRecent: false,
        isFeatured: false,
        isTutorialBased: false,
        development_status: 'MVP',
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
        development_status: 'MVP',
    },
    {
        id: generateId(),
        title: 'Original Portfolio Project',
        description: projectDescriptions.legacyPortfolio,
        image: legacyPortfolioImage,
        links: projectLinks.legacyPortfolio,
        technologies: ['React.js', 'React Context API', 'React Router', 'JavaScript', 'SCSS', 'Bootstrap', 'React Icons'],
        isRecent: false,
        isFeatured: false,
        isTutorialBased: false,
        development_status: 'MVP',
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
        development_status: 'MVP',
    },
    {
        id: generateId(),
        title: 'Contact Manager',
        description: projectDescriptions.contactManager,
        image: contactManagerImage,
        links: projectLinks.contactManager,
        technologies: ['React.js', 'JavaScript', 'React Router', 'HTML5', 'CSS3'],
        isRecent: false,
        isFeatured: false,
        isTutorialBased: true,
        development_status: 'MVP',
    }
];
