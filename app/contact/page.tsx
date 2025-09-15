"use client";
import { useState } from "react";

export default function Page() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("idle");
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!data.get("naam") || !data.get("email") || !data.get("message")) {
      setStatus("err");
      return;
    }

    const res = await fetch("/api/contact", { method: "POST", body: data });
    if (res.ok) {
      setStatus("ok");
      form.reset();
    } else {
      setStatus("err");
    }
  }

  return (
    <section className="section">
      <h1 className="text-3xl font-semibold">Contact & Afspraak</h1>
      <p className="mt-2 text-white">
        Plan een afspraak of stel je vraag. We reageren binnen 1 werkdag.
        <br />
        Of mail direct:{" "}
        <a href="mailto:info@iconicclassiccars.nl" className="underline">
          info@iconicclassiccars.nl
        </a>
        .
      </p>

      <form onSubmit={onSubmit} className="grid gap-3 max-w-xl mt-4">
        {/* eigen honeypot (optioneel) */}
        <input type="text" name="website" tabIndex={-1} className="hidden" />

        <label className="text-white">
          Naam*
          <input
            className="mt-1 w-full border rounded-md p-2 bg-white text-black"
            type="text"
            name="naam"
            placeholder="Naam"
            autoComplete="name"
            required
          />
        </label>

        <label className="text-white">
          E-mail*
          <input
            className="mt-1 w-full border rounded-md p-2 bg-white text-black"
            type="email"
            name="email"
            placeholder="E-mail"
            autoComplete="email"
            required
          />
        </label>

        <label className="text-white">
          Model (optioneel)
          <input
            className="mt-1 w-full border rounded-md p-2 bg-white text-black"
            type="text"
            name="model"
            placeholder="Bijv. Volvo Amazon 1967"
            autoComplete="off"
          />
        </label>

        <label className="text-white">
          Waar kunnen we mee helpen?*
          <textarea
            className="mt-1 w-full border rounded-md p-2 bg-white text-black"
            name="message"
            rows={5}
            placeholder="Beschrijf je vraag of gewenste werkzaamheden"
            required
          />
        </label>

        <button className="btn btn-primary" type="submit">Verstuur</button>

        {status === "ok" && (
          <p className="text-green-500">Bedankt! We hebben je bericht ontvangen.</p>
        )}
        {status === "err" && (
          <p className="text-red-500">Er ging iets mis. Controleer je invoer of probeer het later opnieuw.</p>
        )}
      </form>
    </section>
  );
}
