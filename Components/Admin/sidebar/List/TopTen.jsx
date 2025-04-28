import { useRouter } from "next/router";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import CollapseItems from "../collapse-items";

export default function TopTen() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("top-ten")}
        icon={<BalanceIcon />}
        items={[
          {
            text: "Hero Section",
            link: "/admin/top-ten-hero",
            bold: router.query.route === "top-ten-hero",
          },
          {
            text: "Stats",
            bold: router.query.route === "top-ten-stats",
            link: `/admin/top-ten-stats`,
          },
          {
            text: "Hosting List",
            bold: router.query.route === "top-ten-hosting-list",
            link: `/admin/top-ten-hosting-list`,
          },
          {
            text: "Content_1",
            bold: router.query.route === "top-ten-content-1",
            link: `/admin/top-ten-content-1`,
          },
          {
            text: "Hosting Table",
            bold: router.query.route === "top-ten-hosting-table",
            link: `/admin/top-ten-hosting-table`,
          },
          {
            text: "Content_2",
            bold: router.query.route === "top-ten-content-2",
            link: `/admin/top-ten-content-2`,
          },

          {
            text: "Call to Action",
            bold: router.query.route === "top-ten-cta",
            link: `/admin/top-ten-cta`,
          },
          {
            text: "FAQ",
            bold: router.query.route === "top-ten-faq",
            link: `/admin/top-ten-faq`,
          },
          {
            text: "SEO",
            bold: router.query.route === "top-ten-seo",
            link: `/admin/top-ten-seo`,
          },
        ]}
        title="Top Ten Hosting"
      />
    </>
  );
}
