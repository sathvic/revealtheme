import React from "react";
import Sidebar from "./sidebar.styles";
import { Image, Link } from "@nextui-org/react";
import HomeIcon from "../icons/sidebar/home-icon";
import SidebarItem from "./sidebar-item";
import SidebarMenu from "./sidebar-menu";
import useSidebarContext from "../layout/useSidebarContext";
import { useRouter } from "next/router";
// import WhoIsHosting from "./List/WhoIsHosting";
import Blog from "./List/Blog";
import HostingCoupon from "./List/HostingCoupon";
import ExitModal from "./List/ExitModal";
import Footer from "./List/Footer";
import Logo from "./List/Logo";
import Credentials from "./List/Credentials";
import DataBases from "./List/Database";
import AboutUs from "./List/AboutUs";
import Contactus from "./List/ContactUs";
import BestWPThemes from "./List/BestWPThemes";
import BestWPPlugins from "./List/BestWPPlugins";
import HomePage from "./List/HomePage";
import Ads from "./List/Ads";
import BestWooCommerce from "./List/BestWooCommerce";
import BestWordPress from "./List/BestWordPress";
import BestShared from "./List/BestShared";
import BestDedicated from "./List/BestDedicated";
import BestReseller from "./List/BestReseller";
import BestVPS from "./List/BestVPS";
import TopTen from "./List/TopTen";
import ShopifyDetector from "./List/Shopify";
import MagentoDetector from "./List/Magento";
import MoodleDetector from "./List/Moodle";
import JoomlaDetector from "./List/Joomla";
import DrupalDetector from "./List/Drupal";
import PrestaShopDetector from "./List/PrestaShop";
import RobotTxt from "./List/RobotTxt";
export default function SidebarWrapper() {
  const router = useRouter();
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <aside className="h-screen z-[202] sticky top-0  custom-scrollbar">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} />
      ) : null}
      <div
        className={`${Sidebar({
          collapsed: collapsed,
        })} bg-gradient-to-r from-blue-800 to-violet-800`}
      >
        <div className={Sidebar.Header()}>
          {/* <CompaniesDropdown /> */}
          <Link className="" href="/" aria-label="Brand">
            <Image
              width={250}
              // height={50}
              alt="Your site logo"
              src="/images/logo/logo/logo.png"
            />
          </Link>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title="Stats"
              icon={<HomeIcon />}
              isActive={router.pathname === "/admin"}
              href="/admin"
            />
            <SidebarMenu title="Settings">
              <DataBases />
              <Credentials />
              <Logo />
              <Ads />
              <RobotTxt />
            </SidebarMenu>
            {/* Lists  */}
            <SidebarMenu title="Pages">
              {/* <WhoIsHosting /> */}
              <HomePage />
              <ShopifyDetector />
              <MagentoDetector />
              <MoodleDetector />
              <JoomlaDetector />
              <DrupalDetector />
              <PrestaShopDetector />
              <Blog />
              <AboutUs />
              <Footer />
              <Contactus />
              <ExitModal />
            </SidebarMenu>
            <SidebarMenu title="Best Hosting">
              <BestShared />
              <BestVPS />
              <BestDedicated />
              <BestWooCommerce />
              <BestReseller />
              <TopTen />
              <BestWordPress />
            </SidebarMenu>

            <SidebarMenu title="WordPress">
              <BestWPThemes />
              <BestWPPlugins />
            </SidebarMenu>
            <SidebarMenu title="Coupons & Promo">
              <HostingCoupon />
            </SidebarMenu>
          </div>
          <div className={Sidebar.Footer()}></div>
        </div>
      </div>
    </aside>
  );
}
