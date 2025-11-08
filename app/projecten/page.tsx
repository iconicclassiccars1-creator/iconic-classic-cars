import Link from "next/link";

export default function ProjectenPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold mb-8">
          Projecten
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/projecten/ford-transit-mk1"
            className="block rounded-2xl border border-gray-800 p-5 hover:border-gray-500 transition-colors"
          >
            <h2 className="text-xl font-semibold">
              Ford Transit MK1 – restauratie
            </h2>
            <p className="mt-2 text-sm text-gray-300">
              Volledige restauratie van een klassieke Ford Transit MK1: plaatwerk,
              techniek en interieur volledig aangepakt.
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-gray-400">
              Bekijk project
            </p>
          </Link>

          {/* Hier kun je later meer projecten toevoegen */}
        </div>
      </div>
    </main>
  );
}
