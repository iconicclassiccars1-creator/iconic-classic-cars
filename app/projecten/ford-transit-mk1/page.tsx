"use client";

import { useState } from "react";
import Link from "next/link";

const images = [
  {
    src: "/projecten/ford-transit-mk1/1.jpg",
    alt: "Ford Transit MK1 - aankoop",
  },
  {
    src: "/projecten/ford-transit-mk1/2.jpg",
    alt: "Ford Transit MK1 - transport",
  },
  {
    src: "/projecten/ford-transit-mk1/3.jpg",
    alt: "Ford Transit MK1 - motorruimte",
  },
  {
    src: "/projecten/ford-transit-mk1/4.jpg",
    alt: "Ford Transit MK1 - motor demontage",
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
          Een uniek project rondom een klassieke Ford Transit MK1. In dit project hadden we de uitdaging met een gebroken nokas. Gezien de V4 (keulen) motor geheel gedemonteerd moest worden, hebben we tevens het gehele blok maar gereviseerd. Dus ja, alles nieuw.
        </p>

        {/* Korte specs of highlights */}
        <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
          <div className="border border-white/20 rounded-lg p-3">
            <p className="font-semibold text-white">Bouwjaar</p>
            <p className="text-white/80">1974</p>
          </div>
          <div className="border border-white/20 rounded-lg p-3">
            <p className="font-semibold text-white">Werkzaamheden</p>
            <p className="text-white/80">Nokas, gehele motor revisie, Lakwerk</p>
          </div>
          <div className="border border-white/20 rounded-lg p-3">
            <p className="font-semibold text-white">Status</p>
            <p className="text-white/80">Afgerond / klaar voor de verkoop</p>
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
            Bij deze Transit hebben we ons volledig uitgeleefd op een motorische revisie met liefde voor detail. De motor kreeg een frisse start: alles is zorgvuldig nagekeken, herzien en waar nodig vernieuwd, zodat hij weer soepel loopt als in zijn jongere jaren.
          </p>
          <p>
            Ook cosmetisch hebben we de bus de aandacht gegeven die hij verdient. Kleine imperfecties zijn aangepakt, zonder het karakter te verliezen — want een beetje patina hoort bij zijn verhaal. De elektronica is grondig gecontroleerd en hersteld, zodat alles weer werkt zoals het hoort, en zelfs de verlichting brandt weer trots als toen hij de fabriek uitreed.
          </p>
          <p>
            Het onderstel van deze Ford is volledig hard en in uitstekende staat, wat de basis vormt voor nog vele betrouwbare kilometers. Natuurlijk zijn er gebruikssporen aanwezig — sporen van een leven vol werk en avontuur — maar juist die geven hem zijn charme en authenticiteit.
          </p>
          <p>
We hebben bewust gekozen om de nostalgie te bewaren: geen overdaad aan moderne snufjes, maar een eerbetoon aan wat deze Transit zo bijzonder maakt.
          </p>
          <p>
Daarbij is er een volledig taxatierapport aanwezig, dat we graag delen met de volgende trotse eigenaar.
          </p>
          <p>
Het eindresultaat? Een klassieke Ford die weer betrouwbaar, levendig en vol karakter de weg op kan — klaar voor nieuwe avonturen, met het hart van vroeger en de zekerheid van nu.
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
