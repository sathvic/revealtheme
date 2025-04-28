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
      let themeName2 = "";
      let themeVersion = "";
      let themeDemo = "";
      let shopId = "";
      let themeId = "";
      let siteLocation = "";
      // Check for theme name in the meta tags
      $("meta").each((i, element) => {
        const name = $(element).attr("name");
        const content = $(element).attr("content");
        if (name === "theme-name") {
          themeName = content;
        }
      });
      // Check for theme name in the script tags
      if (!themeName) {
        $("script").each((i, element) => {
          const scriptContent = $(element).html();
          const themeNameMatch = scriptContent.match(
            /Shopify.theme = .*"name":"(.*?)"/
          );
          if (themeNameMatch) {
            themeName = themeNameMatch[1];
          }
          const themeDemoMatch = scriptContent.match(
            /Shopify\.shop\s*=\s*"([^"]+)"/
          );
          if (themeDemoMatch) {
            themeDemo = themeDemoMatch[1];
          }
        });
      }

      // Look for the BOOMR script tag and extract the theme name
      $("script.boomerang").each((i, element) => {
        const scriptContent = $(element).html();
        const themeNameMatch = scriptContent.match(
          /window\.BOOMR\.themeName\s*=\s*"([^"]+)"/
        );
        if (themeNameMatch) {
          themeName2 = themeNameMatch[1];
        }

        const themeNameVersion = scriptContent.match(
          /window\.BOOMR\.themeVersion\s*=\s*"([^"]+)"/
        );
        if (themeNameVersion) {
          themeVersion = themeNameVersion[1];
        }

        const shopIdMatch = scriptContent.match(
          /window\.BOOMR\.shopId\s*=\s*([0-9]+)/
        );
        if (shopIdMatch) {
          shopId = shopIdMatch[1];
        }
        const themeIdMatch = scriptContent.match(
          /window\.BOOMR\.themeId\s*=\s*([0-9]+)/
        );
        if (themeIdMatch) {
          themeId = themeIdMatch[1];
        }
        const locationMatch = scriptContent.match(
          /window\.BOOMR\.renderRegion\s*=\s*"([^"]+)"/
        );
        if (locationMatch) {
          siteLocation = locationMatch[1];
        }
      });

      if (themeName || themeName2) {
        res.json({
          status: true,
          data: {
            themeInfo: [themeName2 || themeName],
            themeAlternateName: themeName,
            themeVersion,
            themeDemo,
            themeId,
            shopId,
            siteLocation,

            screenShot: [""],
          },
        });
      } else {
        res.json({
          status: false,
          data: { themeInfo: ["Could not detect the Shopify theme."] },
        });
      }

      // Save queries to Database
      await client
        .db(database.dbName)
        .collection("shopify-themes-db")
        .updateOne(
          { domain: urlWithoutProtocol },
          {
            $set: {
              domain: urlWithoutProtocol,
              themeInfo: themeName2 || themeName,
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
