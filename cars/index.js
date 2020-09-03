import { CARS_PATH } from "./constants";
import getCars from "./getCars";

const setCars = (app) => {
  app.get(CARS_PATH, getCars);
};

export default setCars;
