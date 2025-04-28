import { MongoClient } from "mongodb";
import path from "path";
import fs from "fs";
import isLoggedIn from "../isLoggedIn";
const filePath = path.join(process.cwd(), "db.json");
export default async function handler(req, res) {
  const data = fs.readFileSync(filePath, "utf-8");
  const database = JSON.parse(data);
  const client = new MongoClient(database.db);
  const { topTitle, affiliateButtonText, affiliateLink } = req.body;
  const token = req.body?.token?.token;

  try {
    await client.connect();
    switch (req.method) {
      case "POST":
        if (isLoggedIn(token)) {
          const result = await client
            .db(database.dbName)
            .collection("moodle-theme-info-component")
            .updateOne(
              {},
              { $set: { topTitle, affiliateButtonText, affiliateLink } },

              { upsert: true }
            );
          if (result.modifiedCount > 0 || result.upsertedCount > 0) {
            res.json({
              status: true,
              message: "Inserted successfully",
            });
          } else {
            res.json({
              status: false,
              message: "Update was not successful. Please change input data.",
            });
          }
        }
        break;
      case "GET":
        await client
          .db(database.dbName)
          .collection("moodle-theme-info-component")
          .findOne()
          .then((docs) => res.json(docs));
    }
  } catch (error) {
    console.log("some error occurred", error);
  } finally {
    await client.close();
  }
}
export const config = {
  api: {
    externalResolver: true,
  },
};
