import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy | Verifica Semplice';
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
            <h1 className="text-5xl font-serif italic text-[#1a1a1a] mb-8">Privacy Policy</h1>

            <div className="space-y-8 text-[#1a1a1a]">
              <p className="text-lg text-[#6b6b6b] leading-relaxed">
                La tua privacy è importante. Progettiamo i nostri servizi per proteggere i tuoi dati. Non per raccoglierli.
              </p>

              <section>
                <h2 className="text-2xl font-bold mb-4">Raccolta dei Dati</h2>
                <p className="text-[#6b6b6b] leading-relaxed mb-4">
                  Raccogliamo solo le informazioni strettamente necessarie per fornire e migliorare i nostri servizi. Questo può includere:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#6b6b6b] ml-4">
                  <li>Informazioni di contatto di base (come l'email)</li>
                  <li>Dati tecnici necessari per il corretto funzionamento del sito web</li>
                </ul>
                <p className="text-[#6b6b6b] leading-relaxed mt-4">
                  Non raccogliamo dati personali non necessari o eccessivi.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Come Utilizziamo i Dati</h2>
                <p className="text-[#6b6b6b] leading-relaxed mb-4">
                  I tuoi dati sono utilizzati esclusivamente per:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#6b6b6b] ml-4">
                  <li>Fornire i servizi richiesti</li>
                  <li>Migliorare le prestazioni del sito web e l'esperienza utente</li>
                  <li>Rispondere alle richieste di informazioni</li>
                </ul>
                <p className="text-[#6b6b6b] leading-relaxed mt-4">
                  Non utilizziamo i tuoi dati per scopi non correlati.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Nessuna Condivisione con Terze Parti</h2>
                <p className="text-[#6b6b6b] leading-relaxed">
                  Non vendiamo, scambiamo o condividiamo i tuoi dati personali con terze parti. Le tue informazioni rimangono private e sotto il nostro controllo, salvo dove richiesto dalla legge.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Protezione dei Dati</h2>
                <p className="text-[#6b6b6b] leading-relaxed mb-4">
                  Implementiamo misure tecniche e organizzative appropriate per proteggere i tuoi dati da:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#6b6b6b] ml-4">
                  <li>Accesso non autorizzato</li>
                  <li>Divulgazione</li>
                  <li>Alterazione o perdita</li>
                </ul>
                <p className="text-[#6b6b6b] leading-relaxed mt-4">
                  I tuoi dati sono gestiti in modo sicuro in ogni momento.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">I Tuoi Diritti (GDPR)</h2>
                <p className="text-[#6b6b6b] leading-relaxed mb-4">
                  In conformità con il Regolamento Generale sulla Protezione dei Dati, hai il diritto di:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#6b6b6b] ml-4">
                  <li>Accedere ai tuoi dati</li>
                  <li>Richiedere la correzione o la cancellazione</li>
                  <li>Limitare o opporti al trattamento</li>
                </ul>
                <p className="text-[#6b6b6b] leading-relaxed mt-4">
                  Puoi esercitare i tuoi diritti in qualsiasi momento.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Conservazione dei Dati</h2>
                <p className="text-[#6b6b6b] leading-relaxed">
                  Conserviamo i dati personali solo per il tempo necessario a soddisfare il loro scopo o per adempiere agli obblighi legali.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Contatti</h2>
                <p className="text-[#6b6b6b] leading-relaxed mb-4">
                  Per qualsiasi richiesta o domanda relativa alla privacy, puoi contattarci a:
                </p>
                <a
                  href="mailto:verificasemplice@gmail.com"
                  className="text-[#0066cc] hover:underline font-medium"
                >
                  verificasemplice@gmail.com
                </a>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Aggiornamenti</h2>
                <p className="text-[#6b6b6b] leading-relaxed">
                  Questa policy può essere aggiornata per riflettere modifiche alle normative o ai servizi. Gli aggiornamenti saranno pubblicati su questa pagina.
                </p>
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