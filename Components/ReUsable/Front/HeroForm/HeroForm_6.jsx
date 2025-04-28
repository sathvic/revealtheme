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
          // console.log(res.data);
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
        <div className="dark:bg-gradient-to-r dark:from-slate-900dark: to-slate-700 dark:bg-gray-900 h-screen relative">
          <div
            className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[50px] sm:max-w-md md:max-w-lg"
            style={{
              background:
                "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
            }}
          ></div>
          <section className="relative">
            <div className="relative max-w-screen-xl mx-auto px-4 py-10 lg:py-28 2xl:py-52 md:px-8">
              <div className="space-y-5 max-w-4xl 2xl:max-w-7xl mx-auto text-center relative">
                <h2 className="text-4xl dark:text-white font-extrabold mx-auto md:text-6xl 2xl:text-7xl text-center relative">
                  {data?.title ||
                    "Build and scale up your startup with the best tools"}
                </h2>
                <p className="max-w-2xl mx-auto text-gray-400">
                  {data?.desc ||
                    "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae."}
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="flex justify-center w-full"
                >
                  <div className="justify-between w-full max-w-5xl items-center gap-x-3 sm:flex relative">
                    <input
                      required
                      type="text"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      placeholder={placeholder}
                      className="w-full  block border border-gray-300 dark:border-gray-800 px-3 py-5 text-gray-600 dark:text-gray-400 text-lg focus:bg-gray-100 focus:shadow-md dark:bg-gray-700 dark:focus:bg-gray-900 dark:focus:border-gray-700 duration-150 outline-none rounded-lg shadow relative"
                    />
                    <button
                      type="submit"
                      className="flex items-center justify-center gap-x-2 py-6 px-4 mt-3 w-full text-sm text-white font-medium bg-sky-500 hover:bg-sky-400 active:bg-sky-600 duration-150 rounded-lg sm:mt-0 sm:w-72 relative"
                    >
                      {data?.buttonText || "Search"}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
                <div className="flex justify-center items-center gap-x-4 text-gray-400 text-sm">
                  <div className="flex">
                    <svg
                      className="w-5 h-5 text-orange-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-orange-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-orange-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-orange-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-orange-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                    </svg>
                  </div>
                  <p>{data?.ratingText || "5.0 by over 200 users"}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
