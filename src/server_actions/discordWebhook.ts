"use server";

export default async function discordWebhook(body: string) {
  const WEBHOOK = process?.env?.["DISCORD_WEBHOOK"];

  const response = await fetch(`https://discord.com/api/webhooks/${WEBHOOK}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: body,
    }),
  });
  return response.ok;
}
