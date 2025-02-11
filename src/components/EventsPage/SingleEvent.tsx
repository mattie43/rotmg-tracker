import {
  Avatar,
  AvatarImage,
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui";
import React from "react";

export const SingleEvent = React.memo(({ event }: any) => {
  const imgUrl = `https://realm.wiki/Sprite/ByObjectId?id=${event.eventId}`;

  return (
    <Card className="rounded-none border-primary w-[375px]">
      <CardHeader>
        <div className="flex gap-2 items-center">
          <Avatar className="rounded-none">
            <AvatarImage src={imgUrl} alt={event.name} />
          </Avatar>
          <div className="flex flex-col gap-1">
            <CardTitle>{event.name}</CardTitle>
            <CardDescription>{`${event.server} - ${event.realm}`}</CardDescription>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
});
