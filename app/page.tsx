import {
  ArrowRight,
  MessageCircle,
} from "lucide-react";

import { FaInstagram, FaFacebookF } from "react-icons/fa6";

const services = [
  {
    title: "Coltivazione",
    description:
      "Il papiro nasce dal territorio e conserva nella materia il legame con Fiumefreddo di Sicilia.",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Lavorazione",
    description:
      "Ogni fibra viene aperta e composta a mano, seguendo una tecnica lenta e artigianale.",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Supporto d'artista",
    description:
      "Il foglio finale diventa parte viva dell'opera, non semplice base pittorica, ma valore aggiunto.",
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=900&q=80",
  },
];

const works = [
  {
    title: "Materia e memoria",
    category: "Tecnica mista su papiro",
    image:
      "https://images.unsplash.com/photo-1578301979108-0d6d7ff1a5f2?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Tracce del territorio",
    category: "Opera contemporanea",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Fibra viva",
    category: "Ricerca materica",
    image:
      "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Sicilia interiore",
    category: "Serie recente",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#d9d2ca] p-4 md:p-6">
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[36px]">
        {/* HERO */}
        <section className="relative min-h-[92vh] overflow-hidden bg-[#d8d0c8]">
          <div
            className="absolute inset-0 bg-cover bg-top"
            style={{
              backgroundImage:
                "url('https://scontent-fco2-1.xx.fbcdn.net/v/t39.30808-6/604673758_26194483846804897_6181029456100335498_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_ohc=rCO8ihKKHfcQ7kNvwGcDQtg&_nc_oc=AdoheN75-aOot26hVHHC8NX1NB8MyYctc4Tv4Onhu1AZRHRHrthn6gt-bAAawVS0LVk&_nc_zt=23&_nc_ht=scontent-fco2-1.xx&_nc_gid=eECqkFUxnOhPlHTRHMXJoQ&_nc_ss=7a3a8&oh=00_Af3l7GOicwL7EASd0HtkDnFloCR3NlZGfmk0KFlY9Kt22w&oe=69E93B48')",
            }}
          />

          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f1ebe5]/30 via-transparent to-[#bdaea0]/10" />
          <div className="absolute left-1/2 top-1/2 h-[360px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-t-[180px] bg-[#bfae9f]/20 blur-[1px]" />

          <header className="absolute left-0 top-0 z-20 flex w-full items-center justify-between px-6 py-5 md:px-10">
            <div className="text-[28px] font-semibold tracking-[0.2em] text-white md:text-[32px]">
              MICHELE PATANÈ
            </div>

            <div className="flex items-center gap-8">
              <nav className="hidden items-center gap-10 text-[11px] font-medium uppercase tracking-[0.2em] text-white md:flex">
                <a href="#artista" className="transition hover:opacity-70">
                  L&apos;artista
                </a>
                <a href="#papiro" className="transition hover:opacity-70">
                  Il papiro
                </a>
                <a href="#opere" className="transition hover:opacity-70">
                  Le opere
                </a>
              </nav>

              <a
                href="#contatti"
                className="rounded-sm bg-[#e9dfd4] px-5 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[#4a433d] transition hover:bg-[#f3ebe3]"
              >
                Contatti
              </a>
            </div>
          </header>

          <div className="absolute right-6 top-24 z-20 flex gap-2 md:right-10 md:top-28">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className={`h-3 w-3 rounded-full ${i === 0 ? "bg-white" : "bg-white/50"
                  }`}
              />
            ))}
          </div>

          <div className="relative z-10 flex min-h-[92vh] items-center justify-center px-6 text-center">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl leading-tight text-white md:text-6xl">
                Michele Patanè
              </h1>

              <p className="mt-4 text-sm font-medium text-white/85 md:text-xl">
                Inserito nel Registro delle Eredità Immateriali della Sicilia
              </p>

              <p className="mt-2 text-xs text-white/70 md:text-sm">
                Artista poliedrico che dedica la sua vita all&apos;arte in tutte
                le sue forme
              </p>

              <button className="mt-8 cursor-pointer bg-[#efe5da] px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4a433d] transition hover:bg-white">
                Scopri le opere
              </button>
            </div>
          </div>

          <div className="absolute bottom-6 left-6 z-20 flex items-center gap-4 text-white/85 md:bottom-8 md:left-10">
            <a href="#" className="hover:text-white">
              <FaInstagram className="h-4 w-4" />
            </a>
            <a href="#" className="hover:text-white">
              <FaFacebookF className="h-4 w-4" />
            </a>
            <a href="#" className="hover:text-white">
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>

          <a
            href="#opere"
            className="absolute bottom-6 right-6 z-20 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white/85 hover:text-white md:bottom-8 md:right-10"
          >
            Collezione recente
            <ArrowRight className="h-4 w-4" />
          </a>
        </section>

        {/* IL PAPIRO */}
        <section
          id="papiro"
          className="bg-[#f2ece5] px-6 py-20 md:px-10 md:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#8d8175]">
                vero artigianato
              </p>
              <h2 className="mt-3 font-serif text-3xl text-[#2f2925] md:text-5xl">
                L&apos;arte del papiro
              </h2>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-10">
              {services.map((item) => (
                <article
                  key={item.title}
                  className="mx-auto w-full max-w-[320px]"
                >
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

        {/* L'ARTISTA */}
        <section
          id="artista"
          className="grid bg-[#fbf8f3] md:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="px-6 py-16 md:px-12 md:py-24 lg:px-20">
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#9b8f82]">
              Memoria, territorio, ricerca
            </p>

            <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-[#2f2925] md:text-5xl">
              Un percorso artistico che unisce identità, materia e visione
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#6f6258] md:text-[15px]">
              Michele Patanè sviluppa una ricerca personale che intreccia arti
              visive, sperimentazione e tradizione. Il suo lavoro nasce da un
              rapporto profondo con il territorio siciliano e con il valore
              simbolico dei materiali, trattati come elementi vivi della
              composizione.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#6f6258] md:text-[15px]">
              Tra i nuclei centrali della sua poetica emerge il papiro, non solo
              come supporto, ma come presenza organica e culturale, capace di
              custodire memoria, manualità e identità. La sua pratica si muove
              tra gesto artistico e sapienza artigianale, in un dialogo continuo
              tra radici e contemporaneità.
            </p>

            <a
              href="#contatti"
              className="mt-8 inline-flex items-center gap-3 bg-[#e9dfd4] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4a433d] transition hover:bg-[#f3ebe3]"
            >
              Conosci l&apos;artista
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative min-h-[420px] border-t border-[#e3d7ca] md:min-h-full md:border-l md:border-t-0">
            <div className="absolute inset-0 bg-[#d8c8b6]" />
            <div
              className="absolute right-0 top-0 h-full w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://scontent-fco2-1.xx.fbcdn.net/v/t39.30808-6/516835224_24658527610400536_585980941922333497_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=XITqInAMhr4Q7kNvwHvbUSg&_nc_oc=AdrWisJJrAThUGcvcGi99bckaZdn3egO0Tcs2ZiDjcMRRsQ-2y3sncZea7w1zimryhs&_nc_zt=23&_nc_ht=scontent-fco2-1.xx&_nc_gid=1SAQj4xqoChVXoXv8Dfezw&_nc_ss=7a3a8&oh=00_Af3qa5FyPVbfWvKB8J00LyA_dIzt4DjRrTL9G1aHd4Hpnw&oe=69E9163F')",
              }}
            />
            <div className="absolute inset-0 bg-[#c9b8a7]/20" />
            <div className="absolute left-1/2 top-10 h-[78%] w-[72%] -translate-x-1/2 overflow-hidden rounded-t-[220px] border border-white/30">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://scontent-fco2-1.xx.fbcdn.net/v/t39.30808-6/516835224_24658527610400536_585980941922333497_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=XITqInAMhr4Q7kNvwHvbUSg&_nc_oc=AdrWisJJrAThUGcvcGi99bckaZdn3egO0Tcs2ZiDjcMRRsQ-2y3sncZea7w1zimryhs&_nc_zt=23&_nc_ht=scontent-fco2-1.xx&_nc_gid=1SAQj4xqoChVXoXv8Dfezw&_nc_ss=7a3a8&oh=00_Af3qa5FyPVbfWvKB8J00LyA_dIzt4DjRrTL9G1aHd4Hpnw&oe=69E9163F')",
                }}
              />
            </div>
          </div>
        </section>

        {/* OPERE / GALLERY */}
        <section
          id="opere"
          className="bg-[#ddd0c1] px-6 py-20 md:px-10 md:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#8d8175]">
                Opere recenti
              </p>
              <h2 className="mt-3 font-serif text-3xl text-[#2f2925] md:text-5xl">
                Una galleria della ricerca
              </h2>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {works.map((work) => (
                <article key={work.title} className="group">
                  <div className="overflow-hidden border border-[#bfae9f] bg-[#e9ddd2]">
                    <div
                      className="h-[250px] w-full cursor-pointer bg-cover bg-center transition duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url('${work.image}')` }}
                    />
                  </div>

                  <div className="border-x border-b border-[#bfae9f] bg-[#ddd0c1] px-4 py-4">
                    <h3 className="font-serif text-xl text-[#2f2925]">
                      {work.title}
                    </h3>

                    <p className="mt-1 text-sm text-[#6f6258]">
                      {work.category}
                    </p>

                    <div className="mt-5 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-[#5c5046]">
                      <a href="#" className="transition hover:opacity-70">
                        Vedi
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER / CONTATTI */}
        <footer
          id="contatti"
          className="bg-[#efe7dd] px-6 pt-16 md:px-10 md:pt-24"
        >
          <div className="mx-auto flex max-w-6xl justify-center">
            <div className="w-full max-w-[560px] rounded-t-[280px] bg-[#e3d4c5] px-8 pb-10 pt-16 text-center md:px-14 md:pb-14 md:pt-24">
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#9b8f82]">
                Contatti e informazioni
              </p>

              <h3 className="mt-4 font-serif text-2xl text-[#2f2925] md:text-4xl">
                Parla con Michele
              </h3>

              <p className="mx-auto mt-5 max-w-[360px] text-sm leading-7 text-[#6f6258]">
                Per mostre, collaborazioni, commissioni o richieste di approfondimento
                sulle opere, è possibile entrare in contatto direttamente con
                l&apos;artista.
              </p>

              <a
                href="mailto:info@michelepatane.it"
                className="mt-8 inline-flex items-center gap-2 bg-[#f7f1ea] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4a433d] transition hover:bg-white"
              >
                Scrivi ora
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}