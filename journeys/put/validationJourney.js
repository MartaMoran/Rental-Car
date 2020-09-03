import { checkType } from "../../auxiliarFunctions";

const validationJourney = (body) => {
  let { idCar, idUser, startDate, endDate, distance, clientId } = body;
  checkType(idCar, "string", true);
  checkType(idUser, "string", true);
  checkType(startDate, "string", true);
  checkType(endDate, "string", false);
  checkType(distance, "number", true);
  checkType(clientId, "string", true);
  let obj = {
    idCar: idCar,
    idUser: idUser,
    startDate: new Date(startDate),
    distance: distance,
    clientId: clientId,
  };
  if (endDate || !endDate) {
    obj.endDate = new Date(endDate);
  }
  return obj;
};

export default validationJourney;
