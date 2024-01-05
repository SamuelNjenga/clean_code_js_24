import moment from "moment";
import pino from "pino";

// Create a Pino logger with pretty printing transport
const logger = pino({
  transport: {
    target: "pino-pretty",
  },
});

// Variables -> meaningful and pronounceable variable names
// Bad:
const yyyymmdstr = moment().format("YYYY/MM/DD");
// Log the current date using the configured logger
logger.info(`Current date: ${yyyymmdstr}`);

// Good:
const currentDate = moment().format("YYYY/MM/DD");
// Log the current date using the configured logger
logger.info(`Current date: ${currentDate}`);
