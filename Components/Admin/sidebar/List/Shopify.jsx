import { useRouter } from "next/router";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import CollapseItems from "../collapse-items";

export default function ShopifyDetector() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("shopify-page")}
        icon={<BalanceIcon />}
        items={[
          {
            text: "Hero Section",
            link: "/admin/shopify-page-hero",
            bold: router.query.route === "shopify-page-hero",
          },
          {
            text: "Theme Info",
            bold: router.query.route === "shopify-page-checker",
            link: `/admin/shopify-page-checker`,
          },
          {
            text: "Theme Affiliate Link",
            bold: router.query.route === "shopify-page-db",
            link: `/admin/shopify-page-db`,
          },
          {
            text: "Stats",
            bold: router.query.route === "shopify-page-stats",
            link: `/admin/shopify-page-stats`,
          },

          {
            text: "Content",
            bold: router.query.route === "shopify-page-content",
            link: `/admin/shopify-page-content`,
          },

          {
            text: "Features List",
            bold: router.query.route === "shopify-page-features",
            link: `/admin/shopify-page-features`,
          },
          {
            text: "CTA",
            bold: router.query.route === "shopify-page-cta",
            link: `/admin/shopify-page-cta`,
          },
          {
            text: "FAQ",
            bold: router.query.route === "shopify-page-faq",
            link: `/admin/shopify-page-faq`,
          },

          {
            text: "SEO",
            bold: router.query.route === "shopify-page-seo",
            link: `/admin/shopify-page-seo`,
          },
        ]}
        title="Shopify Detector"
      />
    </>
  );
}
