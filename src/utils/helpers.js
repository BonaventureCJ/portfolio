/* ID GENERATOR */
/**
 * Creates and returns a function that generates a simple, auto-incrementing number.
 * The counter is encapsulated within the closure, making it private and persistent.
 * @returns {function(): number} A function that, when called, returns the next integer in the sequence.
 */
const createIdGenerator = () => {
  let nextId = 1;

  return () => {
    return nextId++;
  };
};

// Export an instance of the generator function, not the creator.
const generateId = createIdGenerator();

export default generateId;



/* YEARS OF EXPERIENCE */
/**
 * Calculates the number of years between a given start date and the current date.
 * @param {string} startDateString - The start date in 'YYYY-MM-DD' format (e.g., '2022-04-17').
 * @returns {number} The calculated number of years.
 */
export const calculateYearsOfExperience = (startDateString) => {
  // Parse the start date string into a Date object
  const startDate = new Date(startDateString);

  // Get the current date
  const currentDate = new Date();

  // Calculate the difference in years
  let years = currentDate.getFullYear() - startDate.getFullYear();

  // Adjust the year if the current month and day are before the start month and day
  const currentMonth = currentDate.getMonth();
  const startMonth = startDate.getMonth();
  const currentDay = currentDate.getDate();
  const startDay = startDate.getDate();

  if (currentMonth < startMonth || (currentMonth === startMonth && currentDay < startDay)) {
    years--;
  }

  return years;
};

const startDate = '2022-04-17';
export const yearsOfExperience = calculateYearsOfExperience(startDate);