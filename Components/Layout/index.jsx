import Layout from "../Admin/layout/layout";
import AdminLogin from "../Admin/Components/AdminLogin";
import { useSelector } from "react-redux";
import HomePage from "./List/HomePage";

import Blog from "./List/Blog";
import HostingCoupons from "./List/HostingCoupon";
import ExitModals from "./List/ExitModal";
import Footer from "./List/Footer";
import Logos from "./List/Logo";
import AdminCredential from "./List/Credentials";
import Databases from "./List/Database";
import Aboutus from "./List/AboutUs";
import Contactus from "./List/ContactUs";
import BestWordPressThemes from "./List/BestWPThemes";
import BestWordPressPlugin from "./List/BestWPPlugins";
import AdminStat from "./List/AdminStats";
import Ads from "./List/Ads";
import BestWordPress from "./List/BestWordPress";
import BestWooCommerce from "./List/BestWooCommerce";
import BestDedicated from "./List/BestDedicated";
import BestReseller from "./List/BestReseller";
import BestShared from "./List/BestShared";
import BestVPS from "./List/BestVPS";
import TopTen from "./List/TopTen";
import ShopifyDetector from "./List/ShopifyDetector";
import MagentoDetector from "./List/MagentoDetector";
import MoodleDetector from "./List/MoodleDetector";
import JoomlaDetector from "./List/JoomlaDetector";
import DrupalDetector from "./List/DrupalDetector";
import PrestaShopDetector from "./List/PrestaShopDetector";
import RobotTxtT from "./List/Robot.txt";

export default function MyLayout() {
  const loggedIn = useSelector((state) => state.loggedIn);
  return (
    <>
      {loggedIn ? (
        <Layout>
          {/* Admin Sidebar layout component */}
          <AdminStat />
          <HomePage />

          <Blog />
          <HostingCoupons />

          <ExitModals />

          <Footer />
          <Logos />
          <AdminCredential />
          <Databases />
          <Aboutus />
          <Contactus />
          <BestWordPressThemes />
          <BestWordPressPlugin />
          <BestWordPress />
          <BestWooCommerce />
          <BestDedicated />
          <BestReseller />
          <BestShared />
          <BestVPS />
          <TopTen />
          <ShopifyDetector />
          <MagentoDetector />
          <MoodleDetector />
          <JoomlaDetector />
          <DrupalDetector />
          <PrestaShopDetector />
          <Ads />
          <RobotTxtT />
        </Layout>
      ) : (
        <AdminLogin />
      )}
    </>
  );
}
