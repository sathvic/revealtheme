import Link from "next/link";
import DropDown3 from "./DropDown3";
import DropDown2 from "./DropDown2";
import DropDown4 from "./DropDown4";
import DarkModeSwitch from "../../Admin/navbar/darkmodeswitch";
import { useEffect, useState } from "react";
import axios from "axios";
import { Image } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { setBannerAds, setGoogleAdsense } from "../../../Redux/reducer";
import Button from "./Button";
import DropDown1 from "./DropDown1";
export default function NavBar() {
  const [logo, setLogo] = useState("");
  const dispatch = useDispatch();
  const bannerAds = useSelector((state) => state?.bannerAds);
  const googleAds = useSelector((state) => state?.googleAdsense);

  useEffect(() => {
    axios.get("/api/logo/logo").then((res) => {
      setLogo(res.data);
    });

    if (!bannerAds) {
      axios
        .get("/api/banner-ads")
        .then((res) => dispatch(setBannerAds(res.data)))
        .catch((err) => console.log(err));
    }

    if (!googleAds) {
      axios
        .get("/api/adsense")
        .then((res) => dispatch(setGoogleAdsense(res.data)))
        .catch((err) => console.log(err));
    }
  }, []);
  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white text-sm  dark:bg-gray-800 shadow-md py-2 md:py-0">
      <div
        className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="relative md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <Link className="" href="/" aria-label="Brand">
              <Image
                width={250}
                // height={50}
                alt="Your site logo"
                src="/images/logo/logo/logo.png"
              />
            </Link>
            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden w-4 h-4"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden w-4 h-4"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
          >
            <div className="overflow-hidden overflow-y-auto max-h-[75vh] scrollbar-y">
              <div className="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:pl-7 md:divide-y-0 md:divide-solid dark:divide-gray-700">
                {/* <a
                  className="font-medium text-blue-600 py-3 md:py-6 dark:text-blue-500"
                  href="#"
                  aria-current="page"
                >
                  Landing
                </a> */}
                <DarkModeSwitch size="sm" />
                <DropDown3 />
                <DropDown2 />
                <DropDown4 />
                {/* <DropDown3 /> */}
                {/* <a
                  className="font-medium text-gray-800 hover:text-gray-600 py-3 md:py-6 dark:text-gray-200 dark:hover:text-gray-500"
                  href="#"
                >
                  Email
                </a> */}
                {/* <Link
                  className="font-medium text-gray-800 hover:text-gray-600 py-3 md:py-6 dark:text-gray-200 dark:hover:text-gray-500 text-center"
                  href="/best-wordpress-themes"
                >
                  Top Themes
                </Link>
                <Link
                  className="font-medium text-gray-800 hover:text-gray-600 py-3 md:py-6 dark:text-gray-200 dark:hover:text-gray-500 text-center"
                  href="/best-wordpress-plugins"
                >
                  Top Plugins
                </Link> */}
                {/* <Button text="Top Themes" /> */}
                <Button text="Blog" href="/blog" />
                {/* <Link
                  className="font-medium text-gray-800 hover:text-gray-600 py-3 md:py-6 dark:text-gray-200 dark:hover:text-gray-500 text-center"
                  href="/blog"
                >
                  Blog
                </Link> */}
                {/* <Link
                  className="font-medium text-gray-800 hover:text-gray-600 py-3 md:py-6 dark:text-gray-200 dark:hover:text-gray-500 text-center"
                  href="/saved-domains"
                >
                  Favourites
                </Link> */}
                {/* <div className="pt-3 md:pt-0 flex justify-center">
                  <Link
                    className="inline-flex justify-center items-center gap-x-2 text-center  bg-sky-500 hover:bg-sky-400 active:bg-sky-600 duration-150 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none  transition py-2.5 px-3 dark:focus:ring-offset-gray-800 "
                    href="/submit-a-hosting-review"
                  >
                    Submit Review
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
