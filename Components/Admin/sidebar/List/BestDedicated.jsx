import CollapseItems from "../collapse-items";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import { useRouter } from "next/router";
export default function BestDedicated() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("best-dedicated")}
        icon={<BalanceIcon />}
        items={[
          {
            text: "Hero Section",
            link: "/admin/best-dedicated-hero",
            bold: router.query.route === "best-dedicated-hero",
          },
          {
            text: "Stats",
            bold: router.query.route === "best-dedicated-hosting-stats",
            link: `/admin/best-dedicated-hosting-stats`,
          },
          {
            text: "Hosting List",
            bold: router.query.route === "best-dedicated-hosting-list",
            link: `/admin/best-dedicated-hosting-list`,
          },

          {
            text: "Content_1",
            bold: router.query.route === "best-dedicated-content-1",
            link: `/admin/best-dedicated-content-1`,
          },
          {
            text: "Hosting Table",
            bold: router.query.route === "best-dedicated-hosting-table",
            link: `/admin/best-dedicated-hosting-table`,
          },

          {
            text: "Content_2",
            bold: router.query.route === "best-dedicated-content-2",
            link: `/admin/best-dedicated-content-2`,
          },
          {
            text: "Call to Action",
            bold: router.query.route === "best-dedicated-cta",
            link: `/admin/best-dedicated-cta`,
          },

          {
            text: "FAQ",
            bold: router.query.route === "best-dedicated-faq",
            link: `/admin/best-dedicated-faq`,
          },
          {
            text: "SEO",
            bold: router.query.route === "best-dedicated-seo",
            link: `/admin/best-dedicated-seo`,
          },
        ]}
        title="Best Dedicated"
      />
    </>
  );
}
