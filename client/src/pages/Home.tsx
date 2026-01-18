/**
 * Home Page - Clinique Ophtalmologique Landing Page
 * 
 * Design Philosophy: Modern Professional Minimalism
 * - Clean lines, sophisticated typography, strategic whitespace
 * - Color Palette: Red accent (#E74124), dark text (#181717), off-white background
 * - Typography: Space Grotesk (light 300) for titles, Funnel Sans (regular 400) for body
 * - Layout: Asymmetric, content-first with clear information hierarchy
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <nav className="container mx-auto px-4 py-4 md:py-6 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 12h18M12 3v18" />
              </svg>
            </div>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="nav-link">
              ACCUEIL
            </a>
            <a href="#" className="nav-link">
              INTECH
            </a>
            <div className="relative group">
              <button className="nav-link flex items-center gap-1">
                EXPERTISES
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
            <a href="#" className="nav-link">
              RÉFÉRENCES
            </a>
            <a href="#" className="nav-link">
              ACTU
            </a>
          </div>

          {/* Contact Button */}
          <a href="#" className="nav-link">
            CONTACT
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-20">
        {/* Page Label */}
        <div className="mb-8">
          <span className="accent-label">[FICHE RÉFÉRENCE]</span>
        </div>

        {/* Main Title */}
        <h1 className="display-title mb-12 md:mb-16 max-w-4xl">
          Construction d'une clinique ophtalmologique
        </h1>

        {/* Project Details Section */}
        <div className="mb-12 md:mb-16">
          {/* Small Logo Icon */}
          <div className="mb-8">
            <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 12h18M12 3v18" />
              </svg>
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8">
            {/* Localisation */}
            <div>
              <div className="accent-label mb-2">[LOCALISATION]</div>
              <p className="text-base font-normal text-foreground">33000 Bordeaux</p>
            </div>

            {/* Maître d'Ouvrage */}
            <div>
              <div className="accent-label mb-2">[MAÎTRE D'OUVRAGE]</div>
              <p className="text-base font-normal text-foreground">GBNA</p>
            </div>

            {/* Montant des Travaux */}
            <div>
              <div className="accent-label mb-2">[MONTANT DES TRAVAUX]</div>
              <p className="text-base font-normal text-foreground">11,4M€ HT</p>
            </div>

            {/* Surfaces */}
            <div>
              <div className="accent-label mb-2">[SURFACES]</div>
              <p className="text-base font-normal text-foreground">5 823 m²</p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>
        </div>

        {/* Hero Image Section */}
        <div className="w-full mb-12 md:mb-20 overflow-hidden rounded-lg">
          <img
            src="/images/clinique-hero.webp"
            alt="Clinique Ophtalmologique - Vue aérienne du projet de construction"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Additional Information Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 py-12 md:py-20">
          {/* Left Column - Project Context */}
          <div>
            <h2 className="text-2xl font-light mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Contexte du projet
            </h2>
            <p className="text-base leading-relaxed text-foreground mb-4">
              La construction de cette clinique ophtalmologique à Bordeaux représente un défi architectural et technique majeur. Le projet intègre les dernières normes en matière de confort et d'accessibilité pour les patients.
            </p>
            <p className="text-base leading-relaxed text-foreground">
              Avec une surface de 5 823 m², le bâtiment offre des espaces modernes et fonctionnels pour les consultations, les interventions chirurgicales et l'accueil des patients.
            </p>
          </div>

          {/* Right Column - Project Details */}
          <div>
            <h2 className="text-2xl font-light mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Détails techniques
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-accent-red font-bold">•</span>
                <span className="text-base text-foreground">Architecte mandataire : TLR Architecture</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent-red font-bold">•</span>
                <span className="text-base text-foreground">BET sous-traitant : INTECH (Sous-traitant SOPRECO)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent-red font-bold">•</span>
                <span className="text-base text-foreground">Année de livraison : 2022</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent-red font-bold">•</span>
                <span className="text-base text-foreground">Projet réalisé en BIM</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-12 md:py-20 border-t border-border">
          <h2 className="text-2xl font-light mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Un projet à concrétiser ?
          </h2>
          <p className="text-base text-foreground mb-8 max-w-2xl">
            Contactez notre équipe pour discuter de vos besoins en matière de construction et d'ingénierie.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3 bg-accent text-white rounded hover:opacity-90 transition-opacity duration-300"
          >
            Contactez notre équipe
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-8 md:py-12">
        <div className="container mx-auto px-4">
          <p className="text-sm text-muted-foreground">
            © 2024 INTECH - Bureau d'études structure et fluide. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
