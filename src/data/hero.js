import profilePic from 'assets/images/home/BonaventureCJUgwu.png';
import resumeRequest from 'assets/documents/resume-request.pdf';
import { calculateYearsOfExperience } from 'utils/helpers'; // Import the new function

// Define the starting year for your experience
const startYear = 2022;
const yearsOfExperience = calculateYearsOfExperience(startYear);

export const heroData = {
  name: 'Bonaventure C.J. Ugwu',
  title: 'Front-End Engineer (React.js | Next.js | TypeScript)',
  // Use a template literal to dynamically include the years of experience
  description:
    `Front-end Engineer with ${yearsOfExperience}+ years of experience building performant, user-focused web applications. Passionate about responsive design, clean code, and creating intuitive UIs.`,
  primaryCta: {
    label: 'View My Work',
    url: '#projects',
  },
  secondaryCta: {
    label: 'Download Resume',
    url: resumeRequest,
  },
  profileImage: {
    url: profilePic,
    alt: 'Bonaventure C.J. Ugwu profile picture',
  },
};
