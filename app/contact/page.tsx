// app/contact/page.tsx
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const body = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-semibold mb-6 text-black">Contact</h1>
      <form onSubmit={handleSubmit} className="space-y-4 text-black">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">
            Naam
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Jouw naam"
            className="w-full border rounded-md px-3 py-2 text-black placeholder-black"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="jij@voorbeeld.nl"
            className="w-full border rounded-md px-3 py-2 text-black placeholder-black"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block mb-1 font-medium">
            Telefoon
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="06-12345678"
            className="w-full border rounded-md px-3 py-2 text-black placeholder-black"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block mb-1 font-medium">
            Onderwerp
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Waar gaat het over?"
            className="w-full border rounded-md px-3 py-2 text-black placeholder-black"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-medium">
            Bericht
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Schrijf je bericht hier..."
            className="w-full border rounded-md px-3 py-2 text-black placeholder-black"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-neutral-800"
        >
          Versturen
        </button>

        {status === "loading" && (
          <p className="text-neutral-600 mt-2">Versturen...</p>
        )}
        {status === "success" && (
          <p className="text-green-600 mt-2">
            Bedankt! Je bericht is verstuurd.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 mt-2">
            Er ging iets mis. Probeer het later opnieuw.
          </p>
        )}
      </form>
    </section>
  );
}
