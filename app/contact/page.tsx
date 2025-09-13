export default function Page() {
  return (
    <section className="section">
      <h1 className="text-3xl font-semibold">Contact & Afspraak</h1>
      <p className="mt-2 text-white">
        Plan een afspraak of stel je vraag. We reageren binnen 1 werkdag.
      </p>

      <form
        action="https://formspree.io/f/mrbadjjd" // jouw Formspree endpoint
        method="POST"
        className="grid gap-3 max-w-xl mt-4"
      >
        <input
          className="border rounded-md p-2 text-black"
          type="text"
          name="naam"
          placeholder="Naam*"
          required
        />

        <input
          className="border rounded-md p-2 text-black"
          type="email"
          name="email"
          placeholder="E-mail*"
          required
        />

        <input
          className="border rounded-md p-2 text-black"
          type="text"
          name="model"
          placeholder="Model (bijv. Amazon 1967)"
        />

        <textarea
          className="border rounded-md p-2 text-black"
          name="vraag"
          rows={5}
          placeholder="Waar kunnen we mee helpen?"
          required
        ></textarea>

        <button className="btn btn-primary" type="submit">
          Verstuur
        </button>
      </form>
    </section>
  );
}
