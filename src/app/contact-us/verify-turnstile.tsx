"use server";

import { verifyTurnstile } from "nextjs-turnstile";

export async function verification(token: string) {
  return await verifyTurnstile(token);
}

export async function sendContactMessage(message: string) {
  const webhookUrl: string = process.env.DISCORD_WEBHOOK_URL?.toString() || "";
  await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: message,
    }),
  });
}
