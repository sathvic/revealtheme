import { useRouter } from "next/router";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import CollapseItems from "../collapse-items";

export default function MagentoDetector() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("magento-page")}
        icon={<BalanceIcon />}
        items={[
          {
            text: "Hero Section",
            link: "/admin/magento-page-hero",
            bold: router.query.route === "magento-page-hero",
          },
          {
            text: "Theme Info",
            bold: router.query.route === "magento-page-checker",
            link: `/admin/magento-page-checker`,
          },
          {
            text: "Theme Affiliate Link",
            bold: router.query.route === "magento-page-db",
            link: `/admin/magento-page-db`,
          },
          {
            text: "Stats",
            bold: router.query.route === "magento-page-stats",
            link: `/admin/magento-page-stats`,
          },

          {
            text: "Content",
            bold: router.query.route === "magento-page-content",
            link: `/admin/magento-page-content`,
          },

          {
            text: "Features List",
            bold: router.query.route === "magento-page-features",
            link: `/admin/magento-page-features`,
          },
          {
            text: "CTA",
            bold: router.query.route === "magento-page-cta",
            link: `/admin/magento-page-cta`,
          },
          {
            text: "FAQ",
            bold: router.query.route === "magento-page-faq",
            link: `/admin/magento-page-faq`,
          },

          {
            text: "SEO",
            bold: router.query.route === "magento-page-seo",
            link: `/admin/magento-page-seo`,
          },
        ]}
        title="Magento Detector"
      />
    </>
  );
}
