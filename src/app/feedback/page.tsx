"use client";

import { Alert, AlertTitle, Button, Input, Textarea } from "@/ui";
import { useState } from "react";
import { CheckCircle2Icon } from "lucide-react";
import discordWebhook from "@/server_actions/discordWebhook";

export default function Feedback() {
  const [tag, setTag] = useState("");
  const [comment, setComment] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const send = async () => {
    if (!tag.trim() || !comment.trim()) return;

    setLoading(true);

    const body = `\u200B\n
      Discord user: ${tag}
      Comment:\`\`\`${comment}\`\`\`
    `;

    try {
      const resp = await discordWebhook(body);

      if (resp) {
        setShowAlert(true);
        setTag("");
        setComment("");
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      }
    } catch (_) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 items-center">
      <p className="text-2xl font-medium w-[50vw] text-center">
        I'm looking to work on this project again, so if you have any feedback,
        please fill out this form and let me know what you think!
      </p>
      <div className="flex flex-col gap-4 w-[35vw]">
        <span className="flex flex-col gap-2 text-lg">
          Discord Tag
          <Input
            type="text"
            placeholder="Name#1234"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="rounded-md !text-2xl"
            disableClearable
          />
        </span>
        <span className="flex flex-col gap-2 text-lg">
          Fix this please...
          <Textarea
            placeholder="Comments"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="rounded-md !text-2xl"
          />
        </span>
      </div>
      <Button
        size={"lg"}
        className="text-white"
        onClick={send}
        disabled={loading}
      >
        Submit
      </Button>
      {showAlert && (
        <Alert className="fixed bottom-4 right-4 w-fit">
          <AlertTitle className="flex items-center gap-2">
            <CheckCircle2Icon />
            Successfully submitted feedback!
          </AlertTitle>
        </Alert>
      )}
    </div>
  );
}
