import { Db, MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config()

export const connectDB = async (): Promise<Db> => {
  const usr = process.env.USERNAME;
  const pwd = process.env.PASSWORD;
  const dbName: string =`${process.env.DB_NAME}`;
  const mongouri: string = `mongodb+srv://${usr}:${pwd}@cluster0.ueeyw.mongodb.net/${dbName}?retryWrites=true&w=majority`;
  

  const client = new MongoClient(mongouri);

  try {
    await client.connect();
    console.info("MongoDB connected");

    return client.db(dbName);
  } catch (e) {
    throw e;
  }
};