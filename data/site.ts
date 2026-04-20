import type { Service, Work } from "@/types";

export const services: Service[] = [
    {
        title: "Coltivazione",
        description:
            "Il papiro nasce dal territorio e conserva nella materia il legame con Fiumefreddo di Sicilia.",
        image:
            "https://scontent-fco2-1.xx.fbcdn.net/v/t39.30808-6/615466666_26320576720862275_5924658124954368286_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=2MWlIHn_jgsQ7kNvwHCVEgA&_nc_oc=Adr7VUzeu2kJHn6w3nraMc17S1HzOk5pmv4zMw-LlqGFTVlSLJEhdq8lmkz7JG2GMLo&_nc_zt=23&_nc_ht=scontent-fco2-1.xx&_nc_gid=BUB2c71fIzPCJAJUvYyFuw&_nc_ss=7a3a8&oh=00_Af2aMOnjuhtZn_JI9xOE8pJBRa7Gdt4pur1Q-Kc1DwQJ_w&oe=69EBCD18",
    },
    {
        title: "Lavorazione",
        description:
            "Ogni fibra viene aperta e composta a mano, seguendo una tecnica lenta e artigianale.",
        image:
            "https://scontent-fco2-1.xx.fbcdn.net/v/t39.30808-6/557641268_25484117434508212_2293790353721080158_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=qq8YvwD7OYwQ7kNvwHRj9Wr&_nc_oc=Adox5N4SDQ2Bpxmt7bX-AJ0u97Ub2F6UXQW8iDaPusskCf2Z9dOVafI9ufpuU-nFGvY&_nc_zt=23&_nc_ht=scontent-fco2-1.xx&_nc_gid=NvmY7RDFwOV9Ba5DrI9ntw&_nc_ss=7a3a8&oh=00_Af0HaL7FknXPZEdJM9IlzZxslcVUrpKSl7jwlm1thvHP8w&oe=69EBFEE0",
    },
    {
        title: "Supporto d'artista",
        description:
            "Il foglio finale diventa parte viva dell'opera, non semplice base pittorica, ma valore aggiunto.",
        image:
            "https://scontent-fco2-1.xx.fbcdn.net/v/t39.30808-6/675966828_27289064827346788_530785287663807099_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=8rKkUAxerdgQ7kNvwEVFr30&_nc_oc=Adq6itu62FS2QNQ_NOsostD_a9ENM5i40uy-V_Yj17946192nguasYlJefbC88hec2M&_nc_zt=23&_nc_ht=scontent-fco2-1.xx&_nc_gid=933KtvVUAk_TvyxFV1z3OA&_nc_ss=7a3a8&oh=00_Af0Y-7eyNpNhuKQ6QfaTNwSSAqYlJXor2I7xAw0NttCqjg&oe=69EC05CA",
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
            "https://images.unsplash.com/photo-1578301979108-0d6d7ff1a5f2?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "Radici sul mare",
        category: "70cm X 50cm",
        description:
            "I rami che si intrecciano fino a farsi confine e cuore della Sicilia. Uno sguardo sospeso tra la nostalgia di chi è partito e il desiderio di chi attende.",
        price: "€ 1.700",
        image:
            "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "Il teatro e la Montagna",
        category: "53cm X 36cm",
        description:
            "Il Teatro Antico di Taormina e l'Etna, un equilibrio perfetto, un omaggio alla bellezza che nasce da un'armonia senza tempo, oltre i confini del reale.",
        price: "€ 1.100",
        image:
            "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "Frammenti di luce",
        category: "34cm X 46cm",
        description:
            "Un mosaico di geometrie preziose, i cui profili in oro catturano la luce, donando regalità e profondità a una tradizione millenaria.",
        price: "€ 900",
        image:
            "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "L'acqua dell'Etna",
        category: "52cm X 35cm",
        description:
            "La maestosità del vulcano Etna che domina un ruscello che scorre tra antiche mura in pietra. Un habitat sospeso tra sogno e realtà.",
        price: "€ 1.000",
        image:
            "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
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
            "https://scontent-fco2-1.xx.fbcdn.net/v/t39.30808-6/604673758_26194483846804897_6181029456100335498_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_ohc=rCO8ihKKHfcQ7kNvwGcDQtg&_nc_oc=AdoheN75-aOot26hVHHC8NX1NB8MyYctc4Tv4Onhu1AZRHRHrthn6gt-bAAawVS0LVk&_nc_zt=23&_nc_ht=scontent-fco2-1.xx&_nc_gid=eECqkFUxnOhPlHTRHMXJoQ&_nc_ss=7a3a8&oh=00_Af3l7GOicwL7EASd0HtkDnFloCR3NlZGfmk0KFlY9Kt22w&oe=69E93B48",
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
            "https://scontent-fco2-1.xx.fbcdn.net/v/t39.30808-6/516835224_24658527610400536_585980941922333497_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=XITqInAMhr4Q7kNvwHvbUSg&_nc_oc=AdrWisJJrAThUGcvcGi99bckaZdn3egO0Tcs2ZiDjcMRRsQ-2y3sncZea7w1zimryhs&_nc_zt=23&_nc_ht=scontent-fco2-1.xx&_nc_gid=1SAQj4xqoChVXoXv8Dfezw&_nc_ss=7a3a8&oh=00_Af3qa5FyPVbfWvKB8J00LyA_dIzt4DjRrTL9G1aHd4Hpnw&oe=69E9163F",
    },
    contact: {
        eyebrow: "Contatti e informazioni",
        title: "Parla con Michele",
        description:
            "Per mostre, collaborazioni, commissioni o richieste di approfondimento sulle opere, è possibile entrare in contatto direttamente con l'artista.",
        email: "info@michelepatane.it",
        ctaLabel: "Scrivi ora",
    },
    socialLinks: {
        instagram: "https://www.instagram.com/patane.michele/",
        facebook: "https://www.facebook.com/michele.patane.3",
        whatsapp: "#",
    },
    navLinks: [
        { label: "L'artista", href: "#artista" },
        { label: "Il papiro", href: "#papiro" },
        { label: "Le opere", href: "#opere" },
    ],
};