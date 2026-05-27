import type { Service, Work } from "@/types";

export const services: Service[] = [
    {
        title: "Coltivazione",
        description:
            "Il papiro nasce dal territorio e conserva nella materia il legame con Fiumefreddo di Sicilia.",
        image:
            "/images/coltivazione.jpg",
    },
    {
        title: "Lavorazione",
        description:
            "Ogni fibra viene aperta e composta a mano, seguendo una tecnica lenta e artigianale.",
        image:
            "/images/lavorazione.jpg",
    },
    {
        title: "Supporto d'artista",
        description:
            "Il foglio finale diventa parte viva dell'opera, non semplice base pittorica, ma valore aggiunto.",
        image:
            "/images/supporto.jpeg",
    },
];

export const works: Work[] = [
    {
        title: "Sentieri dell'Etna",
        category: "58cm X 43cm",
        description:
            "Un paesaggio dell'anima che sfida i confini della natura. Un'armonia impossibile di elementi che solo la libertà dell'arte può rendere tangibile.",
        price: "€ 1.200",
        image:
            "/images/opere/sentieri-dell-Etna.jpg",
    },
    {
        title: "Il teatro e la Montagna",
        category: "53cm X 36cm",
        description:
            "Il Teatro Antico di Taormina e l'Etna, un equilibrio perfetto, un omaggio alla bellezza che nasce da un'armonia senza tempo, oltre i confini del reale.",
        price: "€ 1.100",
        image:
            "/images/opere/teatro.jpg",
    },
    {
        title: "Frammenti di luce",
        category: "34cm X 46cm",
        description:
            "Un mosaico di geometrie preziose, i cui profili in oro catturano la luce, donando regalità e profondità a una tradizione millenaria.",
        price: "€ 900",
        image:
            "/images/opere/frammenti-di-luce.jpg",
    },
    {
        title: "L'acqua dell'Etna",
        category: "52cm X 35cm",
        description:
            "La maestosità del vulcano Etna che domina un ruscello che scorre tra antiche mura in pietra. Un habitat sospeso tra sogno e realtà.",
        price: "€ 1.000",
        image:
            "/images/opere/acqua-dell-Etna.jpg",
    },
];

export const siteContent = {
    brand: "MICHELE PATANÈ",
    hero: {
        title: "Michele Patanè",
        subtitle: "Inserito nel Registro delle Eredità Immateriali della Sicilia",
        description:
            "Artista poliedrico che dedica la sua vita all'arte in tutte le sue forme",
        ctaLabel: "Scopri le opere",
        ctaHref: "#opere",
        secondaryCtaLabel: "Collezione recente",
        secondaryCtaHref: "#opere",
        backgroundImage:
            "/images/hero.jpg",
    },
    artist: {
        eyebrow: "Memoria, territorio, ricerca",
        title: "Un percorso artistico che unisce identità, materia e visione",
        paragraphOne:
            "Michele Patanè sviluppa una ricerca personale che intreccia arti visive, sperimentazione e tradizione. Il suo lavoro nasce da un rapporto profondo con il territorio siciliano e con il valore simbolico dei materiali, trattati come elementi vivi della composizione.",
        paragraphTwo:
            "Tra i nuclei centrali della sua poetica emerge il papiro, non solo come supporto, ma come presenza organica e culturale, capace di custodire memoria, manualità e identità. La sua pratica si muove tra gesto artistico e sapienza artigianale, in un dialogo continuo tra radici e contemporaneità.",
        ctaLabel: "Conosci l'artista",
        ctaHref: "#contatti",
        image:
            "/images/michele.jpg",
    },
    contact: {
        eyebrow: "Contatti e informazioni",
        title: "Parla con Michele",
        description:
            "Per mostre, collaborazioni, commissioni o richieste di approfondimento sulle opere, è possibile entrare in contatto direttamente con l'artista.",
        email: "https://wa.me/39476290616",
        ctaLabel: "Scrivi ora",
    },
    socialLinks: {
        instagram: "https://www.instagram.com/patane.michele/",
        facebook: "https://www.facebook.com/michele.patane.3",
        whatsapp: "https://wa.me/39476290616",
    },
    navLinks: [
        { label: "L'artista", href: "#artista" },
        { label: "Il papiro", href: "#papiro" },
        { label: "Le opere", href: "#opere" },
    ],
};