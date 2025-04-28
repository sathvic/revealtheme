import { Tabs, Tab, Card, CardBody, Divider, Spacer } from "@nextui-org/react";
import QueryList from "./QueryList";
import AffiliateList from "./AffiliateList";
import AddAffiliate from "./AddAffiliate";

export default function CustomAffiliate() {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" variant="underlined" color="secondary">
        <Tab key="affiliate-list" title="Affiliate List">
          <AffiliateList />
        </Tab>
        <Tab key="add-affiliate" title="Add Affiliate">
          <AddAffiliate />
        </Tab>
      </Tabs>
    </div>
  );
}
