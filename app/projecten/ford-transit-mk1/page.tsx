"use client";

import { useState } from "react";
import Link from "next/link";

const images = [
  {
    src: "/projecten/ford-transit-mk1/voorzijde.jpg",
    alt: "Ford Transit MK1 - voorzijde",
  },
  {
    src: "/projecten/ford-transit-mk1/zijkant.jpg",
    alt: "Ford Transit MK1 - zijkant",
  },
  {
    src: "/projecten/ford-transit-mk1/interieur.jpg",
    alt: "Ford Transit MK1 - interieur",
  },
  // voeg hier gerust meer foto's toe
];

type ImageItem = {
  src: string;
  alt: string;
};

export default function FordTransitMk1Page() {
  const [activeImage, setActiveImage] = useState<ImageItem | null>(null);

  return (
    <main className="min-h-screen bg-black text-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="kicker text-white">Project</div>
        <h1 className="text-3xl md:text-5xl font-semibold mt-1">
          Ford Transit MK1
        </h1>

        <p className="mt-4 text-white/90">
          Een uniek project rondom een klassieke Ford Transit MK1. In dit project
          combineren we behoud van originele details met slimme technische
          verbeteringen voor betrouwbaarheid en rijplezier.
        </p>

        {/* Korte specs of highlights */}
        <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
          <div className="border border-white/20 rounded-lg p-3">
            <p className="font-semibold text-white">Bouwjaar</p>
            <p className="text-white/80">Bijv. 1973</p>
          </div>
          <div className="border border-white/20 rounded-lg p-3">
            <p className="font-semibold text-white">Werkzaamheden</p>
            <p className="text-white/80">Carrosserie, onderstel, techniek</p>
          </div>
          <div className="border border-white/20 rounded-lg p-3">
            <p className="font-semibold text-white">Status</p>
            <p className="text-white/80">Afgerond / in uitvoering</p>
          </div>
        </div>

        {/* Fotogalerij */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-3 text-white">Foto&apos;s</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {images.map((img) => (
              <figure
                key={img.src}
                className="overflow-hidden rounded-lg border border-white/20 bg-white/5 cursor-pointer"
                onClick={() => setActiveImage(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-40 object-cover transition-transform duration-200 hover:scale-105"
                />
              </figure>
            ))}
          </div>
        </section>

        {/* Beschrijving / verhaal */}
        <section className="mt-8 space-y-4 text-white/90 leading-relaxed">
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

      {/* Lightbox / grote foto */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()} // voorkom sluiten bij klik op de foto zelf
          >
            <button
              type="button"
              className="absolute -top-10 right-0 text-white/80 hover:text-white text-sm"
              onClick={() => setActiveImage(null)}
            >
              Sluiten ✕
            </button>
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </main>
  );
}
