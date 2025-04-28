import { useRouter } from "next/router";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import CollapseItems from "../collapse-items";

export default function PrestaShopDetector() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("prestashop-page")}
        icon={<BalanceIcon />}
        items={[
          {
            text: "Hero Section",
            link: "/admin/prestashop-page-hero",
            bold: router.query.route === "prestashop-page-hero",
          },
          {
            text: "Theme Info",
            bold: router.query.route === "prestashop-page-checker",
            link: `/admin/prestashop-page-checker`,
          },
          {
            text: "Theme Affiliate Link",
            bold: router.query.route === "prestashop-page-db",
            link: `/admin/prestashop-page-db`,
          },
          {
            text: "Stats",
            bold: router.query.route === "prestashop-page-stats",
            link: `/admin/prestashop-page-stats`,
          },

          {
            text: "Content",
            bold: router.query.route === "prestashop-page-content",
            link: `/admin/prestashop-page-content`,
          },

          {
            text: "Features List",
            bold: router.query.route === "prestashop-page-features",
            link: `/admin/prestashop-page-features`,
          },
          {
            text: "CTA",
            bold: router.query.route === "prestashop-page-cta",
            link: `/admin/prestashop-page-cta`,
          },
          {
            text: "FAQ",
            bold: router.query.route === "prestashop-page-faq",
            link: `/admin/prestashop-page-faq`,
          },

          {
            text: "SEO",
            bold: router.query.route === "prestashop-page-seo",
            link: `/admin/prestashop-page-seo`,
          },
        ]}
        title="PrestaShop Detector"
      />
    </>
  );
}
