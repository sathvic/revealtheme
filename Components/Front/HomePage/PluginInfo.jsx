import {
  Button,
  Card,
  CardBody,
  Image,
  Link,
  Progress,
} from "@nextui-org/react";
import { useSelector } from "react-redux";

export default function PluginInfo() {
  const wpThemeInfo = useSelector((state) => state?.wpThemeInfo);
  const loading = useSelector((state) => state?.loading);

  // console.log(wpThemeInfo);
  return (
    <>
      {wpThemeInfo ? (
        <div className="px-4 sm:px-32 lg:px-40">
          <div className="flex">
            <p
              id="plugins"
              className="text-2xl sm:text-3xl font-bold text-gray-200 px-2 rounded bg-violet-600 w-fit "
            >
              Detected Plugins:
            </p>
            <span className="text-2xl sm:text-3xl font-bold text-gray-200 px-2 rounded bg-violet-600 w-fit mx-4">
              {wpThemeInfo?.data?.plugins?.length || "No Plugin Found."}
            </span>
          </div>
          {/* {console.log(wpThemeInfo?.data?.plugins)} */}
          {wpThemeInfo?.status
            ? wpThemeInfo?.data?.plugins?.map((x, i) => (
                <Card
                  isPressable
                  className="my-4 cursor-pointer box-shadow w-full"
                  key={i}
                  radius="none"
                >
                  <CardBody className="flex flex-col lg:flex-row justify-between ">
                    <div className="flex flex-col md:flex-row items-center justify-center mb-4 lg:mb-0">
                      <div className="relative">
                        <Image
                          isZoomed
                          src={
                            x?.screenshots ||
                            "https://ps.w.org/genesis-blocks/assets/banner-772x250.png"
                          }
                          // width={300}
                          // height={200}
                          className=" w-80 h-40 object-fill mb-4 lg:mb-0 shadow-2xl"
                        />
                        <p className="absolute top-2 left-2 z-50 text-sm font-bold px-3 py-1 bg-gradient-to-r from-[#6058ec] to-[#e92eec] text-gray-100 w-fit rounded mb-4">
                          {i + 1}
                        </p>
                      </div>

                      <div className="mx-6 mb-4 lg:mb-0">
                        <p
                          style={{ fontFamily: "jost" }}
                          className="text-medium font-semibold text-gray-800 dark:text-gray-400"
                        >
                          {x?.name
                            ?.split("-")
                            .map((y) => y.charAt(0).toUpperCase() + y.slice(1))
                            .join(" ")}
                        </p>

                        {x?.status ? (
                          <div
                            className="text-gray-600 dark:text-gray-500 text-sm"
                            dangerouslySetInnerHTML={{
                              __html: x?.description,
                            }}
                          ></div>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-500 text-sm">
                            Plugin Description Not Available{" "}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2">
                      <Button
                        href={
                          x?.data?.homepage ||
                          x?.data?.donate_link ||
                          x?.data?.download_link ||
                          `https://wordpress.org/plugins/search/${x?.name
                            ?.split("-")
                            .join("+")}`
                        }
                        as={Link}
                        isExternal
                        // color="warning"
                        showAnchorIcon
                        variant="shadow"
                        className="text-white bg-gradient-to-r from-purple-500 to-pink-500"
                      >
                        Get Plugin
                      </Button>

                      <Button
                        href={`https://google.com/search?q=${x?.name
                          ?.split("-")
                          .map((y) => y.charAt(0).toUpperCase() + y.slice(1))
                          .join(" ")}`}
                        as={Link}
                        isExternal
                        color="default"
                        showAnchorIcon
                        variant="solid"
                      >
                        Search Plugin
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              ))
            : ""}
        </div>
      ) : (
        <div>
          {loading && (
            <div className="max-w-screen-xl mx-auto px-4">
              <Progress
                size="md"
                color="secondary"
                isIndeterminate
                aria-label="Loading..."
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}
