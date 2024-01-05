import pino from "pino";

// Create a Pino logger with pretty printing transport
const logger = pino({
  transport: {
    target: "pino-pretty",
  },
});

// Don't add unneeded context
// If your class/object name tells you something, don't repeat that in your variable name.

// Bad:
const Car = {
  carMake: "Honda",
  carModel: "Accord",
  carColor: "Blue",
};

function paintCar(car, color) {
  car.carColor = color;
  return car.carColor;
}

logger.info(` ${paintCar(Car, "red")}`);

// Good:
const GoodCar = {
  make: "Honda",
  model: "Accord",
  color: "Blue",
};

function goodPaintCar(car, color) {
  car.color = color;
  return car.color;
}

logger.info(` ${goodPaintCar(GoodCar, "pink")}`);
