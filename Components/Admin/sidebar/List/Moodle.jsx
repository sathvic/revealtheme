import { useRouter } from "next/router";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import CollapseItems from "../collapse-items";

export default function MoodleDetector() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("moodle-page")}
        icon={<BalanceIcon />}
        items={[
          {
            text: "Hero Section",
            link: "/admin/moodle-page-hero",
            bold: router.query.route === "moodle-page-hero",
          },
          {
            text: "Theme Info",
            bold: router.query.route === "moodle-page-checker",
            link: `/admin/moodle-page-checker`,
          },
          {
            text: "Theme Affiliate Link",
            bold: router.query.route === "moodle-page-db",
            link: `/admin/moodle-page-db`,
          },
          {
            text: "Stats",
            bold: router.query.route === "moodle-page-stats",
            link: `/admin/moodle-page-stats`,
          },

          {
            text: "Content",
            bold: router.query.route === "moodle-page-content",
            link: `/admin/moodle-page-content`,
          },

          {
            text: "Features List",
            bold: router.query.route === "moodle-page-features",
            link: `/admin/moodle-page-features`,
          },
          {
            text: "CTA",
            bold: router.query.route === "moodle-page-cta",
            link: `/admin/moodle-page-cta`,
          },
          {
            text: "FAQ",
            bold: router.query.route === "moodle-page-faq",
            link: `/admin/moodle-page-faq`,
          },

          {
            text: "SEO",
            bold: router.query.route === "moodle-page-seo",
            link: `/admin/moodle-page-seo`,
          },
        ]}
        title="Moodle Detector"
      />
    </>
  );
}
