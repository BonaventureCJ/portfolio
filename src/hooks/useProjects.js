// src/hooks/useProjects.js
import { useMemo } from 'react';
import { projects } from 'data/projects/projects';

/**
 * A custom hook to filter and categorize projects data.
 * The logic is memoized to prevent expensive re-calculations on re-renders.
 * @returns {Object} An object containing categorized project lists.
 */
export const useProjects = () => {
  return useMemo(() => {
    const inDevelopmentProjects = projects.filter(project => project.development_status === 'In Development');
    const recentProjects = projects.filter(project => project.isRecent && project.development_status !== 'In Development');
    const tutorialBasedProjects = projects.filter(project => project.isTutorialBased);
    const earlierCareerProjects = projects.filter(project => !project.isRecent && !project.isTutorialBased);

    return {
      inDevelopmentProjects,
      recentProjects,
      tutorialBasedProjects,
      earlierCareerProjects,
    };
  }, []); // The dependency array is empty because the `projects` data is static
};
