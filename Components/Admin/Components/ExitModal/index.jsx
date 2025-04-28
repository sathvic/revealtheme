import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Divider,
  Input,
  Spacer,
  useDisclosure,
} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import MouseOut from "../../../Front/MouseExitModal";
export default function ExitModal() {
  const [iconText1, setIconText1] = useState("");
  const [iconText2, setIconText2] = useState("");
  const [iconText3, setIconText3] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const [leftButtonText, setLeftButtonText] = useState("");
  const [leftButtonLink, setLeftButtonLink] = useState("");
  const [rightButtonText, setRightButtonText] = useState("");
  const [rightButtonLink, setRightButtonLink] = useState("");
  const token = localStorage.getItem("lg_tk");
  const formData = new FormData();
  formData.append("iconText1", iconText1);
  formData.append("iconText2", iconText2);
  formData.append("iconText3", iconText3);
  formData.append("title", title);
  formData.append("image", image);
  formData.append("leftButtonText", leftButtonText);
  formData.append("leftButtonLink", leftButtonLink);
  formData.append("rightButtonText", rightButtonText);
  formData.append("rightButtonLink", rightButtonLink);
  formData.append("token", token);
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const showModal = (e) => {
    localStorage.removeItem("exit-modal");
    onOpen();
  };

  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/exit-modal", formData)
      .then((res) => {
        setLoading(false);
        toast.success(res.data?.message, { position: "bottom-right" });
      })
      .catch((err) => {
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };

  useEffect(() => {
    axios.get("/api/exit-modal").then((res) => {
      if (res.data?.exitModal) {
        setIconText1(res.data?.exitModal?.iconText1);
        setIconText2(res.data?.exitModal?.iconText2);
        setIconText3(res.data?.exitModal?.iconText3);
        setTitle(res.data?.exitModal?.title);
        setLeftButtonText(res.data?.exitModal?.leftButtonText);
        setLeftButtonLink(res.data?.exitModal?.leftButtonLink);
        setRightButtonText(res.data?.exitModal?.rightButtonText);
        setRightButtonLink(res.data?.exitModal?.rightButtonLink);
      }
    });
  }, []);

  return (
    <Card className="m-4 !border-0" shadow="lg">
      <Toaster />
      <CardHeader className="flex">
        <h4 className="text-xl font-semibold text-violet-700">
          Mouse Exit Modal
        </h4>
        <Button
          size="md"
          color="warning"
          variant="shadow"
          onPress={showModal}
          className="ms-10"
        >
          Show Modal
        </Button>
      </CardHeader>
      <Divider />
      <CardBody>
        <div>
          <Chip size="sm" color="secondary" variant="flat">
            When user wants to exit the page, this modal will show. To Effect,
            Please delete browser's local storage or try another browser.
          </Chip>
          <Spacer y="2" />
          <div className="flex">
            <Input
              value={iconText1}
              onChange={(e) => setIconText1(e.target.value)}
              type="text"
              label="Icon 1 Text"
            />
            <Spacer x="1" />
            <Input
              value={iconText2}
              onChange={(e) => setIconText2(e.target.value)}
              type="text"
              label="Icon 2 Text"
            />
            <Spacer x="1" />
            <Input
              value={iconText3}
              onChange={(e) => setIconText3(e.target.value)}
              type="text"
              label="Icon 3 Text"
            />
          </div>
          <Spacer y="3" />
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            label="Main Title"
          />
          <Spacer y="3" />
          <Input
            type="file"
            labelPlacement="outside-left"
            label="Image"
            placeholder="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <Spacer y="3" />
          <div className="flex  justify-between items-center">
            <div className="w-full mb-2 mr-3">
              <Input
                value={leftButtonText}
                onChange={(e) => setLeftButtonText(e.target.value)}
                type="text"
                label="Left Button Text"
              />
              <Spacer y="2" />
              <Input
                value={leftButtonLink}
                onChange={(e) => setLeftButtonLink(e.target.value)}
                type="text"
                label="Left Button Affiliate Link"
              />
            </div>
            <div className="w-full">
              <Input
                value={rightButtonText}
                onChange={(e) => setRightButtonText(e.target.value)}
                type="text"
                label="Right Button Text"
              />
              <Spacer y="2" />
              <Input
                value={rightButtonLink}
                onChange={(e) => setRightButtonLink(e.target.value)}
                type="text"
                label="Right Button Affiliate Link"
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
      </CardBody>
      <Divider />
      <MouseOut isOpen={isOpen} onOpenChange={onOpenChange} />
    </Card>
  );
}
