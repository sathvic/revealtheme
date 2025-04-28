import CTA_1 from "../../ReUsable/Front/CTA/CTA_1";
import CTA_2 from "../../ReUsable/Front/CTA/CTA_2";
import CTA_3 from "../../ReUsable/Front/CTA/CTA_3";
import CTA_4 from "../../ReUsable/Front/CTA/CTA_4";
import CTA_5 from "../../ReUsable/Front/CTA/CTA_5";
import CTA_6 from "../../ReUsable/Front/CTA/CTA_6";
import CTA_7 from "../../ReUsable/Front/CTA/CTA_7";
import CTA_8 from "../../ReUsable/Front/CTA/CTA_8";
import CTA_9 from "../../ReUsable/Front/CTA/CTA_9";
import Stats_1 from "../../ReUsable/Front/Stats/Stats_1";
import Stats_2 from "../../ReUsable/Front/Stats/Stats_2";
import Stats_3 from "../../ReUsable/Front/Stats/Stats_3";
import Stats_4 from "../../ReUsable/Front/Stats/Stats_4";
import Stats_6 from "../../ReUsable/Front/Stats/Stats_6";
import Stats_5 from "../../ReUsable/Front/Stats/Stats_5";
import Feature_1 from "../../ReUsable/Front/Features/Feature_1";
import Feature_2 from "../../ReUsable/Front/Features/Feature_2";
import Feature_3 from "../../ReUsable/Front/Features/Feature_3";
import Feature_4 from "../../ReUsable/Front/Features/Feature_4";
import Feature_5 from "../../ReUsable/Front/Features/Feature_5";
import Feature_6 from "../../ReUsable/Front/Features/Feature_6";
import Feature_7 from "../../ReUsable/Front/Features/Feature_7";
import Feature_8 from "../../ReUsable/Front/Features/Feature_8";
import FAQ_1 from "../../ReUsable/Front/FAQ/FAQ_1";
import FAQ_2 from "../../ReUsable/Front/FAQ/FAQ_2";
import FAQ_3 from "../../ReUsable/Front/FAQ/FAQ_3";
import FAQ_4 from "../../ReUsable/Front/FAQ/FAQ_4";
import FAQ_5 from "../../ReUsable/Front/FAQ/FAQ_5";
import FAQ_6 from "../../ReUsable/Front/FAQ/FAQ_6";
import FAQ_7 from "../../ReUsable/Front/FAQ/FAQ_7";
import { useSelector } from "react-redux";
import HeroForm_1 from "../../ReUsable/Front/HeroForm/HeroForm_1";
import HeroForm_2 from "../../ReUsable/Front/HeroForm/HeroForm_2";
import HeroForm_3 from "../../ReUsable/Front/HeroForm/HeroForm_3";
import HeroForm_4 from "../../ReUsable/Front/HeroForm/HeroForm_4";
import HeroForm_5 from "../../ReUsable/Front/HeroForm/HeroForm_5";
import HeroForm_6 from "../../ReUsable/Front/HeroForm/HeroForm_6";
import HeroForm_7 from "../../ReUsable/Front/HeroForm/HeroForm_7";
import HeroForm_8 from "../../ReUsable/Front/HeroForm/HeroForm_8";
import Blog from "../../ReUsable/Blog";
import Ads from "../Ads";
import Stats_7 from "../../ReUsable/Front/Stats/Stats_7";
import ThemeInfo from "./ThemeInfo";
import PluginInfo from "./PluginInfo";
export default function WP_Detector() {
  const homePageData = useSelector((state) => state?.homePageData);

  return (
    <>
      {/* Hero section */}
      <div>
        <HeroForm_1
          homePage
          placeholder="Enter a WordPress Site"
          data={homePageData?.hero_form_1}
        />
        <HeroForm_2
          homePage
          placeholder="Enter a WordPress Site"
          data={homePageData?.hero_form_2}
        />
        <HeroForm_3
          homePage
          placeholder="Enter a WordPress Site"
          data={homePageData?.hero_form_3}
        />
        <HeroForm_4
          homePage
          placeholder="Enter a WordPress Site"
          data={homePageData?.hero_form_4}
        />
        <HeroForm_5
          homePage
          placeholder="Enter a WordPress Site"
          data={homePageData?.hero_form_5}
        />
        <HeroForm_6
          homePage
          placeholder="Enter a WordPress Site"
          data={homePageData?.hero_form_6}
        />
        <HeroForm_7
          homePage
          placeholder="Enter a WordPress Site"
          data={homePageData?.hero_form_7}
        />
        <HeroForm_8
          homePage
          placeholder="Enter a WordPress Site"
          data={homePageData?.hero_form_8}
        />
      </div>

      <Ads />

      <ThemeInfo />
      <PluginInfo />

      {/* {whoisHostingInfo && <HostingList data={homePageData} />} */}

      {/* Stats */}
      <Stats_1 data={homePageData?.stats_1} />
      <Stats_2 data={homePageData?.stats_2} />
      <Stats_3 data={homePageData?.stats_3} />
      <Stats_4 data={homePageData?.stats_4} />
      <Stats_5 data={homePageData?.stats_5} />
      <Stats_6 data={homePageData?.stats_6} />
      <Stats_7 data={homePageData?.stats_7} />
      {/* Stats */}
      {/* Hosting list */}

      {/* {!whoisHostingInfo && <HostingList data={homePageData} />} */}
      <Ads />
      <Blog data={homePageData?.content} />
      {/* Hosting  table */}
      {/* <HostingTable data={homePageData} /> */}

      {/* Feature */}
      <Ads />
      <Feature_1 data={homePageData?.features_1} />
      <Feature_2 data={homePageData?.features_2} />
      <Feature_3 data={homePageData?.features_3} />
      <Feature_4 data={homePageData?.features_4} />
      <Feature_5 data={homePageData?.features_5} />
      <Feature_6 data={homePageData?.features_6} />
      <Feature_7 data={homePageData?.features_7} />
      <Feature_8 data={homePageData?.features_8} />
      {/* Feature */}

      {/* Call to Action */}
      <CTA_1 data={homePageData?.cta_1} />
      <CTA_2 data={homePageData?.cta_2} />
      <CTA_3 data={homePageData?.cta_3} />
      <CTA_4 data={homePageData?.cta_4} />
      <CTA_5 data={homePageData?.cta_5} />
      <CTA_6 data={homePageData?.cta_6} />
      <CTA_7 data={homePageData?.cta_7} />
      <CTA_8 data={homePageData?.cta_8} />
      <CTA_9 data={homePageData?.cta_9} />

      {/* Call to Action */}
      {/* Faq */}
      <FAQ_1 data={homePageData?.faq_1} />
      <FAQ_2 data={homePageData?.faq_2} />
      <FAQ_3 data={homePageData?.faq_3} />
      <FAQ_4 data={homePageData?.faq_4} />
      <FAQ_5 data={homePageData?.faq_5} />
      <FAQ_6 data={homePageData?.faq_6} />
      <FAQ_7 data={homePageData?.faq_7} />

      {/* Faq */}
      <Ads />
    </>
  );
}
