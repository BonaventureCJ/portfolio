import profilePic from 'assets/images/home/BonaventureCJUgwu.png';
import requestResume from 'assets/documents/request-resume.pdf';

import { yearsOfExperience } from 'utils/helpers';

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
    url: requestResume,
  },
  profileImage: {
    url: profilePic,
    alt: 'Bonaventure C.J. Ugwu profile picture',
  },
};
