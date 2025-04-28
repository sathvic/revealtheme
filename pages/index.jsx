import { useDispatch } from "react-redux";
import { setHomePageData } from "../Redux/reducer";
import Head from "next/head";

import axios from "axios";
import WP_Detector from "../Components/Front/HomePage";

const Home = ({ data, themes, affiliateLink }) => {
  const dispatch = useDispatch();

  dispatch(setHomePageData(data));
  return (
    <>
      <Head>
        <title>{data?.seo?.title}</title>
        <meta name="description" content={data?.seo?.metaDesc} />
      </Head>

      <WP_Detector />
    </>
  );
};

export async function getServerSideProps({ req }) {
  const { host } = req.headers;
  const data = await axios
    .get(`http://${host}/api/wp-theme-detector`)
    .then((res) => res.data);

  // const themes = await axios
  //   .get(`http://${host}/api/wp-theme-detector/themes-db`)
  //   .then((res) => res.data);

  // const affiliateLink = await axios
  //   .get(`http://${host}/api/wp-theme-detector/affiliate-db`)
  //   .then((res) => res.data);

  return {
    props: {
      data,
      // themes,
      // affiliateLink,
    },
  };
}

export default Home;
