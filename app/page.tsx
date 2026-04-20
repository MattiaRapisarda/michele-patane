"use client";

import { useState } from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { HeroSection } from "@/components/sections/HeroSection";
import { PapyrusSection } from "@/components/sections/PapyrusSection";
import { ArtistSection } from "@/components/sections/ArtistSection";
import { WorksSection } from "@/components/sections/WorksSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { WorkModal } from "@/components/ui/WorkModal";
import { services, siteContent, works } from "@/data/site";
import type { Work } from "@/types";

export default function HomePage() {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  return (
    <SiteShell>
      <HeroSection
        brand={siteContent.brand}
        navLinks={siteContent.navLinks}
        socialLinks={siteContent.socialLinks}
        hero={siteContent.hero}
      />

      <PapyrusSection services={services} />

      <ArtistSection artist={siteContent.artist} />

      <WorksSection works={works} onSelectWork={setSelectedWork} />

      <ContactSection contact={siteContent.contact} />

      <WorkModal
        work={selectedWork}
        onClose={() => setSelectedWork(null)}
      />
    </SiteShell>
  );
}