// src/data/projects.js

// Import all project images from the assets folder.
import dashboardImage from '../assets/images/projects/dashboard.png';
import movieSearchAppImage from '../assets/images/projects/globeflix.png';
import githubProfileFinderImage from '../assets/images/projects/github-profile-finder.png';
import mealRecipeAppImage from '../assets/images/projects/yummyrecipeshub.png';
import qrCodeGeneratorImage from '../assets/images/projects/qr-code-generator.png';
import contactManagerImage from '../assets/images/projects/contact-manager.png';

/**
 * A simple auto-incrementing ID generator.
 * For a static, client-side dataset, this is a clean and reliable approach.
 */
let nextId = 1;
const generateId = () => nextId++;

/**
 * @typedef {Object} Project
 * @property {number} id - A unique, auto-incrementing identifier for the project.
 * @property {string} title - The title of the project.
 * @property {string} description - A brief description of the project.
 * @property {object} image - The imported image asset.
 * @property {string} liveUrl - The URL for the live demo of the project.
 * @property {string} repoUrl - The URL for the project's GitHub repository.
 * @property {string[]} technologies - An array of technologies used in the project.
 */

/** @type {Project[]} */
const projects = [
  {
    id: generateId(),
    title: 'Next.js Dashboard',
    description: 'A dynamic, feature-rich dashboard built with Next.js, showcasing server-side rendering (SSR) and static site generation (SSG) capabilities. It effectively demonstrates proficiency in modern full-stack development and robust data management.',
    image: dashboardImage,
    liveUrl: 'https://bonaventurecj.github.io/portfolio/', // Replace with the actual live URL
    repoUrl: 'https://github.com/BonaventureCJ/nextjs-dashboard', // Replace with the actual repo URL
    technologies: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: generateId(),
    title: 'Movie Search App',
    description: 'A responsive web application that allows users to search for movies using a third-party API. It features real-time search functionality and displays detailed information about each movie, enhancing user interaction.',
    image: movieSearchAppImage,
    liveUrl: 'https://bonaventurecj.github.io/portfolio/', // Replace with the actual live URL
    repoUrl: 'https://github.com/BonaventureCJ/movie-search-app', // Replace with the actual repo URL
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'API Integration']
  },
  {
    id: generateId(),
    title: 'GitHub Profile Finder',
    description: 'A tool for searching and viewing GitHub user profiles and their public repositories. It utilizes the GitHub API to fetch and display user data in a clean, interactive interface.',
    image: githubProfileFinderImage,
    liveUrl: 'https://bonaventurecj.github.io/portfolio/', // Replace with the actual live URL
    repoUrl: 'https://github.com/BonaventureCJ/github-profile-finder', // Replace with the actual repo URL
    technologies: ['React.js', 'JavaScript', 'REST API', 'CSS Modules']
  },
  {
    id: generateId(),
    title: 'Meal Recipe App',
    description: 'An application for discovering and exploring meal recipes. Users can search by ingredient or name and get detailed cooking instructions, demonstrating API handling and state management.',
    image: mealRecipeAppImage,
    liveUrl: 'https://bonaventurecj.github.io/portfolio/', // Replace with the actual live URL
    repoUrl: 'https://github.com/BonaventureCJ/meal-recipe-app', // Replace with the actual repo URL
    technologies: ['React.js', 'React Context API', 'JavaScript', 'Sass']
  },
  {
    id: generateId(),
    title: 'QR Code Generator',
    description: 'A utility app for generating QR codes from user-provided text or URLs. It features a simple, intuitive user interface and instant QR code generation, built with a focus on user experience.',
    image: qrCodeGeneratorImage,
    liveUrl: 'https://bonaventurecj.github.io/portfolio/', // Replace with the actual live URL
    repoUrl: 'https://github.com/BonaventureCJ/qr-code-generator', // Replace with the actual repo URL
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3']
  },
  {
    id: generateId(),
    title: 'Contact Manager',
    description: 'A simple contact management system that allows users to add, view, and delete contacts. This project is a practical demonstration of advanced state management and local storage integration.',
    image: contactManagerImage,
    liveUrl: 'https://bonaventurecj.github.io/portfolio/', // Replace with the actual live URL
    repoUrl: 'https://github.com/BonaventureCJ/contact-manager', // Replace with the actual repo URL
    technologies: ['React.js', 'JavaScript', 'React Context API', 'Local Storage']
  }
];

export default projects;

