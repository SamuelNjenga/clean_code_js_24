import pino from "pino";

// Create a Pino logger with pretty printing transport
const logger = pino({
  transport: {
    target: "pino-pretty",
  },
});

// Function names should say what they do

// Bad:

function addToDate(date, month) {
  // Ensure month is a valid number
  if (isNaN(month) || month < 1 || month > 12) {
    throw new Error("Invalid month");
  }

  // Ensure date is a valid Date object
  if (!(date instanceof Date) || isNaN(date)) {
    throw new Error("Invalid date");
  }

  // Create a new Date object to avoid modifying the original date
  const newDate = new Date(date);

  // Get the current month and year
  let currentMonth = newDate.getMonth();
  let currentYear = newDate.getFullYear();

  // Calculate the new month and year
  let newMonth = currentMonth + month;
  let newYear = currentYear + Math.floor(newMonth / 12);

  // Adjust the new month to be in the range [0, 11]
  newMonth = ((newMonth % 12) + 12) % 12;

  // Set the new month and year in the new Date object
  newDate.setMonth(newMonth);
  newDate.setFullYear(newYear);

  return newDate;
}

const originalDate = new Date("2022-01-15");
// It's hard to tell from the function name what is added
const newDate = addToDate(originalDate, 3);
logger.info(`The date is ${newDate}`);

// Good:

function addMonthToDate(month, date) {
  // Ensure month is a valid number
  if (isNaN(month) || month < 1 || month > 12) {
    throw new Error("Invalid month");
  }

  // Ensure date is a valid Date object
  if (!(date instanceof Date) || isNaN(date)) {
    throw new Error("Invalid date");
  }

  // Create a new Date object to avoid modifying the original date
  const newDate = new Date(date);

  // Get the current month and year
  let currentMonth = newDate.getMonth();
  let currentYear = newDate.getFullYear();

  // Calculate the new month and year
  let newMonth = currentMonth + month;
  let newYear = currentYear + Math.floor(newMonth / 12);

  // Adjust the new month to be in the range [0, 11]
  newMonth = ((newMonth % 12) + 12) % 12;

  // Set the new month and year in the new Date object
  newDate.setMonth(newMonth);
  newDate.setFullYear(newYear);

  return newDate;
}

// Example usage:
const originalGoodDate = new Date("2022-01-15");
const newGoodDate = addMonthToDate(3, originalGoodDate);
logger.info(`The date is ${newGoodDate}`);
