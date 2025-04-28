import Seo from "../HomePage/Seo";
import AllPost from "./AllPost";
import toast, { Toaster } from "react-hot-toast";
export default function Blog() {
  return (
    <div>
      <Toaster />
      <AllPost />
      <Seo dbCollection={"blog-seo"} />
    </div>
  );
}
