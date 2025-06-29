import { TEvent } from "@/hooks";
import {
  Avatar,
  AvatarImage,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui";
import React from "react";

export const SingleEvent = React.memo(({ event }: { event: TEvent }) => {
  const objectImgUrl = `https://realm.wiki/Sprite/ByObjectId?id=${event.eventId}`;
  const staffMemberImgUrl = "https://realm.wiki/Sprite/ByItemId?id=2323";

  function utcToLocalTime(timeStr: string) {
    // Split the string into hours and minutes
    if (!timeStr) return "";
    const [hours, minutes] = timeStr.split(":").map(Number);

    // Create a new Date object in UTC
    const utcDate = new Date(
      Date.UTC(
        new Date().getUTCFullYear(),
        new Date().getUTCMonth(),
        new Date().getUTCDate(),
        hours,
        minutes
      )
    );

    // Convert to local time (Date objects automatically adjust to local timezone)
    return utcDate.toTimeString().slice(0, 8);
  }

  return (
    <Card className="rounded-none border-primary w-[375px]">
      <CardHeader>
        <div className="flex gap-2 items-center">
          <Avatar className="rounded-none">
            <AvatarImage
              src={event.eventId === "1" ? staffMemberImgUrl : objectImgUrl}
              alt={event.name}
            />
          </Avatar>
          <div className="flex flex-col gap-1">
            <CardTitle>{event.name}</CardTitle>
            <CardDescription>{`${utcToLocalTime(
              event.spawnTime
            )}`}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>{`${event.server} - ${event.realm} (${event.realmCount})`}</CardContent>
    </Card>
  );
});
