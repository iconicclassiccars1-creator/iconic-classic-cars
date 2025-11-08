// app/projecten/ford-transit-mk1/page.tsx
import Link from "next/link";

export default function FordTransitMk1Page() {
  return (
    <main className="section py-12">
      <div className="max-w-3xl mx-auto">
        <div className="kicker">Project</div>
        <h1 className="text-3xl md:text-5xl font-semibold mt-1">
          Ford Transit MK1
        </h1>

        <p className="text-neutral-600 mt-4">
          Een uniek project rondom een klassieke Ford Transit MK1. In dit project
          combineren we behoud van originele details met slimme technische
          verbeteringen voor betrouwbaarheid en rijplezier.
        </p>

        <div className="mt-6 space-y-3 text-neutral-700">
          <p>
            <strong>Werkzaamheden (voorbeeld):</strong>
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Carrosserieherstel en roestbehandeling</li>
            <li>Onderstel en remmen volledig nagelopen</li>
            <li>Motor en aandrijflijn technisch opgewaardeerd</li>
            <li>Stuur- en veringscomponenten vernieuwd</li>
            <li>Cosmetische afwerking interieur en exterieur</li>
          </ul>
        </div>

        <p className="text-neutral-600 mt-6">
          Benieuwd wat we voor jouw klassieker kunnen betekenen? Neem gerust{" "}
          <Link href="/contact" className="underline">
            contact
          </Link>{" "}
          met ons op.
        </p>
      </div>
    </main>
  );
}
