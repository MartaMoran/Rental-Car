import getClient from "./getClient";
import dotenv from "dotenv";
import { response } from "express";

dotenv.config();

const mongoConnect = async (collectionName, callback) => {
  const client = getClient();
  const MONGO_DB = process.env.MONGO_DB;
  try {
    await client.connect();
    const database = client.db(MONGO_DB);
    const collection = database.collection(collectionName);

    return await callback(collection);
  } catch (error) {
    console.log(error);
    response.send({
      error: "ha ocurrido un error inesperado",
      errorsdata: error.message,
    });
  } finally {
    client.close();
  }
};

export default mongoConnect;
