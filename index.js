import express from "express";
import dotenv from "dotenv";
import setCars from "./cars/index";
import setClients from "./clients";
import setJourneys from "./journeys/put/index";

dotenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
setCars(app);
setClients(app);
setJourneys(app);
app.listen(PORT, () => {
  console.log(`app listen on ${PORT}`);
});
