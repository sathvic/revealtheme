import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { ChevronDown, Server, TagUser } from "./Icons2.jsx";
import Link from "next/link.js";
import {
  Drupal,
  Joomla,
  Magento,
  Moodle,
  PrestaShop,
  Shopify,
} from "./Icons.jsx";
export default function DropDown3() {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    shopify: <Shopify className="text-warning" fill="currentColor" size={30} />,
    magento: <Magento className="text-warning" fill="currentColor" size={30} />,
    joomla: <Joomla className="text-warning" fill="currentColor" size={30} />,
    drupal: <Drupal className="text-success" fill="currentColor" size={30} />,
    moodle: <Moodle className="text-secondary" fill="currentColor" size={30} />,

    prestashop: (
      <PrestaShop className="text-primary" fill="currentColor" size={30} />
    ),
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };
  return (
    <Dropdown className="border-none">
      <DropdownTrigger>
        <Button
          disableRipple
          className="p-0 bg-transparent data-[hover=true]:bg-transparent"
          endContent={icons.chevron}
          radius="sm"
          variant="light"
        >
          Detector
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        aria-label="ACME features"
        className="w-[340px]"
        itemClasses={{
          base: "gap-4",
        }}
      >
        <DropdownItem
          as={Link}
          href="/shopify-theme-detector"
          key="shopify-theme-detector"
          description="Discover the perfect Shopify theme for your store with our Shopify Theme Detector."
          startContent={icons.shopify}
        >
          Shopify Theme Detector
        </DropdownItem>
        <DropdownItem
          as={Link}
          href="/prestashop-theme-detector"
          key="prestashop-theme-detector"
          description="Quickly identify and explore the themes used by successful PrestaShop sites."
          startContent={icons.prestashop}
        >
          Prestashop Theme Detector
        </DropdownItem>
        <DropdownItem
          as={Link}
          href="/magento-theme-detector"
          key="magento-theme-detector"
          description="Enhance your e-commerce experience by finding the perfect design inspiration quickly and effortlessly."
          startContent={icons.magento}
        >
          Magento Theme Detector
        </DropdownItem>
        <DropdownItem
          as={Link}
          href="/joomla-theme-detector"
          key="joomla-theme-detector"
          description="Reveal the theme behind any Joomla site with our Joomla Theme Detector. Quickly identify and explore the themes used by successful Joomla websites."
          startContent={icons.joomla}
        >
          Joomla Theme Detector
        </DropdownItem>
        <DropdownItem
          as={Link}
          href="/drupal-theme-detector"
          key="drupal-theme-detector"
          description="Uncover the theme used by any Drupal site with our Drupal Theme Detector. Find the perfect design inspiration to enhance your site quickly and easily."
          startContent={icons.drupal}
        >
          Drupal Theme Detector
        </DropdownItem>
        <DropdownItem
          as={Link}
          href="/moodle-theme-detector"
          key="moodle-theme-detector"
          description="Unlock the secrets of any Moodle site's design with our Moodle Theme Detector."
          startContent={icons.moodle}
        >
          Moodle Theme Detector
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
