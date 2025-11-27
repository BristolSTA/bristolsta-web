"use server";

import { verifyTurnstile } from "nextjs-turnstile";

export async function verification(token) {
  return await verifyTurnstile(token);
}

export async function sendContactMessage(message: string) {
  await fetch(process.env.DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: message,
    }),
  });
}
