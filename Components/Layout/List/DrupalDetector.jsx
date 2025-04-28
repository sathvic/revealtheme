import { useRouter } from "next/router";
import ThemeInfo from "../../Admin/Components/Drupal/ThemeInfo";
import FAQ from "../../Admin/Components/Drupal/FAQ";
import Features from "../../Admin/Components/Drupal/Features";
import Seo from "../../Admin/Components/Drupal/Seo";
import Content from "../../Admin/Components/Drupal/Content";
import HeroForm from "../../Admin/Components/Drupal/HeroForm";
import Stats from "../../Admin/Components/Drupal/Stats";
import CTA from "../../Admin/Components/Drupal/CTA";
import ThemesDB from "../../Admin/Components/Drupal/ThemesDB";

export default function DrupalDetector() {
  const router = useRouter();
  const route = router.query.route;
  return (
    <>
      {route === "drupal-page-hero" ? (
        <HeroForm />
      ) : route === "drupal-page-checker" ? (
        <ThemeInfo />
      ) : route === "drupal-page-content" ? (
        <Content />
      ) : route === "drupal-page-features" ? (
        <Features />
      ) : route === "drupal-page-faq" ? (
        <FAQ />
      ) : route === "drupal-page-stats" ? (
        <Stats />
      ) : route === "drupal-page-db" ? (
        <ThemesDB />
      ) : route === "drupal-page-cta" ? (
        <CTA />
      ) : route === "drupal-page-seo" ? (
        <Seo dbCollection="drupal-theme-detector" />
      ) : (
        ""
      )}
    </>
  );
}
