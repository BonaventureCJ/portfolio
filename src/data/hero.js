// heroData.js

import profilePic from 'assets/images/home/BonaventureCJUgwu.png';
import requestResume from 'assets/documents/request-resume.pdf';

export const heroData = {
  name: 'Bonaventure C.J. Ugwu',
  title: 'Front-End Engineer (React.js | Next.js | TypeScript)',
  description:
    'Front-end Developer and Open-Source Contributor talented in building performant, maintainable and scalable web applications using React.js, Next.js, and TypeScript.',
  primaryCta: {
    label: "View My Work",
    ariaLabel: "Navigate to Bonaventure's public projects page", // Add a more descriptive accessible name
    title: "Navigate to Bonaventure's public projects page",
    url: '/projects',
  },
  secondaryCta: {
    label: "Download Resume",
    ariaLabel: "Download Bonaventure's resume in PDF format", // Add a more descriptive accessible name
    title: "Download Bonaventure's resume (PDF)",
    url: requestResume,
  },
  profileImage: {
    url: profilePic,
    alt: 'Bonaventure C.J. Ugwu profile picture',
  },
};
