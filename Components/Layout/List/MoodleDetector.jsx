import { useRouter } from "next/router";
import ThemeInfo from "../../Admin/Components/Moodle/ThemeInfo";
import FAQ from "../../Admin/Components/Moodle/FAQ";
import Features from "../../Admin/Components/Moodle/Features";
import Seo from "../../Admin/Components/Moodle/Seo";
import Content from "../../Admin/Components/Moodle/Content";
import HeroForm from "../../Admin/Components/Moodle/HeroForm";
import Stats from "../../Admin/Components/Moodle/Stats";
import CTA from "../../Admin/Components/Moodle/CTA";
import ThemesDB from "../../Admin/Components/Moodle/ThemesDB";

export default function MoodleDetector() {
  const router = useRouter();
  const route = router.query.route;
  return (
    <>
      {route === "moodle-page-hero" ? (
        <HeroForm />
      ) : route === "moodle-page-checker" ? (
        <ThemeInfo />
      ) : route === "moodle-page-content" ? (
        <Content />
      ) : route === "moodle-page-features" ? (
        <Features />
      ) : route === "moodle-page-faq" ? (
        <FAQ />
      ) : route === "moodle-page-stats" ? (
        <Stats />
      ) : route === "moodle-page-db" ? (
        <ThemesDB />
      ) : route === "moodle-page-cta" ? (
        <CTA />
      ) : route === "moodle-page-seo" ? (
        <Seo dbCollection="moodle-theme-detector" />
      ) : (
        ""
      )}
    </>
  );
}
