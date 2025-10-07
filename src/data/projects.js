// src/data/projects.js

// Import all project images from the assets folder.
import portfolio from 'assets/images/projects/portfolio.png';
import mealRecipeAppImage from 'assets/images/projects/yummyrecipeshub.png';
import qrCodeGeneratorImage from 'assets/images/projects/qr-code-generator.png';
import githubProfileFinderImage from 'assets/images/projects/github-profile-finder.png';
import movieSearchAppImage from 'assets/images/projects/globeflix.png';
import contactManagerImage from 'assets/images/projects/contact-manager.png';
import dashboardImage from 'assets/images/projects/dashboard.png';

import generateId from 'utils/helpers';

/**
 * @typedef {Object} LinkData
 * @property {string} label - The visible text of the link.
 * @property {string} ariaLabel - The descriptive label for screen readers.
 * @property {string} url - The URL the link points to.
 */

/**
 * @typedef {Object} Project
 * @property {number} id - A unique, auto-incrementing identifier for the project.
 * @property {string} title - The title of the project.
 * @property {string} description - A brief description of the project.
 * @property {object} image - The imported image asset.
 * @property {LinkData[]} links - An array of link objects for the project.
 * @property {string[]} technologies - An array of technologies used in the project.
 * @property {boolean} isRecent - Indicates if the project is considered recent.
 * @property {boolean} isFeatured - Indicates if the project is featured on the homepage.
 * @property {boolean} isTutorialBased - Indicates if the project was built by following a tutorial.
 */

/** @type {Project[]} */
const projects = [
  {
    id: generateId(),
    title: 'Personal Portfolio WebApp',
    description: 'A modern, responsive portfolio website built with React.js and Sass. It features smooth animations, a dark mode toggle, and showcases my projects and skills effectively.',
    image: portfolio,
    links: [
      {
        label: 'View Live',
        ariaLabel: 'View a live demo of the Personal Portfolio WebApp',
        url: 'https://bonaventurecj.github.io/portfolio/',
      },
      {
        label: 'View Code',
        ariaLabel: 'View the source code for the Personal Portfolio WebApp on GitHub',
        url: 'https://github.com/BonaventureCJ/portfolio',
      },
    ],
    technologies: ['React.js', 'React Context API', 'React Router', 'JavaScript', 'WCAG', 'SEO', 'Responsive Design', 'SCSS'],
    isRecent: true,
    isFeatured: false,
    isTutorialBased: false,
  },
  {
    id: generateId(),
    title: 'Yummy Recipes Hub',
    description: 'An application for discovering, exploring and managing meal recipes. Users can search by ingredient or name and get detailed cooking instructions, as well as save their favourite recipes; demonstrating API handling and state management.',
    image: mealRecipeAppImage,
    links: [
      {
        label: 'View Live',
        ariaLabel: 'View a live demo of the Yummy Recipes Hub',
        url: 'https://bonaventurecj.github.io/yummy-recipes-hub',
      },
      {
        label: 'View Code',
        ariaLabel: 'View the source code for Yummy Recipes Hub on GitHub',
        url: 'https://github.com/BonaventureCJ/yummy-recipes-hub',
      },
    ],
    technologies: ['React.js', 'REST API', 'React Context API', 'React Router', 'JavaScript', 'SCSS'],
    isRecent: false,
    isFeatured: true,
    isTutorialBased: false,
  },
  {
    id: generateId(),
    title: 'QR Code Generator',
    description: 'A utility app for generating and downloading QR codes from user-provided text or URLs. It features a simple, intuitive user interface and instant QR code generation, built with a focus on user experience.',
    image: qrCodeGeneratorImage,
    links: [
      {
        label: 'View Live',
        ariaLabel: 'View a live demo of the QR Code Generator',
        url: 'https://bonaventurecj.github.io/qr-code-generator/',
      },
      {
        label: 'View Code',
        ariaLabel: 'View the source code for the QR Code Generator on GitHub',
        url: 'https://github.com/BonaventureCJ/qr-code-generator',
      },
    ],
    technologies: ['React.js', 'API Integration', 'JavaScript', 'HTML5', 'SCSS'],
    isRecent: false,
    isFeatured: true,
    isTutorialBased: false,
  },
  {
    id: generateId(),
    title: 'GitHub Profile Viewer',
    description: 'A tool for searching and viewing GitHub user profiles and their public repositories. It utilizes the GitHub API to fetch and display user data in a clean, interactive interface.',
    image: githubProfileFinderImage,
    links: [
      {
        label: 'View Live',
        ariaLabel: 'View a live demo of the GitHub Profile Viewer',
        url: 'https://bonaventurecj.github.io/github-profile-locator/',
      },
      {
        label: 'View Code',
        ariaLabel: 'View the source code for the GitHub Profile Viewer on GitHub',
        url: 'https://github.com/BonaventureCJ/github-profile-locator',
      },
    ],
    technologies: ['React.js', 'JavaScript', 'REST API', 'SCSS', 'HTML5', 'CSS3', 'React Icons'],
    isRecent: false,
    isFeatured: true,
    isTutorialBased: false,
  },
  {
    id: generateId(),
    title: 'Movie Search App',
    description: 'A responsive web application that allows users to search for movies using a third-party API. It features real-time search functionality and displays detailed information about each movie, enhancing user interaction.',
    image: movieSearchAppImage,
    links: [
      {
        label: 'View Live',
        ariaLabel: 'View a live demo of the Movie Search App (Globeflix)',
        url: 'https://bonaventurecj.github.io/globeflix/',
      },
      {
        label: 'View Code',
        ariaLabel: 'View the source code for the Movie Search App (Globeflix) on GitHub',
        url: 'https://github.com/BonaventureCJ/globeflix',
      },
    ],
    technologies: ['React.js', 'JavaScript', 'API Integration', 'HTML5', 'SCSS'],
    isRecent: false,
    isFeatured: false,
    isTutorialBased: false,
  },
  {
    id: generateId(),
    title: 'Contact Manager',
    description: 'A simple contact management system that allows users to add, view, and delete contacts. This project is a practical demonstration of routing, advanced state management and local storage integration.',
    image: contactManagerImage,
    links: [
      {
        label: 'View Live',
        ariaLabel: 'View a live demo of the Contact Manager application',
        url: 'https://contact-manager-bona.vercel.app/',
      },
      {
        label: 'View Code',
        ariaLabel: 'View the source code for the Contact Manager on GitHub',
        url: 'https://github.com/BonaventureCJ/contact-manager',
      },
    ],
    technologies: ['React.js', 'JavaScript', 'React Router', 'HTML5', 'CSS3'],
    isRecent: false,
    isFeatured: false,
    isTutorialBased: true,
  },
  {
    id: generateId(),
    title: 'Next.js Dashboard',
    description: 'A dynamic, feature-rich dashboard built with Next.js, showcasing server-side rendering (SSR) and static site generation (SSG) capabilities. It effectively demonstrates proficiency in modern full-stack development and robust data management.',
    image: dashboardImage,
    links: [
      {
        label: 'View Live',
        ariaLabel: 'View a live demo of the Next.js Dashboard',
        url: 'https://bonaventure-dashboard.vercel.app/',
      },
      {
        label: 'View Code',
        ariaLabel: 'View the source code for the Next.js Dashboard on GitHub',
        url: 'https://github.com/BonaventureCJ/nextjs-dashboard',
      },
    ],
    technologies: ['Next.js', 'TypeScript', 'React.js', 'Tailwind CSS'],
    isRecent: false,
    isFeatured: false,
    isTutorialBased: true,
  }
];

export default projects;
