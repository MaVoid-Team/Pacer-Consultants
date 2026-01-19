import { services, projects, clients, contactInfo } from "@/data/pacer-data";

/**
 * Home Page - PACER Consultants Official Website
 * 
 * Design Philosophy: High-End Engineering Excellence
 * - Clean, bold typography (Space Grotesk)
 * - Industrial-premium color palette: Deep Blacks, Off-Whites, and Pacer Red (#E74124)
 * - Sophisticated grid systems and smooth hover effects
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-4 py-4 md:py-6 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group transition-all duration-300">
            <div className="flex flex-col items-start">
              <span className="text-xl md:text-2xl font-black tracking-tighter text-foreground group-hover:text-accent transition-colors">PACER</span>
              <span className="text-[10px] md:text-[12px] font-bold text-accent tracking-[0.2em] -mt-1 uppercase">Consultants</span>
            </div>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-10">
            {["HOME", "ABOUT US", "SERVICES", "PROJECTS", "CLIENTS"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="nav-link text-xs font-bold tracking-widest hover:text-accent transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden md:block px-6 py-2 border-2 border-foreground text-xs font-bold tracking-widest hover:bg-foreground hover:text-background transition-all duration-300"
          >
            GET IN TOUCH
          </a>
        </nav>
      </header>

      <main className="w-full">
        {/* Hero Section */}
        <section id="home" className="relative h-[90vh] flex items-center overflow-hidden">
          {/* Background Image with Parallax-ready feel */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/clinique-hero.webp"
              alt="Pacer Consultants Excellence"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-1 border border-accent/50 text-accent text-[10px] md:text-xs font-bold tracking-[0.4em] mb-8 animate-in fade-in slide-in-from-left duration-1000">
                SINCE 1950 • TOP QUALITY ENGINEERING
              </div>
              <h1 className="text-6xl md:text-[7rem] font-light text-white mb-8 leading-[0.9] tracking-tighter animate-in fade-in slide-in-from-bottom duration-1000 delay-200" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Expertise <br />
                <span className="text-accent font-bold italic">House.</span>
              </h1>
              <p className="text-lg md:text-2xl text-white/80 max-w-2xl font-light mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
                A multi-disciplinary firm rendering a wide variety of consultancy services for engineering projects across local and international markets.
              </p>
              <div className="flex flex-wrap gap-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
                <a href="#services" className="px-10 py-4 bg-accent text-white text-xs font-bold tracking-widest hover:bg-accent/80 transition-all duration-300 shadow-xl shadow-accent/20">
                  EXPLORE SERVICES
                </a>
                <a href="#projects" className="px-10 py-4 border-2 border-white text-white text-xs font-bold tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                  OUR PORTFOLIO
                </a>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 text-white/50 animate-bounce">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase rotate-90 origin-left">SCROLL</span>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about-us" className="container mx-auto px-4 py-24 md:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Text Side */}
            <div className="order-2 lg:order-1">
              <div className="accent-label mb-8">/ABOUT PACER</div>
              <h2 className="display-title mb-8 text-5xl md:text-6xl leading-tight">
                7 Decades of <br /> Engineering Mastery
              </h2>
              <p className="text-xl leading-relaxed mb-10 text-foreground/70 font-light">
                Founded by the late Dr. Hassan Ismail, PACER Consultants has built an illustrious reputation over 70 years. We operate as a premier multi-disciplinary expertise house, delivering integrated architecture, engineering, and project management solutions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-border pt-12">
                <div>
                  <div className="text-5xl font-bold text-accent mb-4 tracking-tighter">100+</div>
                  <div className="text-xs font-black tracking-widest text-muted-foreground uppercase">Permanent Staff</div>
                  <p className="text-sm text-foreground/60 mt-2">Highly qualified engineers and architects dedicated to your vision.</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-accent mb-4 tracking-tighter">200+</div>
                  <div className="text-xs font-black tracking-widest text-muted-foreground uppercase">Specialized Experts</div>
                  <p className="text-sm text-foreground/60 mt-2">Strategic contractual partners providing deep domain expertise when needed.</p>
                </div>
              </div>
            </div>

            {/* Visual Side */}
            <div className="relative order-1 lg:order-2">
              <div className="bg-muted aspect-[4/5] overflow-hidden shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-700">
                <img
                  src="/images/clinique-facade-1.webp"
                  alt="Engineering Precision"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-2/3 hidden xl:block border-[12px] border-background shadow-2xl">
                <img
                  src="/images/clinique-facade-2.webp"
                  alt="Modern Design"
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Showcase */}
        <section id="services" className="bg-muted py-24 md:py-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <div className="accent-label mb-6 text-accent">/SERVICES</div>
                <h2 className="display-title text-5xl md:text-7xl">Diverse Engineering Solutions</h2>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-muted-foreground max-w-xs text-right mb-6">Innovative, sustainable, and cost-effective consultancy for projects of any scale.</p>
                <div className="h-[2px] w-40 bg-accent"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <div key={service.id} className="group bg-background p-12 hover:bg-black hover:text-white transition-all duration-500 flex flex-col h-full border border-border/50">
                  <div className="text-4xl font-light text-accent/30 group-hover:text-accent mb-8 transition-colors">0{idx + 1}</div>
                  <h3 className="text-2xl font-bold mb-6 tracking-tight">{service.title}</h3>
                  <p className="text-muted-foreground group-hover:text-white/70 mb-10 font-light leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mt-auto space-y-3">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-medium tracking-tight group-hover:text-white/90">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="projects" className="w-full bg-black text-white py-24 md:py-40 relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mb-24">
              <div className="text-accent text-xs font-bold tracking-[0.5em] mb-6 uppercase">/OUR PORTFOLIO</div>
              <h2 className="text-6xl md:text-8xl font-light leading-[1] tracking-tighter" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Shaping Global <br /> <span className="text-accent font-bold italic">Landscape.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-visible">
              {projects.map((project) => (
                <div key={project.id} className="group relative overflow-hidden bg-zinc-900 border border-white/10 hover:border-accent transition-all duration-500 cursor-pointer">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-40 group-hover:opacity-100"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <div className="text-accent text-[10px] font-bold tracking-[0.3em] mb-4 uppercase">{project.category}</div>
                    <h3 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-accent transition-colors">{project.title}</h3>
                    <div className="text-sm font-medium text-white/50 mb-4">{project.location}</div>
                    <p className="text-sm text-white/70 font-light max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-500">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* Specialized "See All" card */}
              <div className="flex items-center justify-center p-12 border-2 border-dashed border-white/20 hover:border-accent group transition-colors duration-500">
                <div className="text-center">
                  <div className="text-5xl font-light mb-6 text-white/20 group-hover:text-accent font-serif">+200</div>
                  <h4 className="text-xl font-bold mb-4">Successful Projects</h4>
                  <a href="#" className="inline-flex items-center gap-2 text-accent text-xs font-bold tracking-widest group-hover:translate-x-2 transition-transform">
                    VIEW ALL <span className="text-2xl">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section id="clients" className="py-24 md:py-40 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-24">
              <div className="accent-label mb-6 text-accent justify-center">/TRUSTED BY</div>
              <h2 className="display-title text-4xl md:text-6xl">Our Valued Clients</h2>
              <div className="w-20 h-1 bg-accent mx-auto mt-8"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
              {clients.map((client) => (
                <div key={client.name} className="flex items-center justify-center grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-500 group">
                  <span className="text-xl md:text-2xl font-black tracking-tight text-foreground/80 group-hover:text-accent text-center">{client.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Strip */}
        <section id="contact" className="container mx-auto px-4 py-24 md:py-40">
          <div className="bg-black text-white p-12 md:p-24 relative overflow-hidden rounded-sm">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-accent opacity-10 pointer-events-none"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-5xl md:text-7xl font-light mb-8 leading-tight tracking-tighter" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Ready to <br /> <span className="text-accent font-bold italic">Collaborate?</span>
                </h2>
                <p className="text-xl text-white/60 font-light mb-12">
                  Partner with Pacer Consultants for your next engineering landmark. Our multi-disciplinary team is ready to provide top-quality solutions.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-accent/20 flex items-center justify-center text-accent text-xl">📱</div>
                    <div>
                      <div className="text-[10px] font-bold text-white/40 tracking-widest uppercase mb-1">CALL US</div>
                      <div className="text-lg font-bold">{contactInfo.phones[0]}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-accent/20 flex items-center justify-center text-accent text-xl">✉️</div>
                    <div>
                      <div className="text-[10px] font-bold text-white/40 tracking-widest uppercase mb-1">EMAIL US</div>
                      <div className="text-lg font-bold">{contactInfo.emails[0]}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <a
                  href={`mailto:${contactInfo.emails[0]}`}
                  className="w-full py-6 bg-accent text-white text-center text-sm font-bold tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 shadow-2xl shadow-accent/20"
                >
                  START A CONVERSATION
                </a>
                <div className="grid grid-cols-2 gap-6">
                  <a href={contactInfo.social.linkedin} target="_blank" className="py-6 border border-white/20 text-center text-xs font-bold tracking-[0.2em] hover:border-accent hover:text-accent transition-colors">LINKEDIN</a>
                  <a href={contactInfo.social.instagram} target="_blank" className="py-6 border border-white/20 text-center text-xs font-bold tracking-[0.2em] hover:border-accent hover:text-accent transition-colors">INSTAGRAM</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-border pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1 md:col-span-1">
              <a href="/" className="flex flex-col items-start mb-8">
                <span className="text-3xl font-black tracking-tighter text-foreground">PACER</span>
                <span className="text-[14px] font-bold text-accent tracking-[0.2em] -mt-1 uppercase">Consultants</span>
              </a>
              <p className="text-muted-foreground leading-relaxed font-light">
                Offering top quality engineering solutions globally since 1950. A legacy of precision, innovation, and trust.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-black mb-8 text-foreground uppercase tracking-[0.3em]">OFFICE HQ</h4>
              <p className="text-muted-foreground font-light leading-relaxed">
                {contactInfo.address}
              </p>
              <p className="text-muted-foreground font-light mt-4">
                Hours: {contactInfo.workingHours}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-black mb-8 text-foreground uppercase tracking-[0.3em]">RESOURCES</h4>
              <ul className="space-y-4">
                {["Home", "Services", "Projects", "Clients"].map(item => (
                  <li key={item}><a href={`#${item.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-accent transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-black mb-8 text-foreground uppercase tracking-[0.3em]">NEWSLETTER</h4>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your professional email"
                  className="w-full bg-muted border-none p-4 text-xs font-medium focus:ring-1 focus:ring-accent outline-none"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-accent font-bold">→</button>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold tracking-widest text-muted-foreground uppercase gap-8">
            <p>© 2024 PACER Consultants. All Rights Reserved.</p>
            <div className="flex gap-12">
              <a href="#" className="hover:text-accent transition-colors">Privacy Strategy</a>
              <a href="#" className="hover:text-accent transition-colors">Legal Framework</a>
              <a href="#" className="hover:text-accent transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
