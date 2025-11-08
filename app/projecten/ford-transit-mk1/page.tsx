// app/projecten/ford-transit-mk1/page.tsx
import Link from "next/link";

const images = [
  {
    src: "/projecten/ford-transit-mk1/voorzijde.jpg",
    alt: "Ford Transit MK1 - voorzijde",
  },
  {
    src: "/projecten/ford-transit-mk1/onderstel.jpg",
    alt: "Ford Transit MK1 - onderstel",
  },
  {
    src: "/projecten/ford-transit-mk1/interieur.jpg",
    alt: "Ford Transit MK1 - interieur",
  },
  // voeg hier gerust meer foto's toe
];

export default function FordTransitMk1Page() {
  return (
    <main className="section py-12">
      <div className="max-w-4xl mx-auto">
        <div className="kicker">Project</div>
        <h1 className="text-3xl md:text-5xl font-semibold mt-1">
          Ford Transit MK1
        </h1>

        <p className="text-neutral-600 mt-4">
          Een uniek project rondom een klassieke Ford Transit MK1. In dit project
          combineren we behoud van originele details met slimme technische
          verbeteringen voor betrouwbaarheid en rijplezier.
        </p>

        {/* Korte specs of highlights */}
        <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
          <div className="border rounded-lg p-3">
            <p className="font-semibold">Bouwjaar</p>
            <p className="text-neutral-600">Bijv. 1973</p>
          </div>
          <div className="border rounded-lg p-3">
            <p className="font-semibold">Werkzaamheden</p>
            <p className="text-neutral-600">Carrosserie, onderstel, techniek</p>
          </div>
          <div className="border rounded-lg p-3">
            <p className="font-semibold">Status</p>
            <p className="text-neutral-600">Afgerond / in uitvoering</p>
          </div>
        </div>

        {/* Fotogalerij */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">Foto&apos;s</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {images.map((img) => (
              <figure key={img.src} className="overflow-hidden rounded-lg border bg-black/5">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-40 object-cover"
                />
              </figure>
            ))}
          </div>
        </section>

        {/* Beschrijving / verhaal */}
        <section className="mt-8 space-y-4 text-neutral-700 leading-relaxed">
          <p>
            Bij deze Transit hebben we uitgebreid roestherstel uitgevoerd, met
            aandacht voor originele lijnen en details. De bekende gevoelige
            plekken bij dorpels, wielkasten en chassis zijn grondig aangepakt.
          </p>
          <p>
            Technisch is de auto naar een hoger niveau gebracht, met aandacht
            voor remmen, vering en betrouwbaarheid. Daarbij hebben we waar
            mogelijk originele techniek behouden en alleen gemoderniseerd waar
            het echt waarde toevoegt.
          </p>
          <p>
            Het resultaat is een Transit die weer veilig en met vertrouwen de weg
            op kan, zonder zijn karakter als werkpaard en klassieker te verliezen.
          </p>
        </section>

        <div className="mt-10 flex gap-3">
          <Link href="/projecten" className="btn btn-ghost">
            Terug naar projecten
          </Link>
          <Link href="/contact" className="btn btn-primary">
            Bespreek jouw project
          </Link>
        </div>
      </div>
    </main>
  );
}
