"use client";

import type { Work } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";

type WorksSectionProps = {
    works: Work[];
    onSelectWork: (work: Work) => void;
};

export function WorksSection({ works, onSelectWork }: WorksSectionProps) {
    return (
        <section
            id="opere"
            className="bg-[#ddd0c1] px-6 py-20 md:px-10 md:py-24"
        >
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="Alcune delle opere in vendita"
                    title="L'arte di Michele"
                    centered
                />

                <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {works.map((work) => (
                        <article key={work.title} className="group">
                            <button
                                type="button"
                                onClick={() => onSelectWork(work)}
                                className="block w-full text-left"
                            >
                                <div className="overflow-hidden border border-[#bfae9f] bg-[#e9ddd2]">
                                    <div
                                        className="h-[250px] w-full cursor-pointer bg-cover bg-center transition duration-500 group-hover:scale-105"
                                        style={{ backgroundImage: `url('${work.image}')` }}
                                    />
                                </div>

                                <div className="cursor-pointer border-x border-b border-[#bfae9f] bg-[#ddd0c1] px-4 py-4">
                                    <h3 className="font-serif text-xl text-[#2f2925]">
                                        {work.title}
                                    </h3>

                                    <p className="mt-1 text-sm text-[#6f6258]">{work.category}</p>

                                    <div className="mt-5 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-[#5c5046]">
                                        <span className="transition group-hover:opacity-70">
                                            Vedi
                                        </span>
                                    </div>
                                </div>
                            </button>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}