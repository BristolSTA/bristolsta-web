"use client";
import { TurnstileImplicit } from "nextjs-turnstile";
import StaText from "../../components/sta-text";
import { sendContactMessage, verification } from "./verify-turnstile";
import { Button } from "react-aria-components";
import { redirect } from "next/navigation";
import { FormEvent } from "react";

export default function ContactForm() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const token: string =
      formData.get("cf-turnstile-response")?.toString() ?? "";
    if (await verification(token)) {
      const name: string | undefined = formData.get("name")?.toString().trim();
      const email: string | undefined = formData
        .get("email")
        ?.toString()
        .trim();
      const message: string | undefined = formData
        .get("message")
        ?.toString()
        .trim();

      if (!name || !email || !message) {
        throw new Error("Missing required form fields");
      }

      const markdownMessage = `# New Website Message\nFrom: **${name}** (\`${email}\`) \n## Message\n>>> ${message}`;
      await sendContactMessage(markdownMessage);
      alert("Message sent! Thank you for getting in touch ❤️");
      redirect("/");
    } else {
      console.log("Verification failed");
      alert("Please complete the CAPTCHA or try again to send your message.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-row">
        <StaText className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </StaText>
        <StaText className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </StaText>
      </div>
      <StaText className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={4} required></textarea>
      </StaText>
      <div className="mx-3">
        <TurnstileImplicit
          theme="dark"
          size="normal"
          responseFieldName="cf-turnstile-response"
          onError={() => {
            console.log("Turnstile error");
          }}
          onExpire={() => {
            console.log("Turnstile expired");
          }}
          onSuccess={() => {
            console.log("Turnstile success");
          }}
        />
      </div>
      <Button type="submit" className="sta-btn">
        Send message
      </Button>
    </form>
  );
}
