"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { eyePNG } from "@/imgs";
import { Badge, Tab, Tabs } from "@/ui";
import { useState } from "react";
import { updateItems } from "@/lib/updateItems";

const links = [
  { name: "Dungeons", href: "/dungeons" },
  { name: "Tinkerer Dailies", href: "/tinkerer-dailies" },
  { name: "Dungeon Dailies", href: "/dungeon-dailies" },
  { name: "Map", href: "/map" },
  { name: "Events", href: "/events" },
  { name: "Feedback", href: "/feedback" },
  { name: "Updates", href: "/updates" },
];

const ONE_WEEK = 7 * 24 * 60 * 60 * 1000;

export const Toolbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [value, setValue] = useState(pathname);
  const lastUpdateTime = updateItems[0].timeStamp;
  const now = new Date().getTime();
  const timeDiff = now - lastUpdateTime;
  const showNewBadge = timeDiff < ONE_WEEK;

  const handleClick = (value: string) => {
    setValue(value);
    router.push(value);
  };

  return (
    <div className="h-12 flex justify-center items-center gap-4 border-b-2 border-primary px-4">
      <Tabs value={value} onValueChange={handleClick} disableBg>
        {links.map((link) => (
          <Tab key={link.href} value={link.href}>
            {link.name}
            {link.href === "/updates" && showNewBadge && (
              <Badge className="bg-pink-600 px-1 py-0 text-white ml-1">
                NEW
              </Badge>
            )}
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
  );
};
