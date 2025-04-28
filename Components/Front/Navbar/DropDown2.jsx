import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "./Icons.jsx";
import Link from "next/link.js";
export default function DropDown1() {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };
  return (
    <Dropdown>
      <DropdownTrigger className="">
        <Button
          disableRipple
          className="p-0  data-[hover=true]:bg-transparent"
          endContent={icons.chevron}
          radius="sm"
          variant="light"
        >
          Most Popular
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        aria-label="Dropdown Variants"
        className="w-[340px]"
        itemClasses={{
          base: "gap-4",
        }}
      >
        <DropdownItem
          as={Link}
          href="/best-wordpress-themes"
          key="production_ready"
          description="Most trending, best seller WordPress Themes. Free and premium themes collections."
          startContent={icons.flash}
        >
          Best WordPress Themes
        </DropdownItem>

        <DropdownItem
          as={Link}
          href="/best-wordpress-plugins"
          key="99_uptime"
          description="Most trending, best seller WordPress Plugins. Free and premium plugins collections."
          startContent={icons.server}
        >
          Best WordPress Plugins
        </DropdownItem>

        <DropdownItem
          as={Link}
          href="/best-woocommerce-hosting"
          key="autoscaling"
          description="A curated list of Web Hosting Provider optimized for your WooCommerce site"
          startContent={icons.scale}
        >
          Best WooCommerce Hosting
        </DropdownItem>

        <DropdownItem
          as={Link}
          href="/best-wordpress-hosting"
          key="usage_metrics"
          description="A curated list of Web Hosting Provider optimized for your WordPress site."
          startContent={icons.activity}
        >
          Best WordPress Hosting
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
