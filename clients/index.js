import { CLIENTS_PATH } from "./constants";
import getClients from "./getClients";

const setClients = (app) => {
  app.get(CLIENTS_PATH, getClients);
};

export default setClients;
