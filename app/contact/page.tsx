export default function Page() {
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

      <form
        action="https://formspree.io/f/mrbadjjd"
        method="POST"
        acceptCharset="UTF-8"
        className="grid gap-3 max-w-xl mt-4"
      >
        {/* Honeypot tegen spam (verborgen veld dat echte bezoekers niet invullen) */}
        <input type="text" name="website" tabIndex={-1} className="hidden" />

        {/* Optioneel onderwerp voor je e-mailnotificatie via Formspree */}
        <input type="hidden" name="_subject" value="Contact via website - Iconic Classic Cars" />

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
            name="vraag"
            rows={5}
            placeholder="Beschrijf je vraag of gewenste werkzaamheden"
            required
          ></textarea>
        </label>

        <button className="btn btn-primary" type="submit">
          Verstuur
        </button>
      </form>
    </section>
  );
}
