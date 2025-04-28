import { useRouter } from "next/router";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import CollapseItems from "../collapse-items";

export default function HomePage() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("home-page")}
        icon={<BalanceIcon />}
        items={[
          {
            text: "Hero Section",
            link: "/admin/home-page-hero",
            bold: router.query.route === "home-page-hero",
          },
          {
            text: "Theme Info",
            bold: router.query.route === "home-page-checker",
            link: `/admin/home-page-checker`,
          },
          {
            text: "Theme Affiliate Link",
            bold: router.query.route === "home-page-db",
            link: `/admin/home-page-db`,
          },
          {
            text: "Stats",
            bold: router.query.route === "home-page-stats",
            link: `/admin/home-page-stats`,
          },

          {
            text: "Content",
            bold: router.query.route === "home-page-content",
            link: `/admin/home-page-content`,
          },

          {
            text: "Features List",
            bold: router.query.route === "home-page-features",
            link: `/admin/home-page-features`,
          },
          {
            text: "CTA",
            bold: router.query.route === "home-page-cta",
            link: `/admin/home-page-cta`,
          },
          {
            text: "FAQ",
            bold: router.query.route === "home-page-faq",
            link: `/admin/home-page-faq`,
          },

          {
            text: "SEO",
            bold: router.query.route === "home-page-seo",
            link: `/admin/home-page-seo`,
          },
        ]}
        title="Home Page"
      />
    </>
  );
}
