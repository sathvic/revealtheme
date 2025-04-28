import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Spacer,
  Input,
} from "@nextui-org/react";

import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function EditModal({ isOpen, onOpen, onOpenChange, data }) {
  const [hostingName, setHostingName] = useState("");
  const [hostingCode, setHostingCode] = useState("");
  const [affiliateLink, setAffiliateLink] = useState("");
  const [uniqueId, setUinqueId] = useState("");

  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const token = JSON.parse(localStorage.getItem("lg_tk"));

  const handleSave = (e) => {
    setLoading(true);

    axios
      .post("/api/shopify/affiliate-db/edit", {
        hostingName,
        hostingCode,
        affiliateLink,
        uniqueId,
        token,
      })
      .then((res) => {
        setLoading(false);
        toast.success(res.data?.message, { position: "bottom-right" });
      });
  };
  const handleDelete = (x) => {
    setLoading2(true);
    axios
      .post("/api/shopify/affiliate-db/delete", {
        uniqueId,
        token,
      })
      .then((res) => {
        setLoading2(false);

        toast.success(res.data?.message, { position: "bottom-right" });
      });
  };
  useEffect(() => {
    if (data) {
      setHostingName(data?.hostingName);
      setHostingCode(data?.hostingCode);
      setAffiliateLink(data?.affiliateLink);
      setUinqueId(data?.uniqueId);
    }
  }, [data]);

  return (
    <div>
      <Toaster />
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        // isDismissable={false}
        size="3xl"
        scrollBehavior="outside"
        className="z-auto w-full ml-20"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit Hosting Affiliate
              </ModalHeader>
              <ModalBody>
                <div>
                  <Input
                    value={hostingName}
                    onChange={(e) => setHostingName(e.target.value)}
                    type="text"
                    label="Hosting Provider"
                  />
                  <Spacer y="2" />
                  <Input
                    value={hostingCode}
                    onChange={(e) => setHostingCode(e.target.value)}
                    type="text"
                    label="Hosting Code"
                  />

                  <Spacer y="2" />
                  <Input
                    value={affiliateLink}
                    onChange={(e) => setAffiliateLink(e.target.value)}
                    type="text"
                    label="Affiliate Link"
                  />

                  <Spacer y="4" />
                  <div className="flex justify-between">
                    <Button
                      size="md"
                      color="secondary"
                      variant="shadow"
                      isLoading={loading}
                      onPress={handleSave}
                    >
                      Save
                    </Button>
                    <Button
                      size="md"
                      color="danger"
                      variant="shadow"
                      isLoading={loading2}
                      onPress={handleDelete}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
