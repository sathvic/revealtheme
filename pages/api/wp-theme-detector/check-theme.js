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

      const themesInfo = [];
      const pluginsInfo = []; // theme info from script tags
      const allPlugins = []; // plugins
      const plugins = [];
      const cssInfo = [];
      const themeScreenShot = [];
      // Select link elements with rel="stylesheet" and href containing "wp-content/themes"
      const stylesheets = $('link[rel][href*="wp-content/themes"]');
      const scripts = $('script[src*="wp-content/themes"]');

      const plugin1 = $('link[rel][href*="wp-content/plugins"]');
      const plugin2 = $('script[src*="wp-content/plugins"]');
      // Link tag scraping
      if (stylesheets.length > 0) {
        stylesheets.each(async (index, element) => {
          const href = $(element).attr("href");

          var themeLoc = href.indexOf("/themes/") + 8; // the character position of where the theme name starts
          var themePath = href.substring(0, themeLoc); // path of where the theme is installed
          var themeSplit = href.substring(themeLoc); // substring with the theme name first
          var endSlash = themeSplit.indexOf("/"); // position of the first slash (right after the theme name)
          var themeName = themeSplit.substring(0, endSlash);

          // Theme Name Pushing
          themesInfo.push(themeName);

          // Theme Screenshot
          const screenShot = themePath + themeName + "/screenshot.png";
          themeScreenShot.push(screenShot);

          // Get the css file for theme meta data
          const styleLoc = themePath + themeName + "/style.css";
          const themeCss = {};
          const fetchCSS = async (x) => {
            try {
              const response = await axios.get(styleLoc);
              if (response.status === 200) {
                const lines = response.data?.split("/*")[1]?.split("\n");

                for (const line of lines) {
                  const [key, ...valueParts] = line
                    .split(":")
                    .map((item) => item.trim());
                  const value = valueParts.join(":"); // Reconstruct the value in case it contains colons
                  if (key && value) {
                    themeCss[key] = value;
                  }
                }

                cssInfo.push(themeCss);
              }
            } catch (error) {}
          };
          await fetchCSS();
        });
      }

      // Script tag scraping
      if (scripts.length > 0) {
        scripts.each((index, element) => {
          const href = $(element).attr("src");

          var pluginLoc = href.indexOf("/themes/") + 8; // the character position of where the theme name starts
          var pluginPath = href.substring(0, pluginLoc); // path of where the theme is installed
          var pluginSplit = href.substring(pluginLoc); // substring with the theme name first
          var endSlash = pluginSplit.indexOf("/"); // position of the first slash (right after the theme name)
          var pluginName = pluginSplit.substring(0, endSlash);
          // console.log(pluginName);
          pluginsInfo.push(pluginName);
        });
      }

      // Get plugins 1
      if (plugin1.length > 0) {
        plugin1.each(async (index, element) => {
          const href = $(element).attr("href");

          var pluginLoc = href.indexOf("/plugins/") + 9; // the character position of where the theme name starts

          var pluginSplit = href.substring(pluginLoc); // substring with the theme name first
          var endSlash = pluginSplit.indexOf("/"); // position of the first slash (right after the theme name)
          var pluginName = pluginSplit.substring(0, endSlash);

          allPlugins.push(pluginName);
        });
      }
      // Get Plugins 2
      if (plugin2.length > 0) {
        plugin2.each(async (index, element) => {
          const href = $(element).attr("src");

          var pluginLoc = href.indexOf("/plugins/") + 9; // the character position of where the theme name starts

          var pluginSplit = href.substring(pluginLoc); // substring with the theme name first
          var endSlash = pluginSplit.indexOf("/"); // position of the first slash (right after the theme name)
          var pluginName = pluginSplit.substring(0, endSlash);

          allPlugins.push(pluginName);
        });
      }

      const fetchPluginInfo = async (x) => {
        try {
          const r = await axios.get(
            `https://api.wordpress.org/plugins/info/1.0/${x}.json`
          );
          plugins.push({
            status: true,
            name: x,
            screenshots: r.data?.screenshots?.[1]?.src,
            name: r.data?.name,
            description: r.data?.sections?.description?.slice(0, 100),
            homepage: r.data?.homepage,
            donate_link: r.data?.donate_link,
            download_link: r.data?.download_link,
            //r.data,
          });
        } catch (err) {
          plugins.push({
            status: false,
            name: x,
            data: `plugin ${x} not found`,
          });
        }
      };
      try {
        const uniqueArray = Array.from(new Set(allPlugins));
        await Promise.all(uniqueArray.map(async (x) => fetchPluginInfo(x)));
      } catch {
        console.log("err happend");
      }

      // bind theme data from stylesheets and script
      const allData = [...themesInfo, ...pluginsInfo];
      const theme = Array.from(new Set(allData));
      const scrn = Array.from(new Set(themeScreenShot));

      // console.log(uniqueArray);
      res.json({
        status: true,
        data: {
          themeInfo: theme,
          screenShot: scrn,
          cssInfo: cssInfo,
          plugins,
        },
      });

      // Save queries to Database
      await client
        .db(database.dbName)
        .collection("wp-themes-db")
        .updateOne(
          { domain: urlWithoutProtocol },
          {
            $set: {
              domain: urlWithoutProtocol,
              themeInfo: (theme?.length && theme[0]) || "",
              plugins,
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
