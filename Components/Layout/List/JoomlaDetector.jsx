import { useRouter } from "next/router";
import ThemeInfo from "../../Admin/Components/Joomla/ThemeInfo";
import FAQ from "../../Admin/Components/Joomla/FAQ";
import Features from "../../Admin/Components/Joomla/Features";
import Seo from "../../Admin/Components/Joomla/Seo";
import Content from "../../Admin/Components/Joomla/Content";
import HeroForm from "../../Admin/Components/Joomla/HeroForm";
import Stats from "../../Admin/Components/Joomla/Stats";
import CTA from "../../Admin/Components/Joomla/CTA";
import ThemesDB from "../../Admin/Components/Joomla/ThemesDB";

export default function JoomlaDetector() {
  const router = useRouter();
  const route = router.query.route;
  return (
    <>
      {route === "joomla-page-hero" ? (
        <HeroForm />
      ) : route === "joomla-page-checker" ? (
        <ThemeInfo />
      ) : route === "joomla-page-content" ? (
        <Content />
      ) : route === "joomla-page-features" ? (
        <Features />
      ) : route === "joomla-page-faq" ? (
        <FAQ />
      ) : route === "joomla-page-stats" ? (
        <Stats />
      ) : route === "joomla-page-db" ? (
        <ThemesDB />
      ) : route === "joomla-page-cta" ? (
        <CTA />
      ) : route === "joomla-page-seo" ? (
        <Seo dbCollection="joomla-theme-detector" />
      ) : (
        ""
      )}
    </>
  );
}
