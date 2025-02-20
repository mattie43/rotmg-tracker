"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { eyePNG } from "@/imgs";
import { Button } from "@/ui";

const links = [
  { name: "Dungeons", href: "/dungeons" },
  { name: "Tinkerer Dailies", href: "/tinkerer-dailies" },
  { name: "Dungeon Dailies", href: "/dungeon-dailies" },
  { name: "Map", href: "/map" },
  { name: "Events", href: "/events" },
];

export const Toolbar = () => {
  const pathname = usePathname();
  return (
    <div className="h-12 flex justify-center items-center gap-4 border-b-2 border-primary px-4">
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
    </div>
  );
};
