import pino from "pino";

// Create a Pino logger with pretty printing transport
const logger = pino({
  transport: {
    target: "pino-pretty",
  },
});

// Avoid Side Effects (part 1)

// Global variable referenced by following function.
// If we had another function that used this name, now it'd be an array and it could break it.
let name = "Ryan McDermott";

function splitIntoFirstAndLastName() {
  name = name.split(" ");
}

splitIntoFirstAndLastName();

logger.info(name); // ['Ryan', 'McDermott'];

// Good:
const goodName = "Ryan McDermott";

function goodSplitIntoFirstAndLastName(goodName) {
  return goodName.split(" ");
}

const goodNewName = goodSplitIntoFirstAndLastName(goodName);

logger.info(goodName); // 'Ryan McDermott';
logger.info(goodNewName); // ['Ryan', 'McDermott'];
