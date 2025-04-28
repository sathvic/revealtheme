import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Divider,
  Input,
  Spacer,
} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
// import HostingInfo from "../../../Front/HomePage/HostingInfo";
export default function CheckHosting() {
  const [loading, setLoading] = useState(false);
  const [topTitle, setTopTitle] = useState("");

  const [affiliateButtonText, setAffiliateButtonText] = useState("");
  const [affiliateLink, setAffiliateLink] = useState("");

  const token = JSON.parse(localStorage.getItem("lg_tk"));
  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/wp-theme-detector/theme-info-component", {
        topTitle,
        affiliateButtonText,
        affiliateLink,
        token,
      })
      .then((res) => {
        setLoading(false);
        toast.success(res.data?.message, { position: "bottom-right" });
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };

  useEffect(() => {
    axios.get("/api/wp-theme-detector/theme-info-component").then((res) => {
      if (res.data) {
        setTopTitle(res.data?.topTitle);
        setAffiliateButtonText(res.data?.affiliateButtonText);
        setAffiliateLink(res.data?.affiliateLink);
      }
    });
  }, []);

  return (
    <Card className="m-4 !border-0" shadow="lg">
      <Toaster />
      <CardHeader>
        <h4 className="text-xl font-semibold text-violet-700">
          Theme Information Component
        </h4>
      </CardHeader>
      <Divider />
      <CardBody>
        <div>
          <Input
            value={topTitle}
            onChange={(e) => setTopTitle(e.target.value)}
            type="text"
            label="Top Title"
          />
          {/* <Spacer y="1" />
          <Input
            value={middleDescription}
            onChange={(e) => setMiddleDescription(e.target.value)}
            type="text"
            label="Middle Text Description"
          /> */}
          <Spacer y="1" />
          <Input
            value={affiliateButtonText}
            onChange={(e) => setAffiliateButtonText(e.target.value)}
            type="text"
            label="Affiliate Button Text"
          />
          <Spacer y="1" />
          <Input
            value={affiliateLink}
            onChange={(e) => setAffiliateLink(e.target.value)}
            type="text"
            label="Default Affiliate Link"
          />
          <Spacer y="1" />
          <Chip color="secondary" radius="sm">
            Add default hosting affiliate link if not matched by your custom
            affiliate link. Please see Custom Affiliate Link.
          </Chip>

          <Spacer y="4" />
          <Button
            size="md"
            color="secondary"
            variant="shadow"
            isLoading={loading}
            onPress={handleSave}
          >
            Save
          </Button>
        </div>
      </CardBody>
      {/* <HostingInfo /> */}
    </Card>
  );
}
