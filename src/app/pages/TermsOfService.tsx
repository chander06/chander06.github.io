import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

export default function TermsOfService() {
  useEffect(() => {
    document.title = 'Termini e Condizioni | Verifica Semplice';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fafafa] min-h-screen">
      {/* Ambient Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-green-200/20 rounded-full blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-[20px] border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-serif italic text-[#1a1a1a]">
            Verifica Semplice
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Torna alla home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-[20px] border border-white/40 rounded-3xl p-12 shadow-lg">
            <h1 className="text-5xl font-serif italic text-[#1a1a1a] mb-8">Termini e Condizioni</h1>

            <div className="space-y-8 text-[#1a1a1a]">
              <p className="text-lg text-[#6b6b6b] leading-relaxed">
                Termini semplici. Regole chiare.
              </p>

              <p className="text-[#6b6b6b] leading-relaxed">
                Utilizzando questo sito web, accetti questi termini.
              </p>

              <section>
                <h2 className="text-2xl font-bold mb-4">Uso del Sito Web</h2>
                <p className="text-[#6b6b6b] leading-relaxed mb-4">
                  Questo sito web è fornito per informazioni generali e accesso ai servizi.
                </p>
                <p className="text-[#6b6b6b] leading-relaxed mb-4">
                  Accetti di utilizzarlo:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#6b6b6b] ml-4">
                  <li>In modo legale</li>
                  <li>Rispettosamente</li>
                  <li>Senza tentare di danneggiare, interrompere o abusare della piattaforma</li>
                </ul>
                <p className="text-[#6b6b6b] leading-relaxed mt-4">
                  Ci riserviamo il diritto di limitare l'accesso se viene rilevato un uso improprio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Servizi</h2>
                <p className="text-[#6b6b6b] leading-relaxed mb-4">
                  Tutti i servizi e i contenuti sono forniti "così come sono", senza garanzie di disponibilità ininterrotta o prestazioni prive di errori.
                </p>
                <p className="text-[#6b6b6b] leading-relaxed">
                  Possiamo aggiornare, modificare o rimuovere contenuti e servizi in qualsiasi momento senza preavviso.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Proprietà Intellettuale</h2>
                <p className="text-[#6b6b6b] leading-relaxed mb-4">
                  Tutti i contenuti di questo sito web — inclusi testo, design, branding e visual — sono protetti.
                </p>
                <p className="text-[#6b6b6b] leading-relaxed">
                  Non è consentito copiare, riprodurre o distribuire alcun materiale senza previa autorizzazione.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Limitazione di Responsabilità</h2>
                <p className="text-[#6b6b6b] leading-relaxed mb-4">
                  Il sito non garantisce la veridicità, completezza o aggiornamento delle informazioni pubblicate. Alcuni contenuti possono essere generati a fini dimostrativi o sperimentali.
                </p>
                <p className="text-[#6b6b6b] leading-relaxed mb-4">
                  Non siamo responsabili per:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#6b6b6b] ml-4">
                  <li>Eventuali danni diretti o indiretti derivanti dall'uso di questo sito web</li>
                  <li>Indisponibilità temporanea o problemi tecnici</li>
                  <li>Link esterni o contenuti di terze parti</li>
                </ul>
                <p className="text-[#6b6b6b] leading-relaxed mt-4">
                  L'uso del sito web è a tua discrezione.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Responsabilità dell'Utente</h2>
                <p className="text-[#6b6b6b] leading-relaxed mb-4">
                  Sei responsabile per:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#6b6b6b] ml-4">
                  <li>L'accuratezza di qualsiasi informazione fornita</li>
                  <li>Garantire che il tuo utilizzo sia conforme alle leggi applicabili</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Privacy</h2>
                <p className="text-[#6b6b6b] leading-relaxed mb-4">
                  Il tuo utilizzo di questo sito web è regolato anche dalla nostra Privacy Policy.
                </p>
                <p className="text-[#6b6b6b] leading-relaxed">
                  Rispettiamo i tuoi dati e li gestiamo in conformità con il Regolamento Generale sulla Protezione dei Dati.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Modifiche ai Termini</h2>
                <p className="text-[#6b6b6b] leading-relaxed">
                  Possiamo aggiornare questi Termini in qualsiasi momento. L'uso continuato del sito web implica l'accettazione di eventuali modifiche.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Legge Applicabile</h2>
                <p className="text-[#6b6b6b] leading-relaxed">
                  Questi Termini sono regolati dalle leggi applicabili nell'Unione Europea.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Contatti</h2>
                <p className="text-[#6b6b6b] leading-relaxed mb-4">
                  Per qualsiasi domanda relativa a questi Termini, contatta:
                </p>
                <a
                  href="mailto:verificasemplice@gmail.com"
                  className="text-[#0066cc] hover:underline font-medium"
                >
                  verificasemplice@gmail.com
                </a>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-[#0066cc] hover:text-[#1a1a1a] transition-colors font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Torna alla home
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-16 px-6 bg-white/40 border-t border-white/20 relative">
        <div className="max-w-7xl mx-auto text-center text-sm text-[#6b6b6b]">
          © 2026 Verifica Semplice. Tutti i diritti riservati.
        </div>
      </footer>
    </div>
  );
}