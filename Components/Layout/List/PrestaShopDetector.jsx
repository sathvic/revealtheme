import { useRouter } from "next/router";
import ThemeInfo from "../../Admin/Components/PrestaShop/ThemeInfo";
import FAQ from "../../Admin/Components/PrestaShop/FAQ";
import Features from "../../Admin/Components/PrestaShop/Features";
import Seo from "../../Admin/Components/PrestaShop/Seo";
import Content from "../../Admin/Components/PrestaShop/Content";
import HeroForm from "../../Admin/Components/PrestaShop/HeroForm";
import Stats from "../../Admin/Components/PrestaShop/Stats";
import CTA from "../../Admin/Components/PrestaShop/CTA";
import ThemesDB from "../../Admin/Components/PrestaShop/ThemesDB";

export default function PrestaShopDetector() {
  const router = useRouter();
  const route = router.query.route;
  return (
    <>
      {route === "prestashop-page-hero" ? (
        <HeroForm />
      ) : route === "prestashop-page-checker" ? (
        <ThemeInfo />
      ) : route === "prestashop-page-content" ? (
        <Content />
      ) : route === "prestashop-page-features" ? (
        <Features />
      ) : route === "prestashop-page-faq" ? (
        <FAQ />
      ) : route === "prestashop-page-stats" ? (
        <Stats />
      ) : route === "prestashop-page-db" ? (
        <ThemesDB />
      ) : route === "prestashop-page-cta" ? (
        <CTA />
      ) : route === "prestashop-page-seo" ? (
        <Seo dbCollection="prestashop-theme-detector" />
      ) : (
        ""
      )}
    </>
  );
}
