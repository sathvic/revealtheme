import { useState } from "react";
import { useSelector } from "react-redux";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-md shadow-sm">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0 transition-transform duration-200">
          {children}
        </div>
      )}
    </div>
  );
};

const renderThemeDetails = (obj) => {
  const themeDetailElements = [];

  for (const [key, value] of Object.entries(obj)) {
    themeDetailElements.push(
      <div
        key={key}
        className="border-b-1 py-2 px-4 my-1  hover:bg-slate-100 hover:rounded-md"
      >
        <span className="font-semibold text-blue-800">{key}:</span> {value}
      </div>
    );
  }

  return themeDetailElements;
};

export default function ThemeCss({ data }) {
  const wpThemeInfo = useSelector((state) => state.wpThemeInfo);
  //   console.log(Object.keys(whoisHostingInfo?.data?.cssInfo[0]).length);
  return (
    <div class="px-4 my-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:my-6">
      <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div class="space-y-4">
          <Item title="Theme Details">
            {wpThemeInfo?.data?.cssInfo?.length
              ? renderThemeDetails(wpThemeInfo?.data?.cssInfo[0])
              : "Theme Details not found"}
          </Item>
        </div>
      </div>
    </div>
  );
}
