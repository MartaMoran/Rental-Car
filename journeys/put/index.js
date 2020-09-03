import { JOURNEYS_PATH } from "./constants";
import { default as newJourney } from "./newPost";
import getJourneys from "./getJourneys";

const setJourneys = (app) => {
  app.get(JOURNEYS_PATH, getJourneys);
  app.post(JOURNEYS_PATH, newJourney);
};

export default setJourneys;
