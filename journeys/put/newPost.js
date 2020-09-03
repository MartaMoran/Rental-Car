import { JOURNEYS_COLLECTION } from "./constants";
import mongoConnect from "../../mongo_middleware/auxiliarFunctions";
import validationJourney from "./validationJourney";
import { ObjectID } from "mongodb";
import { CARS_COLLECTION } from "../../cars/constants";

const newJourney = async (request, response) => {
  try {
    const journey = validationJourney(request.body);
    let idJourney = "";
    const journeyConnection = await mongoConnect(
      JOURNEYS_COLLECTION,
      async (collection) => {
        let result = await collection.insertOne(journey);
        return result;
      }
    );
    if (journeyConnection === null) {
      throw new Error("no se ha podido insertar");
    }
    idJourney = new ObjectID(journeyConnection._id);
    const carsUpdate = await mongoConnect(
      CARS_COLLECTION,
      async (collection) => {
        let result = await collection.updateOne(
          { _id: new ObjectID(journey.idCar) },
          {
            $push: {
              trips: {
                startDate: journey.startDate,
                endDate: journey.endDate,
                distance: journey.distance,
                clientID: journey.clientId,
                idJourney: idJourney,
              },
            },
          }
        );
        return result;
      }
    );
    if (carsUpdate === null) {
      throw new Error("ha ocurrido algo");
    }
    response.send("todo ok");
  } catch (error) {
    console.log(error);
    response.send({ error: "ha ocurrido un error", errorData: error.message });
  }
};

export default newJourney;
