import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setDrupalThemeInfo,
  setInputValue,
  setJoomlaThemeInfo,
  setLoading,
  setMagentoThemeInfo,
  setMoodleThemeInfo,
  setPrestaShopThemeInfo,
  setShopifyThemeInfo,
} from "../../../../Redux/reducer";

export default function HeroForm_1({
  data = { enable: false },
  homePage,
  shopify,
  magento,
  moodle,
  joomla,
  drupal,
  prestashop,
  placeholder = "Enter a WordPress Site",
}) {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setInputValue(true));
    dispatch(setLoading(true));

    if (homePage) {
      axios
        .post("/api/wp-theme-detector/check-theme", { value })
        .then((res) => {
          dispatch(setLoading(false));
          dispatch(setWpThemeInfo(res.data));
        })
        .catch((err) => console.log(err));
    } else if (shopify) {
      axios
        .post("/api/shopify/check-theme", { value })
        .then((res) => {
          // console.log(res.data);
          dispatch(setLoading(false));
          dispatch(setShopifyThemeInfo(res.data));
        })
        .catch((err) => console.log(err));
    } else if (magento) {
      axios
        .post("/api/magento/check-theme", { value })
        .then((res) => {
          // console.log(res.data);
          dispatch(setLoading(false));
          dispatch(setMagentoThemeInfo(res.data));
        })
        .catch((err) => console.log(err));
    } else if (moodle) {
      axios
        .post("/api/moodle/check-theme", { value })
        .then((res) => {
          // console.log(res.data);
          dispatch(setLoading(false));
          dispatch(setMoodleThemeInfo(res.data));
        })
        .catch((err) => console.log(err));
    } else if (joomla) {
      axios
        .post("/api/joomla/check-theme", { value })
        .then((res) => {
          console.log(res.data);
          dispatch(setLoading(false));
          dispatch(setJoomlaThemeInfo(res.data));
        })
        .catch((err) => console.log(err));
    } else if (drupal) {
      axios
        .post("/api/drupal/check-theme", { value })
        .then((res) => {
          // console.log(res.data);
          dispatch(setLoading(false));
          dispatch(setDrupalThemeInfo(res.data));
        })
        .catch((err) => console.log(err));
    } else if (prestashop) {
      axios
        .post("/api/prestashop/check-theme", { value })
        .then((res) => {
          // console.log(res.data);
          dispatch(setLoading(false));
          dispatch(setPrestaShopThemeInfo(res.data));
        })
        .catch((err) => console.log(err));
    }

    window.scrollTo({ top: 600, behavior: "smooth" });
  };

  return (
    <>
      {data?.enable && (
        <section
          className="flex items-cente h-screen "
          style={{
            backgroundImage: `radial-gradient(
                      circle at 29% 55%,
                      hsla(329, 0%, 99%, 0.05) 0,
                      hsla(329, 0%, 99%, 0.05) 4%,
                      transparent 4%,
                      transparent 44%,
                      transparent 44%,
                      transparent 100%
                    ),
                    radial-gradient(
                      circle at 85% 89%,
                      hsla(329, 0%, 99%, 0.05) 0,
                      hsla(329, 0%, 99%, 0.05) 51%,
                      transparent 51%,
                      transparent 52%,
                      transparent 52%,
                      transparent 100%
                    ),
                    radial-gradient(
                      circle at 6% 90%,
                      hsla(329, 0%, 99%, 0.05) 0,
                      hsla(329, 0%, 99%, 0.05) 53%,
                      transparent 53%,
                      transparent 64%,
                      transparent 64%,
                      transparent 100%
                    ),
                    radial-gradient(
                      circle at 35% 75%,
                      hsla(329, 0%, 99%, 0.05) 0,
                      hsla(329, 0%, 99%, 0.05) 6%,
                      transparent 6%,
                      transparent 98%,
                      transparent 98%,
                      transparent 100%
                    ),
                    radial-gradient(
                      circle at 56% 75%,
                      hsla(329, 0%, 99%, 0.05) 0,
                      hsla(329, 0%, 99%, 0.05) 16%,
                      transparent 16%,
                      transparent 23%,
                      transparent 23%,
                      transparent 100%
                    ),
                    radial-gradient(
                      circle at 42% 0,
                      hsla(329, 0%, 99%, 0.05) 0,
                      hsla(329, 0%, 99%, 0.05) 3%,
                      transparent 3%,
                      transparent 26%,
                      transparent 26%,
                      transparent 100%
                    ),
                    radial-gradient(
                      circle at 29% 28%,
                      hsla(329, 0%, 99%, 0.05) 0,
                      hsla(329, 0%, 99%, 0.05) 51%,
                      transparent 51%,
                      transparent 75%,
                      transparent 75%,
                      transparent 100%
                    ),
                    radial-gradient(
                      circle at 77% 21%,
                      hsla(329, 0%, 99%, 0.05) 0,
                      hsla(329, 0%, 99%, 0.05) 35%,
                      transparent 35%,
                      transparent 55%,
                      transparent 55%,
                      transparent 100%
                    ),
                    radial-gradient(
                      circle at 65% 91%,
                      hsla(329, 0%, 99%, 0.05) 0,
                      hsla(329, 0%, 99%, 0.05) 46%,
                      transparent 46%,
                      transparent 76%,
                      transparent 76%,
                      transparent 100%
                    ),
                    linear-gradient(45deg, #535beb, #4c0bae)`,
          }}
        >
          <div className="relative items-cente w-full gap-12 p-8 mx-auto lg:inline-flex lg:py-20 2xl:py-52 max-w-7xl rounded-3xl">
            <div className="max-w-4xl mx-auto text-center">
              {/* <span className="inline-flex items-center">
              <span className="px-6 py-2 text-base font-bold text-white uppercase rounded-lg bg-white/10">
                Windstatic
              </span>
            </span> */}
              <p className="mt-8 text-4xl md:text-6xl font-extrabold tracking-tight text-white text-center">
                {data?.title || "Podcast summaries delivered to your inbox"}
              </p>
              <p className=" mt-4 text-md lg:text-md text-slate-200 text-center">
                {data?.desc ||
                  "Skim the quotes and bullet point summaries within minutes of     each episode release"}
              </p>

              <div className="flex flex-col justify-center gap-3 mt-10 sm:flex-row">
                <form
                  className="w-full bg-white/20 p-1.5  sm:p-3 rounded-2xl hover:shadow-lg"
                  onSubmit={handleSubmit}
                >
                  <div className="w-full lg:flex lg:items-center lg:justify-between ">
                    <div className="shrink w-full">
                      <input
                        aria-label="Search Bar"
                        // autoComplete="email"
                        className="block w-full p-3 text-gray-200 bg-transparent border border-transparent appearance-none rounded-xl focus:border-slate-500 focus:outline-none focus:ring-slate-500 placeholder:text-slate-300 sm:text-lg"
                        placeholder={placeholder}
                        // required=""
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                      />
                    </div>
                    <button
                      className="w-full lg:w-auto 0 active:bg-slate-600 active:text-white/80 before:transition-colors bg-white flex-none font-medium hover:bg-indigo-900 hover:text-white inline-flex justify-center lg:ml-4 outline-2 outline-offset-2 px-10 py-3 relative rounded-xl text-indigo-500"
                      type="submit"
                    >
                      <span>{data?.buttonText || "Search"}</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
