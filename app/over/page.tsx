// app/over/page.tsx
import Link from "next/link";

export default function OverPage() {
  return (
    <main className="section py-12">
      <div className="max-w-3xl mx-auto">
        <div className="kicker">Over ons</div>
        <h1 className="text-3xl md:text-5xl font-semibold mt-1">
          Wie wij zijn
        </h1>

        <div className="mt-4 space-y-4 text-neutral-700 leading-relaxed">
          <p>
            Wij zijn twee neven met een gedeelde passie voor klassieke auto’s. In
            onze hobbygarage, <strong>Iconic Classic Cars</strong>, werken we met
            trots en toewijding aan het in ere houden van echte iconen uit de
            autogeschiedenis. Voor ons is elke oldtimer meer dan een voertuig –
            het is een stukje nostalgie dat het verdient om met liefde en
            vakmanschap bewaard te blijven.
          </p>

          <p>
            Waar mogelijk behouden we de authentieke charme van de auto, maar we
            schuwen moderne techniek niet. Waar wenselijk passen we eigentijdse
            oplossingen toe om comfort, betrouwbaarheid en prestaties te
            verbeteren – zonder het karakter van het origineel aan te tasten.
          </p>

          <p>
            Onze voorliefde gaat uit naar de <strong>Volvo Amazon</strong>, een
            klassieker die voor ons de perfecte balans biedt tussen techniek,
            design en duurzaamheid. Toch werken we met evenveel enthousiasme aan
            andere merken en modellen. Elke oldtimer heeft zijn eigen verhaal –
            en wij vinden het een voorrecht om dat verhaal levend te houden.
          </p>

          <p>
            We verzorgen zowel het technische als het cosmetische werk: van
            motorrevisie en onderstel tot interieur, lak en afwerking. Bovendien
            vinden we het geweldig om nét dat beetje extra toe te voegen. Door
            slimme technische modificaties aan te brengen, kunnen we een
            klassieker niet alleen restaureren, maar ook transformeren tot een
            echte raceauto. Zo brengen we nostalgie en moderne prestaties samen
            in één uniek geheel.
          </p>

          <p>
            Netheid, precisie en vakmanschap staan bij ons centraal – zowel in
            ons werk als in onze werkplaats. Een opgeruimde garage werkt niet
            alleen prettiger, maar draagt ook bij aan een beter resultaat én een
            beter milieu.
          </p>

          <p>
            Het mooiste moment? Dat is wanneer een zorgvuldig gerestaureerde of
            aangepaste oldtimer onze garage uitrijdt – glanzend, krachtig en
            klaar voor vele nieuwe kilometers.
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
