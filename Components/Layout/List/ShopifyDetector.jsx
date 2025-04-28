import { useRouter } from "next/router";
import ThemeInfo from "../../Admin/Components/Shopify/ThemeInfo";
import FAQ from "../../Admin/Components/Shopify/FAQ";
import Features from "../../Admin/Components/Shopify/Features";
// import WhoIsHero from "../../Admin/Components/Shopify/Hero";
// import RecommendedHost from "../../Admin/Components/Shopify/RecommendedHost";
import Seo from "../../Admin/Components/Shopify/Seo";
import Content from "../../Admin/Components/Shopify/Content";
import HeroForm from "../../Admin/Components/Shopify/HeroForm";
import Stats from "../../Admin/Components/Shopify/Stats";
import CTA from "../../Admin/Components/Shopify/CTA";
// import BestHost from "../../Admin/Components/Shopify/HostingList";
import ThemesDB from "../../Admin/Components/Shopify/ThemesDB";
export default function ShopifyDetector() {
  const router = useRouter();
  const route = router.query.route;
  return (
    <>
      {route === "shopify-page-hero" ? (
        <HeroForm />
      ) : route === "shopify-page-checker" ? (
        <ThemeInfo />
      ) : route === "shopify-page-content" ? (
        <Content />
      ) : route === "shopify-page-features" ? (
        <Features />
      ) : route === "shopify-page-faq" ? (
        <FAQ />
      ) : route === "shopify-page-stats" ? (
        <Stats />
      ) : route === "shopify-page-db" ? (
        <ThemesDB />
      ) : route === "shopify-page-cta" ? (
        <CTA />
      ) : route === "shopify-page-seo" ? (
        <Seo dbCollection="shopify-theme-detector" />
      ) : (
        ""
      )}
    </>
  );
}
