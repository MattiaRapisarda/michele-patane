import { ArrowRight } from "lucide-react";

type ContactSectionProps = {
    contact: {
        eyebrow: string;
        title: string;
        description: string;
        email: string;
        ctaLabel: string;
    };
};

export function ContactSection({ contact }: ContactSectionProps) {
    return (
        <footer
            id="contatti"
            className="bg-[#efe7dd] px-6 pt-16 md:px-10 md:pt-24"
        >
            <div className="mx-auto flex max-w-6xl justify-center">
                <div className="w-full max-w-[560px] rounded-t-[280px] bg-[#e3d4c5] px-8 pb-10 pt-16 text-center md:px-14 md:pb-14 md:pt-24">
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#9b8f82]">
                        {contact.eyebrow}
                    </p>

                    <h3 className="mt-4 font-serif text-2xl text-[#2f2925] md:text-4xl">
                        {contact.title}
                    </h3>

                    <p className="mx-auto mt-5 max-w-[360px] text-sm leading-7 text-[#6f6258]">
                        {contact.description}
                    </p>

                    <a
                        href={`mailto:${contact.email}`}
                        className="mt-8 inline-flex items-center gap-2 bg-[#f7f1ea] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4a433d] transition hover:bg-white"
                    >
                        {contact.ctaLabel}
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </footer>
    );
}