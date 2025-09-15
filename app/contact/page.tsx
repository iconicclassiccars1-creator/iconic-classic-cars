"use client";
import { useState } from "react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="section py-12">
        <div className="max-w-3xl mx-auto">
          <div className="kicker">Contact</div>
          <h1 className="text-3xl md:text-5xl font-semibold mt-1">
            Plan roestcheck / stel je vraag
          </h1>
          <p className="text-neutral-600 mt-2">
            Vul je gegevens in. We reageren meestal dezelfde werkdag.
          </p>
        </div>
      </section>

      <section className="section py-8">
        <div className="max-w-3xl mx-auto">
          <ContactForm />
          <p className="text-xs text-neutral-500 mt-3">
            Door te verzenden ga je akkoord met verwerking van je gegevens om contact met je op te nemen.
          </p>
          <p className="text-sm text-neutral-600 mt-6">
            Liever mailen?{" "}
            <a className="underline" href="mailto:info@iconicclassiccars.nl">info@iconicclassiccars.nl</a>
            {" "}•{" "}
            <Link className="underline" href="/">Terug naar home</Link>
          </p>
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const data = new FormData(e.currentTarget);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      subject: String(data.get("subject") || ""),
      message: String(data.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.error || "Versturen mislukt");
      }

      setSent(true);
    } catch (err: any) {
      setError(err?.message || "Er ging iets mis, probeer het later opnieuw.");
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-xl border bg-green-50 text-green-900 p-6">
        <p className="font-medium">Bedankt! Je bericht is verzonden.</p>
        <p className="text-sm mt-1">We nemen spoedig contact met je op.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Naam</label>
          <input
            name="name"
            required
            className="mt-1 w-full rounded-lg border px-3 py-2"
            placeholder="Voor- en achternaam"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">E-mail</label>
          <input
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-lg border px-3 py-2"
            placeholder="jij@voorbeeld.nl"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Telefoon (optioneel)</label>
        <input
          name="phone"
          className="mt-1 w-full rounded-lg border px-3 py-2"
          placeholder="+31 6 12 34 56 78"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Onderwerp</label>
        <input
          name="subject"
          className="mt-1 w-full rounded-lg border px-3 py-2"
          placeholder="Bijv. Roestcheck Volvo Amazon"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Bericht</label>
        <textarea
          name="message"
          rows={6}
          required
          className="mt-1 w-full rounded-lg border px-3 py-2"
          placeholder="Vertel kort wat je zoekt of wat er aan de auto moet gebeuren…"
        />
      </div>

      {error && (
        <div className="rounded-lg border border-red-300 bg-red-50 text-red-800 px-3 py-2 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn btn-primary w-full md:w-auto"
      >
        {loading ? "Versturen…" : "Versturen"}
      </button>
    </form>
  );
}
