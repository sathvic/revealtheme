import { useRouter } from "next/router";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import CollapseItems from "../collapse-items";

export default function JoomlaDetector() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("joomla-page")}
        icon={<BalanceIcon />}
        items={[
          {
            text: "Hero Section",
            link: "/admin/joomla-page-hero",
            bold: router.query.route === "joomla-page-hero",
          },
          {
            text: "Theme Info",
            bold: router.query.route === "joomla-page-checker",
            link: `/admin/joomla-page-checker`,
          },
          {
            text: "Theme Affiliate Link",
            bold: router.query.route === "joomla-page-db",
            link: `/admin/joomla-page-db`,
          },
          {
            text: "Stats",
            bold: router.query.route === "joomla-page-stats",
            link: `/admin/joomla-page-stats`,
          },

          {
            text: "Content",
            bold: router.query.route === "joomla-page-content",
            link: `/admin/joomla-page-content`,
          },

          {
            text: "Features List",
            bold: router.query.route === "joomla-page-features",
            link: `/admin/joomla-page-features`,
          },
          {
            text: "CTA",
            bold: router.query.route === "joomla-page-cta",
            link: `/admin/joomla-page-cta`,
          },
          {
            text: "FAQ",
            bold: router.query.route === "joomla-page-faq",
            link: `/admin/joomla-page-faq`,
          },

          {
            text: "SEO",
            bold: router.query.route === "joomla-page-seo",
            link: `/admin/joomla-page-seo`,
          },
        ]}
        title="Joomla Detector"
      />
    </>
  );
}
