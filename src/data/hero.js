// src/components/Hero/data.js

import profilePic from 'assets/images/home/BonaventureCJUgwu.png'; // Update with your image path
import resumeRequest from 'assets/documents/resume-request.pdf'; // Update with your resume path

export const heroData = {
  name: 'Bonaventure C.J. Ugwu',
  title: 'Front-End Engineer (React.js | Next.js | TypeScript)',
  description:
    'Front-end Engineer with 3+ years of experience building performant, user-focused web applications. Passionate about responsive design, clean code, and creating intuitive UIs.',
  primaryCta: {
    label: 'View My Work',
    url: '#projects', // Or the actual path to your projects page
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
