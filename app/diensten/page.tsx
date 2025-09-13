export default function Page() {
  return (
    <section className="section">
      <h1 className="text-3xl font-semibold">Diensten</h1>
      <p className="text-neutral-600 mt-2">
        Overzicht van onze services voor Volvo Amazon, 100, 200, 400 en 900 series.
      </p>
      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li><a className="underline" href="/diensten/restauratie">Restauratie (Amazon/100)</a></li>
        <li><a className="underline" href="/diensten/onderhoud">Onderhoud (200/900)</a></li>
        <li><a className="underline" href="/diensten/roest-plaatwerk">Roest &amp; Plaatwerk</a></li>
        <li><a className="underline" href="/diensten/airco-elektronica">Airco &amp; Elektronica</a></li>
        <li><a className="underline" href="/diensten/onderdelen-revisie">Onderdelen &amp; Revisie</a></li>
      </ul>
    </section>
  );
}
