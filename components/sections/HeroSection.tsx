import { ArrowRight } from "lucide-react";
import { SocialLinks } from "@/components/ui/SocialLinks";

type HeroSectionProps = {
    brand: string;
    navLinks: { label: string; href: string }[];
    socialLinks: {
        instagram: string;
        facebook: string;
        whatsapp: string;
    };
    hero: {
        title: string;
        subtitle: string;
        description: string;
        ctaLabel: string;
        ctaHref: string;
        secondaryCtaLabel: string;
        secondaryCtaHref: string;
        backgroundImage: string;
    };
};

export function HeroSection({
    brand,
    navLinks,
    socialLinks,
    hero,
}: HeroSectionProps) {
    return (
        <section className="relative min-h-[92vh] overflow-hidden bg-[#d8d0c8]">
            <div
                className="absolute inset-0 bg-cover bg-top"
                style={{ backgroundImage: `url('${hero.backgroundImage}')` }}
            />

            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#f1ebe5]/30 via-transparent to-[#bdaea0]/10" />
            <div className="absolute left-1/2 top-1/2 h-[360px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-t-[180px] bg-[#bfae9f]/20 blur-[1px]" />

            <header className="absolute left-0 top-0 z-20 flex w-full items-center justify-between px-6 py-5 md:px-10">
                <div className="text-[28px] font-semibold tracking-[0.2em] text-white md:text-[32px]">
                    {brand}
                </div>

                <div className="flex items-center gap-8">
                    <nav className="hidden items-center gap-10 text-[11px] font-medium uppercase tracking-[0.2em] text-white md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="transition hover:opacity-70"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <a
                        href="#contatti"
                        className="rounded-sm bg-[#e9dfd4] px-5 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[#4a433d] transition hover:bg-[#f3ebe3]"
                    >
                        Contatti
                    </a>
                </div>
            </header>

            <div className="relative z-10 flex min-h-[92vh] items-center justify-center px-6 text-center">
                <div className="max-w-3xl">
                    <h1 className="font-serif text-4xl leading-tight text-white md:text-6xl">
                        {hero.title}
                    </h1>

                    <p className="mt-4 text-sm font-medium text-white/85 md:text-xl">
                        {hero.subtitle}
                    </p>

                    <p className="mt-2 text-xs text-white/70 md:text-sm">
                        {hero.description}
                    </p>

                    <a
                        href={hero.ctaHref}
                        className="mt-8 inline-block cursor-pointer bg-[#efe5da] px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4a433d] transition hover:bg-white"
                    >
                        {hero.ctaLabel}
                    </a>
                </div>
            </div>

            <div className="absolute bottom-6 left-6 z-20 text-white/85 md:bottom-8 md:left-10">
                <SocialLinks {...socialLinks} />
            </div>

            <a
                href={hero.secondaryCtaHref}
                className="absolute bottom-6 right-6 z-20 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white/85 hover:text-white md:bottom-8 md:right-10"
            >
                {hero.secondaryCtaLabel}
                <ArrowRight className="h-4 w-4" />
            </a>
        </section>
    );
}