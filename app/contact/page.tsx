export default function Page() {
  return (
    <section className="section">
      <h1 className="text-3xl font-semibold">Contact & Afspraak</h1>
      <p className="text-neutral-600 mt-2">Plan een afspraak of stel je vraag. We reageren binnen 1 werkdag.</p>
      <form className="grid gap-3 max-w-xl mt-4" name="afspraak">
        <input className="border rounded-md p-2" type="text" name="naam" placeholder="Naam*" required />
        <input className="border rounded-md p-2" type="email" name="email" placeholder="E-mail*" required />
        <input className="border rounded-md p-2" type="text" name="model" placeholder="Model (bijv. Amazon 1967)" />
        <textarea className="border rounded-md p-2" name="vraag" rows="5" placeholder="Waar kunnen we mee helpen?"></textarea>
        <button className="btn btn-primary" type="submit">Verstuur</button>
      </form>
    </section>
  );
}

