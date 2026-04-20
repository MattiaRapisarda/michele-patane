import type { Service } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";

type PapyrusSectionProps = {
    services: Service[];
};

export function PapyrusSection({ services }: PapyrusSectionProps) {
    return (
        <section
            id="papiro"
            className="bg-[#f2ece5] px-6 py-20 md:px-10 md:py-28"
        >
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="vero artigianato"
                    title="L'arte del papiro"
                    centered
                />

                <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-10">
                    {services.map((item) => (
                        <article key={item.title} className="mx-auto w-full max-w-[320px]">
                            <div className="overflow-hidden rounded-t-[999px] border border-[#d8ccc0] bg-[#e9ddd2]">
                                <div
                                    className="h-[260px] w-full bg-cover bg-center"
                                    style={{ backgroundImage: `url('${item.image}')` }}
                                />
                            </div>

                            <div className="border-x border-b border-[#d8ccc0] bg-[#ecdcd0] px-8 py-8 text-center">
                                <h3 className="font-serif text-2xl text-[#2f2925]">
                                    {item.title}
                                </h3>

                                <p className="mt-4 text-sm leading-6 text-[#6f6258]">
                                    {item.description}
                                </p>

                                <a
                                    href="#"
                                    className="mt-6 inline-block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2f2925] transition hover:opacity-70"
                                >
                                    Approfondisci
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}