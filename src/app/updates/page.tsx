"use client";

import { Card, CardDescription } from "@/ui";
import { items } from "./items";

export default function page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 items-center">
      {items.map((item) => (
        <Card key={item.comment} className="w-fit p-4 rounded-lg">
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
