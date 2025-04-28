import axios from "axios";
import { useEffect, useState } from "react";
import { Chip, Listbox, ListboxItem } from "@nextui-org/react";
import toast, { Toaster } from "react-hot-toast";
const _ = require("lodash");
export default function QueryList() {
  const [queries, setQueries] = useState("");

  useEffect(() => {
    axios.get("/api/magento/themes-db").then((res) => {
      setQueries(res.data);
    });
  }, []);

  const copyAction = (e) => {
    navigator?.clipboard?.writeText(e.themeInfo);
    toast.success(
      <div className="flex w-full">
        <span className="font-semibold mx-2 text-green-900">{e.themeInfo}</span>
        <span> is copied to your clipboard</span>
      </div>
    );
  };

  return (
    <div>
      <Toaster />
      <p className="my-2">
        Total Queries{" "}
        <span>
          <Chip color="secondary" variant="dot" radius="sm" size="sm">
            {queries?.length}
          </Chip>
        </span>
      </p>
      <div className="w-full  border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
        <Listbox aria-label="Dynamic Actions" className="">
          {queries &&
            _.uniqBy(queries, "themeInfo")?.map((x, i) => (
              <ListboxItem
                className="list-none"
                onPress={() => copyAction(x)}
                textValue={x}
                key={i}
                // color={item.key === "delete" ? "danger" : "default"}
                // className={item.key === "delete" ? "text-danger" : ""}
              >
                <div className=" w-full flex justify-between items-center">
                  <span>{x?.domain}</span>
                  <span>{x?.themeInfo}</span>
                </div>
              </ListboxItem>
            ))}
        </Listbox>
      </div>
    </div>
  );
}
