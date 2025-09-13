import '../styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Iconic Classic Cars - Amazon & RWD Specialist',
  description:
    'Iconic Classic Cars in Zuidland: restauratie, onderhoud en roestherstel voor Volvo Amazon, 100, 200, 400 en 900 series. Langeweg 1e2, Zuidland.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className="bg-black text-white">
        <header className="border-b">
          {/* bovenbalk met openingstijden */}
          <div className="bg-black text-white">
            <div className="container-max flex items-center justify-between py-2 text-white">
              <div>ma&ndash;vr 09:00&ndash;17:30 &bull; za 09:00&ndash;16:00 &bull; Langeweg 1e2, 3214 LJ Zuidland</div>
              <a href="/contact" className="btn btn-ghost">Afspraak plannen</a>
            </div>
          </div>

          {/* navigatie met logo */}
          <nav className="container-max flex flex-wrap items-center justify-between py-4">
  <div className="flex gap-5">
    <a href="/">Home</a>
    <a href="/diensten">Diensten</a>
    <a href="/projecten">Projecten</a>
    <a href="/over">Over ons</a>
    <a href="/contact">Contact</a>
  </div>
  <a href="/" aria-label="Iconic Classic Cars">
    <img src="/logo-icc.png" alt="Iconic Classic Cars logo" style={{ height: 56, width: 'auto' }} />
  </a>
</nav>

        </header>

        <main className="container-max">{children}</main>

        <footer className="bg-black text-white mt-8">
          <div className="container-max grid gap-6 md:grid-cols-3 py-8">
            <div>
              <h3 className="text-lg font-semibold">Iconic Classic Cars</h3>
              <p>
                Langeweg 1e2, 3214 LJ Zuidland
                <br />
                ma&ndash;vr 09:00&ndash;17:30 &bull; za 09:00&ndash;16:00
              </p>
              <p className="mt-2"><a className="btn btn-ghost" href="/contact">Afspraak plannen</a></p>
            </div>
            <div>
              <h4 className="font-semibold">Diensten</h4>
              <ul className="space-y-1">
                <li>Amazon roest &amp; plaatwerk</li>
                <li>Onderhoud 200/900</li>
                <li>Airco &amp; Elektronica</li>
                <li>Redblock service &amp; tuning</li>
                <li>Onderdelen &amp; revisie</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Contact</h4>
              <p>info@jouwdomein.nl<br />+31 10 123 4567</p>
              <p>KVK / BTW op aanvraag</p>
            </div>
          </div>
          <div className="container-max py-4 border-t border-white/10">
            <p className="note">&copy; 2025 - Iconic Classic Cars &bull; Privacy &bull; Disclaimer</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
