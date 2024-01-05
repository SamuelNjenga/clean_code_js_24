import pino from "pino";

// Create a Pino logger with pretty printing transport
const logger = pino({
  transport: {
    target: "pino-pretty",
  },
});
// Use default parameters instead of short circuiting or conditionals

// Bad:
function createMicrocode(name) {
  const codeName = name || "JS Code.";
  logger.info(` ${codeName}`);
}

createMicrocode();
createMicrocode("Python Code");

// Good:
function createGoodMicrocode(name = "JS Code.") {
  logger.info(` ${name}`);
}

createGoodMicrocode();
createGoodMicrocode("Python Code");
