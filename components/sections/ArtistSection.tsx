"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type ArtistSectionProps = {
    artist: {
        eyebrow: string;
        title: string;
        paragraphOne: string;
        paragraphTwo: string;
        ctaLabel: string;
        ctaHref: string;
        image: string;
    };
};

const focusCards = [
    {
        label: "Ricerca",
        title: "Il papiro come materia viva",
        text: "Da oltre trent’anni Michele Patanè approfondisce la coltivazione e la lavorazione della carta papiro, trasformandola in un linguaggio artistico che custodisce memoria, territorio e identità siciliana.",
    },
    {
        label: "Percorso",
        title: "Tra arte, tecnica e artigianato",
        text: "Pittura, disegno, scenografia, lavorazioni artistiche su vetro e supporti differenti convergono in una pratica ampia e riconoscibile, costruita nel tempo tra esperienza tecnica e sensibilità visiva.",
    },
    {
        label: "Visione",
        title: "Un’opera radicata nel territorio",
        text: "Il suo lavoro nasce a Fiumefreddo di Sicilia, dove vive e opera nel proprio laboratorio-museo: uno spazio che raccoglie opere, ricerca e una relazione profonda con il paesaggio e la cultura locale.",
    },
];

const highlights = [
    "Fondatore dell’Associazione Culturale Sikania",
    "Formatore in scuole e istituti del territorio",
    "Opere esposte in Sicilia e all’estero (New York, Belgio...)",
    "Attività scenografica per eventi regionali e nazionali",
    "Opere consegnate a Papa Giovanni Paolo II e Papa Francesco",
];

export function ArtistSection({ artist }: ArtistSectionProps) {
    const [showBio, setShowBio] = useState(false);

    return (
        <section id="artista" className="bg-[#fbf8f3]">
            {!showBio ? (
                <div className="grid bg-[#fbf8f3] md:grid-cols-[1.1fr_0.9fr]">
                    <div className="px-6 py-16 md:px-12 md:py-24 lg:px-20">
                        <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#9b8f82]">
                            {artist.eyebrow}
                        </p>

                        <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-[#2f2925] md:text-5xl">
                            {artist.title}
                        </h2>

                        <p className="mt-6 max-w-xl text-sm leading-7 text-[#6f6258] md:text-[15px]">
                            {artist.paragraphOne}
                        </p>

                        <p className="mt-5 max-w-xl text-sm leading-7 text-[#6f6258] md:text-[15px]">
                            {artist.paragraphTwo}
                        </p>

                        <button
                            type="button"
                            onClick={() => setShowBio(true)}
                            className="mt-8 cursor-pointer inline-flex items-center gap-3 bg-[#e9dfd4] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4a433d] transition hover:bg-[#f3ebe3]"
                        >
                            {artist.ctaLabel}
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>

                    <div className="relative min-h-[420px] border-t border-[#e3d7ca] md:min-h-full md:border-l md:border-t-0">
                        <div className="absolute inset-0 bg-[#d8c8b6]" />
                        <div
                            className="absolute right-0 top-0 h-full w-full bg-cover bg-center"
                            style={{ backgroundImage: `url('${artist.image}')` }}
                        />
                        <div className="absolute inset-0 bg-[#c9b8a7]/20" />
                        <div className="absolute left-1/2 top-10 h-[78%] w-[72%] -translate-x-1/2 overflow-hidden rounded-t-[220px] border border-white/30">
                            <div
                                className="h-full w-full bg-cover bg-center"
                                style={{ backgroundImage: `url('${artist.image}')` }}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="grid border-t border-[#e3d7ca] lg:grid-cols-[0.85fr_1.15fr]">
                    <aside className="border-b border-[#e3d7ca] bg-[#f7f2eb] px-6 py-12 md:px-12 lg:border-b-0 lg:border-r lg:px-10 lg:py-16">
                        <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#9b8f82]">
                            Profilo
                        </p>

                        <h3 className="mt-4 font-serif text-3xl leading-tight text-[#2f2925] md:text-5xl">
                            Michele Patanè
                        </h3>

                        <p className="mt-6 max-w-sm text-sm leading-7 text-[#6f6258] md:text-[15px]">
                            Artista, artigiano e ricercatore del papiro. Una pratica che
                            intreccia pittura, tecnica, memoria e cultura materiale siciliana.
                        </p>

                        <div className="mt-8 space-y-6 border-t border-[#e3d7ca] pt-8">
                            <div>
                                <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#9b8f82]">
                                    Nato a
                                </p>
                                <p className="mt-2 text-sm leading-7 text-[#4f4741] md:text-[15px]">
                                    Fiumefreddo di Sicilia, 8 luglio 1957
                                </p>
                            </div>

                            <div>
                                <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#9b8f82]">
                                    Laboratorio artistico e museo
                                </p>
                                <p className="mt-2 text-sm leading-7 text-[#4f4741] md:text-[15px]">
                                    Via Diana 59, Fiumefreddo di Sicilia
                                </p>
                            </div>

                            <div>
                                <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#9b8f82]">
                                    Ambiti
                                </p>
                                <p className="mt-2 text-sm leading-7 text-[#4f4741] md:text-[15px]">
                                    Pittura, scenografia, copia d’arte, disegno artistico,
                                    lavorazioni su papiro e supporti materici.
                                </p>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => setShowBio(false)}
                            className="mt-10 cursor-pointer inline-flex items-center gap-3 bg-[#e9dfd4] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4a433d] transition hover:bg-[#f3ebe3]"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Torna indietro
                        </button>
                    </aside>

                    <div className="px-6 py-12 md:px-12 lg:px-14 lg:py-16">
                        <div className="max-w-4xl">
                            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#9b8f82]">
                                Una pratica artistica radicata e personale
                            </p>

                            <h4 className="mt-4 max-w-2xl font-serif text-2xl leading-tight text-[#2f2925] md:text-4xl">
                                Un percorso che unisce materia, esperienza e visione
                            </h4>

                            <div className="mt-10 grid gap-5 md:grid-cols-3">
                                {focusCards.map((card) => (
                                    <article
                                        key={card.title}
                                        className="border border-[#e3d7ca] bg-[#fffdf9] p-6"
                                    >
                                        <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#9b8f82]">
                                            {card.label}
                                        </p>
                                        <h5 className="mt-3 font-serif text-xl leading-snug text-[#2f2925]">
                                            {card.title}
                                        </h5>
                                        <p className="mt-4 text-sm leading-7 text-[#6f6258] md:text-[15px]">
                                            {card.text}
                                        </p>
                                    </article>
                                ))}
                            </div>

                            <div className="mt-10 grid gap-8 border-t border-[#e3d7ca] pt-8 md:grid-cols-[0.95fr_1.05fr]">
                                <div>
                                    <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#9b8f82]">
                                        Esperienza e riconoscimenti
                                    </p>
                                    <p className="mt-4 text-sm leading-7 text-[#6f6258] md:text-[15px]">
                                        Nel corso degli anni Michele Patanè ha affiancato alla
                                        produzione artistica un’intensa attività di formazione,
                                        divulgazione e scenografia, portando il proprio lavoro in
                                        contesti culturali, istituzionali ed espositivi in Sicilia e
                                        oltre.
                                    </p>
                                </div>

                                <ul className="space-y-3">
                                    {highlights.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-start gap-3 border-t border-[#e3d7ca] pt-3 text-sm leading-7 text-[#4f4741] md:text-[15px]"
                                        >
                                            <span className="mt-3 h-1.5 w-1.5 rounded-full bg-[#9b8f82]" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}