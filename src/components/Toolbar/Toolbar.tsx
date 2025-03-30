"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { eyePNG } from "@/imgs";
import { Button, Tab, Tabs } from "@/ui";
import { useState } from "react";
import { Menu } from "lucide-react";

const links = [
  { name: "Dungeons", href: "/dungeons" },
  { name: "Tinkerer Dailies", href: "/tinkerer-dailies" },
  { name: "Dungeon Dailies", href: "/dungeon-dailies" },
  { name: "Map", href: "/map" },
  { name: "Events", href: "/events" },
];

export const Toolbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [value, setValue] = useState(pathname);

  const handleClick = (value: string) => {
    setValue(value);
    router.push(value);
  };

  const SideToolbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedTab, setSelectedTab] = useState(0);

    return (
      <div
        className={`fixed flex flex-col bg-background h-screen border-r-2 border-primary
          transition-all duration-300 lg:hidden
          -translate-x-[${isOpen ? "0" : "100%"}]`}
      >
        <div className="p-4 flex gap-2 border-b-2 border-secondary">
          <Button
            variant={selectedTab === 0 ? "secondary" : "ghost"}
            onClick={() => setSelectedTab(0)}
          >
            Links
          </Button>
          <Button
            variant={selectedTab === 0 ? "ghost" : "secondary"}
            onClick={() => setSelectedTab(1)}
          >
            Page Options
          </Button>
        </div>
        <div className="p-4 flex flex-col gap-2 relative">
          {links.map((link) => (
            <Link key={link.name} href={link.href}>
              <Button
                variant={pathname.includes(link.href) ? "secondary" : "ghost"}
                value={link.href}
              >
                {link.name}
              </Button>
            </Link>
          ))}
          <Link
            href="https://www.realmeye.com/wiki/realm-of-the-mad-god"
            target="_blank"
            className="flex gap-1 items-center"
          >
            <Image src={eyePNG} height={28} width={28} alt="RealmEye" />
            RealmEye Wiki
          </Link>
          <Menu
            className="absolute -top-[70px] -right-9 p-1 size-9 bg-background border-r-2 border-b-2 border-primary"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </div>
      </div>
    );
  };

  return (
    <>
      {/* <SideToolbar /> */}
      <div className="h-12 flex justify-center items-center gap-4 border-b-2 border-primary px-4">
        <Tabs value={value} onValueChange={handleClick} disableBg>
          {links.map((link) => (
            <Tab key={link.href} value={link.href}>
              {link.name}
            </Tab>
          ))}
        </Tabs>
        <Link
          href="https://www.realmeye.com/wiki/realm-of-the-mad-god"
          target="_blank"
          className="flex gap-1 items-center"
        >
          <Image src={eyePNG} height={28} width={28} alt="RealmEye" />
          RealmEye Wiki
        </Link>
      </div>
    </>
  );
};
