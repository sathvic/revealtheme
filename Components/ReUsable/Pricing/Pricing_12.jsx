import {
  Button,
  Checkbox,
  Divider,
  Input,
  Spacer,
  Textarea,
} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Pricing_12 from "../Front/Pricing/Pricing_12";

export default function AdminPricing_12({ dbCollection, item }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [pricing1Tag, setPricing1Tag] = useState("");
  const [pricing1Title, setPricing1Title] = useState("");
  const [pricing1Description, setPricing1Description] = useState("");
  const [pricing1, setPricing1] = useState("");
  const [pricing1ButtonText, setPricing1ButtonText] = useState("");
  const [pricing1ButtonLink, setPricing1ButtonLink] = useState("");
  const [pricing1Features, setPricing1Features] = useState("");

  const [pricing2Tag, setPricing2Tag] = useState("");
  const [pricing2Title, setPricing2Title] = useState("");
  const [pricing2Description, setPricing2Description] = useState("");
  const [pricing2, setPricing2] = useState("");
  const [pricing2ButtonText, setPricing2ButtonText] = useState("");
  const [pricing2ButtonLink, setPricing2ButtonLink] = useState("");
  const [pricing2Features, setPricing2Features] = useState("");

  const [pricing3Tag, setPricing3Tag] = useState("");
  const [pricing3Title, setPricing3Title] = useState("");
  const [pricing3Description, setPricing3Description] = useState("");
  const [pricing3, setPricing3] = useState("");
  const [pricing3ButtonText, setPricing3ButtonText] = useState("");
  const [pricing3ButtonLink, setPricing3ButtonLink] = useState("");
  const [pricing3Features, setPricing3Features] = useState("");

  const [pricing4Tag, setPricing4Tag] = useState("");
  const [pricing4Title, setPricing4Title] = useState("");
  const [pricing4Description, setPricing4Description] = useState("");
  const [pricing4, setPricing4] = useState("");
  const [pricing4ButtonText, setPricing4ButtonText] = useState("");
  const [pricing4ButtonLink, setPricing4ButtonLink] = useState("");
  const [pricing4Features, setPricing4Features] = useState("");

  const [enable, setEnable] = useState(false);

  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("lg_tk"));

  const handleSave = () => {
    setLoading(true);
    axios
      .post("/api/data/plain-data", {
        title,
        desc,
        pricing1Title,
        pricing1Description,
        pricing1,
        pricing1ButtonText,
        pricing1ButtonLink,
        pricing1Features,
        pricing2Title,
        pricing2Description,
        pricing2,
        pricing2ButtonText,
        pricing2ButtonLink,
        pricing2Features,
        pricing3Title,
        pricing3Description,
        pricing3,
        pricing3ButtonText,
        pricing3ButtonLink,
        pricing3Features,
        pricing4Title,
        pricing4Description,
        pricing4,
        pricing4ButtonText,
        pricing4ButtonLink,
        pricing4Features,
        pricing1Tag,
        pricing2Tag,
        pricing3Tag,
        pricing4Tag,
        enable,
        token,
        dbCollection,
        item,
      })
      .then((res) => {
        setLoading(false);
        toast.success(res.data?.message, { position: "bottom-right" });
      })
      .catch(() => {
        setLoading(false);
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };

  useEffect(() => {
    axios
      .get("/api/data/plain-data", { params: { dbCollection, item } })
      .then((res) => {
        if (res.data?.pricing_12) {
          setEnable(res.data?.pricing_12?.enable);
          setTitle(res.data?.pricing_12?.title);
          setDesc(res.data?.pricing_12?.desc);

          setPricing1Tag(res.data?.pricing_12?.pricing1Tag);
          setPricing1Title(res.data?.pricing_12?.pricing1Title);
          setPricing1Description(res.data?.pricing_12?.pricing1Description);
          setPricing1(res.data?.pricing_12?.pricing1);
          setPricing1ButtonText(res.data?.pricing_12?.pricing1ButtonText);
          setPricing1ButtonLink(res.data?.pricing_12?.pricing1ButtonLink);
          setPricing1Features(res.data?.pricing_12?.pricing1Features);

          setPricing2Tag(res.data?.pricing_12?.pricing2Tag);
          setPricing2Title(res.data?.pricing_12?.pricing2Title);
          setPricing2Description(res.data?.pricing_12?.pricing2Description);
          setPricing2(res.data?.pricing_12?.pricing2);
          setPricing2ButtonText(res.data?.pricing_12?.pricing2ButtonText);
          setPricing2ButtonLink(res.data?.pricing_12?.pricing2ButtonLink);
          setPricing2Features(res.data?.pricing_12?.pricing2Features);

          setPricing3Tag(res.data?.pricing_12?.pricing3Tag);
          setPricing3Title(res.data?.pricing_12?.pricing3Title);
          setPricing3Description(res.data?.pricing_12?.pricing3Description);
          setPricing3(res.data?.pricing_12?.pricing3);
          setPricing3ButtonText(res.data?.pricing_12?.pricing3ButtonText);
          setPricing3ButtonLink(res.data?.pricing_12?.pricing3ButtonLink);
          setPricing3Features(res.data?.pricing_12?.pricing3Features);

          setPricing4Tag(res.data?.pricing_12?.pricing4Tag);
          setPricing4Title(res.data?.pricing_12?.pricing4Title);
          setPricing4Description(res.data?.pricing_12?.pricing4Description);
          setPricing4(res.data?.pricing_12?.pricing4);
          setPricing4ButtonText(res.data?.pricing_12?.pricing4ButtonText);
          setPricing4ButtonLink(res.data?.pricing_12?.pricing4ButtonLink);
          setPricing4Features(res.data?.pricing_12?.pricing4Features);
        }
      });
  }, []);

  return (
    <div>
      <Toaster />
      <div className="p-2">
        <h4 className="text-xl font-semibold text-violet-700">
          Pricing 3 Component
        </h4>
      </div>
      <Divider />

      <div className="p-4">
        <Checkbox size="lg" isSelected={enable} onValueChange={setEnable}>
          <span className="text-primary font-semibold">Enable?</span>
        </Checkbox>

        <Spacer y="4" />
        <div>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            label="Pricing Top Title"
          />
          <Spacer y="2" />
          <Input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            label="Pricing Top Description"
          />
        </div>
        <Spacer y="3" />
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Input
              value={pricing1Tag}
              onChange={(e) => setPricing1Tag(e.target.value)}
              type="text"
              label="Pricing 1 Name"
            />
            <Spacer y="2" />
            <Input
              value={pricing1Title}
              onChange={(e) => setPricing1Title(e.target.value)}
              type="text"
              label="Pricing 1 Title"
            />
            <Spacer y="2" />
            <Input
              value={pricing1Description}
              onChange={(e) => setPricing1Description(e.target.value)}
              type="text"
              label="Pricing 1 Description"
            />

            <Input
              value={pricing1}
              onChange={(e) => setPricing1(e.target.value)}
              type="text"
              label="Pricing 1 Per month"
            />
            <Spacer y="2" />
            <Input
              value={pricing1ButtonText}
              onChange={(e) => setPricing1ButtonText(e.target.value)}
              type="text"
              label="Pricing 1 Button Text"
            />
            <Spacer y="2" />
            <Input
              value={pricing1ButtonLink}
              onChange={(e) => setPricing1ButtonLink(e.target.value)}
              type="text"
              label="Pricing 1 Button Link"
            />
            <Spacer y="2" />
            <Textarea
              value={pricing1Features}
              onChange={(e) => setPricing1Features(e.target.value)}
              type="text"
              label="Pricing 1 Features"
            />
          </div>
          <div>
            <Input
              value={pricing2Tag}
              onChange={(e) => setPricing2Tag(e.target.value)}
              type="text"
              label="Pricing 2 Name"
            />
            <Spacer y="2" />
            <Input
              value={pricing2Title}
              onChange={(e) => setPricing2Title(e.target.value)}
              type="text"
              label="Pricing 2 Title"
            />
            <Spacer y="2" />
            <Input
              value={pricing2Description}
              onChange={(e) => setPricing2Description(e.target.value)}
              type="text"
              label="Pricing 2 Description"
            />
            <Spacer y="2" />
            <Input
              value={pricing2}
              onChange={(e) => setPricing2(e.target.value)}
              type="text"
              label="Pricing 2 Per month"
            />
            <Spacer y="2" />
            <Input
              value={pricing2ButtonText}
              onChange={(e) => setPricing2ButtonText(e.target.value)}
              type="text"
              label="Pricing 2 Button Text"
            />
            <Spacer y="2" />
            <Input
              value={pricing2ButtonLink}
              onChange={(e) => setPricing2ButtonLink(e.target.value)}
              type="text"
              label="Pricing 2 Button Link"
            />
            <Spacer y="2" />
            <Textarea
              value={pricing2Features}
              onChange={(e) => setPricing2Features(e.target.value)}
              type="text"
              label="Pricing 2 Features"
            />
          </div>
        </div>
        <Spacer y="4" />
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Input
              value={pricing3Tag}
              onChange={(e) => setPricing3Tag(e.target.value)}
              type="text"
              label="Pricing 3 Name"
            />
            <Spacer y="2" />
            <Input
              value={pricing3Title}
              onChange={(e) => setPricing3Title(e.target.value)}
              type="text"
              label="Pricing 3 Title"
            />
            <Spacer y="2" />
            <Input
              value={pricing3Description}
              onChange={(e) => setPricing3Description(e.target.value)}
              type="text"
              label="Pricing 3 Description"
            />
            <Spacer y="2" />
            <Input
              value={pricing3}
              onChange={(e) => setPricing3(e.target.value)}
              type="text"
              label="Pricing 3 Per month"
            />
            <Spacer y="2" />
            <Input
              value={pricing3ButtonText}
              onChange={(e) => setPricing3ButtonText(e.target.value)}
              type="text"
              label="Pricing 3 Button Text"
            />
            <Spacer y="2" />
            <Input
              value={pricing3ButtonLink}
              onChange={(e) => setPricing3ButtonLink(e.target.value)}
              type="text"
              label="Pricing 3 Button Link"
            />
            <Spacer y="2" />
            <Textarea
              value={pricing3Features}
              onChange={(e) => setPricing3Features(e.target.value)}
              type="text"
              label="Pricing 3 Features"
            />
          </div>

          <div>
            <Input
              value={pricing4Tag}
              onChange={(e) => setPricing4Tag(e.target.value)}
              type="text"
              label="Pricing 4 Name"
            />
            <Spacer y="2" />
            <Input
              value={pricing4Title}
              onChange={(e) => setPricing4Title(e.target.value)}
              type="text"
              label="Pricing 4 Title"
            />
            <Spacer y="2" />
            <Input
              value={pricing4Description}
              onChange={(e) => setPricing4Description(e.target.value)}
              type="text"
              label="Pricing 4 Description"
            />
            <Spacer y="2" />
            <Input
              value={pricing4}
              onChange={(e) => setPricing4(e.target.value)}
              type="text"
              label="Pricing 4 Per month"
            />
            <Spacer y="2" />
            <Input
              value={pricing4ButtonText}
              onChange={(e) => setPricing4ButtonText(e.target.value)}
              type="text"
              label="Pricing 4 Button Text"
            />
            <Spacer y="2" />
            <Input
              value={pricing4ButtonLink}
              onChange={(e) => setPricing4ButtonLink(e.target.value)}
              type="text"
              label="Pricing 4 Button Link"
            />
            <Spacer y="2" />
            <Textarea
              value={pricing4Features}
              onChange={(e) => setPricing4Features(e.target.value)}
              type="text"
              label="Pricing 4 Features"
            />
          </div>
        </div>
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

      <Divider />
      <Pricing_12 data={{ enable: true }} />
    </div>
  );
}
