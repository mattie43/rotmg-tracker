"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { GithubSVG, eyePNG } from "@/imgs";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Dungeonpanel } from "./Dungeonpanel";

export const Sidepanel = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);

  const getContent = () => {
    switch (pathname) {
      case "/dungeons":
        return <Dungeonpanel />;
      // case "/dungeons":
      //   return <Dungeons />;
      // case "/dailies":
      //   return <Dailies />;
      // case "/map":
      //   return <Map />;
      // case "/events":
      //   return <Events />;
      default:
        return <Dungeonpanel />;
    }
  };

  return (
    <div
      className={`py-2 px-4 fixed bg-background border-r-2 border-primary flex flex-col h-screen transition-all-25 ${
        open ? "translate-x-0" : "-translate-x-[100%]"
      }`}
    >
      <div className="relative flex gap-4">
        <Link
          href="/dungeons"
          className={pathname.includes("/dungeons") ? "underline" : ""}
        >
          Dungeons
        </Link>
        <Link
          href="/dailies"
          className={pathname.includes("/dailies") ? "underline" : ""}
        >
          Dailies
        </Link>
        <Link
          href="/map"
          className={pathname.includes("/map") ? "underline" : ""}
        >
          Map
        </Link>
        <Link
          href="/events"
          className={pathname.includes("/events") ? "underline" : ""}
        >
          Events
        </Link>
        <Menu
          className={`transition-all-25 absolute h-8 top-0 -right-12 bg-background border-b-2 border-r-2 border-t-2 border-primary cursor-pointer ${
            open ? "w-0" : "w-8"
          }`}
          onClick={() => setOpen(true)}
        />
        <X
          className={`transition-all-25 absolute h-8 top-0 -right-12 bg-background border-b-2 border-r-2 border-t-2 border-primary cursor-pointer ${
            open ? "w-8" : "w-0"
          }`}
          onClick={() => setOpen(false)}
        />
      </div>
      <div className="flex flex-1" />
      {getContent()}
      <div className="flex flex-1" />
      <div className="flex gap-4 items-center justify-center">
        <Link
          href="https://github.com/mattie43/rotmg-tracker"
          target="_blank"
          className="flex gap-2"
        >
          <GithubSVG />
          Github
        </Link>
        <Link
          href="https://www.realmeye.com/wiki/realm-of-the-mad-god"
          target="_blank"
          className="flex gap-1 items-center"
        >
          <Image src={eyePNG} height={36} width={36} alt="RealmEye" />
          RealmEye Wiki
        </Link>
      </div>
    </div>
  );
};
