import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import QueryList from "./QueryList";
import CustomAffiliate from "./CustomAffiliate";

export default function HostingDB() {
  return (
    <Card className="m-4 !border-0" shadow="lg">
      <CardBody>
        <div className="flex w-full flex-col">
          <Tabs aria-label="Options">
            <Tab key="theme-list" title="Theme Queries">
              <QueryList />
            </Tab>
            <Tab key="add-Themes" title="Themes Affiliate Links">
              <CustomAffiliate />
            </Tab>
          </Tabs>
        </div>
      </CardBody>
    </Card>
  );
}
