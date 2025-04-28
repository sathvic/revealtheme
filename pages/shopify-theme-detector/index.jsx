import axios from "axios";
import { useDispatch } from "react-redux";
import { setPageData } from "../../Redux/reducer";
import Head from "next/head";
import ShopifyDetector from "../../Components/Front/ShopifyThemeDetector";

export default function SHT({ data }) {
  const dispatch = useDispatch();
  dispatch(setPageData(data));
  return (
    <>
      <Head>
        <title>{data?.seo?.title}</title>
        <meta name="description" content={data?.seo?.metaDesc} />
      </Head>
      <ShopifyDetector />
    </>
  );
}
export async function getServerSideProps({ req }) {
  const { host } = req.headers;
  const data = await axios
    .get(`http://${host}/api/shopify`)
    .then((res) => res.data);

  return {
    props: {
      data,
    },
  };
}
