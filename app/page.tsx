const papyrusBenefits = [
  {
    title: "Coltivazione",
    text: "Il papiro nasce nel territorio e conserva nella materia la memoria del luogo da cui proviene.",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Lavorazione",
    text: "Ogni fibra viene aperta e composta a mano, senza processi industriali, con una tecnica lenta e precisa.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Supporto d'artista",
    text: "Il foglio finale non è solo base pittorica, ma parte viva dell'opera e della sua identità.",
    image:
      "https://images.unsplash.com/photo-1517495306984-f84210f9daa8?auto=format&fit=crop&w=900&q=80",
  },
];

const artworks = [
  {
    id: 1,
    title: "Memorie del Nilo",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Fibra e Luce",
    image:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Tracce di Sicilia",
    image:
      "https://images.unsplash.com/photo-1578301978018-3005759f48f7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Materia Antica",
    image:
      "https://images.unsplash.com/photo-1578926288207-a90a5366759d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Segni sul Papiro",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80",
  },
];

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-xs text-[#655648] transition hover:text-[#b18c55]"
    >
      {children}
    </a>
  );
}

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-md bg-[#c9a35f] px-5 py-3 text-sm text-[#fffdf8] transition hover:bg-[#b48c49]"
    >
      {children}
    </a>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f6f0e5] text-[#2e241e]">
      <header className="sticky top-0 z-50 border-b border-[#e1d7ca] bg-[#f7f1e7]/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <p className="font-serif text-2xl italic text-[#6d5a4e] sm:text-3xl">
            Michele Patanè
          </p>

          <nav className="hidden items-center gap-6 md:flex">
            <NavLink href="#michele">Michele</NavLink>
            <NavLink href="#papiro">Il papiro</NavLink>
            <NavLink href="#shop">Opere</NavLink>
            <NavLink href="#contatti">Contatti</NavLink>
          </nav>

          <PrimaryButton href="#contatti">Contatta l'artista</PrimaryButton>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-[#ddd3c6]">
        <div className="absolute inset-0">
          <img
            src="https://scontent-mxp1-1.xx.fbcdn.net/v/t39.30808-6/476014214_9994894197194219_1341100536125868275_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_ohc=IkUwKPFJOAYQ7kNvwEH1_CR&_nc_oc=Adq8N2Dky5OCS8vPhDtuubtva8sXjsjzofEh0Z43T99a9TKqz_zf6FrV6U0F78UmtHw&_nc_zt=23&_nc_ht=scontent-mxp1-1.xx&_nc_gid=iskuk29BvMkFJTs0ESVLdg&_nc_ss=7a3a8&oh=00_Af0kVXhIoRfG-kAaUUZ_ZoJiBLlL_4nGHXS1hRSGXVNeSA&oe=69E8B6FC"
            alt="Dettaglio di materiali e opere nello studio dell'artista"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1d1713]/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1d1713]/20 via-transparent to-[#1d1713]/10" />
        </div>

        <div className="relative mx-auto flex min-h-[520px] max-w-[1280px] items-center justify-center px-4 py-24 text-center sm:px-6 lg:min-h-[620px] lg:px-8">
          <div className="max-w-4xl text-[#f7f1e7]">
            <h1 className="font-serif text-5xl italic leading-[0.95] sm:text-6xl lg:text-7xl xl:text-[5.6rem]">
              Michele Patanè
            </h1>
            <p className="mt-4 font-serif text-2xl italic sm:text-3xl lg:text-4xl">
              Riconosciuto patrimonio immateriale della Sicilia
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#f1eadf] sm:text-lg">
              Grazie alle sue opere che nascono dall'incontro tra pittura, lavorazione artigianale
              del papiro e memoria del territorio di Fiumefreddo di Sicilia.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <section id="michele" className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <article className="rounded-[28px] bg-[#f7f1e7] p-8 shadow-[0_1px_0_rgba(0,0,0,0.04)] sm:p-10 lg:p-12">
            <h2 className="font-serif text-4xl leading-tight text-[#2d231d] sm:text-5xl">
              Chi è Michele Patanè?
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5a4c42] sm:text-lg">
              Artista e artigiano, Michele Patanè custodisce una tecnica rara:
              la coltivazione e la lavorazione del papiro eseguite ancora oggi
              con metodi interamente manuali. Le sue opere su papiro
              nascono da una materia viva e da una ricerca
              visiva che unisce gesto contemporaneo e tradizione.
            </p>
            <div className="mt-8">
              <PrimaryButton href="#shop">Scopri le opere</PrimaryButton>
            </div>
          </article>

          <div className="overflow-hidden rounded-[48px_48px_140px_48px] bg-[#ddd1c4]">
            <img
              src="https://scontent-mxp2-1.xx.fbcdn.net/v/t39.30808-6/604673758_26194483846804897_6181029456100335498_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_ohc=rCO8ihKKHfcQ7kNvwFiQYyT&_nc_oc=Adpq8ReDZcSLL0HDOc-2grbjnQzL6brsPAEWyW_9BBvEKeGngxKNP_y4g6sN8rf1pA8&_nc_zt=23&_nc_ht=scontent-mxp2-1.xx&_nc_gid=L-zt2MQ8e0lJkcOkN_op8w&_nc_ss=7a3a8&oh=00_Af1UtM3kFehTAFLh6K9E2kI33NhBdXX_jPwpdsb4LlPOUw&oe=69E89288"
              alt="Ritratto dell'artista Michele Patanè"
              className="h-[420px] w-full object-cover sm:h-[520px]"
            />
          </div>
        </section>

        <section id="papiro" className="mt-16 rounded-[28px] bg-[#b6bcad] px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
          <div className="text-center">
            <h2 className="font-serif text-4xl italic text-[#2f261f] sm:text-5xl">
              L'arte del papiro
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#4d433b] sm:text-lg">
              Un sapere antico che Michele continua a portare nel presente,
              trasformando il papiro in un supporto unico per opere dal forte
              valore materico e identitario.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {papyrusBenefits.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-t-[120px] rounded-b-[18px] bg-[#f7f1e7]"
              >
                <div className="mx-auto mt-6 h-24 w-24 overflow-hidden rounded-full border border-[#e5dccf]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 text-center sm:p-7">
                  <h3 className="font-serif text-3xl italic text-[#2d231d]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#5d4e44] sm:text-[15px]">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="shop" className="mt-16">
          <div className="text-center">
            <h2 className="font-serif text-5xl italic text-[#7e6b5a] sm:text-6xl">
              Opere
            </h2>
            <p className="mt-3 text-sm text-[#6a5a4d] sm:text-base">
              Pezzi unici su fogli di papiro lavorati a mano
            </p>
          </div>

          <div className="mt-10 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex min-w-max gap-5 lg:grid lg:min-w-0 lg:grid-cols-5 lg:gap-6">
              {artworks.map((artwork) => (
                <button
                  key={artwork.id}
                  type="button"
                  className="group w-[220px] shrink-0 text-left lg:w-auto"
                >
                  <div className="overflow-hidden rounded-[18px] bg-[#e7ddd2]">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="h-[300px] w-full object-cover cursor-pointer transition duration-500 group-hover:scale-105 sm:h-[340px] lg:h-[280px] xl:h-[320px]"
                    />
                  </div>
                  <div className="px-1 pb-1 pt-4 text-center">
                    <h3 className="font-serif text-xl text-[#2d231d] sm:text-2xl">
                      {artwork.title}
                    </h3>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <PrimaryButton href="#contatti">Richiedi informazioni</PrimaryButton>
          </div>
        </section>
      </div>

      <footer
        id="contatti"
        className="border-t border-[#ddd3c6] bg-[#f1eadf] px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
      >
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h2 className="font-serif text-4xl italic text-[#2e241e] sm:text-5xl">
              Contatti
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#5e5045]">
              Per informazioni su opere, disponibilità e commissioni, contatta
              direttamente l'artista. Potrai anche prenotare l'esclusivo tour del papiro tra luoghi pubblici e privati.
            </p>
          </div>

          <div className="space-y-3 text-sm text-[#4f433a] sm:text-base">
            <p>Email — info@michelepatane.it</p>
            <p>Instagram — @michelepatane</p>
            <p>Facebook — Michele Patanè</p>
            <p>WhatsApp — +39 000 000 0000</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
