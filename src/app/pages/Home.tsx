import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Mail, Phone, ArrowRight, Check, User, Building2, Rocket } from 'lucide-react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.title = 'Verifica Semplice | Consulenza Fiscale 100% Gratuita';
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#fafafa] overflow-x-hidden">
      {/* Ambient Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-green-200/20 rounded-full blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/60 backdrop-blur-[20px] border-b border-white/20 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-serif italic text-[#1a1a1a]">Verifica Semplice</Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm text-[#6b6b6b]">
            <a href="#servizi" className="hover:text-[#1a1a1a] transition-colors">Servizi</a>
            <a href="#risultati" className="hover:text-[#1a1a1a] transition-colors">Risultati</a>
            <a href="#processo" className="hover:text-[#1a1a1a] transition-colors">Processo</a>
            <a href="#contatti" className="hover:text-[#1a1a1a] transition-colors">Contatti</a>
          </div>

          <a
            href="#contatti"
            className="bg-[#1a1a1a] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#000] transition-colors"
          >
            Consulenza gratuita
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#1a7a4a]/10 text-[#1a7a4a] px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Check className="w-4 h-4" />
                  <span className="whitespace-nowrap">Consulenza 100% gratuita</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif italic text-[#1a1a1a] leading-[1.1] mb-6">
                  Paga meno tasse. Legalmente.
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-[#6b6b6b] leading-relaxed max-w-xl">
                  Aiutiamo le PMI italiane a ottimizzare il carico fiscale attraverso strategie
                  personalizzate e completamente conformi alla normativa.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contatti"
                  className="bg-[#1a1a1a] text-white px-8 py-4 rounded-full font-medium hover:bg-[#000] transition-colors inline-flex items-center gap-2"
                >
                  Inizia ora
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#risultati"
                  className="text-[#1a1a1a] px-8 py-4 rounded-full font-medium hover:text-[#0066cc] transition-colors inline-flex items-center gap-2"
                >
                  Vedi i risultati
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 pt-8">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-1">€82k</div>
                  <div className="text-xs md:text-sm text-[#6b6b6b]">Risparmio medio annuale</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-1">100%</div>
                  <div className="text-xs md:text-sm text-[#6b6b6b]">Clienti soddisfatti</div>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <div className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-1">€0</div>
                  <div className="text-xs md:text-sm text-[#6b6b6b]">Costo consulenza</div>
                </div>
              </div>
            </div>

            {/* Right Column - Chart Card */}
            <div className="relative">
              <GlassCard>
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">Risparmio medio</h3>
                    <p className="text-[#6b6b6b]">PMI, 15 dipendenti</p>
                  </div>

                  {/* Custom Chart */}
                  <div className="h-64 flex items-end justify-center gap-8 sm:gap-12 px-4 sm:px-8 relative">
                    {/* Y-axis labels */}
                    <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-[10px] sm:text-xs text-[#6b6b6b]">
                      <div>€310k</div>
                      <div className="hidden sm:block">€230k</div>
                      <div>€155k</div>
                      <div className="hidden sm:block">€80k</div>
                      <div>€0</div>
                    </div>

                    {/* Bars */}
                    <div className="flex flex-col items-center justify-end h-full">
                      <div className="w-16 sm:w-20 bg-[#e5e5e7] rounded-t-xl transition-all duration-1000 ease-out" style={{ height: '71%' }} />
                      <div className="text-xs sm:text-sm text-[#6b6b6b] mt-3 whitespace-nowrap">Prima</div>
                    </div>

                    <div className="flex flex-col items-center justify-end h-full">
                      <div className="w-16 sm:w-20 bg-[#86868b] rounded-t-xl transition-all duration-1000 ease-out" style={{ height: '44.5%' }} />
                      <div className="text-xs sm:text-sm text-[#6b6b6b] mt-3 whitespace-nowrap">Dopo</div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-center">
                    <div className="bg-[#86868b]/10 text-[#86868b] px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium">
                      Risparmio: €82.000/anno
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-white/40 backdrop-blur-sm border-y border-white/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center items-center">
            {['Edilizia', 'Trasporti', 'Manifatturiero', 'Commercio', 'Servizi', 'Tech'].map((sector) => (
              <div
                key={sector}
                className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm text-[#6b6b6b] border border-white/40"
              >
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risultati Reali Section */}
      <section id="risultati" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-serif italic text-[#1a1a1a] mb-6">
              Risultati reali
            </h2>
            <p className="text-xl text-[#6b6b6b] max-w-2xl mx-auto">
              Casi concreti di aziende che hanno ottimizzato il loro carico fiscale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ResultCard
              sector="Caso Studio A"
              employees="8 dipendenti"
              before={145000}
              after={92000}
              savings={53000}
              featured={false}
            />
            <ResultCard
              sector="Caso Studio B"
              employees="15 dipendenti"
              before={220000}
              after={138000}
              savings={82000}
              featured={true}
            />
            <ResultCard
              sector="Caso Studio C"
              employees="22 dipendenti"
              before={310000}
              after={248000}
              savings={62000}
              featured={false}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servizi" className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
        {/* Dark Orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-serif italic text-white mb-6">
              I nostri servizi
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Soluzioni complete per l'ottimizzazione fiscale della tua azienda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              number="01"
              title="Analisi fiscale completa"
              description="Valutiamo la tua situazione attuale e identifichiamo tutte le opportunità di risparmio."
            />
            <ServiceCard
              number="02"
              title="Pianificazione strategica"
              description="Creiamo un piano personalizzato per ottimizzare il carico fiscale nel lungo periodo."
            />
            <ServiceCard
              number="03"
              title="Gestione contributi"
              description="Ottimizziamo i contributi previdenziali e assicurativi per massimizzare il risparmio."
            />
            <ServiceCard
              number="04"
              title="Consulenza continuativa"
              description="Ti affianchiamo costantemente per adattare le strategie all'evoluzione normativa."
            />
            <ServiceCard
              number="05"
              title="Assistenza compliance"
              description="Garantiamo la piena conformità legale di tutte le strategie implementate."
            />
            <div className="bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all flex items-center justify-center">
              <a href="#contatti" className="text-white font-medium text-lg flex items-center gap-2">
                Richiedi consulenza
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section id="processo" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-serif italic text-[#1a1a1a] mb-6">
              Come funziona
            </h2>
            <p className="text-xl text-[#6b6b6b] max-w-2xl mx-auto">
              Tre semplici step per iniziare a risparmiare sulle tasse
            </p>
          </div>

          <div className="space-y-12">
            <StepCard
              number="01"
              title="Prenota consulenza gratuita"
              description="Compila il form o contattaci direttamente. La prima consulenza è sempre gratuita e senza impegno."
            />
            <StepCard
              number="02"
              title="Analisi personalizzata"
              description="I nostri esperti analizzano la tua situazione fiscale e identificano tutte le opportunità di ottimizzazione."
            />
            <StepCard
              number="03"
              title="Implementazione e risparmio"
              description="Mettiamo in atto le strategie concordate e inizi subito a risparmiare. Ti affianchiamo in ogni fase."
            />
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-32 px-6 bg-white/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              <h2 className="text-5xl lg:text-6xl font-serif italic text-[#1a1a1a] leading-[1.1]">
                Perché Verifica Semplice
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-[#0066cc] text-2xl">◆</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Esperienza comprovata</h3>
                    <p className="text-[#6b6b6b]">
                      Oltre 10 anni di esperienza nell'ottimizzazione fiscale per PMI italiane.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-[#0066cc] text-2xl">◆</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">100% legale e conforme</h3>
                    <p className="text-[#6b6b6b]">
                      Tutte le nostre strategie sono pienamente conformi alla normativa vigente.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-[#0066cc] text-2xl">◆</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Consulenza gratuita</h3>
                    <p className="text-[#6b6b6b]">
                      La prima analisi è sempre gratuita. Scopri quanto puoi risparmiare senza impegno.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <GlassCard>
              <div className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">Ideale per</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0066cc]/10 flex items-center justify-center flex-shrink-0">
                      <User className="w-6 h-6 text-[#0066cc]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a1a1a] mb-1">Professionisti</h4>
                      <p className="text-sm text-[#6b6b6b]">Partite IVA, consulenti, freelance</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0066cc]/10 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-[#0066cc]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a1a1a] mb-1">Piccole e medie imprese</h4>
                      <p className="text-sm text-[#6b6b6b]">Da 1 a 50 dipendenti</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0066cc]/10 flex items-center justify-center flex-shrink-0">
                      <Rocket className="w-6 h-6 text-[#0066cc]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a1a1a] mb-1">Startup e scale-up</h4>
                      <p className="text-sm text-[#6b6b6b]">In fase di crescita e sviluppo</p>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
        {/* Ambient Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/20 rounded-full blur-[150px]" />

        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-5xl lg:text-7xl font-serif italic text-white mb-8 leading-[1.1]">
            Pronto a risparmiare sulle tasse?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Prenota una consulenza gratuita e scopri quanto puoi risparmiare legalmente.
          </p>
          <a
            href="#contatti"
            className="inline-flex items-center gap-2 bg-white text-[#1a1a1a] px-10 py-5 rounded-full font-medium hover:bg-gray-100 transition-colors text-lg"
          >
            Inizia ora gratuitamente
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contatti" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-serif italic text-[#1a1a1a] mb-6">
              Contattaci
            </h2>
            <p className="text-xl text-[#6b6b6b] max-w-2xl mx-auto">
              Siamo qui per aiutarti. Scegli il metodo che preferisci.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <ContactCard
              icon={<Mail className="w-6 h-6" />}
              title="Email"
              value="verificasemplice@gmail.com"
              link="mailto:verificasemplice@gmail.com"
            />
            <ContactCard
              icon={<Phone className="w-6 h-6" />}
              title="Flavio"
              subtitle="Fondatore"
              value="+39 331 996 6359"
              link="tel:+393319966359"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-white/40 border-t border-white/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-2xl font-serif italic text-[#1a1a1a] mb-4">
                Verifica Semplice
              </div>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">
                Aiutiamo le PMI italiane a ottimizzare il carico fiscale in modo legale e trasparente.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#1a1a1a] mb-4">Servizi</h4>
              <ul className="space-y-2 text-sm text-[#6b6b6b]">
                <li><a href="#servizi" className="hover:text-[#1a1a1a] transition-colors">Analisi fiscale</a></li>
                <li><a href="#servizi" className="hover:text-[#1a1a1a] transition-colors">Pianificazione strategica</a></li>
                <li><a href="#servizi" className="hover:text-[#1a1a1a] transition-colors">Gestione contributi</a></li>
                <li><a href="#servizi" className="hover:text-[#1a1a1a] transition-colors">Consulenza continuativa</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#1a1a1a] mb-4">Azienda</h4>
              <ul className="space-y-2 text-sm text-[#6b6b6b]">
                <li><a href="#risultati" className="hover:text-[#1a1a1a] transition-colors">Casi studio</a></li>
                <li><Link to="/privacy-policy" className="hover:text-[#1a1a1a] transition-colors">Privacy Policy</Link></li>
                <li><Link to="/termini-di-servizio" className="hover:text-[#1a1a1a] transition-colors">Termini di servizio</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm text-[#6b6b6b]">
            © 2026 Verifica Semplice. Tutti i diritti riservati.
          </div>
        </div>
      </footer>
    </div>
  );
}

// Components

function GlassCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white/60 backdrop-blur-[20px] border border-white/40 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
      {children}
    </div>
  );
}

function ResultCard({
  sector,
  employees,
  before,
  after,
  savings,
  featured,
}: {
  sector: string;
  employees: string;
  before: number;
  after: number;
  savings: number;
  featured: boolean;
}) {
  return (
    <div className="bg-white/60 backdrop-blur-[20px] border border-white/40 rounded-3xl p-8 hover:shadow-xl transition-all relative">
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1a1a1a] text-white px-4 py-1 rounded-full text-xs font-medium whitespace-nowrap">
          Caso più comune
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-[#1a1a1a] mb-1">{sector}</h3>
        <p className="text-sm text-[#6b6b6b]">{employees}</p>
      </div>

      <div className="flex gap-4 justify-center mb-6 h-48">
        <div className="flex flex-col items-center justify-end flex-1">
          <div className="w-full bg-[#e5e5e7] rounded-t-xl transition-all duration-1000 ease-out" style={{ height: `${(before / 310000) * 100}%` }} />
          <div className="text-xs text-[#6b6b6b] mt-2 whitespace-nowrap">Prima</div>
        </div>
        <div className="flex flex-col items-center justify-end flex-1">
          <div className="w-full bg-[#86868b] rounded-t-xl transition-all duration-1000 ease-out" style={{ height: `${(after / 310000) * 100}%` }} />
          <div className="text-xs text-[#6b6b6b] mt-2 whitespace-nowrap">Dopo</div>
        </div>
      </div>

      <div className="flex justify-center mb-4">
        <div className="bg-[#86868b]/10 text-[#86868b] px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
          Risparmio: €{(savings / 1000).toFixed(0)}k/anno
        </div>
      </div>

      <p className="text-xs text-center text-[#6b6b6b]">
        Ottimizzazione fiscale e gestione contributi
      </p>
    </div>
  );
}

function ServiceCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all">
      <div className="text-sm text-gray-500 mb-4">{number}</div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-8 items-start">
      <div className="text-8xl font-serif italic text-[#1a1a1a]/10 leading-none">{number}</div>
      <div className="flex-1 pt-4">
        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">{title}</h3>
        <p className="text-[#6b6b6b] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function ContactCard({
  icon,
  title,
  value,
  link,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string;
  subtitle?: string;
}) {
  return (
    <a
      href={link}
      className="block bg-white/60 backdrop-blur-[20px] border border-white/40 rounded-2xl p-6 hover:shadow-xl transition-all"
    >
      <div className="text-[#0066cc] mb-3">{icon}</div>
      <div className="text-xs text-[#6b6b6b] mb-1">{title}</div>
      {subtitle && <div className="text-xs text-[#6b6b6b] mb-1">{subtitle}</div>}
      <div className="text-sm font-medium text-[#1a1a1a] break-all">{value}</div>
    </a>
  );
}

function ScrollReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}