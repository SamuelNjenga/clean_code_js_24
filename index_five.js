import pino from "pino";

// Create a Pino logger with pretty printing transport
const logger = pino({
  transport: {
    target: "pino-pretty",
  },
});

// Avoid Mental Mapping
// Explicit is better than implicit

// Bad:
const doStuff = () => {
  logger.info("Do Stuff");
};
const doSomeOtherStuff = () => {
  logger.info("Do Some Other Stuff");
};
const dispatch = (a) => {
  logger.info(a);
};
const locations = ["Austin", "New York", "San Francisco"];

locations.forEach((l) => {
  doStuff();
  doSomeOtherStuff();
  // ...
  // ...
  // ...
  // Wait, what is `l` for again?
  dispatch(l);
});

// Good:
const good_locations = ["Austin", "New York", "San Francisco"];
good_locations.forEach((location) => {
  doStuff();
  doSomeOtherStuff();
  // ...
  // ...
  // ...
  dispatch(location);
});
