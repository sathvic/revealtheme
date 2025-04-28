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
  const headers = {
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    Accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.5",
    Connection: "keep-alive",
    "Upgrade-Insecure-Requests": "1",
  };
  try {
    await client.connect();
    const response = await axios.get(`http://${urlWithoutProtocol}`, {
      headers,
    });

    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);
      let themeName = "";

      $('link[rel="stylesheet"]').each((i, el) => {
        const href = $(el).attr("href");

        // Check if the href contains the pattern /frontend/{dynamic}/{themeName}/
        const match = href.match(/\/frontend\/[^\/]+\/([^\/]+)\//);

        if (match && match[1]) {
          themeName = match[1];
          return false; // Break out of the each loop once a match is found
        }
      });

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
          status: false,
          data: { themeInfo: ["Unable to detect theme"] },
        });
      }

      // Save queries to Database
      await client
        .db(database.dbName)
        .collection("magento-themes-db")
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
      res.json({ status: false, data: "Failed to retrieve the webpage." });
    }
  } catch (error) {
    // console.log(error);
    res.json({
      status: false,
      data: { themeInfo: ["!Website unable to reach."], screenShot: [""] },
    });
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
