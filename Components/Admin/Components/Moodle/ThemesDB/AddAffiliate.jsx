import { Button, Chip, Input, Spacer } from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast, { Toaster } from "react-hot-toast";

export default function AddAffiliate() {
  const [loading, setLoading] = useState(false);
  const [hostingName, setHostingName] = useState("");
  const [hostingCode, setHostingCode] = useState("");
  const [affiliateLink, setAffiliateLink] = useState("");
  const [uniqueId, setUniqueId] = useState(uuidv4());

  const token = JSON.parse(localStorage.getItem("lg_tk"));

  const handleSave = (e) => {
    setLoading(true);

    axios
      .post("/api/moodle/affiliate-db", {
        hostingName,
        hostingCode,
        affiliateLink,
        uniqueId,
        token,
      })
      .then((res) => {
        setLoading(false);
        toast.success(res.data?.message, { position: "bottom-right" });
      })
      .catch((err) => {
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };

  return (
    <div>
      <Toaster />

      <Spacer y="2" />
      <Input
        value={hostingName}
        onChange={(e) => setHostingName(e.target.value)}
        type="text"
        label="Theme Name"
      />

      <Spacer y="2" />

      <Input
        value={hostingCode}
        onChange={(e) => setHostingCode(e.target.value)}
        type="text"
        label="Paste clipboard text here | or type theme code"
      />

      <Spacer y="2" />

      <Input
        value={affiliateLink}
        onChange={(e) => setAffiliateLink(e.target.value)}
        type="text"
        label="Theme's Affiliate Link"
      />
      <Spacer y="2" />
      <Chip color="secondary" variant="flat" radius="sm">
        Please do not and duplicate item. Pressing twice the button will create
        duplicate item.
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
  );
}
