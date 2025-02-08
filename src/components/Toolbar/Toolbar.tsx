"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { GithubSVG, eyePNG } from "@/imgs";

export const Toolbar = () => {
  const pathname = usePathname();
  return (
    <div className="h-12 flex justify-center items-center gap-4 border-b-2 border-primary px-4">
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
      <Link
        href="https://www.realmeye.com/wiki/realm-of-the-mad-god"
        target="_blank"
        className="flex gap-1 items-center"
      >
        <Image src={eyePNG} height={28} width={28} alt="RealmEye" />
        RealmEye Wiki
      </Link>
      <Link
        href="https://github.com/mattie43/rotmg-tracker"
        target="_blank"
        className="flex gap-2 items-center"
      >
        <GithubSVG size={18} />
        Github
      </Link>
    </div>
  );
};
