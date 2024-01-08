import pino from "pino";

// Create a Pino logger with pretty printing transport
const logger = pino({
  transport: {
    target: "pino-pretty",
  },
});

// Functions should do one thing

const clientsList = [
  { name: "Sam Njenga", active: true },
  { name: "Ivy Wangui", active: false },
  { name: "Mark Muraya", active: true },
];

// Bad:

function emailClients(clients) {
  clients.forEach((client) => {
    const isActive = () => {
      return client.active === true;
    };
    if (isActive()) {
      logger.info("Active member");
    } else {
      logger.info("InActive member");
    }
  });
}

emailClients(clientsList);

// Good:

function isActiveClient(client) {
  return client.active === true;
}

function emailActiveClients(clients) {
  clients.forEach((client) => {
    if (isActiveClient(client)) {
      logger.info("Active member");
    } else {
      logger.info("InActive member");
    }
  });
}

emailActiveClients(clientsList);
