import { useRouter } from "next/router";
import ThemeInfo from "../../Admin/Components/HomePage/ThemeInfo";
import FAQ from "../../Admin/Components/HomePage/FAQ";
import Features from "../../Admin/Components/HomePage/Features";
// import WhoIsHero from "../../Admin/Components/HomePage/Hero";
// import RecommendedHost from "../../Admin/Components/HomePage/RecommendedHost";
import Seo from "../../Admin/Components/HomePage/Seo";
import Content from "../../Admin/Components/HomePage/Content";
import HeroForm from "../../Admin/Components/HomePage/HeroForm";
import Stats from "../../Admin/Components/HomePage/Stats";
import CTA from "../../Admin/Components/HomePage/CTA";
// import BestHost from "../../Admin/Components/HomePage/HostingList";
import ThemesDB from "../../Admin/Components/HomePage/ThemesDB";
export default function HomePage() {
  const router = useRouter();
  const route = router.query.route;
  return (
    <>
      {route === "home-page-hero" ? (
        <HeroForm />
      ) : route === "home-page-checker" ? (
        <ThemeInfo />
      ) : route === "home-page-content" ? (
        <Content />
      ) : route === "home-page-features" ? (
        <Features />
      ) : route === "home-page-faq" ? (
        <FAQ />
      ) : route === "home-page-stats" ? (
        <Stats />
      ) : route === "home-page-db" ? (
        <ThemesDB />
      ) : route === "home-page-cta" ? (
        <CTA />
      ) : route === "home-page-seo" ? (
        <Seo dbCollection="wp-theme-detector" />
      ) : (
        ""
      )}
    </>
  );
}
