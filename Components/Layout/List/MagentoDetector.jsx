import { useRouter } from "next/router";
import ThemeInfo from "../../Admin/Components/Magento/ThemeInfo";
import FAQ from "../../Admin/Components/Magento/FAQ";
import Features from "../../Admin/Components/Magento/Features";
import Seo from "../../Admin/Components/Magento/Seo";
import Content from "../../Admin/Components/Magento/Content";
import HeroForm from "../../Admin/Components/Magento/HeroForm";
import Stats from "../../Admin/Components/Magento/Stats";
import CTA from "../../Admin/Components/Magento/CTA";
import ThemesDB from "../../Admin/Components/Magento/ThemesDB";

export default function MagentoDetector() {
  const router = useRouter();
  const route = router.query.route;
  return (
    <>
      {route === "magento-page-hero" ? (
        <HeroForm />
      ) : route === "magento-page-checker" ? (
        <ThemeInfo />
      ) : route === "magento-page-content" ? (
        <Content />
      ) : route === "magento-page-features" ? (
        <Features />
      ) : route === "magento-page-faq" ? (
        <FAQ />
      ) : route === "magento-page-stats" ? (
        <Stats />
      ) : route === "magento-page-db" ? (
        <ThemesDB />
      ) : route === "magento-page-cta" ? (
        <CTA />
      ) : route === "magento-page-seo" ? (
        <Seo dbCollection="magento-theme-detector" />
      ) : (
        ""
      )}
    </>
  );
}
