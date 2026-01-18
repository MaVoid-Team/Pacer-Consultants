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
      <main className="w-full">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-20">
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
        </section>

        {/* Context Section with Red Background */}
        <section className="w-full bg-accent text-white py-12 md:py-24 relative overflow-hidden">
          {/* Decorative diagonal shape at top */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-background" style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)'
          }}></div>

          <div className="container mx-auto px-4 pt-12 md:pt-16 relative z-10">
            {/* Section Label */}
            <div className="accent-label mb-6 text-white opacity-80">/CONTEXTE</div>

            {/* Section Title */}
            <h2 className="display-title text-white mb-12 max-w-3xl">
              Un défi technique et architectural
            </h2>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
              {/* Left Column - Text */}
              <div>
                <p className="text-base leading-relaxed mb-8 max-w-md">
                  Pensé pour offrir un parcours ambulatoire optimisé et une expérience renouvelée pour les patients, l'établissement intègre un plateau technique opératoire de haute technicité associé à une unité fast track.
                </p>

                {/* Call to Action Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 border-2 border-white px-6 py-3 text-white hover:bg-white hover:text-accent transition-colors duration-300"
                >
                  <span className="text-xl">→</span>
                  <span className="text-sm font-semibold">TRAVAILLEZ AVEC NOUS</span>
                </a>
              </div>

              {/* Right Column - Images */}
              <div className="relative h-96 md:h-full">
                <img
                  src="/images/clinique-facade-1.webp"
                  alt="Façade de la clinique"
                  className="absolute top-0 right-0 w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="/images/clinique-facade-2.webp"
                  alt="Détail de la clinique"
                  className="absolute bottom-0 left-0 w-3/4 h-56 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Decorative diagonal shape at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-background" style={{
            clipPath: 'polygon(0 0, 100% 100%, 100% 100%, 0 100%)'
          }}></div>
        </section>

        {/* Objectives Section */}
        <section className="container mx-auto px-4 py-12 md:py-24">
          {/* Section Label */}
          <div className="accent-label mb-6">/OBJECTIFS</div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            {/* Left Column - Images */}
            <div className="relative h-96 md:h-full order-2 md:order-1">
              <img
                src="/images/clinique-facade-2.webp"
                alt="Vue de la clinique"
                className="absolute top-0 left-0 w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img
                src="/images/clinique-facade-1.webp"
                alt="Détail architectural"
                className="absolute bottom-0 right-0 w-3/4 h-56 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Right Column - Text */}
            <div className="order-1 md:order-2">
              <p className="text-base leading-relaxed mb-6 text-foreground">
                L'architecture singulière et le classement en catégorie sismique II de l'ouvrage ont nécessité une conception rigoureuse afin de garantir la sécurité et la pérennité du bâtiment.
              </p>

              <p className="text-base leading-relaxed text-foreground">
                La structure doit répondre à des critères strictes de performance et de durabilité, tout en offrant des espaces fonctionnels et accueillants pour les patients et le personnel médical.
              </p>
            </div>
          </div>
        </section>

        {/* Professional Recognition Section */}
        <section className="container mx-auto px-4 py-12 md:py-24">
          {/* Section Title */}
          <h2 className="display-title mb-12 md:mb-16">
            Reconnaissance professionnelle
          </h2>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {/* Left Column - Description */}
            <div className="relative">
              {/* Red accent icon */}
              <div className="absolute -left-8 top-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white text-2xl">
                ✓
              </div>

              <p className="text-base leading-relaxed text-foreground ml-6 mb-8">
                Présenté au concours GRAITEC, ce projet illustre la maîtrise d'INTECH d'avance design pour concevoir la structure d'un bâtiment complexe en zone sismique.
              </p>

              {/* Project Image */}
              <img
                src="/images/clinique-facade-1.webp"
                alt="Vue du projet"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Right Column - Project Details */}
            <div>
              {/* Temporalité */}
              <div className="mb-8 pb-8 border-b border-border">
                <div className="accent-label mb-3">[TEMPORALITÉ]</div>
                <p className="text-base font-normal text-foreground">Année de livraison : 2022</p>
              </div>

              {/* Missions */}
              <div className="mb-8 pb-8 border-b border-border">
                <div className="accent-label mb-3">[MISSIONS]</div>
                <div className="space-y-2">
                  <p className="text-base font-normal text-foreground">Structure</p>
                  <p className="text-base font-normal text-foreground">Exécution</p>
                </div>
              </div>

              {/* Équipe Projet */}
              <div className="mb-8 pb-8 border-b border-border">
                <div className="accent-label mb-3">[ÉQUIPE PROJET]</div>
                <div className="space-y-2">
                  <p className="text-base font-semibold text-foreground">Architecte mandataire :</p>
                  <p className="text-base font-normal text-foreground">TLR Architecture</p>
                  <p className="text-base font-semibold text-foreground mt-4">BET sous-traitant :</p>
                  <p className="text-base font-normal text-foreground">INTECH (Sous-traitant SOPRECO)</p>
                </div>
              </div>

              {/* Performance & Certifications */}
              <div>
                <div className="accent-label mb-3">[PERFORMANCE & CERTIFICATIONS]</div>
                <p className="text-base font-normal text-foreground">Projet réalisé en BIM</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects Section */}
        <section className="w-full bg-black text-white py-12 md:py-24 relative">
          {/* Decorative wavy top border */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-background" style={{
            clipPath: 'polygon(0 0, 100% 20%, 100% 100%, 0 100%)'
          }}></div>

          <div className="container mx-auto px-4 pt-12 md:pt-20 relative z-10">
            {/* Section Label */}
            <div className="text-accent text-sm font-semibold tracking-wider mb-4">/FICHES RÉFÉRENCES</div>

            {/* Section Title */}
            <h2 className="text-4xl md:text-5xl font-light mb-12 md:mb-20" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Nos <span className="text-accent">projets</span> de références sur le territoire
            </h2>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Project 1 */}
              <a href="#" className="group relative overflow-hidden rounded-lg h-64 md:h-80">
                <img
                  src="/images/clinique-hero.webp"
                  alt="Clinique Francheville"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300 flex flex-col justify-end p-6">
                  <div className="text-xs text-accent mb-2">[00]</div>
                  <h3 className="text-2xl font-bold mb-2">CLINIQUE FRANCHEVILLE</h3>
                  <p className="text-sm">7 835 M² • 24000 PÉRIGUEUX</p>
                </div>
              </a>

              {/* Project 2 */}
              <a href="#" className="group relative overflow-hidden rounded-lg h-64 md:h-80">
                <img
                  src="/images/clinique-facade-1.webp"
                  alt="EHPAD de Neuvic"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300 flex flex-col justify-end p-6">
                  <div className="text-xs text-accent mb-2">[00]</div>
                  <h3 className="text-2xl font-bold mb-2">EHPAD DE NEUVIC</h3>
                  <p className="text-sm">4 280 M² • 24190 NEUVIC SUR L'ISLE</p>
                </div>
              </a>

              {/* Project 3 */}
              <a href="#" className="group relative overflow-hidden rounded-lg h-64 md:h-80">
                <img
                  src="/images/clinique-facade-2.webp"
                  alt="Parc des Sports"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300 flex flex-col justify-end p-6">
                  <div className="text-xs text-accent mb-2">[01]</div>
                  <h3 className="text-2xl font-bold mb-2">PARC DES SPORTS</h3>
                  <p className="text-sm">95 223 M² • 24000 PÉRIGUEUX</p>
                </div>
              </a>
            </div>

            {/* View All Projects Link */}
            <div className="mt-12 md:mt-16 text-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors duration-300 font-semibold"
              >
                <span>VOIR TOUS LES PROJETS</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="container mx-auto px-4 py-12 md:py-20 border-t border-border">
          <h2 className="display-title mb-6">
            Un projet à concrétiser ?
          </h2>
          <p className="text-base text-foreground mb-8 max-w-2xl">
            Contactez notre équipe pour discuter de vos besoins en matière de construction et d'ingénierie.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3 bg-accent text-white rounded hover:opacity-90 transition-opacity duration-300 font-semibold"
          >
            Contactez notre équipe
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">INTECH</h4>
              <p className="text-sm text-muted-foreground">Bureau d'études structure et fluide</p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Accueil</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Nos références</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Actualités</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Structures</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Fluides & CVC</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">SSI</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-2">
                <li><a href="mailto:etudes@beintech.fr" className="text-sm text-muted-foreground hover:text-foreground transition-colors">etudes@beintech.fr</a></li>
                <li><a href="tel:+33553545709" className="text-sm text-muted-foreground hover:text-foreground transition-colors">05 53 54 57 09</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2024 INTECH - Bureau d'études structure et fluide. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Politique de confidentialité</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Mentions légales</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
