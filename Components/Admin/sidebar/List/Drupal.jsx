import { useRouter } from "next/router";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import CollapseItems from "../collapse-items";

export default function DrupalDetector() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("drupal-page")}
        icon={<BalanceIcon />}
        items={[
          {
            text: "Hero Section",
            link: "/admin/drupal-page-hero",
            bold: router.query.route === "drupal-page-hero",
          },
          {
            text: "Theme Info",
            bold: router.query.route === "drupal-page-checker",
            link: `/admin/drupal-page-checker`,
          },
          {
            text: "Theme Affiliate Link",
            bold: router.query.route === "drupal-page-db",
            link: `/admin/drupal-page-db`,
          },
          {
            text: "Stats",
            bold: router.query.route === "drupal-page-stats",
            link: `/admin/drupal-page-stats`,
          },

          {
            text: "Content",
            bold: router.query.route === "drupal-page-content",
            link: `/admin/drupal-page-content`,
          },

          {
            text: "Features List",
            bold: router.query.route === "drupal-page-features",
            link: `/admin/drupal-page-features`,
          },
          {
            text: "CTA",
            bold: router.query.route === "drupal-page-cta",
            link: `/admin/drupal-page-cta`,
          },
          {
            text: "FAQ",
            bold: router.query.route === "drupal-page-faq",
            link: `/admin/drupal-page-faq`,
          },

          {
            text: "SEO",
            bold: router.query.route === "drupal-page-seo",
            link: `/admin/drupal-page-seo`,
          },
        ]}
        title="Drupal Detector"
      />
    </>
  );
}
