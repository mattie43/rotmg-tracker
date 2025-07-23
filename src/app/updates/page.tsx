"use client";

import { Card, CardDescription } from "@/ui";
import { updateItems } from "@/lib/updateItems";
import { Info } from "lucide-react";

export default function page() {
  const info =
    "Updates are shown here, sorted by most recent. The new badge will be shown while the latest update is less than a week old.";

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 items-center">
      <div className="flex items-center justify-center gap-4 w-[700px]">
        <span>
          <Info />
        </span>
        <p>{info}</p>
      </div>
      {updateItems.map((item) => (
        <Card key={item.comment} className="p-4 rounded-lg w-[700px]">
          <CardDescription className="flex flex-col gap-2 text-center">
            <span>{new Date(item.timeStamp).toLocaleString()}</span>
            {item.user && item.comment && (
              <span>
                @{item.user}: <i>{item.comment}</i>
              </span>
            )}
            <span className="text-white">{item.update}</span>
          </CardDescription>
        </Card>
      ))}
    </div>
  );
}
