import pino from "pino";

// Create a Pino logger with pretty printing transport
const logger = pino({
  transport: {
    target: "pino-pretty",
  },
});

const cart_v1 = [
  { name: "onions", date: "1/1/2023" },
  { name: "kales", date: "5/5/2023" },
  { name: "cabbage", date: "12/1/2023" },
];

const cart_v2 = [
  { name: "onions", date: "1/1/2023" },
  { name: "kales", date: "5/5/2023" },
  { name: "cabbage", date: "12/1/2023" },
];
// Avoid Side Effects (part 2)

const addItemToCartV1 = (cart, item) => {
  cart.push({ item, date: Date.now() });
  return cart;
};

const addItemToCartV2 = (cart, item) => {
  return [...cart, { item, date: Date.now() }];
};

logger.info(addItemToCartV1(cart_v1, { name: "Spinach" }));
logger.info(addItemToCartV2(cart_v2, { name: "Burger" }));
