import axios from "axios";
import { useEffect, useState } from "react";
import {
  Chip,
  Spacer,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@nextui-org/react";
import { Toaster } from "react-hot-toast";
import EditModal from "./EditModal";

export default function AffiliateList() {
  const [affiliateList, setAffiliateList] = useState([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalData, setModalData] = useState("");
  useEffect(() => {
    axios.get("/api/shopify/affiliate-db").then((res) => {
      setAffiliateList(res.data);
      // console.log(res.data);
    });
  }, []);

  const handleEdit = (x) => {
    onOpen();
    setModalData(x);
  };

  return (
    <div>
      <EditModal isOpen={isOpen} onOpenChange={onOpenChange} data={modalData} />
      <Toaster />
      <Table
        removeWrapper
        isStriped
        selectionMode="single"
        aria-label="Example static collection table"
        radius="sm"
        color="secondary"
        // onRowAction={(e) => handleEdit(e)}
      >
        <TableHeader>
          <TableColumn>THEME</TableColumn>
          <TableColumn>CODE</TableColumn>
          <TableColumn>AFFILIATE LINK</TableColumn>
        </TableHeader>
        <TableBody>
          {affiliateList?.map((x, i) => (
            <TableRow
              key={i}
              onClick={() => handleEdit(x)}
              className="cursor-pointer"
            >
              <TableCell>{x?.hostingName}</TableCell>
              <TableCell className="font-semibold text-violet-700">
                {x?.hostingCode}
              </TableCell>
              <TableCell className="font-semibold text-violet-600">
                {x?.affiliateLink}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Spacer y="2" />
      <Chip color="secondary" variant="flat" radius="sm">
        Please delete duplicate items if created.
      </Chip>
    </div>
  );
}
