import { CLIENTS_COLLECTION } from "./constants";
import mongoConnect from "../mongo_middleware/auxiliarFunctions";

const getClients = async (request, response) => {
  try {
    const mongoConnection = await mongoConnect(
      CLIENTS_COLLECTION,
      async (collection) => {
        let result = await collection.find().toArray();
        return result;
      }
    );
    response.send(mongoConnection);
  } catch (error) {
    response.send({ error: "ha habido un error", errorData: error.message });
  }
};

export default getClients;
