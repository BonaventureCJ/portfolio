/**
 * Calculates the number of years between a given start year and the current year.
 * @param {number} startYear - The year to start counting from (e.g., 2021).
 * @returns {number} The calculated number of years.
 */
export const calculateYearsOfExperience = (startYear) => {
  // Get the current year using the built-in JavaScript Date object
  const currentYear = new Date().getFullYear();
  
  // Return the difference
  return currentYear - startYear;
};
