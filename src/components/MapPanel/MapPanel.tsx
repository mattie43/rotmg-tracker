import { BIOMES, DECA_BLOG_SRC, UPDATED_DROP_TABLE_SRC } from "@/constants";
import { Info } from "lucide-react";
import { Fragment } from "react";
import Link from "next/link";

export const MapPanel = () => {
  return (
    <div className="flex flex-col items-end gap-2 border-r-2 border-primary p-4 overflow-auto min-w-[245px]">
      {BIOMES.map((section) => (
        <Fragment key={section.subheader}>
          <h2 className="text-xl font-bold border-b-2 border-primary w-fit mb-1">
            {section.subheader}
          </h2>
          {section.biomes.map((biome) => (
            <div key={biome.name} className="flex gap-2 items-center">
              <span>{biome.name}</span>
              <span
                style={{ backgroundColor: biome.color }}
                className="w-12 h-6"
              ></span>
            </div>
          ))}
        </Fragment>
      ))}
      <div className="flex items-center gap-2 mt-6">
        <Info />
        <div className="flex flex-col">
          <Link href={DECA_BLOG_SRC} target="_blank">
            Map source
          </Link>
          <Link href={UPDATED_DROP_TABLE_SRC} target="_blank">
            Updated drop table
          </Link>
        </div>
      </div>
    </div>
  );
};
