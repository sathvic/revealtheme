import axios from "axios";
import { useDispatch } from "react-redux";
import { setPageData } from "../../Redux/reducer";
import Head from "next/head";
import PrestaShop from "../../Components/Front/PrestaShopThemeDetector";

export default function DRT({ data }) {
  const dispatch = useDispatch();
  dispatch(setPageData(data));
  return (
    <>
      <Head>
        <title>{data?.seo?.title}</title>
        <meta name="description" content={data?.seo?.metaDesc} />
      </Head>
      <PrestaShop />
    </>
  );
}
export async function getServerSideProps({ req }) {
  const { host } = req.headers;
  const data = await axios
    .get(`http://${host}/api/prestashop`)
    .then((res) => res.data);

  return {
    props: {
      data,
    },
  };
}
