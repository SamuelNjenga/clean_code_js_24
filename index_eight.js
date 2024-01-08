import pino from "pino";

// Create a Pino logger with pretty printing transport
const logger = pino({
  transport: {
    target: "pino-pretty",
  },
});

// Function arguments (2 or fewer ideally)

// Bad:
function createMenu(title, body, buttonText, cancellable) {
  logger.info(` ${title} ${body} ${buttonText} ${cancellable}`);
}

createMenu("JS", "SOLID", "Click here", true);

function createGoodMenu({ title, body, buttonText, cancellable }) {
  logger.info(` ${title} ${body} ${buttonText} ${cancellable}`);
}

createGoodMenu({
  title: "JS",
  body: "SOLID",
  buttonText: "Click here",
  cancellable: true,
});
