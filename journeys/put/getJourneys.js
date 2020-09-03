import { JOURNEYS_COLLECTION } from "./constants";
import mongoConnect from "../../mongo_middleware/auxiliarFunctions";

const getJourneys = async (request, response) => {
  try {
    const mongoConnection = await mongoConnect(
      JOURNEYS_COLLECTION,
      async (collection) => {
        let result = await collection.find().toArray();
        return result;
      }
    );
    response.send(mongoConnection);
  } catch (error) {
    response.send({ error: "ha ocurrido un error", errorData: error.message });
  }
};

export default getJourneys;
