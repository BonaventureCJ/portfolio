// src/data/about.js
import { yearsOfExperience } from 'utils/helpers';

// Named export is used because of this is a shared data source for About Page and About Preview. This approach maximizes consistency, searchability, and ease of automated refactoring especially across a large, collaborative codebase
export const aboutData = {
  // Summary strings using template literals to inject the dynamic value
  summary: `Front-End Engineer with ${yearsOfExperience}+ years of experience building performant, scalable, and accessible web applications. I use a modern tech stack of React, Next.js, and TypeScript to create intuitive user interfaces and write clean, maintainable code.`,
  secondarySummary: "My strong background in healthcare, statistical data analyses, and scientific research provides a unique analytical lens for solving complex development challenges and prioritizing the user experience.",
  openSourceCommitmentTitle: "Commitment to Open Source",
  openSourceSummary: "As a firm believer in the open-source ethos, I've evolved from a user of essential tools to an active open-source contributor, earning a GitHub Pull Shark Badge in the process. This demonstrates my ability to learn, apply and collaborate with other developers on complex technologies.",
  openSourceSecondarySummary: "This journey includes providing improvements to the TypeScript documentation for the Redux Toolkit project, an experience that has deepened my understanding of the technology and my connection to the development community.",
  gitHubAchievementsUrl: 'https://github.com/BonaventureCJ?tab=achievements',
  
  // Preview strings using template literals for the dynamic value
  aboutPreviewText: `As a Front-End Engineer with ${yearsOfExperience}+ years of experience, I am passionate about Accessibility, SEO, Responsive Web Design, clean code, and creating intuitive UIs using Typescript, React.js and Next.js.`,
  aboutPreviewOpenSourceText: "As a firm believer in the open-source ethos, I've evolved from a user of essential tools to an active open-source contributor, earning a GitHub Pull Shark Badge in the process. This demonstrates my ability to learn, apply and collaborate with other developers on complex technologies."
};
