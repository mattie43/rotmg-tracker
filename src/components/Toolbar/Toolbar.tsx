"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Dungeons",
    href: "/dungeons",
  },
  {
    name: "Dailies",
    href: "/dailies",
  },
  {
    name: "Map",
    href: "/map",
  },
  {
    name: "Event Tracker",
    href: "/events",
  },
];

export const Toolbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex h-[64px] w-full items-center justify-center gap-8 border-b-2 border-primary">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`border-b-2 hover:border-primary ${
            pathname === link.href ? "border-primary" : "border-transparent"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};
