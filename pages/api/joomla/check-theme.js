import * as cheerio from "cheerio";
import axios from "axios";
import { MongoClient } from "mongodb";
import path from "path";
import fs from "fs";
const filePath = path.join(process.cwd(), "db.json");
export default async function handler(req, res) {
  const data = fs.readFileSync(filePath, "utf-8");
  const database = JSON.parse(data);
  const client = new MongoClient(database.db);

  const wpSite = req.body.value;
  const urlWithoutProtocol = wpSite.replace(/^(https?:\/\/)?/, "");

  try {
    await client.connect();
    const response = await axios.get(`http://${urlWithoutProtocol}`);

    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);

      // Find the correct <link> tag
      const themeLink = $('link[rel="stylesheet"]')
        .filter((i, el) => {
          const href = $(el).attr("href");
          return href && href.includes("/templates/");
        })
        .first()
        .attr("href");

      // Extract the theme name from the URL
      const themeName = themeLink.split("/")[2]; // assuming the URL pattern is consistent

      if (themeName) {
        res.json({
          status: true,
          data: {
            themeInfo: [
              themeName
                ?.split("_")
                ?.join(" ")
                ?.split("-")
                ?.join(" ")
                ?.split(" ")
                ?.map((x) => x?.slice(0, 1)?.toUpperCase()?.concat(x?.slice(1)))
                ?.join(" "),
            ],
            screenShot: "scrn",
            cssInfo: "cssInfo",
            plugins: [],
          },
        });
      } else {
        res.json({
          status: true,
          data: { themeInfo: ["Unable to detect theme"] },
        });
      }

      // Save queries to Database
      await client
        .db(database.dbName)
        .collection("joomla-themes-db")
        .updateOne(
          { domain: urlWithoutProtocol },
          {
            $set: {
              domain: urlWithoutProtocol,
              themeInfo:
                themeName
                  ?.split("_")
                  ?.join(" ")
                  ?.split("-")
                  ?.join(" ")
                  ?.split(" ")
                  ?.map((x) =>
                    x?.slice(0, 1)?.toUpperCase()?.concat(x?.slice(1))
                  )
                  ?.join(" ") || "",
            },
          },

          { upsert: true }
        );
    } else {
      // console.log("faild to retrived page");
      res.json({ status: true, data: "Failed to retrieve the webpage." });
    }
  } catch (error) {
    // console.log('error website unable to reach');
    res.json({
      status: true,
      data: { themeInfo: ["!Website unable to reach."], screenShot: [""] },
    });
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
