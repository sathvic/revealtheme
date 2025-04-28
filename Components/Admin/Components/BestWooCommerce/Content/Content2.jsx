import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  Divider,
  Spacer,
} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import TextEditor from "../../../../ReUsable/Editor";
import toast, { Toaster } from "react-hot-toast";
export default function BestWooCommerceContent1() {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const [enable, setEnable] = useState(false);
  const token = JSON.parse(localStorage.getItem("lg_tk"));
  const handleSave = () => {
    setLoading(true);
    axios
      .post("/api/best-woocommerce-hosting/content-2", {
        content,
        enable,
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

  useEffect(() => {
    axios.get("/api/best-woocommerce-hosting/content-2").then((res) => {
      if (res.data?.content2) {
        setContent(res.data?.content2?.content);
        setEnable(res.data?.content2?.enable);
      }
    });
  }, []);
  return (
    <Card className="m-4 !border-0" shadow="lg">
      <Toaster />
      <CardHeader>
        <h4 className="text-xl font-semibold text-violet-700">
          Content 2 Component
        </h4>
      </CardHeader>
      <Divider />
      <CardBody>
        <Checkbox size="lg" isSelected={enable} onValueChange={setEnable}>
          <span className="text-primary font-semibold">Enable?</span>
        </Checkbox>
        <div>
          <TextEditor
            setDefaultStyle="font-size:20px;"
            height="100vh"
            setContent={content}
            onChange={(e) => setContent(e)}
          />
        </div>
        <Spacer y="4" />
        <div>
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
    </Card>
  );
}
