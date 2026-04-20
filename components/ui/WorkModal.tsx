"use client";

import { useEffect } from "react";
import { ArrowRight, X } from "lucide-react";
import type { Work } from "@/types";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";

type WorkModalProps = {
    work: Work | null;
    onClose: () => void;
};

export function WorkModal({ work, onClose }: WorkModalProps) {
    useLockBodyScroll(Boolean(work));

    useEffect(() => {
        if (!work) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [work, onClose]);

    if (!work) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-6xl overflow-hidden rounded-[28px] bg-[#f6efe8] shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute cursor-pointer right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#2f2925] transition hover:bg-white"
                    aria-label="Chiudi popup"
                >
                    <X className="h-5 w-5" />
                </button>

                <div className="grid max-h-[90vh] overflow-y-auto md:grid-cols-[1.15fr_0.85fr]">
                    <div className="bg-[#ddd0c1]">
                        <img
                            src={work.image}
                            alt={work.title}
                            className="h-full max-h-[70vh] w-full object-contain bg-[#d8c8b6]"
                        />
                    </div>

                    <div className="flex flex-col justify-center px-6 py-8 md:px-10 md:py-12">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9b8f82]">
                            Opera originale
                        </p>

                        <h3 className="mt-3 font-serif text-3xl text-[#2f2925] md:text-4xl">
                            {work.title}
                        </h3>

                        <div className="mt-6 space-y-4 text-sm leading-7 text-[#6f6258]">
                            <div>
                                <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8a7d71]">
                                    Dimensioni
                                </span>
                                <p className="mt-1">{work.category}</p>
                            </div>

                            <div>
                                <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8a7d71]">
                                    Descrizione
                                </span>
                                <p className="mt-1">{work.description}</p>
                            </div>

                            <div>
                                <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8a7d71]">
                                    Prezzo
                                </span>
                                <p className="mt-1 text-xl font-semibold text-[#2f2925]">
                                    {work.price}
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="#contatti"
                                onClick={onClose}
                                className="inline-flex items-center gap-2 bg-[#2f2925] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:opacity-90"
                            >
                                Richiedi informazioni
                                <ArrowRight className="h-4 w-4" />
                            </a>

                            <button
                                type="button"
                                onClick={onClose}
                                className="cursor-pointer border border-[#c8b8aa] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4a433d] transition hover:bg-[#efe5da]"
                            >
                                Chiudi
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}