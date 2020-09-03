import { response } from "express";
import mongoConnect from "../mongo_middleware/auxiliarFunctions";
import { CARS_COLLECTION } from "./constants";

const getCars = async (request, response) => {
  try {
    const mongoConnection = await mongoConnect(
      CARS_COLLECTION,
      async (collection) => {
        let result = await collection.find().toArray();
        return result;
      }
    );
    response.send(mongoConnection);
  } catch (error) {
    response.send({ error: "error", errorData: error.message });
  }
};

export default getCars;
