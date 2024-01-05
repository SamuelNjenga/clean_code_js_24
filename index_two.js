import pino from "pino";

// Create a Pino logger with pretty printing transport
const logger = pino({
  transport: {
    target: "pino-pretty",
  },
});

// Use the same vocabulary for the same type of variable
// Bad:
const getUserInfo = () => {
  logger.info("User Info");
};
const getClientData = () => {
  logger.info("Client Data");
};
const getCustomerRecord = () => {
  logger.info("Customer Record");
};
getUserInfo();
getClientData();
getCustomerRecord();

// Good:
const getUser = () => {
  logger.info("User Info");
};
getUser();
