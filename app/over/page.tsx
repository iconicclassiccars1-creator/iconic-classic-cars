// app/over/page.tsx
import Link from "next/link";

export default function OverPage() {
  return (
    <main className="bg-black text-white min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="kicker text-white">Over ons</div>

        <div className="mt-4 space-y-4 leading-relaxed">
          <p>
            Wij zijn twee neven met een gedeelde interesse in klassieke auto’s. In onze hobbygarage, Iconic Classic Cars, houden we ons bezig met het behouden en verbeteren van iconische voertuigen uit de autogeschiedenis. Elke oldtimer is voor ons een stuk techniek en design dat het waard is om goed onderhouden te worden.
          </p>

          <p>
            Waar mogelijk behouden we de originele uitstraling van de auto, maar we maken ook gebruik van moderne technieken om comfort, betrouwbaarheid en prestaties te verbeteren – zonder het karakter van het origineel te verliezen.
          </p>

          <p>
            Onze voorkeur gaat uit naar de Volvo Amazon – een model dat voor ons techniek, design en degelijkheid perfect combineert. Toch werken we met net zoveel aandacht aan andere merken en modellen. Elke klassieker heeft zijn eigen verhaal, en wij zorgen ervoor dat dat verhaal blijft rijden.
          </p>

          <p>
            We verzorgen zowel technisch als cosmetisch werk: van motorrevisie en onderstel tot interieur, lak en afwerking. Daarnaast ontwikkelen we aangepaste versies, waarbij we klassieke auto’s voorzien van moderne prestaties – soms zelfs met een racekarakter.
          </p>

          <p>
            Netheid, precisie en vakmanschap staan bij ons centraal, zowel in ons werk als in onze werkplaats. Een goed georganiseerde omgeving zorgt voor beter werk en een beter eindresultaat.
          </p>

          <p>
            Het beste moment? Wanneer een perfect herstelde of aangepaste oldtimer onze garage uitrijdt – klaar voor een nieuw hoofdstuk op de weg.
          </p>
        </div>

        <div className="mt-8">
          <Link href="/contact" className="btn btn-primary">
            Plan een kennismaking
          </Link>
        </div>
      </div>
    </main>
  );
}
