import { Card, CardBody, Image, Link, Progress } from "@nextui-org/react";
import { useSelector } from "react-redux";
import ThemeCss from "./ThemeCss";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ThemeInfo() {
  const [themeAffiliate, setThemeAffiliate] = useState([]);
  const [affiliateLink, setAffiliateLink] = useState({});
  const inputValue = useSelector((state) => state.inputValue);
  const moodleThemeInfo = useSelector((state) => state.moodleThemeInfo);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    axios
      .get("/api/moodle/affiliate-db")
      .then((res) => setThemeAffiliate(res.data));
    axios
      .get("/api/moodle/theme-info-component")
      .then((res) => setAffiliateLink(res.data));
  }, []);
  const hostLink = (data, str) => {
    if (data) {
      for (const item of data) {
        if (item.hostingCode === str) {
          return item.affiliateLink;
        }
      }
    }
    return affiliateLink?.affiliateLink;
  };

  return (
    <>
      {inputValue && (
        <section id="check" className="my-4 mx-3 sm:mx-10">
          {loading && (
            <div className="max-w-screen-xl mx-auto px-4">
              <Progress
                color="danger"
                className="rounded-xl bg-gradient-to-r from-[#4F46E5] to-[#E114E5]"
                size="md"
                isIndeterminate
                aria-label="Loading..."
              />
            </div>
          )}
          {moodleThemeInfo?.status ? (
            <div>
              <Card
                isHoverable
                isPressable
                className="dark:border border-gray-800 hover:scale-105 w-full"
              >
                <CardBody>
                  <div className="space-y-5 max-w-4xl mx-auto text-center z-50">
                    <h1 className="text-sm text-indigo-600 font-medium text-center">
                      {affiliateLink?.topTitle || "Build products for everyone"}
                    </h1>
                    <h2
                      className="text-4xl text-gray-700 dark:text-gray-400 font-extrabold mx-auto md:text-5xl text-center"
                      style={{ fontFamily: "jost" }}
                    >
                      This Moodle site using the theme
                    </h2>
                    <h2 className="text-4xl font-extrabold mx-auto md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5] pb-3 text-center">
                      {moodleThemeInfo?.data?.themeInfo[0]
                        ?.split(/[ -]/)
                        .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
                        .join(" ")}
                    </h2>

                    <div className="flex items-center justify-center">
                      <a
                        // onClick={hostLink}
                        target="_blank"
                        href={
                          hostLink(
                            themeAffiliate,
                            moodleThemeInfo?.data?.themeInfo[0]
                          ) || affiliateLink?.affiliateLink
                        }
                        className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-16 py-4 text-center me-2 mb-2"
                      >
                        {affiliateLink?.affiliateButtonText || "Get Theme"}
                      </a>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          ) : (
            ""
          )}
          <ThemeCss />
          <div className="mt-8 flex justify-center">
            <Link
              href={
                hostLink(
                  themeAffiliate?.affiliateDB,
                  moodleThemeInfo?.data?.themeInfo[0]
                ) || affiliateLink?.affiliateLink
              }
              isExternal
            >
              <Image
                src={
                  moodleThemeInfo?.status
                    ? moodleThemeInfo?.data?.screenShot[0]
                    : "/images/custom/desktop_dte2ar.png"
                }
                className="w-full shadow-lg rounded-lg border"
                alt=""
              />
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
